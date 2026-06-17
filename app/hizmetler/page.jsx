import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCard";
import CTA from "@/components/CTA";
import Reveal from "@/components/Reveal";
import { services } from "@/data/services";

export const metadata = {
  title: "Hizmetlerimiz",
  description:
    "İnşaat ve taahhüt, konut projeleri, ticari yapılar, kat karşılığı, proje geliştirme, renovasyon ve anahtar teslim çözümler.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Hizmetlerimiz"
        title="İnşaattan proje geliştirmeye uçtan uca çözümler."
        subtitle="MAXVARO GROUP; konsept ve fizibiliteden anahtar teslim uygulamaya kadar tüm süreçleri kurumsal disiplinle yönetir."
        image="/assets/images/projects/service-hero.jpg"
        breadcrumbs={[{ label: "Hizmetler" }]}
      />

      {/* Services grid */}
      <section className="py-24 lg:py-32 bg-white">
        <Container>
          <SectionTitle
            eyebrow="Uzmanlık Alanlarımız"
            title="Sektörde fark yaratan hizmet portföyü."
            description="Konut, ticari yapı, kat karşılığı, proje geliştirme ve renovasyon başta olmak üzere geniş bir hizmet yelpazesi sunuyoruz."
          />

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={i * 60}>
                <ServiceCard service={{ ...service, idx: i }} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Detailed */}
      <section className="py-24 lg:py-32 bg-ink-50 border-y border-ink-100">
        <Container>
          <SectionTitle
            eyebrow="Çalışma Modeli"
            title="Her hizmette aynı kurumsal kalite."
            description="Hangi hizmet alanında çalışıyor olursak olalım; planlama, üretim ve teslim süreçlerimizde aynı titiz disiplin uygulanır."
          />

          <div className="mt-16 space-y-16">
            {services.slice(0, 4).map((service, i) => (
              <div key={service.slug} className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                <Reveal className={`lg:col-span-6 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="media-zoom relative aspect-[4/3] w-full overflow-hidden bg-ink-100">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(min-width: 1024px) 600px, 100vw"
                      className="object-cover"
                    />
                  </div>
                </Reveal>
                <Reveal delay={140} className={`lg:col-span-6 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="eyebrow text-gold-dark mb-3">
                    Hizmet · {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="font-display text-2xl lg:text-3xl text-ink leading-snug">
                    {service.title}
                  </h3>
                  <p className="mt-5 text-ink-500 leading-relaxed">{service.description}</p>
                  <div className="mt-7 flex flex-wrap gap-3">
                    <Link href={`/hizmetler/${service.slug}`} className="btn btn-primary !py-3 !px-5 !text-[11px]">
                      Detayları Gör
                    </Link>
                    <Link href="/iletisim" className="link-underline self-center text-[12px] tracking-widest2 uppercase font-semibold text-ink">
                      Bilgi Talep Et
                    </Link>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTA
        title="Projeniz için doğru hizmeti birlikte planlayalım."
        description="Hizmetlerimizle ilgili detaylı bilgi ve özel talepleriniz için ekibimizle iletişime geçin."
      />
    </>
  );
}
