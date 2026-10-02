import type { Service } from "@/types/service";

export const PRICE_PLACEHOLDER = "Price to be confirmed";

const s = (slug: string, name: string, description: string, sortOrder: number): Service => ({
  id: slug,
  slug,
  name,
  description,
  priceLabel: PRICE_PLACEHOLDER,
  active: true,
  sortOrder,
  // Drop real photos at public/images/services/<slug>/1.jpg, 2.jpg, 3.jpg
  images: [1, 2, 3].map((n) => ({
    src: `/images/services/${slug}/${n}.jpg`,
    alt: `${name} at DS Car Spa, photo ${n}`,
  })),
});

// Official list from the Google Maps listing. Used until Supabase has data.
export const STATIC_SERVICES: Service[] = [
  s("auto-detailing", "Auto Detailing", "Detailed cleaning and finishing for the inside and outside of your car.", 1),
  s("automatic-car-washing", "Automatic Car Washing", "Machine-assisted wash for a quick, even clean.", 2),
  s("car-polishing", "Car Polishing", "Polishing to bring back shine on dull paintwork.", 3),
  s("car-waxing", "Car Waxing", "A wax coat to add gloss to the paint.", 4),
  s("car-window-cleaning", "Car Window Cleaning", "Clean glass, inside and out, for clear visibility.", 5),
  s("interior-cleaning", "Interior Cleaning", "Seats, mats, dashboard and panels cleaned inside the cabin.", 6),
  s("polishing", "Polishing", "Polishing for paint and surfaces that look tired.", 7),
  s("pressure-car-washing", "Pressure Car Washing", "High-pressure rinse that removes mud and road dirt.", 8),
  s("tyre-gloss", "Tyre Gloss", "Tyre dressing for a clean, deep black finish.", 9),
  s("vacuuming", "Vacuuming", "Dust and dirt removed from seats, carpets and boot.", 10),
  s("vehicle-interior-vacuuming", "Vehicle Interior Vacuuming", "Thorough vacuuming of the full interior, including mats and corners.", 11),
];
