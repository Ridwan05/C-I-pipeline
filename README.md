# C&I Pipeline Manager

Static React dashboard for managing DREEF C&I pipeline projects, team members, issues, and deployment sites.

## Local Run

```powershell
.\start.ps1
```

Open the URL printed in the terminal, usually `http://localhost:3000/`.

## Supabase

1. Run `supabase-setup.sql` in Supabase Dashboard > SQL Editor.
2. Set Supabase credentials for the build (one of):
   - Run `./connect-supabase.ps1 -SupabaseUrl <url> -AnonKey <key>` to write `public/config.js` locally.
   - Or provide `SUPABASE_URL` and `SUPABASE_ANON_KEY` env vars to `node build.js`.

## Build

- Build Command: `npm run build`
- Output Directory: `dist`
