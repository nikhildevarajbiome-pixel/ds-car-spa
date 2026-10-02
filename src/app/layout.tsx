import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });

export const metadata: Metadata = {
  title: { default: "DS Car Spa | Car washing and detailing in Bengaluru", template: "%s | DS Car Spa" },
  description: "Car washing, polishing, waxing, interior cleaning and detailing at DS Car Spa, Kamakshipalya, Bengaluru. Book on WhatsApp.",
};
export const viewport: Viewport = { themeColor: "#07101F", viewportFit: "cover" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} font-sans`}>
        <Navbar />
        {children}
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
