**Resume Storage Analysis — vigil-connect

**Affected Files**:
- **`vigil-connect/src/services/jobApi.ts`**: uploadResume(), submitJobApplication(), normalization logic that reads `resume_url` and `resume_file_path`.
- **`vigil-connect/src/pages/JobDetailsPage.tsx`**: caller of `uploadResume()` and uses returned URL in submit flow.
- **`vigil-connect/src/pages/HRPortal.tsx`**: reads `resume_url` (or fallback `resume_file_path`) and renders a direct `<a href={app.resume_url}>` download link.
- **`vigil-connect/src/lib/supabase.ts`**: Supabase client initialization and configuration guard.
- **`vigil-connect/verify_submission_logic.js`**: standalone verification script that uploads and inserts `resume_url` as a storage path.
- **`vigil-connect/setup_resume_storage.sql`**, **`vigil-connect/fix_hr_portal.sql`**, **`vigil-connect/jobs_schema.sql`**: DB schema and storage-bucket provisioning statements and policies.

**Upload Architecture (high level)**:
- Client `JobDetailsPage` calls `uploadResume(file)` (in `jobApi.ts`).
- `uploadResume` writes the file to Supabase Storage bucket named `resumes` using `supabase.storage.from('resumes').upload(filePath, file)`.
- After upload, `uploadResume` calls `getPublicUrl(filePath)` and returns `urlData?.publicUrl || filePath` to the caller.
- The caller then passes that return value into `submitJobApplication` which inserts it into `job_applications` (either in `resume_url` or, as a fallback, `resume_file_path`).

**Storage Flow (detailed)**:
- File naming: `uploadResume` generates `fileName = ${Date.now()}_${random}.${ext}` and uses that as `filePath` (no subfolders).
- Upload: `supabase.storage.from('resumes').upload(filePath, file)`.
- Public URL retrieval: `supabase.storage.from('resumes').getPublicUrl(filePath)` is called immediately after upload.
- Returned value: `uploadResume` returns `urlData?.publicUrl` if present; otherwise it returns the raw `filePath` string.

**DB Write Flow**:
- `submitJobApplication` builds payload with fields (job_id, full_name, email, phone, optional cover_letter).
- If `application.resume_url` exists it is assigned to `payload.resume_url` and inserted into `job_applications`.
- If the insert errors and `application.resume_url` existed, code retries inserting using `resume_file_path` (i.e., moves the value into `resume_file_path` column) and deletes `resume_url` from the payload.
- When reading applications, `normalizeApplicationRow` maps `resume_url = row.resume_url ?? row.resume_file_path ?? null` so either column is accepted by the UI.

**Exact resume_url generation logic**:
- After a successful upload, the code does:

  const { data: urlData } = supabase.storage
      .from('resumes')
      .getPublicUrl(filePath);

  return urlData?.publicUrl || filePath;

- Meaning: prefer the `publicUrl` returned by Supabase; if that is not present, return the storage object path (the `filePath` string returned/used during upload).

**Does the DB store public URLs or storage paths?**
- Both. Current code can store either:
  - If `getPublicUrl` returned a `publicUrl`, that full URL string is stored in `job_applications.resume_url`.
  - If `getPublicUrl` is not available or the upload logic falls back, a plain `filePath` (storage object path like `164..._xyz.pdf`) may be stored — either in `resume_url` or (on fallback) in `resume_file_path`.
- The repo contains a verification script (`verify_submission_logic.js`) that inserts the storage path (`uploadData.path`) into the DB, showing existing codepaths expect a stored path sometimes.

**Can the `resumes` bucket be made private safely?**
- Yes — but only with code changes. Current UI/UX expects a directly-usable public URL stored in the DB (or a full URL in `resume_url`) and renders it directly in an `<a href="...">` link.
- If the bucket becomes private without code changes:
  - Public links will 404 or be blocked (users will not be able to download resumes).
  - Stored public URLs (if any) will become invalid.
  - Stored storage paths (file paths) are not user-facing URLs; the UI will attempt to open a relative link like `/somefilename.pdf` which is incorrect and will fail.

**What breaks if the bucket becomes private (immediate impacts)**:
- HR Portal download links (`vigil-connect/src/pages/HRPortal.tsx`) will stop working; anchor `href` points to stored value that is not accessible without a signed URL.
- Any externally-shared public URL (existing rows) becomes inaccessible.
- Client-side code that expects `getPublicUrl` to produce a usable public URL will no longer produce a usable link — `getPublicUrl` may still return a URL but the object will be access-restricted.
- Verify/test scripts (like `verify_submission_logic.js`) that insert paths expecting the UI to use them as-is will not work.

**Required migration / upgrade strategy (high level)**:
1. Choose canonical storage approach (recommended: store canonical object path in DB and generate access URLs at read-time):
   - Add/ensure `resume_file_path` column exists and is the single source-of-truth for the object path (e.g., `resumes/164..._abc.pdf` or just `164..._abc.pdf`).
   - Deprecate storing raw public URLs in `resume_url` (or keep `resume_url` for convenience but treat it as derived/ephemeral).
2. Backfill existing rows:
   - For rows where `resume_url` contains a Supabase public URL, parse the path segment and write it into `resume_file_path`.
   - For rows where `resume_url` already contains a storage path, copy into `resume_file_path`.
   - After backfill, normalize reads to prefer `resume_file_path` (and derive a signed/public URL when needed).
3. Make the bucket private and update RLS/storage policies to allow uploads from the client (if desired) while preventing unauthenticated reads.
4. Update HR Portal + JobDetails read flow:
   - On read (HR Portal, application details) call Supabase `createSignedUrl(resume_file_path, expirySec)` (server-side or via a secure function) to get a temporary download link and use that in the link rendered to HR.
   - If using a serverless backend or edge function, prefer generating signed URLs server-side with the service role key. If generating client-side, ensure only authorized users (HR) can request signed URLs.
5. Update upload flow:
   - `uploadResume` should store and return the object path (not a public URL). The public/signed URL should be generated at read time.
6. Update policies and tests accordingly and run a migration that retains a backup of `resume_url` values.

**Recommended next implementation steps (concise)**:
- Short term: Stop relying on `getPublicUrl` as the canonical stored value. Update `uploadResume` to return the storage path and ensure `submitJobApplication` writes to `resume_file_path`.
- Medium term: Implement read-time signed URL generation for HR downloads using `createSignedUrl` (or server-side signed URL generation) and update `HRPortal` to use the signed URL in `<a href>`.
- DB migration: Add `resume_file_path` if missing, write a backfill script to populate it from existing `resume_url` values, then convert UI to read from `resume_file_path`.
- Security: Make `resumes` bucket private and remove public read policy once signed URL flow is in place.
- Testing: Add integration tests to ensure uploads succeed with current anon client and that HR downloads require a signed URL and succeed for authorized users.

**Notes / Observations from repo**:
- `vigil-connect/src/services/jobApi.ts` currently acts defensively: it attempts `resume_url` insertion and falls back to `resume_file_path` on insert error.
- SQL provisioning scripts (`setup_resume_storage.sql`) currently create the `resumes` bucket as `public` (true) and add a permissive policy; that aligns with the current code but should be changed in a private-bucket migration.
- No uses of `createSignedUrl` were found; you will need to add read-time signed URL generation.

**References (key files)**
- [vigil-connect/src/services/jobApi.ts](vigil-connect/src/services/jobApi.ts)
- [vigil-connect/src/pages/JobDetailsPage.tsx](vigil-connect/src/pages/JobDetailsPage.tsx)
- [vigil-connect/src/pages/HRPortal.tsx](vigil-connect/src/pages/HRPortal.tsx)
- [vigil-connect/src/lib/supabase.ts](vigil-connect/src/lib/supabase.ts)
- [vigil-connect/setup_resume_storage.sql](vigil-connect/setup_resume_storage.sql)
- [vigil-connect/verify_submission_logic.js](vigil-connect/verify_submission_logic.js)


-- End of analysis
