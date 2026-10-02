"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { GENERIC_BOOKING } from "@/lib/whatsapp";

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/packages", label: "Packages" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const path = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 pt-[env(safe-area-inset-top)]">
      <div className="mx-auto max-w-[1440px] px-3 pt-3 sm:px-6 sm:pt-4 lg:px-10">

        {/* Premium Glass Navbar */}
        <div className="relative flex h-[66px] items-center justify-between rounded-full border border-white/[0.14] bg-[#111111]/75 px-4 shadow-[0_12px_45px_rgba(0,0,0,0.3)] backdrop-blur-2xl sm:h-[74px] sm:px-7">

          {/* Glass Reflection */}
          <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" />

          {/* Premium Brand Logo */}
          <Link
            href="/"
            onClick={() => setOpen(false)}
            aria-label="DS Car Spa Home"
            className="relative z-10 flex shrink-0 flex-col justify-center"
          >
            <span className="flex items-baseline gap-2 leading-none">
              <span className="text-[29px] font-black tracking-[-0.09em] text-[#B8323C] sm:text-[34px]">
                DS
              </span>

              <span className="text-[11px] font-semibold tracking-[0.2em] text-[#C5C5C5] sm:text-[14px] sm:tracking-[0.24em]">
                CAR SPA
              </span>
            </span>

            <span className="mt-1.5 text-[6px] font-medium uppercase tracking-[0.34em] text-white/40 sm:text-[8px]">
              Automotive Detailing
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 rounded-full border border-white/[0.07] bg-white/[0.035] p-1.5 backdrop-blur-xl lg:flex">
            {NAV_LINKS.map((link) => {
              const active =
                path === link.href ||
                (link.href !== "/" && path.startsWith(link.href));

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-full px-4 py-2.5 text-[11px] font-medium transition-all duration-300 ${
                    active
                      ? "bg-white text-black shadow-sm"
                      : "text-white/60 hover:bg-white/[0.08] hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Booking */}
          <a
            href={GENERIC_BOOKING}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden min-h-11 items-center gap-3 rounded-full border border-white/20 bg-white px-5 text-[10px] font-bold tracking-[0.12em] text-black transition-all duration-300 hover:bg-[#B8323C] hover:text-white lg:inline-flex"
          >
            BOOK APPOINTMENT
            <span className="text-sm">↗</span>
          </a>

          {/* Mobile / Tablet Controls */}
          <div className="relative z-10 flex items-center gap-2 lg:hidden">
            <a
              href={GENERIC_BOOKING}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-10 items-center rounded-full bg-white px-3.5 text-[9px] font-bold tracking-[0.07em] text-black transition hover:bg-[#B8323C] hover:text-white sm:px-5 sm:text-[10px]"
            >
              BOOK NOW
            </a>

            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen(!open)}
              className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/15 bg-white/[0.07] text-white transition hover:bg-white/[0.15] sm:h-11 sm:w-11"
            >
              <span className="text-xl font-light leading-none">
                {open ? "×" : "☰"}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Glass Menu */}
        <nav
          id="mobile-nav"
          aria-hidden={!open}
          className={`absolute left-3 right-3 top-[calc(100%+10px)] rounded-[26px] border border-white/10 bg-[#111111]/95 p-3 shadow-[0_20px_70px_rgba(0,0,0,0.5)] backdrop-blur-3xl transition-all duration-300 sm:left-6 sm:right-6 lg:hidden ${
            open
              ? "visible translate-y-0 opacity-100"
              : "invisible pointer-events-none -translate-y-3 opacity-0"
          }`}
        >
          <div className="mb-2 border-b border-white/[0.08] px-4 py-3">
            <p className="text-[9px] font-medium uppercase tracking-[0.28em] text-white/35">
              Explore DS Car Spa
            </p>
          </div>

          <div className="space-y-1">
            {NAV_LINKS.map((link, index) => {
              const active =
                path === link.href ||
                (link.href !== "/" && path.startsWith(link.href));

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  tabIndex={open ? 0 : -1}
                  onClick={() => setOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={`flex min-h-[50px] items-center justify-between rounded-2xl px-4 text-[13px] font-medium transition ${
                    active
                      ? "bg-white text-black"
                      : "text-white/65 hover:bg-white/[0.07] hover:text-white"
                  }`}
                >
                  <span className="flex items-center gap-4">
                    <span
                      className={`text-[9px] tabular-nums ${
                        active ? "text-black/40" : "text-white/25"
                      }`}
                    >
                      0{index + 1}
                    </span>
                    {link.label}
                  </span>

                  <span className="text-sm opacity-50">↗</span>
                </Link>
              );
            })}
          </div>

          <div className="mt-3 border-t border-white/[0.08] pt-3">
            <a
              href={GENERIC_BOOKING}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              tabIndex={open ? 0 : -1}
              className="flex min-h-[50px] items-center justify-center gap-2 rounded-full bg-white text-[11px] font-bold tracking-[0.12em] text-black transition hover:bg-[#B8323C] hover:text-white"
            >
              BOOK YOUR APPOINTMENT
              <span>↗</span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}