import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import ProjectCard from "@/components/ProjectCard";
import ServiceCard from "@/components/ServiceCard";
import CTA from "@/components/CTA";
import Reveal from "@/components/Reveal";
import { featuredProjects } from "@/data/projects";
import { services } from "@/data/services";

export const metadata = {
  title: "İnşaat, Taahhüt ve Kat Karşılığı Projeler",
  description:
    "MAXVARO GROUP; İstanbul merkezli inşaat, taahhüt, konut projeleri ve kat karşılığı proje geliştirme alanlarında profesyonel çözümler sunar.",
};

const stats = [
  { number: "15+", label: "Yıllık Tecrübe" },
  { number: "40+", label: "Tamamlanan Proje" },
  { number: "100%", label: "Müşteri Odaklı" },
  { number: "24/7", label: "Süreç Takibi" },
];

const steps = [
  { no: "01", title: "Ön Görüşme",       text: "İhtiyacı dinler, hedefleri anlar ve doğru çözüm için temel parametreleri belirleriz." },
  { no: "02", title: "Analiz & Fizibilite", text: "Lokasyon, arsa potansiyeli ve maliyet analizleri ile gerçekçi bir yol haritası çıkarırız." },
  { no: "03", title: "Planlama & Tasarım",  text: "Mimari, statik ve mekanik tasarımı bütüncül koordinasyonla planlarız." },
  { no: "04", title: "Uygulama & Üretim",   text: "Disiplinli sahada yönetim, kaliteli işçilik ve şeffaf raporlama ile inşaya başlarız." },
  { no: "05", title: "Teslim & Sonrası",    text: "Anahtar teslim aşamasının ardından, garanti ve müşteri destek süreçleriyle yanınızdayız." },
];

const reasons = [
  { title: "Kurumsal Disiplin",      text: "Ekibimiz, kurumsal süreçler ve şeffaf raporlama ile her aşamayı titizlikle yönetir." },
  { title: "Mimari Kalite",          text: "Modern mimari anlayışı, fonksiyonellik ile estetiği uyum içinde buluşturur." },
  { title: "Zamanında Teslim",       text: "Programlı saha yönetimi ve doğru planlama ile teslim süresine sadık kalırız." },
  { title: "Uzun Vadeli Güven",      text: "İlişkilerimizi tek projeyle değil; uzun vadeli iş ortaklığı olarak konumlandırırız." },
  { title: "Yatırımcı Odaklı Yaklaşım", text: "Arsa sahipleri ve yatırımcılar için değer üreten model ve süreçler tasarlarız." },
  { title: "Sürdürülebilir Yapılar", text: "Enerji verimliliği ve dayanıklılığı esas alan malzeme ve sistem seçimleri." },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Brand intro */}
      <section className="py-24 lg:py-32 bg-white">
        <Container>
          <div className="grid lg:grid-cols-12 gap-14 lg:gap-20 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <Reveal>
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-ink-100">
                  <Image
                    src="/assets/images/home/feature-square.jpg"
                    alt="MAXVARO GROUP"
                    fill
                    sizes="(min-width: 1024px) 600px, 100vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
              <Reveal delay={180}>
                <div className="mt-6 grid grid-cols-2 gap-6">
                  <div className="border-l-2 border-gold pl-5">
                    <div className="font-display text-3xl text-ink">15+</div>
                    <div className="text-xs tracking-widest2 uppercase text-ink-400 mt-1">Yıllık Tecrübe</div>
                  </div>
                  <div className="border-l-2 border-gold pl-5">
                    <div className="font-display text-3xl text-ink">40+</div>
                    <div className="text-xs tracking-widest2 uppercase text-ink-400 mt-1">Tamamlanan Proje</div>
                  </div>
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-6 order-1 lg:order-2">
              <SectionTitle
                eyebrow="Hakkımızda"
                title="Güçlü mühendislik, kurumsal disiplin ve modern mimari."
                description="MAXVARO GROUP; inşaat, taahhüt, kat karşılığı ve proje geliştirme alanlarında, doğru planlama ve titiz uygulama ile değer üreten yapılar inşa eder. Her projeyi sadece bir yapı değil; uzun vadeli bir yatırım ve güven taahhüdü olarak ele alıyoruz."
              />
              <Reveal delay={240}>
                <div className="mt-9 flex flex-wrap gap-3">
                  <Link href="/hakkimizda" className="btn btn-primary">Hakkımızda Daha Fazla</Link>
                  <Link href="/projeler" className="btn btn-outline">Projeleri Gör</Link>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Services preview */}
      <section className="py-24 lg:py-32 bg-ink-50 border-y border-ink-100">
        <Container>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
            <SectionTitle
              eyebrow="Hizmetlerimiz"
              title="İnşaat ve taahhütte bütüncül çözümler."
              description="Konsept ve fizibiliteden anahtar teslim uygulamaya kadar tüm aşamalar tek bir uzman kadrodan."
            />
            <Reveal delay={200}>
              <Link href="/hizmetler" className="btn btn-outline shrink-0">Tüm Hizmetler</Link>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.slice(0, 4).map((service, i) => (
              <Reveal key={service.slug} delay={i * 80}>
                <ServiceCard service={{ ...service, idx: i }} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Featured projects */}
      <section className="py-24 lg:py-32 bg-white">
        <Container>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
            <SectionTitle
              eyebrow="Öne Çıkan Projeler"
              title="Değer üreten yapılar, güçlü referanslar."
              description="Konut, kat karşılığı ve ticari yapılarda hayata geçirdiğimiz seçili projelerimizden bir kesit."
            />
            <Reveal delay={200}>
              <Link href="/projeler" className="btn btn-outline shrink-0">Tüm Projeler</Link>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((p, i) => (
              <Reveal key={p.slug} delay={i * 90}>
                <ProjectCard project={p} priority={i === 0} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Kat Karşılığı call */}
      <section className="relative py-24 lg:py-32 bg-ink-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/images/projects/luxury-project.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-900 via-ink-900/85 to-ink-900/50" />
        </div>
        <Container className="relative">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <SectionTitle
                invert
                eyebrow="Kat Karşılığı Modeli"
                title="Arsanızın gerçek potansiyelini birlikte ortaya çıkaralım."
                description="MAXVARO GROUP, kat karşılığı projelerde arsa sahibine maksimum değer sağlayan şeffaf paylaşım, doğru planlama ve hızlı süreç sunar. Profesyonel yatırım dili, güçlü mühendislik ve kurumsal güvence ile yanınızdayız."
              />
              <Reveal delay={240}>
                <div className="mt-9 flex flex-wrap gap-3">
                  <Link href="/kat-karsiligi" className="btn btn-gold">Kat Karşılığı Süreci</Link>
                  <Link href="/iletisim" className="btn btn-outline-light">İletişime Geç</Link>
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-5">
              <Reveal delay={300}>
                <ul className="space-y-5 lg:pl-8 lg:border-l lg:border-white/15">
                  {[
                    "Şeffaf paylaşım modeli ve net sözleşme yapısı",
                    "Mimari, ruhsat ve teslim süreçlerinin uzman yönetimi",
                    "Bölge analizine dayalı doğru mimari konumlandırma",
                    "Hızlı, programlı ve denetimli üretim süreci",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-4 text-white/85">
                      <span className="mt-2 inline-block h-1.5 w-1.5 bg-gold rounded-full" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="py-24 lg:py-32 bg-white">
        <Container>
          <SectionTitle
            eyebrow="Süreç"
            title="Disiplinli planlama, şeffaf uygulama."
            description="Her projede aynı netlikle uyguladığımız beş aşamalı çalışma modeli."
            align="center"
            className="mx-auto"
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-px bg-ink-100 border border-ink-100">
            {steps.map((step, i) => (
              <Reveal key={step.no} delay={i * 80} className="bg-white">
                <div className="p-8 h-full">
                  <div className="font-display text-gold-dark text-sm tracking-widest2">{step.no}</div>
                  <h3 className="mt-5 font-display text-xl text-ink leading-snug">{step.title}</h3>
                  <p className="mt-3 text-sm text-ink-500 leading-relaxed">{step.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Why */}
      <section className="py-24 lg:py-32 bg-ink-50 border-y border-ink-100">
        <Container>
          <SectionTitle
            eyebrow="Neden MAXVARO?"
            title="Yatırımcının ve son kullanıcının güvenle seçtiği marka."
            description="Mimari kaliteden saha disiplinine, sözleşmeden teslim sonrası destek hizmetlerine kadar her aşamada kurumsal güvence sunuyoruz."
          />

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-ink-100 border border-ink-100">
            {reasons.map((r, i) => (
              <Reveal key={r.title} delay={i * 80} className="bg-white">
                <div className="p-8 h-full flex flex-col">
                  <div className="font-display text-xl text-ink">{r.title}</div>
                  <div className="hairline mt-5" />
                  <p className="mt-5 text-sm text-ink-500 leading-relaxed">{r.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-px bg-ink-100 border border-ink-100">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 80} className="bg-white">
                <div className="p-8 text-center">
                  <div className="font-display text-4xl lg:text-5xl text-ink">{s.number}</div>
                  <div className="mt-2 text-[11px] tracking-widest2 uppercase text-ink-400">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
