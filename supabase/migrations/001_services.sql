-- Services, images and admin allow-list. Run in the Supabase SQL editor.
create table if not exists public.services (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name text not null,
  description text not null default '',
  price_label text not null default 'Price to be confirmed',
  active boolean not null default true,
  sort_order int not null default 0,
  updated_at timestamptz not null default now()
);
create table if not exists public.service_images (
  id uuid primary key default gen_random_uuid(),
  service_id uuid not null references public.services(id) on delete cascade,
  path text not null,
  alt text not null default '',
  sort_order int not null default 0
);
create table if not exists public.admins (user_id uuid primary key references auth.users(id) on delete cascade);

create or replace function public.is_admin() returns boolean
language sql security definer set search_path = public stable
as $$ select exists (select 1 from public.admins where user_id = auth.uid()) $$;

alter table public.services enable row level security;
alter table public.service_images enable row level security;
alter table public.admins enable row level security;

create policy "public reads active services" on public.services for select using (active or public.is_admin());
create policy "admins write services" on public.services for all using (public.is_admin()) with check (public.is_admin());
create policy "public reads service images" on public.service_images for select using (true);
create policy "admins write service images" on public.service_images for all using (public.is_admin()) with check (public.is_admin());
create policy "admin reads own row" on public.admins for select using (user_id = auth.uid());
-- Add admins manually in the SQL editor: insert into public.admins values ('<auth user id>');

insert into storage.buckets (id, name, public) values ('service-images', 'service-images', true) on conflict do nothing;
create policy "admins upload service images" on storage.objects for insert to authenticated with check (bucket_id = 'service-images' and public.is_admin());
create policy "admins update service images" on storage.objects for update to authenticated using (bucket_id = 'service-images' and public.is_admin());
create policy "admins delete service images" on storage.objects for delete to authenticated using (bucket_id = 'service-images' and public.is_admin());

insert into public.services (slug, name, description, sort_order) values
  ('auto-detailing','Auto Detailing','Detailed cleaning and finishing for the inside and outside of your car.',1),
  ('automatic-car-washing','Automatic Car Washing','Machine-assisted wash for a quick, even clean.',2),
  ('car-polishing','Car Polishing','Polishing to bring back shine on dull paintwork.',3),
  ('car-waxing','Car Waxing','A wax coat to add gloss to the paint.',4),
  ('car-window-cleaning','Car Window Cleaning','Clean glass, inside and out, for clear visibility.',5),
  ('interior-cleaning','Interior Cleaning','Seats, mats, dashboard and panels cleaned inside the cabin.',6),
  ('polishing','Polishing','Polishing for paint and surfaces that look tired.',7),
  ('pressure-car-washing','Pressure Car Washing','High-pressure rinse that removes mud and road dirt.',8),
  ('tyre-gloss','Tyre Gloss','Tyre dressing for a clean, deep black finish.',9),
  ('vacuuming','Vacuuming','Dust and dirt removed from seats, carpets and boot.',10),
  ('vehicle-interior-vacuuming','Vehicle Interior Vacuuming','Thorough vacuuming of the full interior, including mats and corners.',11)
on conflict (slug) do nothing;
