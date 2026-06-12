-- This migration ensures the job_applications table is set up correctly
-- and allows public read access for the HR portal.

-- Make sure the resume_url column exists
ALTER TABLE public.job_applications 
ADD COLUMN IF NOT EXISTS resume_url text;

-- Make sure created_at column exists (some schemas used submitted_at)
ALTER TABLE public.job_applications 
ADD COLUMN IF NOT EXISTS created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL;

-- Drop existing restrictive select policy if it exists
DROP POLICY IF EXISTS "Allow HR to view applications" ON public.job_applications;
DROP POLICY IF EXISTS "Enable select for authorized users only" ON public.job_applications;

-- Create a new policy that allows public read access for the HR portal
-- NOTE: In production, you should restrict this to authenticated users
-- and add a proper login flow to the HR portal.
CREATE POLICY "Allow public read for HR portal" ON public.job_applications
  FOR SELECT USING (true);

-- Ensure the insert policy exists for public submissions
DROP POLICY IF EXISTS "Allow public submissions" ON public.job_applications;
DROP POLICY IF EXISTS "Enable insert for all users" ON public.job_applications;

CREATE POLICY "Allow public submissions" ON public.job_applications
  FOR INSERT WITH CHECK (true);
