# Private Resume Storage Migration — Implementation Summary

This change implements a migration path and code updates to stop storing public resume URLs, store canonical storage object paths, and generate signed URLs for HR downloads while preserving backward compatibility.

Files changed
- `vigil-connect/src/services/jobApi.ts`
  - `uploadResume` now returns the storage object path (uploadData.path) instead of using `getPublicUrl`.
  - `JobApplication` type now supports `resume_file_path` (canonical) while keeping `resume_url` for backward compatibility.
  - `submitJobApplication` now prefers `resume_file_path` when inserting, with fallback retries to support older schemas.
  - `normalizeApplicationRow` returns both `resume_file_path` and `resume_url` fields so UI can choose.

- `vigil-connect/src/pages/JobDetailsPage.tsx`
  - On successful upload, the returned path is stored as `resume_file_path` in the submit payload.

- `vigil-connect/src/pages/HRPortal.tsx`
  - Imports `supabase` and generates short-lived signed URLs on-demand when an application is expanded.
  - Stores signed URLs in component state and prefers them for downloads.
  - Counts and UI logic now consider either `resume_file_path` or `resume_url` to remain compatible.

- `vigil-connect/migrations/20260527_add_resume_file_path_and_backfill.sql`
  - Adds `resume_file_path` if missing and backfills it from existing `resume_url` values where possible.

Design decisions and rationale

- Canonical storage path
  - New uploads store only the storage object path (e.g., `164..._abc.pdf`) returned in `uploadData.path`.
  - We avoid storing full public URLs since they are fragile and will break when the bucket becomes private.

- Backward compatibility
  - Existing rows with `resume_url` (possibly public URLs or paths) are preserved.
  - `normalizeApplicationRow` exposes both `resume_file_path` and `resume_url` to the UI so frontends can prefer the new field while still functioning for legacy rows.
  - `submitJobApplication` will retry insertions with alternate columns if the initial insert fails due to schema differences.

- Signed URL generation
  - `HRPortal` requests a signed URL via `supabase.storage.from('resumes').createSignedUrl(path, expiry)` when an application is expanded.
  - Signed URLs are stored in local component state and used for the download `href`.
  - If a row still contains only a legacy public URL (before migration completes), the UI will fall back to using `resume_url`.

- Migration approach
  - The provided SQL migration extracts the file name from public URLs containing `/resumes/` and writes that into `resume_file_path`.
  - It leaves `resume_url` intact to allow a safe rollback and to keep existing consumers functioning during rollout.

Testing checklist (recommended)
- New uploads should call `uploadResume` and `submitJobApplication`, and the DB should contain `resume_file_path` for new rows.
- Old rows with `resume_url` should still render in HR portal and allow downloads via the original URL until backfill is complete.
- Expanding an application in HR portal should generate a signed URL for rows with `resume_file_path` and make the resume downloadable.
- Signed URLs should expire after the configured TTL (1 hour in current implementation); confirm expired links no longer work.
- Run `migrations/20260527_add_resume_file_path_and_backfill.sql` on a staging copy of the DB and verify data correctness.

Remaining steps before bucket privatization
1. Run the migration/backfill on a staging environment and verify all resumes produce a proper `resume_file_path`.
2. Update any server-side tools (e.g., `verify_submission_logic.js`) to use `resume_file_path` rather than storing the path in `resume_url`.
3. Once all rows are backfilled and applications are updated to prefer `resume_file_path`, update any CI/tests.
4. Remove/replace any public read policies in `setup_resume_storage.sql` and make the `resumes` bucket private.
5. Optionally: implement server-side signed URL generation for HR-only endpoints using the service role key rather than allowing clients to create signed URLs with an anon key.

Notes
- The current implementation creates signed URLs client-side using the anon key. For improved security, generate signed URLs server-side and only return them to authenticated HR users.
- The migration SQL uses a best-effort regex to extract filenames from common Supabase public URL shapes. Review a sample of actual stored `resume_url` values before running in production to ensure no data is malformed.

If you want, I can now:
- Produce a safe backfill script with verification checks (e.g., copy rows to backup table, verify counts).
- Update `verify_submission_logic.js` to use the new `resume_file_path` semantics.
- Add unit/integration tests that exercise upload->insert->signed-url flows.

