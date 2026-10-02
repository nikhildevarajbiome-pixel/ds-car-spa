"use client";
import { useRef, useState } from "react";
import type { ServiceImage as Img } from "@/types/service";
import ServiceImage from "./ServiceImage";

export default function ServiceCarousel({ images, name }: { images: Img[]; name: string }) {
  const [i, setI] = useState(0);
  const x0 = useRef<number | null>(null);
  const n = images.length;
  const go = (k: number) => setI((k + n) % n);

  return (
    <div
      className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#0A1426] touch-pan-y"
      role="region"
      aria-roledescription="carousel"
      aria-label={`${name} photos`}
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === "ArrowLeft") go(i - 1); if (e.key === "ArrowRight") go(i + 1); }}
      onTouchStart={(e) => { x0.current = e.touches[0].clientX; }}
      onTouchEnd={(e) => {
        if (x0.current === null) return;
        const d = e.changedTouches[0].clientX - x0.current;
        if (Math.abs(d) > 40) go(i + (d < 0 ? 1 : -1));
        x0.current = null;
      }}
    >
      <div className="flex h-full transition-transform duration-500 ease-out" style={{ transform: `translateX(-${i * 100}%)` }}>
        {images.map((im, k) => (
          <div key={im.src} className="relative h-full w-full shrink-0" aria-hidden={k !== i}>
            <ServiceImage src={im.src} alt={im.alt} priority={false} />
          </div>
        ))}
      </div>
      {n > 1 && (
        <>
          <button type="button" aria-label="Previous photo" onClick={() => go(i - 1)} className="absolute left-3 top-1/2 h-11 w-11 -translate-y-1/2 rounded-full border border-white/15 bg-[#07101F]/60 text-white backdrop-blur hover:bg-[#2F7BFF]">←</button>
          <button type="button" aria-label="Next photo" onClick={() => go(i + 1)} className="absolute right-3 top-1/2 h-11 w-11 -translate-y-1/2 rounded-full border border-white/15 bg-[#07101F]/60 text-white backdrop-blur hover:bg-[#2F7BFF]">→</button>
          <span className="absolute right-3 top-3 rounded-full bg-[#07101F]/70 px-3 py-1 text-xs text-white">{i + 1} / {n}</span>
          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1">
            {images.map((_, k) => (
              <button key={k} type="button" aria-label={`Photo ${k + 1}`} aria-current={k === i} onClick={() => setI(k)} className="grid h-7 w-7 place-items-center">
                <span className={`h-1 rounded-full transition-all ${k === i ? "w-6 bg-[#2F7BFF]" : "w-4 bg-white/40"}`} />
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
