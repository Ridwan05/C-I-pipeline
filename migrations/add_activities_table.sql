-- Run this in Supabase Dashboard › SQL Editor to add the activities table
-- without resetting the rest of the database.

create table if not exists public.activities (
  id               bigint  primary key generated always as identity,
  activityname     text    not null,
  projectstage     text,
  activitycategory text,
  updated_at       timestamptz not null default now()
);

create trigger set_activities_updated_at
  before update on public.activities
  for each row execute function public.set_updated_at();

alter table public.activities enable row level security;

create policy "Allow browser access activities"
  on public.activities for all to anon using (true) with check (true);
