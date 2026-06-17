import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import CTA from "@/components/CTA";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Kat Karşılığı Projeler",
  description:
    "MAXVARO GROUP ile şeffaf, hızlı ve güvenilir kat karşılığı proje süreçleri. Arsa sahipleri için profesyonel iş ortaklığı.",
};

const benefits = [
  {
    title: "Şeffaf Paylaşım Modeli",
    text:  "Arsa sahibinin haklarını koruyan, açık ve adil sözleşme yapısı ile uzun vadeli güven sağlıyoruz.",
  },
  {
    title: "Profesyonel Süreç Yönetimi",
    text:  "Ruhsat, projelendirme, üretim ve teslim süreçlerinin tek elden, uzman ekiple yönetimi.",
  },
  {
    title: "Pazar Değerini Artıran Mimari",
    text:  "Bölge analizine dayalı planlama, mimari kalite ve doğru konumlandırma ile maksimum değer üretimi.",
  },
  {
    title: "Hızlı ve Programlı Üretim",
    text:  "Saha disiplini, tedarik zinciri yönetimi ve doğru iş programıyla teslim süresine sadık kalırız.",
  },
  {
    title: "Kurumsal Güvence",
    text:  "Kurumsal yapımız, mali güçlü zemine dayalı taahhütlerimiz ve şeffaf raporlamamızla yanınızdayız.",
  },
  {
    title: "Teslim Sonrası Destek",
    text:  "Anahtar teslim sonrası garanti süreçleri, ortak alan yönetimi ve teknik destek ile sürecimiz devam eder.",
  },
];

const steps = [
  { no: "01", title: "Ön Görüşme",
    text: "Arsa sahibiyle bir araya gelir, beklentileri ve hedefleri detaylıca dinleriz." },
  { no: "02", title: "Arsa ve Lokasyon Analizi",
    text: "Bölgenin yapı potansiyeli, imar durumu ve pazar koşulları profesyonel olarak değerlendirilir." },
  { no: "03", title: "Fizibilite ve Proje Planlama",
    text: "Mimari ön tasarım, maliyet analizi ve yatırım modelleme ile şeffaf bir yol haritası çıkarılır." },
  { no: "04", title: "Sözleşme ve Resmi Süreçler",
    text: "Net ve adil sözleşme yapısı, ruhsat, izin ve resmi süreçlerin profesyonel yönetimi sağlanır." },
  { no: "05", title: "İnşaat ve Teslim",
    text: "Disiplinli saha yönetimi, kaliteli işçilik ve programlı teslim ile süreç tamamlanır." },
];

export default function KatKarsiligiPage() {
  return (
    <>
      <PageHeader
        eyebrow="Kat Karşılığı"
        title="Arsanızın değerini, kurumsal güvenceyle büyütün."
        subtitle="MAXVARO GROUP, kat karşılığı projelerde şeffaf paylaşım, profesyonel süreç yönetimi ve mimari kalite ile arsa sahibine maksimum değer üretir."
        image="/assets/images/projects/camlica-konutlari.jpg"
        breadcrumbs={[{ label: "Kat Karşılığı" }]}
      />

      {/* What is */}
      <section className="py-24 lg:py-32 bg-white">
        <Container>
          <div className="grid lg:grid-cols-12 gap-14 lg:gap-20 items-start">
            <div className="lg:col-span-7">
              <SectionTitle
                eyebrow="Kat Karşılığı Modeli"
                title="Kat karşılığı nedir? Neden MAXVARO GROUP?"
                description="Kat karşılığı; arsa sahibinin arsasını, yüklenici firmanın ise inşaat ve uzmanlığını ortaya koyduğu, taraflar arasında önceden anlaşılan paylaşım esasına dayanan profesyonel bir iş ortaklığı modelidir."
              />
              <Reveal delay={180}>
                <div className="mt-8 space-y-5 text-ink-600 leading-relaxed">
                  <p>
                    MAXVARO GROUP olarak; arsa sahibine açık, güvenilir ve değer üreten bir
                    süreç sunuyoruz. Profesyonel ekibimiz, mühendislik disiplinimiz ve mimari
                    kalitemizle, yatırımınızın en verimli şekilde değerlenmesini sağlıyoruz.
                  </p>
                  <p>
                    Her projemizde adil paylaşım, şeffaf raporlama ve programlı teslim
                    anlayışıyla; arsa sahiplerimizi sadece bir iş ortağı olarak değil, uzun
                    vadeli bir paydaş olarak görüyoruz.
                  </p>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <Reveal delay={120}>
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-ink-100">
                  <Image
                    src="/assets/images/projects/golet-apartman.jpg"
                    alt="Kat karşılığı proje"
                    fill
                    sizes="(min-width: 1024px) 480px, 100vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Steps */}
      <section className="relative py-24 lg:py-32 bg-ink-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <Image
            src="/assets/images/projects/construction-wide.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-ink-900 via-ink-900/90 to-ink-900" />
        <Container className="relative">
          <SectionTitle
            invert
            eyebrow="Süreç Adımları"
            title="Şeffaf, planlı ve programlı bir iş ortaklığı."
            description="Her aşamada arsa sahibimizle düzenli iletişimde kalır, süreci anlaşılır biçimde raporlarız."
            align="center"
            className="mx-auto"
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-px bg-white/10 border border-white/10">
            {steps.map((step, i) => (
              <Reveal key={step.no} delay={i * 100} className="bg-ink-900">
                <div className="relative p-8 h-full">
                  <div className="font-display text-gold text-sm tracking-widest2">{step.no}</div>
                  <h3 className="mt-5 font-display text-xl text-white leading-snug">{step.title}</h3>
                  <p className="mt-3 text-sm text-white/65 leading-relaxed">{step.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Benefits */}
      <section className="py-24 lg:py-32 bg-white">
        <Container>
          <SectionTitle
            eyebrow="Arsa Sahipleri İçin Avantajlar"
            title="Kurumsal bir iş ortağıyla çalışmanın farkı."
            description="Mali, hukuki ve teknik tüm süreçlerde profesyonel destek ve şeffaf bilgi paylaşımı sunuyoruz."
          />

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-ink-100 border border-ink-100">
            {benefits.map((b, i) => (
              <Reveal key={b.title} delay={(i % 3) * 80} className="bg-white">
                <div className="p-8 lg:p-9 h-full">
                  <div className="h-10 w-10 grid place-items-center border border-ink-200">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-gold-dark">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <h4 className="mt-6 font-display text-xl text-ink">{b.title}</h4>
                  <p className="mt-3 text-sm text-ink-500 leading-relaxed">{b.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ teaser / Trust line */}
      <section className="py-20 lg:py-24 bg-ink-50 border-y border-ink-100">
        <Container>
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8">
              <Reveal>
                <h3 className="font-display text-2xl lg:text-3xl text-ink leading-snug">
                  Arsanız için <span className="text-gold-dark">profesyonel bir değerlendirme</span> talep edin.
                </h3>
              </Reveal>
              <Reveal delay={140}>
                <p className="mt-4 text-ink-500 leading-relaxed max-w-2xl">
                  Ekibimiz sizinle iletişime geçer, arsanız için bölge analizi ve mimari ön
                  fizibilite çalışmalarını profesyonelce planlar.
                </p>
              </Reveal>
            </div>
            <Reveal delay={220} className="lg:col-span-4 lg:text-right">
              <div className="flex flex-wrap lg:justify-end gap-3">
                <Link href="/iletisim" className="btn btn-primary">Görüşme Talep Et</Link>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <CTA
        image="/assets/images/projects/camlica-konutlari.jpg"
        eyebrow="Arsa Sahipleri"
        title="Arsanızın gerçek değerini birlikte ortaya çıkaralım."
        description="Şeffaf süreç, profesyonel yönetim ve kurumsal güvence ile MAXVARO GROUP yanınızda."
      />
    </>
  );
}
