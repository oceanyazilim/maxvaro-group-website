import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import Reveal from "./Reveal";

export default function PageHeader({
  eyebrow,
  title,
  subtitle,
  image = "/assets/images/projects/hero-detail.jpg",
  breadcrumbs = [],
}) {
  return (
    <section className="relative bg-ink-900 text-white overflow-hidden -mt-[72px] md:-mt-[88px]">
      <div className="absolute inset-0">
        <Image
          src={image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
          quality={80}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-900/85 via-ink-900/55 to-ink-900/80" />
      </div>
      <Container className="relative pt-40 pb-20 md:pt-48 md:pb-28">
        {breadcrumbs.length > 0 && (
          <Reveal>
            <nav className="text-[11px] tracking-widest2 uppercase text-white/60 mb-6 flex flex-wrap items-center gap-2">
              <Link href="/" className="hover:text-gold transition-colors">Anasayfa</Link>
              {breadcrumbs.map((b, i) => (
                <span key={i} className="flex items-center gap-2">
                  <span className="text-white/30">/</span>
                  {b.href ? (
                    <Link href={b.href} className="hover:text-gold transition-colors">{b.label}</Link>
                  ) : (
                    <span className="text-white">{b.label}</span>
                  )}
                </span>
              ))}
            </nav>
          </Reveal>
        )}
        {eyebrow && (
          <Reveal delay={60}>
            <div className="eyebrow text-gold flex items-center gap-3 mb-5">
              <span className="h-px w-10 bg-gold" />
              {eyebrow}
            </div>
          </Reveal>
        )}
        <Reveal delay={120}>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight max-w-3xl">
            {title}
          </h1>
        </Reveal>
        {subtitle && (
          <Reveal delay={200}>
            <p className="mt-6 max-w-2xl text-base md:text-lg text-white/75 leading-relaxed">
              {subtitle}
            </p>
          </Reveal>
        )}
      </Container>
    </section>
  );
}
