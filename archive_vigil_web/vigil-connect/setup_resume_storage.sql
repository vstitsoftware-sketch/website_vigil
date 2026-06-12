-- Add resume_file_path column to job_applications table
alter table public.job_applications 
add column if not exists resume_file_path text;

-- Create a storage bucket for resumes if it doesn't represent
insert into storage.buckets (id, name, public) 
values ('resumes', 'resumes', true)
on conflict (id) do nothing;

-- Set up storage policy to allow anyone to upload resumes
create policy "Allow public uploads" on storage.objects
  for insert with check (bucket_id = 'resumes');

-- Allow authenticated users (HR) to view resumes
create policy "Allow HR to select resumes" on storage.objects
  for select using (bucket_id = 'resumes' and auth.role() = 'authenticated');
