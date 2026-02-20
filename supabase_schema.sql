-- Create the contact_submissions table
create table public.contact_submissions (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  company text,
  message text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable Row Level Security (RLS)
alter table public.contact_submissions enable row level security;

-- Create policy to allow anyone to insert valid data (for contact form)
create policy "Enable insert for all users" on public.contact_submissions
  for insert with check (true);

-- Create policy to allow only authenticated (admin) users to view data
-- Note: You would normally restrict this to specific roles, but for now
-- we'll just require authentication.
create policy "Enable select for authorized users only" on public.contact_submissions
  for select using (auth.role() = 'authenticated');
