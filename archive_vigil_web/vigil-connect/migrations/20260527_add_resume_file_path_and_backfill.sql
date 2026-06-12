-- Migration: Add resume_file_path column and backfill from existing resume_url
BEGIN;

-- 1) Ensure canonical column exists
ALTER TABLE public.job_applications
  ADD COLUMN IF NOT EXISTS resume_file_path text;

-- 2) Backfill: extract object path from public URLs or copy existing paths
-- If resume_url is a full public URL (contains "/resumes/"), extract the filename after that segment.
-- Otherwise, if resume_url looks like a path (no http prefix), copy it directly.

UPDATE public.job_applications
SET resume_file_path = CASE
  WHEN resume_file_path IS NOT NULL THEN resume_file_path
  WHEN resume_url IS NULL THEN NULL
  WHEN resume_url LIKE 'http%' AND resume_url LIKE '%/resumes/%' THEN regexp_replace(resume_url, '^.*?/resumes/', '')
  ELSE resume_url
END
WHERE resume_file_path IS NULL;

COMMIT;
