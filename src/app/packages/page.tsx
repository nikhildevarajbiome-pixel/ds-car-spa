import type { Metadata } from "next";
import { PACKAGES } from "@/data/packages";
import { STATIC_SERVICES } from "@/data/services";
import { bookServiceLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Packages | DS Car Spa, Bengaluru",
  description:
    "Explore premium car care packages at DS Car Spa, Bengaluru.",
};

const nameOf = (slug: string) =>
  STATIC_SERVICES.find((s) => s.slug === slug)?.name ?? slug;

const packageImages: Record<string, string> = {
  "express-wash": "/images/packages/package-1.jpg",
  "interior-refresh": "/images/packages/package-2.jpg",
  "shine-and-protect": "/images/packages/package-3.jpg",
  "complete-detail": "/images/packages/package-4.jpg",
};

export default function PackagesPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] pb-24 pt-28 text-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">

        {/* Heading */}
        <header className="mb-14 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/50">
            Curated Car Care
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.05em] sm:text-6xl">
            Packages
          </h1>

          <p className="mt-5 max-w-xl text-sm leading-7 text-white/55 sm:text-base">
            Thoughtfully combined services to keep your vehicle looking
            its best. Choose the care that suits your drive.
          </p>

          <div className="mt-7 h-px w-24 bg-gradient-to-r from-white/70 to-transparent" />
        </header>

        {/* Package Cards */}
        <section className="grid gap-6 md:grid-cols-2">
          {PACKAGES.map((p, index) => (
            <article
              key={p.slug}
              className="group relative flex flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-[#101010] shadow-[0_20px_60px_rgba(0,0,0,0.4)] transition duration-500 hover:-translate-y-1 hover:border-white/25"
            >
              {/* Background Photo */}
              <div className="relative h-64 overflow-hidden sm:h-72">
                <img
                  src={packageImages[p.slug]}
                  alt={`${p.name} at DS Car Spa`}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#101010] via-black/25 to-black/10" />

                <div className="absolute left-6 top-6">
                  <span className="rounded-full border border-white/25 bg-black/30 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/90 backdrop-blur-xl">
                    DS Collection · {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="absolute bottom-5 left-6 right-6">
                  <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                    {p.name}
                  </h2>

                  <p className="mt-2 text-sm text-white/75">
                    {p.summary}
                  </p>
                </div>
              </div>

              {/* Package Details */}
              <div className="flex flex-1 flex-col px-6 pb-6 sm:px-8 sm:pb-8">
                <div className="mb-5 h-px bg-white/10" />

                <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/40">
                  What&apos;s included
                </p>

                <ul className="flex-1 space-y-4">
                  {p.serviceSlugs.map((s) => (
                    <li
                      key={s}
                      className="flex items-center gap-3 text-sm text-white/75"
                    >
                      <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full border border-white/20 bg-white/[0.06] text-[10px] text-white">
                        ✓
                      </span>
                      {nameOf(s)}
                    </li>
                  ))}
                </ul>

                {/* Price */}
                <div className="mt-8 border-t border-white/10 pt-6">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">
                    Package pricing
                  </p>

                  <p className="mt-2 text-lg font-semibold text-white">
                    {p.priceLabel}
                  </p>

                  <p className="mt-2 text-[10px] text-white/35">
                    Final pricing to be confirmed by DS Car Spa.
                  </p>
                </div>

                {/* Booking */}
                <a
                  href={bookServiceLink(`${p.name} package`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/button mt-7 inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-white px-7 text-sm font-semibold text-black transition duration-300 hover:bg-white/85"
                >
                  Book This Package
                  <span className="transition-transform duration-300 group-hover/button:translate-x-1">
                    ↗
                  </span>
                </a>
              </div>
            </article>
          ))}
        </section>

        {/* Bottom CTA */}
        <section className="relative mt-16 overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#191919] to-[#080808] p-8 text-center sm:p-12">
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/40">
            Your car deserves more
          </p>

          <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-4xl">
            Ready for a fresh finish?
          </h2>

          <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-white/50">
            Connect with DS Car Spa and find the right care for your vehicle.
          </p>

          <a
            href={bookServiceLink("Car care package enquiry")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-white/20 bg-white/[0.08] px-7 text-sm font-semibold text-white transition hover:bg-white/[0.15]"
          >
            Enquire on WhatsApp ↗
          </a>
        </section>

      </div>
    </main>
  );
}