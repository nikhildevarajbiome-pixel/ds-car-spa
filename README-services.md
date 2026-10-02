# Services page: files and setup

Copy `src/`, `supabase/` into the project (merge with existing folders).

- Install: `npm i @supabase/supabase-js`
- Env: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY` (optional; without them the page uses `src/data/services.ts`)
- Run `supabase/migrations/001_services.sql` in the Supabase SQL editor, then add your admin user to `public.admins`
- Photos: `public/images/services/<slug>/1.jpg`, `2.jpg`, `3.jpg` (slugs are in `src/data/services.ts`)
- Add `https://<project>.supabase.co` to `images.remotePatterns` in `next.config` for Supabase-hosted photos
- Render `<Navbar />` in `src/app/layout.tsx`
- Not yet run: install, `next build` and `tsc` were not possible in this environment
