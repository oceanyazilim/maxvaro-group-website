import PageHeader from "@/components/PageHeader";
import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import ProjectCard from "@/components/ProjectCard";
import CTA from "@/components/CTA";
import Reveal from "@/components/Reveal";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Projeler",
  description:
    "MAXVARO GROUP tarafından geliştirilen konut, kat karşılığı ve ticari yapı projelerinden seçili referanslar.",
};

const filters = ["Tümü", "Konut Projesi", "Kat Karşılığı", "Ticari Yapı", "Renovasyon"];

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Projeler"
        title="Değer üreten yapılar, güçlü referanslar."
        subtitle="Konut, kat karşılığı ve ticari yapılarda hayata geçirdiğimiz seçili projelerimizden bir kesit."
        image="/assets/images/projects/luxury-project.jpg"
        breadcrumbs={[{ label: "Projeler" }]}
      />

      <section className="py-20 lg:py-28 bg-white">
        <Container>
          <Reveal>
            <div className="flex flex-wrap items-center gap-2 pb-10 border-b border-ink-100">
              {filters.map((f, i) => (
                <span
                  key={f}
                  className={`inline-flex items-center px-4 py-2 text-[12px] tracking-widest2 uppercase font-semibold transition-colors
                    ${i === 0 ? "bg-ink-900 text-white" : "bg-ink-50 text-ink-500 hover:bg-ink-900 hover:text-white"}`}
                >
                  {f}
                </span>
              ))}
            </div>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 80}>
                <ProjectCard project={p} priority={i < 3} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 lg:py-28 bg-ink-50 border-t border-ink-100">
        <Container>
          <SectionTitle
            eyebrow="Süreç"
            title="Her proje, planlı bir yatırımdır."
            description="Projelerimizi tasarım, üretim ve teslim olmak üzere üç ana aşamada şeffaf biçimde yönetiyor; tüm paydaşlarımızla düzenli iletişim kuruyoruz."
          />
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-px bg-ink-100 border border-ink-100">
            {[
              { title: "Tasarım & Planlama", text: "Konsept, mimari, statik ve mekanik tasarımın bütüncül koordinasyonu." },
              { title: "Üretim & Saha",      text: "Programlı saha yönetimi, denetim ve kaliteli işçilik." },
              { title: "Teslim & Destek",    text: "Anahtar teslim sonrası garanti ve müşteri desteği." },
            ].map((s, i) => (
              <Reveal key={s.title} delay={i * 80} className="bg-white">
                <div className="p-8 lg:p-10 h-full">
                  <div className="font-display text-gold-dark text-sm tracking-widest2">{String(i + 1).padStart(2, "0")}</div>
                  <div className="mt-5 font-display text-xl text-ink">{s.title}</div>
                  <p className="mt-3 text-sm text-ink-500 leading-relaxed">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTA
        eyebrow="Yatırım & İşbirliği"
        title="Yeni bir proje için birlikte çalışalım."
        description="Kat karşılığı işbirlikleri, taahhüt projeleri veya yatırım fırsatları için ekibimizle iletişime geçin."
      />
    </>
  );
}
