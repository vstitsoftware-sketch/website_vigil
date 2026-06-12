-- Create the enquiries table
create table public.enquiries (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  email text not null,
  phone text,
  subject text,
  message text not null,
  status text not null default 'New',
  submitted_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable Row Level Security (RLS)
alter table public.enquiries enable row level security;

-- Create policy to allow anyone to insert valid data (for contact form)
create policy "Enable insert for all users" on public.enquiries
  for insert with check (true);

-- Create policy to allow only authenticated (admin) users to view data
-- Note: You would normally restrict this to specific roles, but for now
-- we'll just require authentication.
create policy "Enable select for authorized users only" on public.enquiries
  for select using (auth.role() = 'authenticated');
