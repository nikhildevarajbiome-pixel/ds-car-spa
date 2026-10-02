import type { Metadata } from "next";
import { getServices } from "@/lib/services";
import BookingForm from "@/components/BookingForm";
import { GENERIC_BOOKING } from "@/lib/whatsapp";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Services | DS Car Spa, Bengaluru",
  description:
    "Car washing, polishing, waxing, interior cleaning and detailing at DS Car Spa, Kamakshipalya, Bengaluru.",
  openGraph: {
    title: "Services | DS Car Spa",
    description: "Premium car care in Bengaluru.",
    type: "website",
  },
};

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <main className="min-h-screen bg-[#05070b] pb-24 pt-28 text-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">

        {/* Page Heading */}
        <header className="mb-12">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-white/55">
            The DS Car Spa Experience
          </p>

          <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
            What We Do
          </h1>

          <p className="mt-4 max-w-xl text-base leading-7 text-white/55">
            Every detail matters. Discover premium car care designed
            to restore, protect and elevate your driving experience.
          </p>
        </header>

        {/* Photos Left + Services Right */}
        <section className="grid items-stretch gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">

          {/* LEFT: Three Photos */}
          <div className="grid content-start gap-5">

            {/* Photo 1 */}
            <div className="group relative h-[280px] w-full overflow-hidden rounded-3xl border border-white/10 sm:h-[340px]">
              <img
                src="/images/gallery/1.jpg"
                alt="Premium car detailing at DS Car Spa"
                className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

              <div className="absolute bottom-5 left-5">
                <p className="text-xs uppercase tracking-[0.2em] text-white/60">
                  Precision care
                </p>
                <h2 className="mt-1 text-xl font-semibold text-white">
                  Every detail counts.
                </h2>
              </div>
            </div>

            {/* Photo 2 */}
            <div className="group relative h-[280px] w-full overflow-hidden rounded-3xl border border-white/10 sm:h-[340px]">
              <img
                src="/images/gallery/2.jpg"
                alt="Professional car cleaning and finishing"
                className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

              <div className="absolute bottom-5 left-5">
                <p className="text-xs uppercase tracking-[0.2em] text-white/60">
                  Premium finish
                </p>
                <h2 className="mt-1 text-xl font-semibold text-white">
                  Made to shine.
                </h2>
              </div>
            </div>

            {/* Photo 3 */}
            <div className="group relative h-[280px] w-full overflow-hidden rounded-3xl border border-white/10 sm:h-[340px]">
              <img
                src="/images/gallery/3.jpg"
                alt="Professional car polishing at DS Car Spa"
                className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

              <div className="absolute bottom-5 left-5">
                <p className="text-xs uppercase tracking-[0.2em] text-white/60">
                  The finishing touch
                </p>
                <h2 className="mt-1 text-xl font-semibold text-white">
                  Perfection in every detail.
                </h2>
              </div>
            </div>

          </div>

          {/* RIGHT: Services Panel */}
          <div className="h-full rounded-3xl border border-white/10 bg-white/[0.035] p-5 backdrop-blur-2xl sm:p-8">

            <div className="mb-7">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/55">
                Our Expertise
              </p>

              <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
                Explore our services
              </h2>
            </div>

            {services.length === 0 ? (
              <p className="rounded-2xl border border-white/10 p-6 text-white/50">
                No services are available right now. Please contact us on WhatsApp.
              </p>
            ) : (
              <div className="grid gap-3">
                {services.map((s, i) => (
                  <a
                    key={s.id}
                    href={`/services#${s.slug}`}
                    className="group flex items-center justify-between gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.035] px-4 py-5 transition duration-300 hover:border-white/20 hover:bg-white/[0.08] sm:px-5"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-xs font-medium tabular-nums text-white/30">
                        {String(i + 1).padStart(2, "0")}
                      </span>

                      <span className="text-sm font-medium text-white/85 transition group-hover:text-white sm:text-base">
                        {s.name}
                      </span>
                    </div>

                    <span className="text-lg text-white/40 transition group-hover:translate-x-1 group-hover:text-white">
                      ↗
                    </span>
                  </a>
                ))}
              </div>
            )}

            <p className="mt-6 text-xs leading-5 text-white/35">
              Select a service to explore details and booking options.
            </p>
          </div>
        </section>

        {/* Premium Appointment Booking */}
        <section
          id="book"
          className="relative mt-20 scroll-mt-28 overflow-hidden rounded-[2rem] border border-white/15 bg-gradient-to-br from-[#1b1b1b] via-[#101010] to-[#080808] p-6 shadow-[0_25px_80px_rgba(0,0,0,0.45)] sm:p-10 lg:p-12"
        >
          {/* Subtle Silver Glow */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/[0.06] blur-[100px]" />

          <div className="relative z-10">

            <div className="mb-9">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/50">
                Let&apos;s get started
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
                Book an appointment
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-white/55 sm:text-base">
                Tell us what your car needs. Our team will help you confirm
                your appointment and give your vehicle the care it deserves.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/20 p-4 sm:p-7">
              <BookingForm services={services.map((s) => s.name)} />
            </div>

            <div className="mt-7 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs leading-5 text-white/40">
                Prefer a quick conversation? Connect with us directly.
              </p>

              <a
                href={GENERIC_BOOKING}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-white/20 bg-white/[0.07] px-7 text-sm font-semibold text-white transition duration-300 hover:border-white/40 hover:bg-white/[0.14]"
              >
                Chat on WhatsApp
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  ↗
                </span>
              </a>
            </div>

          </div>
        </section>

      </div>
    </main>
  );
}