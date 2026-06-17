"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { navigation, site } from "@/data/site";
import { services } from "@/data/services";
import Container from "./Container";

const dropdownData = {
  services: {
    title: "Hizmetlerimiz",
    description:
      "İnşaat ve taahhütten proje geliştirmeye, kat karşılığından anahtar teslime uçtan uca çözümler.",
    parentHref: "/hizmetler",
    items: services.map((s) => ({
      label: s.title,
      short: s.short,
      href: `/hizmetler/${s.slug}`,
    })),
  },
};

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const closeTimer = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
    setMobileExpanded(null);
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    }
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpenDropdown(null);
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const handleEnter = (key) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenDropdown(key);
  };
  const handleLeave = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 160);
  };

  const headerSolid = scrolled || mobileOpen || openDropdown;
  const onDark = !headerSolid;

  // Conditional text color sets
  const wordmarkMain   = onDark ? "text-white"     : "text-ink";
  const wordmarkSub    = onDark ? "text-white/60"  : "text-ink-400";
  const navInactive    = onDark ? "text-white/75 hover:text-white" : "text-ink-500 hover:text-ink";
  const navActive      = onDark ? "text-white"     : "text-ink";
  const phoneCls       = onDark ? "text-white/80 hover:text-white" : "text-ink-500 hover:text-ink";
  const burgerLine     = onDark ? "bg-white"       : "bg-ink";
  const ctaBtnCls      = onDark
    ? "inline-flex items-center justify-center gap-2 px-5 py-3 text-[11px] tracking-widest2 uppercase font-semibold bg-white text-ink hover:bg-gold transition-colors duration-300"
    : "inline-flex items-center justify-center gap-2 px-5 py-3 text-[11px] tracking-widest2 uppercase font-semibold bg-ink-900 text-white hover:bg-gold hover:text-ink transition-colors duration-300";

  return (
    <header
      onMouseLeave={handleLeave}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-smooth
        ${headerSolid
          ? "bg-white/95 backdrop-blur-md border-b border-ink-100 shadow-sm"
          : "bg-transparent border-b border-transparent"}`}
    >
      <Container className="flex items-center justify-between h-[72px] md:h-[88px]">
        <Link href="/" className="relative flex items-center gap-3 z-10 group" aria-label={site.name}>
          <div className="relative h-9 w-9 md:h-10 md:w-10">
            <Image
              src="/assets/logo/maxvaro-icon.png"
              alt={`${site.name} logo`}
              fill
              priority
              sizes="40px"
              className="object-contain"
            />
          </div>
          <div className="hidden sm:flex flex-col leading-none">
            <span className={`font-display text-[17px] font-semibold tracking-wide transition-colors duration-300 ${wordmarkMain}`}>MAXVARO</span>
            <span className={`text-[10px] tracking-widest2 mt-1 transition-colors duration-300 ${wordmarkSub}`}>GROUP</span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-9">
          {navigation.map((item) => {
            const active = isActive(item.href);
            const hasDropdown = item.dropdown && dropdownData[item.dropdown];

            if (hasDropdown) {
              const isOpen = openDropdown === item.dropdown;
              return (
                <div
                  key={item.href}
                  className="relative h-[88px] flex items-center"
                  onMouseEnter={() => handleEnter(item.dropdown)}
                >
                  <Link
                    href={item.href}
                    className={`relative flex items-center gap-1.5 text-[13px] font-medium tracking-wide transition-colors duration-300
                      ${active ? navActive : navInactive}`}
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                  >
                    {item.label}
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`h-3 w-3 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                    <span
                      className={`absolute -bottom-1 left-0 right-0 mx-auto h-px bg-gold transition-all duration-500 ease-smooth
                        ${active ? "w-6 opacity-100" : "w-0 opacity-0"}`}
                    />
                  </Link>
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                onMouseEnter={() => handleEnter(null)}
                className={`relative text-[13px] font-medium tracking-wide transition-colors duration-300
                  ${active ? navActive : navInactive}`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 right-0 mx-auto h-px bg-gold transition-all duration-500 ease-smooth
                    ${active ? "w-6 opacity-100" : "w-0 opacity-0"}`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href={`tel:${site.phoneRaw}`}
            className={`text-[13px] font-semibold tracking-wide transition-colors duration-300 ${phoneCls}`}
          >
            {site.phone}
          </a>
          <Link href="/iletisim" className={ctaBtnCls}>
            İletişim
          </Link>
        </div>

        {/* Mobile burger */}
        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Menüyü kapat" : "Menüyü aç"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          className="lg:hidden relative z-50 -mr-2 h-12 w-12 grid place-items-center touch-manipulation"
        >
          <span className="sr-only">Menü</span>
          <div className="relative h-4 w-6">
            <span className={`absolute left-0 right-0 h-[1.5px] transition-all duration-300 ${burgerLine} ${mobileOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"}`} />
            <span className={`absolute left-0 right-0 h-[1.5px] transition-all duration-300 ${burgerLine} ${mobileOpen ? "opacity-0" : "top-1/2 -translate-y-1/2"}`} />
            <span className={`absolute left-0 right-0 h-[1.5px] transition-all duration-300 ${burgerLine} ${mobileOpen ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0"}`} />
          </div>
        </button>
      </Container>

      {/* Desktop dropdown panel */}
      <div
        className={`hidden lg:block absolute top-full left-0 right-0 overflow-hidden transition-all duration-500 ease-smooth
          ${openDropdown ? "opacity-100 visible max-h-[640px]" : "opacity-0 invisible max-h-0"}`}
        onMouseEnter={() => openDropdown && handleEnter(openDropdown)}
      >
        {openDropdown && dropdownData[openDropdown] && (
          <div className="bg-white border-t border-ink-100 shadow-cardHover">
            <Container className="py-10 lg:py-12">
              <div className="grid grid-cols-12 gap-10">
                <div className="col-span-4">
                  <div className="eyebrow text-gold-dark mb-4 flex items-center gap-3">
                    <span className="h-px w-8 bg-current opacity-60" />
                    {dropdownData[openDropdown].title}
                  </div>
                  <h3 className="font-display text-2xl text-ink leading-snug">
                    Uçtan uca inşaat ve proje geliştirme çözümleri.
                  </h3>
                  <p className="mt-4 text-sm text-ink-500 leading-relaxed">
                    {dropdownData[openDropdown].description}
                  </p>
                  <Link
                    href={dropdownData[openDropdown].parentHref}
                    className="link-underline mt-6 inline-flex text-[12px] tracking-widest2 uppercase font-semibold text-ink"
                  >
                    Tüm Hizmetleri Gör →
                  </Link>
                </div>

                <div className="col-span-8">
                  <ul className="grid grid-cols-2 gap-px bg-ink-100 border border-ink-100">
                    {dropdownData[openDropdown].items.map((sub) => {
                      const subActive = pathname === sub.href;
                      return (
                        <li key={sub.href} className="bg-white">
                          <Link
                            href={sub.href}
                            className={`group flex items-start gap-4 p-5 transition-colors duration-300 h-full
                              ${subActive ? "bg-ink-50" : "hover:bg-ink-50"}`}
                          >
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-3">
                                <span className={`font-display text-[15px] leading-snug transition-colors ${subActive ? "text-gold-dark" : "text-ink group-hover:text-gold-dark"}`}>
                                  {sub.label}
                                </span>
                              </div>
                              <p className="mt-1.5 text-xs text-ink-500 leading-relaxed line-clamp-2">
                                {sub.short}
                              </p>
                            </div>
                            <span className="mt-1 text-ink-300 group-hover:text-gold-dark transition-colors">
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 transition-transform group-hover:translate-x-0.5">
                                <line x1="5" y1="12" x2="19" y2="12" />
                                <polyline points="12 5 19 12 12 19" />
                              </svg>
                            </span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </Container>
          </div>
        )}
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-hidden={!mobileOpen}
        className={`lg:hidden fixed left-0 right-0 bottom-0 top-[72px] bg-white transition-all duration-400 ease-smooth
          ${mobileOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-2 pointer-events-none"}`}
      >
        <div className="h-full overflow-y-auto overscroll-contain">
          <Container className="py-8 pb-24">
            <nav className="flex flex-col">
              {navigation.map((item, i) => {
                const active = isActive(item.href);
                const hasDropdown = item.dropdown && dropdownData[item.dropdown];
                const expanded = mobileExpanded === item.dropdown;

                return (
                  <div
                    key={item.href}
                    style={{ transitionDelay: mobileOpen ? `${80 + i * 50}ms` : "0ms" }}
                    className={`border-b border-ink-100 transition-all duration-500
                      ${mobileOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-3"}`}
                  >
                    {hasDropdown ? (
                      <>
                        <div className="flex items-stretch">
                          <Link
                            href={item.href}
                            className={`flex-1 py-5 ${active ? "text-ink" : "text-ink-700"}`}
                          >
                            <span className="font-display text-2xl">{item.label}</span>
                          </Link>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              setMobileExpanded(expanded ? null : item.dropdown);
                            }}
                            aria-label={expanded ? "Alt menüyü kapat" : "Alt menüyü aç"}
                            aria-expanded={expanded}
                            className="px-4 grid place-items-center text-ink-500 touch-manipulation"
                          >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={`h-5 w-5 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}>
                              <polyline points="6 9 12 15 18 9" />
                            </svg>
                          </button>
                        </div>
                        <div className={`overflow-hidden transition-all duration-500 ease-smooth ${expanded ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"}`}>
                          <ul className="pb-6 pl-1 space-y-1">
                            {dropdownData[item.dropdown].items.map((sub) => {
                              const subActive = pathname === sub.href;
                              return (
                                <li key={sub.href}>
                                  <Link
                                    href={sub.href}
                                    className={`flex items-center justify-between gap-3 py-3 pl-4 border-l-2 transition-colors
                                      ${subActive ? "border-gold text-ink" : "border-ink-100 text-ink-600 hover:text-ink hover:border-ink-400"}`}
                                  >
                                    <span className="text-[15px]">{sub.label}</span>
                                    <span className="text-ink-300">
                                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                                        <polyline points="9 18 15 12 9 6" />
                                      </svg>
                                    </span>
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className={`group flex items-center justify-between py-5 transition-colors duration-300
                          ${active ? "text-ink" : "text-ink-700"}`}
                      >
                        <span className="font-display text-2xl">{item.label}</span>
                        <span className={`transition-all duration-300 ${active ? "text-gold opacity-100" : "text-ink-300 group-hover:text-gold group-hover:opacity-100"}`}>
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <polyline points="12 5 19 12 12 19" />
                          </svg>
                        </span>
                      </Link>
                    )}
                  </div>
                );
              })}
            </nav>

            <div className="mt-10 space-y-5">
              <a href={`tel:${site.phoneRaw}`} className="block">
                <div className="eyebrow text-gold-dark mb-1">Telefon</div>
                <div className="text-lg font-medium text-ink">{site.phone}</div>
              </a>
              <a href={`mailto:${site.email}`} className="block">
                <div className="eyebrow text-gold-dark mb-1">E-posta</div>
                <div className="text-lg font-medium text-ink break-all">{site.email}</div>
              </a>
              <div className="pt-2">
                <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-gold w-full">
                  WhatsApp ile İletişim
                </a>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </header>
  );
}
