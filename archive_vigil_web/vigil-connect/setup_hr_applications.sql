-- Create the job_applications table (HR Inbox)
-- We use 'text' for job_id to support both UUIDs from the DB and manual IDs
create table if not exists public.job_applications (
  id uuid primary key default gen_random_uuid(),
  job_id text not null, 
  full_name text not null,
  email text not null,
  phone text not null,
  cover_letter text,
  submitted_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable security
alter table public.job_applications enable row level security;

-- Allow anyone (public) to submit an application
create policy "Allow public submissions" on public.job_applications
  for insert with check (true);

-- Allow only authenticated users (HR/Admins) to view applications
create policy "Allow HR to view applications" on public.job_applications
  for select using (auth.role() = 'authenticated');
