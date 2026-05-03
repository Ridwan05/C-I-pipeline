# MeshGrid Pipeline Manager

Static React dashboard for managing DREEF mesh grid pipeline projects, team members, issues, and deployment sites.

## Local Run

```powershell
.\start.ps1
```

Open the URL printed in the terminal, usually `http://localhost:3000/`.

## Supabase

1. Run `supabase-setup.sql` in Supabase Dashboard > SQL Editor.
2. Put your project URL and anon key in `public/config.js`.

## Vercel

Use these settings:

- Framework Preset: `Other`
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`
