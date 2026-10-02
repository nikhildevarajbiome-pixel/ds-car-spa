
import Link from "next/link";
import Image from "next/image";
import { getServices } from "@/lib/services";
import { GENERIC_BOOKING } from "@/lib/whatsapp";

export const revalidate = 60;

const btn =
  "inline-flex min-h-12 items-center justify-center rounded-full px-7 font-semibold transition duration-300";

const positions = [
  "left-[2%] top-[5%]",
  "right-[2%] top-[5%]",
  "left-[-3%] top-[42%]",
  "right-[-3%] top-[42%]",
  "left-[7%] bottom-[2%]",
  "right-[7%] bottom-[2%]",
];

export default async function HomePage() {
  const services = await getServices();

  return (
    <main className="overflow-hidden bg-[#050505] text-white">

      {/* HERO — ORIGINAL VIDEO */}
      <section
        id="home"
        className="relative isolate flex min-h-[85vh] items-center overflow-hidden bg-black px-5 py-24 sm:min-h-[90vh] sm:px-6 sm:py-32"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/gallery/1.jpg"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
          aria-hidden="true"
        >
          <source src="/video/car-spa-hero.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/85 via-black/55 to-black/15" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/75 via-transparent to-black/20" />

        <div className="relative z-10 mx-auto w-full max-w-7xl">

          <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/[0.09] px-4 py-3 shadow-2xl shadow-black/20 backdrop-blur-2xl">
            <span className="h-2 w-2 rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.8)]" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/85 sm:text-xs">
              Premium Car Care · Bengaluru
            </span>
          </div>

          <h1 className="shine max-w-4xl text-5xl font-semibold leading-[1.04] tracking-[-0.055em] text-white sm:text-7xl lg:text-8xl">
            Showroom shine.
            <br />
            <span className="bg-gradient-to-r from-white via-white/90 to-white/45 bg-clip-text text-transparent">
              Every single drive.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
            Experience premium car washing, polishing, waxing and interior
            detailing at DS Car Spa, Kamakshipalya, Bengaluru.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={GENERIC_BOOKING}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full border border-white/30 bg-white/[0.18] px-8 text-sm font-semibold text-white shadow-[0_8px_32px_rgba(0,0,0,0.25)] backdrop-blur-2xl transition duration-300 hover:border-white/50 hover:bg-white/[0.28]"
            >
              Book Appointment
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                ↗
              </span>
            </a>

            <Link
              href="/services"
              className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/20 bg-black/20 px-8 text-sm font-medium text-white/90 backdrop-blur-xl transition duration-300 hover:border-white/40 hover:bg-white/10"
            >
              Explore Services
            </Link>
          </div>

          <div className="mt-12 inline-flex items-center gap-4 rounded-2xl border border-white/15 bg-white/[0.07] px-5 py-4 shadow-xl shadow-black/10 backdrop-blur-2xl">
            <span className="text-xl text-white/90">✦</span>
            <div>
              <p className="text-xs font-semibold text-white/90">
                Crafted for your car
              </p>
              <p className="mt-1 text-[10px] tracking-[0.15em] text-white/50">
                CARE · PRECISION · FINISH
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="relative isolate overflow-hidden bg-[#070707] px-5 py-16 sm:px-6 sm:py-24">

        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.035] blur-[140px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0c0c0c] via-[#070707] to-[#050505]" />
        </div>

        <div className="mx-auto max-w-7xl">

          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-white/50">
              The DS Experience
            </span>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
              What We Do
            </h2>

            <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-white/50">
              Precision care. Premium finish. Every detail matters.
            </p>
          </div>

          {/* CENTRAL IMAGE */}
          <div className="relative mx-auto max-w-5xl">

            <div className="relative mx-auto aspect-[4/3] w-full max-w-3xl overflow-hidden rounded-[2rem] border border-white/15 shadow-[0_30px_90px_rgba(0,0,0,0.65)] sm:aspect-[16/9] sm:rounded-[2.5rem]">

              <Image
                src="/images/gallery/1.jpg"
                alt="Premium car detailing at DS Car Spa"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 900px"
                className="object-cover transition duration-700 hover:scale-[1.025]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 sm:bottom-9 sm:left-9">
                <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/65">
                  Precision in every detail
                </span>

                <h3 className="mt-2 text-2xl font-semibold text-white sm:text-4xl">
                  Beyond the ordinary.
                </h3>
              </div>
            </div>

            {/* FLOATING SERVICE CIRCLES */}
            <div className="pointer-events-none absolute inset-0 hidden sm:block">
              {services.slice(0, 6).map((service, index) => (
                <Link
                  key={service.id}
                  href={`/services#${service.slug}`}
                  className={`pointer-events-auto absolute ${positions[index]} group grid h-28 w-28 place-items-center rounded-full border border-white/20 bg-[#111111]/80 p-3 text-center shadow-[0_12px_40px_rgba(0,0,0,0.5)] backdrop-blur-2xl transition duration-500 hover:scale-110 hover:border-white/60 hover:bg-[#222222]/95 sm:h-32 sm:w-32`}
                >
                  <span>
                    <span className="mx-auto mb-2 grid h-7 w-7 place-items-center rounded-full border border-white/25 bg-white/[0.08] text-xs text-white/90">
                      ✦
                    </span>

                    <span className="block text-xs font-semibold leading-4 text-white">
                      {service.name}
                    </span>

                    <span className="mt-1 block text-[8px] uppercase tracking-widest text-white/45">
                      Discover
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* MOBILE SERVICES */}
          <div className="mt-7 grid grid-cols-2 gap-3 sm:hidden">
            {services.slice(0, 6).map((service) => (
              <Link
                key={service.id}
                href={`/services#${service.slug}`}
                className="flex aspect-square flex-col items-center justify-center rounded-full border border-white/15 bg-white/[0.045] p-4 text-center backdrop-blur-xl transition active:scale-95"
              >
                <span className="mb-3 grid h-8 w-8 place-items-center rounded-full border border-white/20 bg-white/[0.07] text-white/90">
                  ✦
                </span>

                <span className="text-xs font-semibold leading-4 text-white">
                  {service.name}
                </span>

                <span className="mt-2 text-[9px] uppercase tracking-widest text-white/40">
                  Explore
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-9 text-center">
            <Link
              href="/services"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/20 bg-white/[0.06] px-6 text-xs font-semibold text-white/90 backdrop-blur-xl transition hover:border-white/50 hover:bg-white/[0.12]"
            >
              Explore All Services <span className="ml-2">↗</span>
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative isolate overflow-hidden bg-[#050505] px-5 pb-16 pt-4 sm:px-6 sm:pb-20">

        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-1/2 h-[350px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.035] blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-white/15 bg-gradient-to-br from-[#1b1b1b]/95 via-[#111111]/95 to-[#080808]/95 p-7 shadow-[0_25px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl sm:p-10">

          <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-white/[0.06] blur-[80px]" />

          <div className="relative z-10 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">

            <div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/50">
                Your next drive starts here
              </span>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Ready for a cleaner car?
              </h2>

              <p className="mt-3 max-w-md text-sm leading-6 text-white/50">
                Give your vehicle the attention it deserves with DS Car Spa.
              </p>
            </div>

            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Link
                href="/services#book"
                className={`${btn} bg-white text-[#080808] hover:bg-white/85`}
              >
                Book Appointment
              </Link>

              <Link
                href="/packages"
                className={`${btn} border border-white/20 bg-white/[0.05] text-white backdrop-blur-xl hover:border-white/40 hover:bg-white/[0.12]`}
              >
                See Packages
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
