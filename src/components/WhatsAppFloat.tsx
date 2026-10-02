import { GENERIC_BOOKING } from "@/lib/whatsapp";

// Mobile-only quick booking button, kept clear of the iOS home indicator.
export default function WhatsAppFloat() {
  return (
    <a
      href={GENERIC_BOOKING}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-[calc(1rem+env(safe-area-inset-bottom))] right-4 z-20 inline-flex min-h-12 items-center rounded-full bg-[#2F7BFF] px-5 text-sm font-semibold text-white shadow-lg shadow-black/40 md:hidden"
    >
      Book on WhatsApp
    </a>
  );
}
