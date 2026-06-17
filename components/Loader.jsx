"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Loader() {
  const [done, setDone] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setDone(true), 1400);
    const t2 = setTimeout(() => setHidden(true), 2100);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  if (hidden) return null;

  return (
    <div
      aria-hidden={done}
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-white transition-opacity duration-700 ease-smooth
        ${done ? "opacity-0 pointer-events-none" : "opacity-100"}`}
    >
      <div className="flex flex-col items-center gap-8">
        <div className="relative h-16 w-16 animate-fadeIn">
          <Image
            src="/assets/logo/maxvaro-icon.png"
            alt="MAXVARO GROUP"
            fill
            sizes="64px"
            priority
            className="object-contain"
          />
        </div>
        <div className="flex flex-col items-center gap-3">
          <div className="font-display text-sm tracking-widest2 uppercase text-ink">MAXVARO</div>
          <div className="h-px w-40 bg-ink-100 overflow-hidden">
            <div className="h-full bg-gold animate-loaderBar" />
          </div>
        </div>
      </div>
    </div>
  );
}
