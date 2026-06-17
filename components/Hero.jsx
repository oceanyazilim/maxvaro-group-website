"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { heroSlides } from "@/data/site";
import Container from "./Container";

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % heroSlides.length);
    }, 6500);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <section
      className="relative h-[100vh] min-h-[640px] max-h-[940px] w-full overflow-hidden bg-ink-900 -mt-[72px] md:-mt-[88px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slides */}
      {heroSlides.map((slide, i) => (
        <div
          key={slide.title}
          className={`absolute inset-0 transition-opacity duration-[1400ms] ease-smooth
            ${i === index ? "opacity-100" : "opacity-0"}`}
          aria-hidden={i !== index}
        >
          {/* Desktop image */}
          <div className="hidden md:block absolute inset-0">
            <Image
              src={slide.desktop}
              alt={slide.title}
              fill
              priority={i === 0}
              sizes="100vw"
              className={`object-cover ${i === index ? "animate-kenburns" : ""}`}
              quality={85}
            />
          </div>
          {/* Mobile image */}
          <div className="md:hidden absolute inset-0">
            <Image
              src={slide.mobile}
              alt={slide.title}
              fill
              priority={i === 0}
              sizes="100vw"
              className={`object-cover ${i === index ? "animate-kenburns" : ""}`}
              quality={85}
            />
          </div>
          {/* Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-ink-900/85 via-ink-900/40 to-ink-900/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-900/55 via-ink-900/15 to-transparent" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-end pb-24 md:pb-32 pt-32">
        <Container>
          <div className="max-w-3xl">
            {heroSlides.map((slide, i) => (
              <div
                key={slide.title + "_content"}
                className={`transition-all duration-[1200ms] ease-smooth ${
                  i === index ? "opacity-100 translate-y-0 relative" : "opacity-0 translate-y-6 absolute pointer-events-none"
                }`}
              >
                <div className="eyebrow text-gold flex items-center gap-3 mb-5">
                  <span className="h-px w-10 bg-gold" />
                  {slide.eyebrow}
                </div>
                <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[72px] leading-[1.05] tracking-tight text-white">
                  {slide.title}
                </h1>
                <p className="mt-6 max-w-2xl text-base md:text-lg text-white/80 leading-relaxed">
                  {slide.subtitle}
                </p>
                <div className="mt-9 flex flex-col sm:flex-row gap-3">
                  <Link href="/projeler" className="btn btn-gold">
                    Projeleri İncele
                  </Link>
                  <Link href="/iletisim" className="btn btn-outline-light">
                    İletişime Geç
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* Bottom slider indicators */}
      <Container className="absolute inset-x-0 bottom-8 z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Slide ${i + 1}`}
                className="group relative h-1 w-12 sm:w-16 bg-white/25 overflow-hidden"
              >
                <span
                  className={`block h-full bg-gold transition-all duration-700 ${
                    i === index ? "w-full" : "w-0 group-hover:w-1/3"
                  }`}
                />
              </button>
            ))}
          </div>
          <div className="hidden sm:flex items-center gap-3 text-white/60 text-xs tracking-widest">
            <span className="text-white">{String(index + 1).padStart(2, "0")}</span>
            <span className="h-px w-8 bg-white/40" />
            <span>{String(heroSlides.length).padStart(2, "0")}</span>
          </div>
        </div>
      </Container>

      {/* Scroll cue */}
      <div className="hidden lg:block absolute bottom-8 right-12 z-10 text-white/70">
        <div className="flex flex-col items-center gap-3">
          <span className="text-[10px] tracking-widest2 uppercase rotate-90 origin-center mt-6">Scroll</span>
          <span className="block h-12 w-px bg-white/40" />
        </div>
      </div>
    </section>
  );
}
