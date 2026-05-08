-- Run this in Supabase Dashboard › SQL Editor.
-- The activities table already exists; this patches it to work with the app.

-- Drop the auto-identity so the app can insert rows with explicit bigint IDs.
alter table public.activities alter column id drop identity if exists;

-- Add trigger if not already present.
do $$ begin
  if not exists (
    select 1 from pg_trigger where tgname = 'set_activities_updated_at'
  ) then
    create trigger set_activities_updated_at
      before update on public.activities
      for each row execute function public.set_updated_at();
  end if;
end $$;

-- Enable RLS and anon policy (safe to re-run).
alter table public.activities enable row level security;

do $$ begin
  if not exists (
    select 1 from pg_policies
    where tablename = 'activities' and policyname = 'Allow browser access activities'
  ) then
    create policy "Allow browser access activities"
      on public.activities for all to anon using (true) with check (true);
  end if;
end $$;
