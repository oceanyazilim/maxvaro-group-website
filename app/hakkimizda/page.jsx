import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import CTA from "@/components/CTA";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Hakkımızda",
  description:
    "MAXVARO GROUP; inşaat ve proje geliştirme alanında güvenilir, estetik ve sürdürülebilir yapılar üretmeyi hedefleyen kurumsal bir markadır.",
};

const values = [
  { title: "Güven",       text: "Her aşamada şeffaf süreçler ve sözüne sadık iş ortaklığı." },
  { title: "Kalite",      text: "Doğru malzeme seçimi, denetimli üretim ve titiz işçilik." },
  { title: "Şeffaflık",   text: "Net sözleşme, anlaşılır raporlama ve açık iletişim." },
  { title: "Disiplin",    text: "Programlı saha yönetimi ve sözüne sadık teslim." },
  { title: "Estetik",     text: "Modern mimari anlayışı ve fonksiyonel çözüm üretimi." },
  { title: "Sürdürülebilirlik", text: "Çevreye duyarlı, enerji verimli ve uzun ömürlü yapılar." },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Hakkımızda"
        title="Güvenle yükselen, değer üreten bir marka."
        subtitle="MAXVARO GROUP; mühendislik disiplinini, mimari kaliteyi ve kurumsal şeffaflığı birleştirerek geleceğin yapılarını bugünden inşa eder."
        image="/assets/images/projects/architecture-detail.jpg"
        breadcrumbs={[{ label: "Hakkımızda" }]}
      />

      {/* Story */}
      <section className="py-24 lg:py-32 bg-white">
        <Container>
          <div className="grid lg:grid-cols-12 gap-14 lg:gap-20 items-start">
            <div className="lg:col-span-6">
              <SectionTitle
                eyebrow="Marka Hikayesi"
                title="İnşa ettiğimiz her yapı, üstlendiğimiz uzun vadeli bir taahhüttür."
                description="MAXVARO GROUP, inşaat ve proje geliştirme alanında güvenilir, estetik ve sürdürülebilir yapılar üretmeyi hedefleyen kurumsal bir markadır. Her projede doğru planlama, kaliteli malzeme, güçlü ekip yönetimi ve modern mimari anlayışını bir araya getirir."
              />
              <Reveal delay={200}>
                <div className="mt-8 space-y-5 text-ink-600 leading-relaxed">
                  <p>
                    İstanbul merkezli faaliyetlerimizle; konut, ticari yapı, kat karşılığı ve
                    proje geliştirme süreçlerinde hem arsa sahiplerine hem de son kullanıcılara
                    güven veren bir iş ortağı olmayı önemsiyoruz.
                  </p>
                  <p>
                    Tecrübeli mühendis ve mimar kadromuz, güçlü taşeron ağımız ve disiplinli
                    saha yönetimi anlayışımızla; ortaya koyduğumuz her yapıyı uzun vadeli bir
                    değer yatırımı olarak konumlandırıyoruz.
                  </p>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-6">
              <Reveal>
                <div className="relative aspect-[5/6] w-full overflow-hidden bg-ink-100">
                  <Image
                    src="/assets/images/projects/construction-wide.jpg"
                    alt="MAXVARO GROUP iş tecrübesi"
                    fill
                    sizes="(min-width: 1024px) 600px, 100vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
              <Reveal delay={200}>
                <div className="relative mt-6 lg:-mt-24 lg:ml-auto lg:w-2/3 aspect-square overflow-hidden bg-ink-100 border-[8px] border-white shadow-card">
                  <Image
                    src="/assets/images/projects/interior-project.jpg"
                    alt="İç mekân uygulamalar"
                    fill
                    sizes="(min-width: 1024px) 400px, 100vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Mission / Vision */}
      <section className="py-24 lg:py-32 bg-ink-50 border-y border-ink-100">
        <Container>
          <div className="grid lg:grid-cols-2 gap-px bg-ink-100 border border-ink-100">
            <Reveal className="bg-white">
              <div className="p-10 lg:p-14 h-full">
                <div className="eyebrow text-gold-dark">Misyonumuz</div>
                <h3 className="mt-5 font-display text-2xl lg:text-3xl text-ink leading-snug">
                  Modern, güvenli ve sürdürülebilir yapılar inşa etmek.
                </h3>
                <p className="mt-6 text-ink-500 leading-relaxed">
                  Konut, ticari ve kat karşılığı projelerde; doğru planlama, kaliteli malzeme
                  ve titiz uygulama anlayışı ile insan odaklı, uzun ömürlü yapılar üretmek.
                  Her projede paydaşlarımıza güven veren kurumsal bir iş ortağı olmak.
                </p>
              </div>
            </Reveal>

            <Reveal delay={120} className="bg-white">
              <div className="p-10 lg:p-14 h-full">
                <div className="eyebrow text-gold-dark">Vizyonumuz</div>
                <h3 className="mt-5 font-display text-2xl lg:text-3xl text-ink leading-snug">
                  Türkiye'nin güvenilir markaları arasında yer almak.
                </h3>
                <p className="mt-6 text-ink-500 leading-relaxed">
                  Mimari kalitemiz, kurumsal disiplinimiz ve şeffaf iş yapma kültürümüzle;
                  inşaat ve proje geliştirme alanında Türkiye'nin en güvenilir markaları
                  arasında yer almak ve uluslararası standartlarda projeler hayata geçirmek.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="py-24 lg:py-32 bg-white">
        <Container>
          <SectionTitle
            eyebrow="Değerlerimiz"
            title="İnşaa ettiğimiz her yapı, kurduğumuz değerlerin bir yansımasıdır."
            description="Her iş ortağımız ve her son kullanıcımız için, bu değerler iş yapma biçimimizin temelini oluşturur."
          />

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-ink-100 border border-ink-100">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 70} className="bg-white">
                <div className="p-8 lg:p-9 h-full">
                  <div className="flex items-center gap-4">
                    <span className="font-display text-gold-dark text-sm tracking-widest2">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="h-px w-10 bg-ink-200" />
                  </div>
                  <h4 className="mt-5 font-display text-xl text-ink">{v.title}</h4>
                  <p className="mt-3 text-sm text-ink-500 leading-relaxed">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTA
        eyebrow="Birlikte Çalışalım"
        title="Projenizi profesyonel bir ekiple hayata geçirin."
        description="MAXVARO GROUP; yatırımcı, arsa sahibi ve son kullanıcılar için güvenilir, kurumsal ve premium çözümler sunar."
      />
    </>
  );
}
