import { createClient } from "@supabase/supabase-js";
import { STATIC_SERVICES } from "@/data/services";
import type { Service } from "@/types/service";

export async function getServices(): Promise<Service[]> {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) return STATIC_SERVICES;
  try {
    const sb = createClient(url, key);
    const { data, error } = await sb
      .from("services")
      .select("id, slug, name, description, price_label, active, sort_order, service_images(path, alt, sort_order)")
      .eq("active", true)
      .order("sort_order");
    if (error || !data?.length) return STATIC_SERVICES;
    return data.map((r: any) => ({
      id: r.id,
      slug: r.slug,
      name: r.name,
      description: r.description,
      priceLabel: r.price_label,
      active: r.active,
      sortOrder: r.sort_order,
      images: [...(r.service_images ?? [])]
        .sort((a: any, b: any) => a.sort_order - b.sort_order)
        .map((i: any) => ({
          src: `${url}/storage/v1/object/public/service-images/${i.path}`,
          alt: i.alt || r.name,
        })),
    }));
  } catch {
    return STATIC_SERVICES;
  }
}
