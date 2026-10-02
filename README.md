# DS Car Spa

Next.js 14 (App Router) + TypeScript + Tailwind. Pages: `/`, `/services`, `/packages`, `/gallery`, `/contact`.

## Run locally
    npm install
    npm run dev        # http://localhost:3000
    npm run typecheck
    npm run build

## Supabase (optional)
Copy `.env.example` to `.env.local`, fill the two values, run `supabase/migrations/001_services.sql`
in the Supabase SQL editor, then restart `npm run dev`. See `README-services.md` for details.

## Photos
`public/images/services/<slug>/1.jpg..3.jpg` and `public/images/gallery/1.jpg..8.jpg`.
