
import type { Metadata } from "next";
import ServiceImage from "@/components/ServiceImage";

export const metadata: Metadata = {
  title: "Gallery | DS Car Spa",
  description: "Explore the premium automotive care gallery at DS Car Spa.",
};

const SLOTS = [1, 2, 3, 4, 5, 6, 7, 8];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-[#080808] pb-16 pt-24 text-white">
      {/* Header */}
      <section className="mx-auto max-w-7xl px-5 pb-10 pt-8 sm:px-8">
        <div className="flex items-end justify-between border-b border-white/10 pb-6">
          <div>
            <p className="mb-3 text-[9px] uppercase tracking-[0.4em] text-white/40">
              DS Car Spa / Bengaluru
            </p>

            <h1 className="text-3xl font-medium tracking-tight sm:text-5xl">
              The Gallery<span className="text-white/30">.</span>
            </h1>

            <p className="mt-3 text-xs text-white/45 sm:text-sm">
              A glimpse of our craft.
            </p>
          </div>

          <span className="pb-1 text-[10px] tracking-[0.2em] text-white/40">
            01 — 08
          </span>
        </div>
      </section>

      {/* Gallery */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-2 gap-2.5 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
          {SLOTS.map((n) => (
            <article
              key={n}
              className="group relative overflow-hidden rounded-lg border border-white/[0.08] bg-[#111] transition duration-500 hover:border-white/25"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <ServiceImage
                  src={`/images/gallery/${n}.jpg`}
                  alt={`DS Car Spa work ${n}`}
                  sizes="(min-width:1024px) 25vw, (min-width:768px) 33vw, 50vw"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-100" />

                <span className="absolute bottom-3 left-3 text-[9px] uppercase tracking-[0.2em] text-white/65">
                  DS / {String(n).padStart(2, "0")}
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Minimal CTA */}
      <section className="mx-auto mt-16 max-w-7xl border-t border-white/10 px-5 pt-10 text-center sm:px-8">
        <p className="text-xs text-white/45">
          Ready for a better finish?
        </p>

        <a
          href="/contact"
          className="mt-4 inline-flex items-center gap-3 rounded-full border border-white/25 px-6 py-3 text-[10px] uppercase tracking-[0.2em] transition duration-300 hover:bg-white hover:text-black"
        >
          Book Your Visit <span>↗</span>
        </a>
      </section>
    </main>
  );
}
