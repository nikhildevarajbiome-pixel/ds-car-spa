import { PRICE_PLACEHOLDER } from "./services";

export type CarePackage = { slug: string; name: string; summary: string; serviceSlugs: string[]; priceLabel: string };

// Proposed bundles built only from the 11 listed services. Confirm contents and prices with DS Car Spa.
export const PACKAGES: CarePackage[] = [
  { slug: "express-wash", name: "Express Wash", summary: "A quick clean for regular upkeep.", serviceSlugs: ["automatic-car-washing", "car-window-cleaning", "vacuuming"], priceLabel: PRICE_PLACEHOLDER },
  { slug: "interior-refresh", name: "Interior Refresh", summary: "A fresh, clean cabin.", serviceSlugs: ["interior-cleaning", "vehicle-interior-vacuuming", "car-window-cleaning"], priceLabel: PRICE_PLACEHOLDER },
  { slug: "shine-and-protect", name: "Shine and Protect", summary: "Gloss for tired paint.", serviceSlugs: ["car-polishing", "car-waxing", "tyre-gloss"], priceLabel: PRICE_PLACEHOLDER },
  { slug: "complete-detail", name: "Complete Detail", summary: "Inside and out, start to finish.", serviceSlugs: ["auto-detailing", "pressure-car-washing", "interior-cleaning", "car-polishing", "car-waxing", "tyre-gloss"], priceLabel: PRICE_PLACEHOLDER },
];
