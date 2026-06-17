import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import CTA from "@/components/CTA";
import Reveal from "@/components/Reveal";
import {
  projects,
  getProjectBySlug,
  getRelatedProjects,
} from "@/data/projects";
import { site } from "@/data/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.name,
    description: project.short,
    openGraph: {
      title: `${project.name} | ${site.name}`,
      description: project.short,
      images: project.heroImage ? [project.heroImage] : undefined,
    },
  };
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const related = getRelatedProjects(project.slug, project.related || []);
  const otherProjects = projects.filter((p) => p.slug !== project.slug);

  return (
    <>
      <PageHeader
        eyebrow={project.category}
        title={project.name}
        subtitle={project.subtitle || project.short}
        image={project.heroImage || project.cover}
        breadcrumbs={[
          { label: "Projeler", href: "/projeler" },
          { label: project.name },
        ]}
      />

      {/* Overview + Specs */}
      <section className="py-24 lg:py-32 bg-white">
        <Container>
          <div className="grid lg:grid-cols-12 gap-14 lg:gap-20 items-start">
            <div className="lg:col-span-7">
              <SectionTitle
                eyebrow="Proje Genel Bakış"
                title={project.subtitle || project.name}
                description={project.description}
              />
              <Reveal delay={200}>
                <div className="mt-8 space-y-5 text-ink-600 leading-relaxed">
                  {(project.paragraphs || []).map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </Reveal>
              <Reveal delay={280}>
                <div className="mt-9 flex flex-wrap gap-3">
                  <Link href="/iletisim" className="btn btn-primary">İletişime Geç</Link>
                  <Link href="/projeler" className="btn btn-outline">Tüm Projeler</Link>
                </div>
              </Reveal>
            </div>

            {/* Specs card */}
            <div className="lg:col-span-5">
              <Reveal>
                <div className="border border-ink-100 bg-white">
                  <div className="p-7 lg:p-8 border-b border-ink-100">
                    <div className="flex items-center justify-between">
                      <div className="eyebrow text-gold-dark">Proje Bilgileri</div>
                      <span className="inline-flex items-center px-3 py-1 bg-ink-900 text-white text-[10px] tracking-widest2 uppercase font-semibold">
                        {project.status}
                      </span>
                    </div>
                    <h3 className="mt-4 font-display text-2xl text-ink leading-snug">
                      {project.name}
                    </h3>
                  </div>
                  <dl className="divide-y divide-ink-100">
                    {(project.specs || []).map((s) => (
                      <div key={s.label} className="flex items-start justify-between gap-4 px-7 lg:px-8 py-4">
                        <dt className="text-[11px] tracking-widest2 uppercase text-ink-400">{s.label}</dt>
                        <dd className="text-sm font-medium text-ink text-right">{s.value}</dd>
                      </div>
                    ))}
                  </dl>
                  <div className="p-7 lg:p-8 border-t border-ink-100">
                    <a
                      href={site.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-gold w-full"
                    >
                      Bu Proje Hakkında Bilgi Al
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Highlights */}
      {project.highlights && project.highlights.length > 0 && (
        <section className="py-24 lg:py-32 bg-ink-50 border-y border-ink-100">
          <Container>
            <SectionTitle
              eyebrow="Öne Çıkanlar"
              title="Projeyi öne çıkaran özellikler."
              description="Tasarım, malzeme ve lokasyon avantajlarının bir araya geldiği detaylar."
            />

            <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-ink-100 border border-ink-100">
              {project.highlights.map((h, i) => (
                <Reveal key={h.title} delay={(i % 3) * 80} className="bg-white">
                  <div className="p-8 lg:p-9 h-full">
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 grid place-items-center border border-ink-200 text-gold-dark">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                      </div>
                      <span className="font-display text-gold-dark text-sm tracking-widest2">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h4 className="mt-6 font-display text-xl text-ink leading-snug">{h.title}</h4>
                    <p className="mt-3 text-sm text-ink-500 leading-relaxed">{h.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Gallery */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="py-24 lg:py-32 bg-white">
          <Container>
            <SectionTitle
              eyebrow="Görsel Galeri"
              title="Projeden kareler."
              description="Mimari detaylar, iç mekan kurguları ve genel atmosferden seçili kareler."
            />

            <div className="mt-14 grid grid-cols-1 md:grid-cols-12 gap-5">
              {project.gallery.slice(0, 4).map((img, i) => {
                const wrapperCls = [
                  "md:col-span-7",
                  "md:col-span-5",
                  "md:col-span-5",
                  "md:col-span-7",
                ][i];
                const aspectCls = [
                  "aspect-[16/11]",
                  "aspect-[4/5]",
                  "aspect-[4/5]",
                  "aspect-[16/11]",
                ][i];
                return (
                  <Reveal key={img + i} delay={(i % 2) * 100} className={wrapperCls}>
                    <div className={`media-zoom relative w-full overflow-hidden bg-ink-100 ${aspectCls}`}>
                      <Image
                        src={img}
                        alt={`${project.name} ${i + 1}`}
                        fill
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </Container>
        </section>
      )}

      {/* Neighborhood / Konum */}
      {project.neighborhood && project.neighborhood.length > 0 && (
        <section className="relative py-24 lg:py-32 bg-ink-900 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-25">
            <Image
              src={project.gallery?.[0] || project.cover}
              alt=""
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ink-900 via-ink-900/85 to-ink-900/60" />
          </div>
          <Container className="relative">
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6">
                <SectionTitle
                  invert
                  eyebrow="Konum & Çevre"
                  title={`${project.district || project.location} bölgesinin avantajları.`}
                  description="Doğru lokasyon, projenin değerini ve kullanım konforunu doğrudan etkileyen en önemli unsurlardan biridir."
                />
              </div>
              <Reveal delay={200} className="lg:col-span-6">
                <ul className="space-y-5 lg:pl-8 lg:border-l lg:border-white/15">
                  {project.neighborhood.map((item) => (
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
      )}

      {/* Related projects */}
      <section className="py-24 lg:py-32 bg-white">
        <Container>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
            <SectionTitle
              eyebrow="İlgili Projeler"
              title="Benzer kategoride diğer çalışmalarımız."
              description="MAXVARO GROUP imzalı diğer projelerimizden seçili örnekler."
            />
            <Reveal delay={200}>
              <Link href="/projeler" className="btn btn-outline shrink-0">Tüm Projeler</Link>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(related.length > 0 ? related : otherProjects.slice(0, 3)).map((r, i) => (
              <Reveal key={r.slug} delay={i * 80}>
                <Link href={`/projeler/${r.slug}`} className="group block">
                  <div className="media-zoom relative aspect-[4/5] w-full overflow-hidden bg-ink-100">
                    <Image
                      src={r.cover}
                      alt={r.name}
                      fill
                      sizes="(min-width: 1024px) 33vw, 100vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-900/80 via-ink-900/10 to-transparent" />
                    <div className="absolute top-5 left-5">
                      <span className="inline-flex items-center px-3 py-1 bg-white/95 text-ink text-[10px] tracking-widest2 uppercase font-semibold">
                        {r.status}
                      </span>
                    </div>
                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <div className="text-gold text-[10px] tracking-widest2 uppercase mb-2">{r.category}</div>
                      <h3 className="font-display text-2xl text-white leading-tight">{r.name}</h3>
                      <div className="mt-2 text-white/80 text-sm">{r.location}</div>
                      <div className="mt-5 flex items-center gap-3 text-white text-[12px] tracking-widest2 uppercase font-semibold opacity-90">
                        <span className="h-px w-6 bg-gold transition-all duration-500 group-hover:w-10" />
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
        title={`${project.name} hakkında daha fazla bilgi almak ister misiniz?`}
        description="Proje detayları, fiyat ve süreç bilgileri için ekibimizle iletişime geçin."
        image={project.heroImage || project.cover}
      />
    </>
  );
}
