-- Create jobs table
create table public.jobs (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  department text not null,
  location text not null,
  type text not null,
  description text not null,
  responsibilities text[] not null,
  requirements text[] not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS
alter table public.jobs enable row level security;

-- Policy: Everyone can view jobs
create policy "Enable select for all users" on public.jobs
  for select using (true);

-- Create job_applications table
create table public.job_applications (
  id uuid primary key default gen_random_uuid(),
  job_id uuid references public.jobs(id) not null,
  full_name text not null,
  email text not null,
  phone text not null,
  resume_url text, -- Store URL if using storage, or just link
  cover_letter text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS
alter table public.job_applications enable row level security;

-- Policy: Everyone can insert applications
create policy "Enable insert for all users" on public.job_applications
  for insert with check (true);

-- Insert initial job data
insert into public.jobs (title, department, location, type, description, responsibilities, requirements) values
(
  'Senior Software Engineer',
  'Software',
  'Remote',
  'Full-time',
  'We are looking for an experienced Software Engineer to join our core team. You will be responsible for building scalable backend services and robust APIs.',
  ARRAY['Design and implement microservices', 'Mentor junior developers', 'Optimize database queries', 'Participate in code reviews'],
  ARRAY['5+ years of experience with Node.js', 'Experience with PostgreSQL', 'Knowledge of cloud platforms (AWS/GCP)', 'Strong problem-solving skills']
),
(
  'Hardware Design Engineer',
  'Hardware',
  'On-site',
  'Full-time',
  'Join our hardware team to design next-generation security devices. You will work on PCB design, prototyping, and testing.',
  ARRAY['Design multilayer PCBs', 'Perform signal integrity analysis', 'Collaborate with firmware engineers', 'Manage component sourcing'],
  ARRAY['BS/MS in Electrical Engineering', 'Proficiency in Altium Designer', 'Experience with embedded systems', 'Hands-on lab experience']
);
