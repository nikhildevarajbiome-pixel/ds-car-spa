import Link from "next/link";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Packages", href: "/packages" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

const whatsapp =
  "https://wa.me/916361791479?text=Hello%20DS%20Car%20Spa%2C%20I%20would%20like%20to%20book%20an%20appointment.";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.08] bg-[#080808] text-white">
      {/* Ambient background */}
      <div className="pointer-events-none absolute -right-32 top-0 h-72 w-72 rounded-full bg-white/[0.035] blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-5 pb-6 pt-14 sm:px-8 sm:pt-20">
        {/* Main footer */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block">
              <h2 className="text-2xl font-semibold tracking-[0.12em]">
                DS <span className="font-light text-white/45">CAR SPA</span>
              </h2>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-7 text-white/45">
              A refined approach to automotive care. Bringing precision,
              attention to detail, and a lasting finish to every vehicle.
            </p>

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-3 rounded-full border border-white/20 px-6 py-3 text-[10px] font-medium uppercase tracking-[0.2em] transition-all duration-300 hover:bg-white hover:text-black"
            >
              Book an Appointment
              <span>↗</span>
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-5 text-[10px] font-medium uppercase tracking-[0.3em] text-white/40">
              Explore
            </h3>

            <nav className="flex flex-col gap-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="w-fit text-sm text-white/65 transition-colors duration-300 hover:translate-x-1 hover:text-white"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-[10px] font-medium uppercase tracking-[0.3em] text-white/40">
              Get in Touch
            </h3>

            <div className="space-y-4 text-sm text-white/60">
              <div>
                <p className="mb-1 text-[10px] uppercase tracking-widest text-white/35">
                  Location
                </p>
                <p>Kamakshipalya, Bengaluru</p>
              </div>

              <div>
                <p className="mb-1 text-[10px] uppercase tracking-widest text-white/35">
                  Phone
                </p>
                <a
                  href="tel:+916361791479"
                  className="transition hover:text-white"
                >
                  +91 63617 91479
                </a>
              </div>

              <div>
                <p className="mb-1 text-[10px] uppercase tracking-widest text-white/35">
                  WhatsApp
                </p>
                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-white"
                >
                  Chat with us ↗
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-14 border-t border-white/[0.09] pt-6">
          <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
            <p className="text-[10px] tracking-wide text-white/35">
              © {new Date().getFullYear()} DS Car Spa. All rights reserved.
            </p>

            <p className="text-[10px] tracking-wide text-white/40">
              Designed & Developed by{" "}
              <a
                href="mailto:nikhildmdevraj@gmail.com"
                className="font-medium text-white/75 transition-colors duration-300 hover:text-white"
              >
                Nikhil Devaraj
              </a>
            </p>
          </div>

          {/* Footer note */}
          <div className="mt-5 flex flex-col items-center gap-3 text-center">
            <span className="text-[9px] uppercase tracking-[0.35em] text-white/20">
              Crafted with attention to detail
            </span>

            <Link
              href="/admin/login"
              className="text-[10px] text-white/25 transition-colors duration-300 hover:text-white/70"
            >
              Admin Login
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}