import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import CTA from "@/components/CTA";
import Reveal from "@/components/Reveal";
import { services, getServiceBySlug, getRelatedServices } from "@/data/services";
import { site } from "@/data/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.short,
    openGraph: {
      title: `${service.title} | ${site.name}`,
      description: service.short,
      images: service.heroImage ? [service.heroImage] : undefined,
    },
  };
}

const featureIcons = {
  check: (
    <path d="M20 6L9 17l-5-5" />
  ),
};

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const related = getRelatedServices(service.slug, service.related || []);
  const otherServices = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      <PageHeader
        eyebrow="Hizmet"
        title={service.title}
        subtitle={service.short}
        image={service.heroImage || service.image}
        breadcrumbs={[
          { label: "Hizmetler", href: "/hizmetler" },
          { label: service.title },
        ]}
      />

      {/* Intro */}
      <section className="py-24 lg:py-32 bg-white">
        <Container>
          <div className="grid lg:grid-cols-12 gap-14 lg:gap-20 items-start">
            <div className="lg:col-span-7">
              <SectionTitle
                eyebrow="Genel Bakış"
                title={service.title}
                description={service.intro}
              />
              <Reveal delay={200}>
                <div className="mt-8 space-y-5 text-ink-600 leading-relaxed">
                  {(service.paragraphs || []).map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </Reveal>
              <Reveal delay={300}>
                <div className="mt-9 flex flex-wrap gap-3">
                  <Link href="/iletisim" className="btn btn-primary">Bilgi Talep Et</Link>
                  {service.cta && (
                    <Link href={service.cta.href} className="btn btn-outline">{service.cta.label}</Link>
                  )}
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <Reveal>
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-ink-100">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(min-width: 1024px) 480px, 100vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
              <Reveal delay={200}>
                <div className="mt-6 grid grid-cols-2 gap-px bg-ink-100 border border-ink-100">
                  <div className="bg-white p-6">
                    <div className="eyebrow text-gold-dark mb-2">Kapsam</div>
                    <div className="font-display text-lg text-ink leading-snug">Anahtar Teslim</div>
                  </div>
                  <div className="bg-white p-6">
                    <div className="eyebrow text-gold-dark mb-2">Süreç</div>
                    <div className="font-display text-lg text-ink leading-snug">Kurumsal Yönetim</div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Features */}
      <section className="py-24 lg:py-32 bg-ink-50 border-y border-ink-100">
        <Container>
          <SectionTitle
            eyebrow="Hizmet Kapsamı"
            title="Bu hizmette neler sunuyoruz?"
            description="Profesyonel ekiplerimiz, sektördeki yılların deneyimi ve kurumsal süreçlerimizle her aşamada yanınızdayız."
          />

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-ink-100 border border-ink-100">
            {service.features.map((f, i) => (
              <Reveal key={f.title} delay={(i % 3) * 80} className="bg-white">
                <div className="p-8 lg:p-9 h-full">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 grid place-items-center border border-ink-200 text-gold-dark">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                        {featureIcons.check}
                      </svg>
                    </div>
                    <span className="font-display text-gold-dark text-sm tracking-widest2">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h4 className="mt-6 font-display text-xl text-ink leading-snug">{f.title}</h4>
                  <p className="mt-3 text-sm text-ink-500 leading-relaxed">{f.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="py-24 lg:py-32 bg-white">
        <Container>
          <SectionTitle
            eyebrow="Çalışma Süreci"
            title="Her aşamada şeffaf, planlı ve programlı bir iş ortaklığı."
            description="Hizmetimizi her projede aynı kurumsal disiplinle uyguluyor, paydaşlarımızla düzenli iletişim kuruyoruz."
            align="center"
            className="mx-auto"
          />

          <div
            className={`mt-16 grid grid-cols-1 md:grid-cols-2 gap-px bg-ink-100 border border-ink-100 ${
              {
                3: "lg:grid-cols-3",
                4: "lg:grid-cols-4",
                5: "lg:grid-cols-5",
              }[service.process.length] || "lg:grid-cols-4"
            }`}
          >
            {service.process.map((step, i) => (
              <Reveal key={step.title} delay={i * 80} className="bg-white">
                <div className="p-8 h-full">
                  <div className="font-display text-gold-dark text-sm tracking-widest2">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-5 font-display text-xl text-ink leading-snug">{step.title}</h3>
                  <p className="mt-3 text-sm text-ink-500 leading-relaxed">{step.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Gallery */}
      {service.gallery && service.gallery.length > 0 && (
        <section className="py-24 lg:py-32 bg-ink-50 border-y border-ink-100">
          <Container>
            <SectionTitle
              eyebrow="Görsel Atmosfer"
              title="Hizmetimizden kareler."
              description="Sahadan ve uygulamalarımızdan seçili kareler."
            />

            <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {service.gallery.map((img, i) => (
                <Reveal key={img} delay={i * 100}>
                  <div className={`media-zoom relative w-full overflow-hidden bg-ink-100 ${i === 0 ? "aspect-[4/5]" : "aspect-[4/3] lg:mt-12"}`}>
                    <Image
                      src={img}
                      alt={`${service.title} ${i + 1}`}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Why MAXVARO */}
      <section className="relative py-24 lg:py-32 bg-ink-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/assets/images/projects/service-wide.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-ink-900 via-ink-900/90 to-ink-900/60" />
        <Container className="relative">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6">
              <SectionTitle
                invert
                eyebrow="Neden MAXVARO?"
                title="Bu hizmette güvenle çalışabileceğiniz bir iş ortağı."
                description="Kurumsal disiplin, mimari kalite ve uzun vadeli iş ortaklığı kültürümüzle yanınızdayız."
              />
            </div>
            <Reveal delay={200} className="lg:col-span-6">
              <ul className="space-y-5 lg:pl-8 lg:border-l lg:border-white/15">
                {[
                  "Şeffaf süreç yönetimi ve düzenli raporlama",
                  "Tek elden koordinasyon, tek muhatap",
                  "Programlı iş takibi ve sözüne sadık teslim",
                  "Teslim sonrası garanti ve teknik destek",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-4 text-white/85">
                    <span className="mt-2 inline-block h-1.5 w-1.5 bg-gold rounded-full" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Related services */}
      <section className="py-24 lg:py-32 bg-white">
        <Container>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
            <SectionTitle
              eyebrow="İlgili Hizmetler"
              title="Birlikte daha güçlü çalışan çözümler."
              description="Bu hizmetle birlikte sıkça talep edilen tamamlayıcı hizmetlerimiz."
            />
            <Reveal delay={200}>
              <Link href="/hizmetler" className="btn btn-outline shrink-0">Tüm Hizmetler</Link>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(related.length > 0 ? related : otherServices.slice(0, 3)).map((r, i) => (
              <Reveal key={r.slug} delay={i * 80}>
                <Link href={`/hizmetler/${r.slug}`} className="group block">
                  <div className="media-zoom relative aspect-[4/5] w-full overflow-hidden bg-ink-100">
                    <Image
                      src={r.image}
                      alt={r.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, 100vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-900/85 via-ink-900/15 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <div className="text-gold text-[10px] tracking-widest2 uppercase mb-2">Hizmet</div>
                      <h3 className="font-display text-2xl text-white leading-tight">{r.title}</h3>
                      <div className="mt-5 flex items-center gap-3 text-white text-[12px] tracking-widest2 uppercase font-semibold opacity-90">
                        <span className="h-px w-6 bg-gold transition-all duration-500 group-hover:w-12" />
                        Detayları Gör
                      </div>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTA
        eyebrow="İletişim"
        title={`${service.title} için ekibimizle konuşalım.`}
        description="Detaylı bilgi, fizibilite çalışması ve özel talepleriniz için bizimle iletişime geçin."
        image={service.heroImage || service.image}
      />
    </>
  );
}
