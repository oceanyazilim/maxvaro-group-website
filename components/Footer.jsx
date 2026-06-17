import Link from "next/link";
import Image from "next/image";
import { navigation, site } from "@/data/site";
import { services } from "@/data/services";
import Container from "./Container";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink-900 text-white">
      <Container className="pt-20 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-10">
          {/* Brand */}
          <div className="lg:col-span-5">
            <Link href="/" className="flex items-center gap-3" aria-label={site.name}>
              <div className="relative h-11 w-11">
                <Image
                  src="/assets/logo/maxvaro-icon.png"
                  alt={site.name}
                  fill
                  sizes="44px"
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display text-xl tracking-wide">MAXVARO</span>
                <span className="text-[10px] tracking-widest2 text-white/50 mt-1">GROUP</span>
              </div>
            </Link>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-white/65">
              MAXVARO GROUP; modern yaşam alanları, konut projeleri ve kat karşılığı çözümlerle
              güvenilir yapılar inşa eder. Şeffaf süreç, kaliteli işçilik ve zamanında teslim.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-gold !py-3 !px-5 !text-[11px]">
                WhatsApp
              </a>
              <a href={`tel:${site.phoneRaw}`} className="btn btn-outline-light !py-3 !px-5 !text-[11px]">
                {site.phone}
              </a>
            </div>
          </div>

          {/* Menu */}
          <div className="lg:col-span-2">
            <div className="eyebrow text-gold mb-5">Menü</div>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-white/70 hover:text-gold transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <div className="eyebrow text-gold mb-5">Hizmetler</div>
            <ul className="space-y-3">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link href="/hizmetler" className="text-sm text-white/70 hover:text-gold transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <div className="eyebrow text-gold mb-5">İletişim</div>
            <ul className="space-y-4 text-sm">
              <li>
                <div className="text-white/50 text-[11px] uppercase tracking-widest mb-1">Adres</div>
                <a
                  href={site.address.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-gold transition-colors leading-relaxed"
                >
                  {site.address.line}
                </a>
              </li>
              <li>
                <div className="text-white/50 text-[11px] uppercase tracking-widest mb-1">Telefon</div>
                <a href={`tel:${site.phoneRaw}`} className="text-white/80 hover:text-gold transition-colors">
                  {site.phone}
                </a>
              </li>
              <li>
                <div className="text-white/50 text-[11px] uppercase tracking-widest mb-1">E-posta</div>
                <a href={`mailto:${site.email}`} className="text-white/80 hover:text-gold transition-colors">
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="hairline-dark mt-16" />

        <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-white/50">
            © {year} {site.legalName}. Tüm hakları saklıdır.
          </p>
          <p className="text-xs text-white/40">
            İnşaat · Taahhüt · Kat Karşılığı · Proje Geliştirme
          </p>
        </div>
      </Container>
    </footer>
  );
}
