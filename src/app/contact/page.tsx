import type { Metadata } from "next";
import BookingForm from "@/components/BookingForm";
import { getServices } from "@/lib/services";
import { GENERIC_BOOKING, WA_NUMBER } from "@/lib/whatsapp";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Contact | DS Car Spa",
  description:
    "Contact DS Car Spa, Kamakshipalya, Bengaluru. Book premium car care and detailing.",
};

const MAP =
  "https://www.google.com/maps/search/?api=1&query=DS+Car+Spa+Kamakshipalya+Bengaluru";

const card =
  "group relative flex flex-col gap-3 overflow-hidden rounded-2xl border border-white/[0.09] bg-white/[0.025] p-5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.05]";

const link =
  "mt-2 inline-flex min-h-11 items-center justify-center rounded-full border border-white/20 px-5 text-xs font-medium tracking-wide text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-black";

export default async function ContactPage() {
  const services = await getServices();

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#080808] pb-20 pt-28 text-white">

      {/* Animated background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="contact-glow contact-glow-one" />
        <div className="contact-glow contact-glow-two" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:55px_55px] [mask-image:linear-gradient(to_bottom,black,transparent_75%)]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6">

        {/* Header */}
        <header className="mb-12 max-w-2xl">
          <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.4em] text-white/40">
            DS Car Spa / Bengaluru
          </p>

          <h1 className="text-4xl font-medium tracking-tight sm:text-6xl">
            Let&apos;s Talk
            <span className="block font-light italic text-white/40">
              About Your Car.
            </span>
          </h1>

          <p className="mt-5 max-w-md text-sm leading-7 text-white/50">
            From a quick wash to complete detailing, we&apos;re here to help
            your vehicle look its best.
          </p>

          <div className="mt-7 h-px w-16 bg-white/50" />
        </header>

        {/* Contact Cards */}
        <div className="grid gap-4 md:grid-cols-3">

          {/* WhatsApp */}
          <div className={card}>
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/35">
              01 / Connect
            </span>

            <div className="mb-1 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.04]">
              <span className="text-lg">↗</span>
            </div>

            <h2 className="text-lg font-medium">WhatsApp</h2>

            <p className="text-xs leading-6 text-white/45">
              Ask about availability, services, or bookings.
            </p>

            <a
              href={GENERIC_BOOKING}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex min-h-11 items-center justify-center rounded-full bg-white px-5 text-xs font-semibold text-black transition hover:bg-white/80"
            >
              Chat with us ↗
            </a>
          </div>

          {/* Call */}
          <div className={card}>
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/35">
              02 / Call
            </span>

            <div className="mb-1 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.04]">
              <span className="text-lg">⌕</span>
            </div>

            <h2 className="text-lg font-medium">Give us a call</h2>

            <p className="text-sm tracking-wide text-white/65">
              +91 63617 91479
            </p>

            <a href={`tel:+${WA_NUMBER}`} className={link}>
              Call DS Car Spa ↗
            </a>
          </div>

          {/* Visit Studio */}
          <div
            className="group relative flex min-h-[260px] flex-col justify-end overflow-hidden rounded-2xl border border-white/15 bg-[#111] bg-cover bg-center transition-all duration-500 hover:-translate-y-1 hover:border-white/35"
            style={{
              backgroundImage: "url('/images/studio.jpg')",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/65 to-black/10 transition duration-500 group-hover:from-black/90" />

            <div className="relative z-10 p-6">
              <span className="text-[10px] uppercase tracking-[0.3em] text-white/65">
                03 / Find us
              </span>

              <div className="mb-2 mt-3 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-black/20 backdrop-blur-md">
                <span className="text-lg">⌖</span>
              </div>

              <h2 className="text-xl font-medium text-white">
                Visit our studio
              </h2>

              <p className="mt-2 text-sm text-white/75">
                Kamakshipalya, Bengaluru
              </p>

              <a
                href={MAP}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex min-h-11 items-center justify-center rounded-full border border-white/40 bg-black/20 px-5 text-xs font-medium text-white backdrop-blur-md transition hover:bg-white hover:text-black"
              >
                Get Directions ↗
              </a>
            </div>
          </div>
        </div>

        {/* Booking Section */}
        <section
          id="book"
          className="relative mt-16 overflow-hidden rounded-3xl border border-white/10 bg-[#101010]/80 p-5 backdrop-blur-2xl sm:p-9"
        >
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-white/[0.045] blur-3xl" />

          <div className="relative mb-7">
            <p className="mb-3 text-[10px] uppercase tracking-[0.35em] text-white/40">
              Your next detail starts here
            </p>

            <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
              Book an appointment<span className="text-white/35">.</span>
            </h2>

            <p className="mt-3 text-sm text-white/45">
              Share your details and we&apos;ll help arrange your visit.
            </p>
          </div>

          <div className="relative">
            <BookingForm services={services.map((s) => s.name)} />
          </div>
        </section>

        <p className="mt-8 text-center text-[9px] uppercase tracking-[0.3em] text-white/25">
          DS Car Spa · Crafted for every drive
        </p>
      </div>

      {/* Background animation */}
      <style>{`
        .contact-glow {
          position: absolute;
          width: 320px;
          height: 320px;
          border-radius: 9999px;
          filter: blur(100px);
          opacity: 0.13;
          background: #d4d4d4;
          animation: contactFloat 12s ease-in-out infinite alternate;
        }

        .contact-glow-one {
          top: 5%;
          left: -180px;
        }

        .contact-glow-two {
          top: 45%;
          right: -200px;
          animation-delay: -6s;
          background: #777777;
        }

        @keyframes contactFloat {
          from {
            transform: translate3d(0, 0, 0) scale(0.9);
          }
          to {
            transform: translate3d(45px, 65px, 0) scale(1.2);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .contact-glow {
            animation: none;
          }
        }
      `}</style>
    </main>
  );
}