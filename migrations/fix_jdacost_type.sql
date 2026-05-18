-- jdacost was smallint (whole numbers only, max 32,767) which rejected
-- both decimals and any reasonable naira value. Convert to numeric so it
-- behaves like size and pvCapacity.
-- Safe to run on an existing database: smallint values cast cleanly to numeric.

alter table public.projects_ci
  alter column jdacost type numeric using jdacost::numeric,
  alter column jdacost set default 0;
