import type { Service } from "@/types/service";
import { bookServiceLink } from "@/lib/whatsapp";
import ServiceCarousel from "./ServiceCarousel";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <article id={service.slug} className="flex flex-col gap-5 rounded-3xl border border-white/10 bg-[#111A2B]/70 p-4 sm:p-5">
      <ServiceCarousel images={service.images} name={service.name} />
      <div className="flex flex-1 flex-col gap-2 px-1">
        <h2 className="text-2xl font-bold tracking-tight text-white">{service.name}</h2>
        <p className="text-sm text-[#c4cddb]">{service.description}</p>
        <p className="mt-1 text-sm text-[#8E9AAD]">{service.priceLabel}</p>
      </div>
      <a
        href={bookServiceLink(service.name)}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#2F7BFF] px-6 font-semibold text-white transition hover:bg-[#4a8cff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2F7BFF]"
      >
        Book This Service
      </a>
    </article>
  );
}
