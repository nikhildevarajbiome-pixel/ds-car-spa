import { GENERIC_BOOKING } from "@/lib/whatsapp";

export default function WhatsAppFloat() {
  return (
    <a
      href={GENERIC_BOOKING}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Book on WhatsApp"
      className="fixed bottom-[calc(5rem+env(safe-area-inset-bottom))] right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-transform duration-200 hover:scale-105 md:hidden"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="currentColor"
        className="h-8 w-8"
        aria-hidden="true"
      >
        <path d="M16.04 2.67A13.26 13.26 0 0 0 4.73 22.84L2.67 30l7.34-1.93a13.27 13.27 0 1 0 6.03-25.4Zm0 24.1a10.8 10.8 0 0 1-5.5-1.5l-.4-.24-4.36 1.15 1.16-4.25-.26-.43a10.83 10.83 0 1 1 9.36 5.27Zm5.94-8.1c-.32-.16-1.9-.94-2.2-1.05-.3-.1-.51-.16-.73.16-.21.32-.83 1.05-1.02 1.27-.19.21-.38.24-.7.08-.32-.16-1.36-.5-2.59-1.59-.96-.85-1.61-1.9-1.8-2.22-.19-.32-.02-.49.14-.65.14-.14.32-.38.48-.56.16-.19.21-.32.32-.54.1-.21.05-.4-.03-.56-.08-.16-.73-1.76-1-2.41-.26-.63-.53-.55-.73-.56h-.62c-.22 0-.57.08-.86.4-.3.32-1.13 1.1-1.13 2.7s1.16 3.13 1.32 3.35c.16.21 2.28 3.48 5.52 4.88.77.33 1.37.53 1.84.68.77.24 1.47.21 2.02.13.62-.1 1.9-.78 2.17-1.54.27-.75.27-1.4.19-1.54-.08-.13-.3-.21-.62-.37Z" />
      </svg>
    </a>
  );
}