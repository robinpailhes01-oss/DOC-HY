"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  src: string;
  alt: string;
  caption: string;
};

export default function ScreenshotCard({ src, alt, caption }: Props) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="reveal shrink-0 w-[85vw] sm:w-auto snap-center flex flex-col">
      <div className="relative rounded-2xl overflow-hidden border border-gold/50 shadow-[0_8px_40px_rgba(201,168,76,0.12)] bg-neutral-100 aspect-[16/10]">
        {failed ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-gold/40">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <path d="M3 9h18M9 21V9" />
            </svg>
            <span className="text-xs tracking-wide">Screenshot à venir</span>
          </div>
        ) : (
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 640px) 85vw, 50vw"
            className="object-cover object-top"
            onError={() => setFailed(true)}
          />
        )}
      </div>
      <p className="mt-3 text-sm text-neutral-500 text-center leading-snug px-2">
        {caption}
      </p>
    </div>
  );
}
