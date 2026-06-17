import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";
import Container from "./Container";
import Reveal from "./Reveal";

export default function CTA({
  eyebrow = "İletişim",
  title = "Birlikte değer üreten projeler geliştirelim.",
  description = "Arsa değerlendirmesi, kat karşılığı işbirlikleri ve taahhüt projeleriniz için ekibimiz sizinle iletişime geçmeye hazır.",
  primaryLabel = "İletişime Geç",
  primaryHref = "/iletisim",
  secondaryLabel = "WhatsApp",
  secondaryHref = site.whatsapp,
  image = "/assets/images/projects/service-wide.jpg",
}) {
  return (
    <section className="relative overflow-hidden bg-ink-900 text-white">
      <div className="absolute inset-0">
        <Image
          src={image}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-900 via-ink-900/85 to-ink-900/60" />
      </div>
      <Container className="relative py-24 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <Reveal>
              <div className="eyebrow text-gold flex items-center gap-3 mb-5">
                <span className="h-px w-10 bg-gold" />
                {eyebrow}
              </div>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl leading-[1.08] tracking-tight">
                {title}
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-5 max-w-2xl text-white/70 leading-relaxed">
                {description}
              </p>
            </Reveal>
          </div>
          <Reveal delay={220} className="lg:col-span-4">
            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3 lg:items-end lg:justify-end">
              <Link href={primaryHref} className="btn btn-gold">
                {primaryLabel}
              </Link>
              <a
                href={secondaryHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-light"
              >
                {secondaryLabel}
              </a>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
