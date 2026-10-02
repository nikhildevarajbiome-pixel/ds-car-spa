"use client";
import Image from "next/image";
import { useState } from "react";

type Props = { src: string; alt: string; priority?: boolean; sizes?: string };

// Reusable photo slot: shows the real photo, or a branded panel if the file is missing.
export default function ServiceImage({ src, alt, priority, sizes = "(min-width:1280px) 33vw, (min-width:768px) 50vw, 100vw" }: Props) {
  const [failed, setFailed] = useState(false);
  if (failed)
    return (
      <div role="img" aria-label={alt} className="absolute inset-0 grid place-items-center bg-gradient-to-br from-[#16315f] to-[#07101F] p-6 text-center text-sm text-[#8E9AAD]">
        Photo coming soon
      </div>
    );
  return <Image src={src} alt={alt} fill priority={priority} sizes={sizes} className="object-cover" onError={() => setFailed(true)} />;
}
