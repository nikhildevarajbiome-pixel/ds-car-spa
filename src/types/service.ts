export type ServiceImage = { src: string; alt: string };
export type Service = {
  id: string;
  slug: string;
  name: string;
  description: string;
  priceLabel: string; // placeholder until the owner confirms prices
  images: ServiceImage[];
  active: boolean;
  sortOrder: number;
};
