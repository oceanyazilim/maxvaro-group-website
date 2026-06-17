import PageHeader from "@/components/PageHeader";
import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import Reveal from "@/components/Reveal";
import { site } from "@/data/site";

export const metadata = {
  title: "İletişim",
  description:
    "MAXVARO GROUP ile iletişime geçin. Telefon, e-posta, WhatsApp ve adres bilgilerimiz.",
};

const channels = [
  {
    label: "Telefon",
    value: site.phone,
    href: `tel:${site.phoneRaw}`,
    icon: (
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.37 1.9.72 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0122 16.92z" />
    ),
  },
  {
    label: "E-posta",
    value: site.email,
    href: `mailto:${site.email}`,
    icon: (
      <>
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </>
    ),
  },
  {
    label: "WhatsApp",
    value: "Mesaj Gönderin",
    href: site.whatsapp,
    target: "_blank",
    icon: (
      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
    ),
  },
  {
    label: "Adres",
    value: site.address.line,
    href: site.address.mapsUrl,
    target: "_blank",
    icon: (
      <>
        <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </>
    ),
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="İletişim"
        title="Birlikte değer üreten projeler geliştirelim."
        subtitle="Yatırım, kat karşılığı işbirlikleri ve taahhüt projeleriniz için ekibimiz sizinle iletişime geçmeye hazır."
        image="/assets/images/projects/service-wide.jpg"
        breadcrumbs={[{ label: "İletişim" }]}
      />

      {/* Contact channels */}
      <section className="py-20 lg:py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-ink-100 border border-ink-100">
            {channels.map((c, i) => (
              <Reveal key={c.label} delay={i * 80} className="bg-white">
                <a
                  href={c.href}
                  target={c.target}
                  rel={c.target === "_blank" ? "noopener noreferrer" : undefined}
                  className="group p-8 lg:p-9 h-full flex flex-col transition-colors hover:bg-ink-50"
                >
                  <div className="h-12 w-12 grid place-items-center border border-ink-200 text-ink group-hover:bg-ink-900 group-hover:text-gold group-hover:border-ink-900 transition-all duration-500">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                      {c.icon}
                    </svg>
                  </div>
                  <div className="eyebrow text-gold-dark mt-7">{c.label}</div>
                  <div className="mt-2 font-display text-lg text-ink leading-snug">{c.value}</div>
                  <div className="mt-6 inline-flex items-center gap-3 text-[11px] tracking-widest2 uppercase font-semibold text-ink-500">
                    <span className="h-px w-6 bg-gold transition-all duration-500 group-hover:w-10" />
                    Şimdi {c.label.toLowerCase()}
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Office & Map */}
      <section className="py-20 lg:py-24 bg-ink-50 border-y border-ink-100">
        <Container>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
            <div className="lg:col-span-5">
              <SectionTitle
                eyebrow="Ofisimiz"
                title="Genel merkezimizi ziyaret edin."
                description="Sancaktepe, İstanbul'da yer alan ofisimizden tüm Türkiye'de projeler geliştiriyor ve yönetiyoruz."
              />

              <Reveal delay={200}>
                <div className="mt-9 space-y-6">
                  <div>
                    <div className="eyebrow text-gold-dark mb-2">Adres</div>
                    <p className="text-ink-700 leading-relaxed">{site.address.line}</p>
                  </div>
                  <div className="hairline" />
                  <div>
                    <div className="eyebrow text-gold-dark mb-2">Çalışma Saatleri</div>
                    <p className="text-ink-700">Pazartesi – Cumartesi · 09:00 – 18:00</p>
                  </div>
                  <div className="hairline" />
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <div className="eyebrow text-gold-dark mb-2">Telefon</div>
                      <a href={`tel:${site.phoneRaw}`} className="text-ink-700 hover:text-ink transition-colors">{site.phone}</a>
                    </div>
                    <div>
                      <div className="eyebrow text-gold-dark mb-2">E-posta</div>
                      <a href={`mailto:${site.email}`} className="text-ink-700 hover:text-ink transition-colors break-all">{site.email}</a>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            <Reveal delay={120} className="lg:col-span-7">
              <div className="relative h-[420px] lg:h-full w-full overflow-hidden border border-ink-100 bg-ink-100">
                <iframe
                  src={site.address.embedUrl}
                  title="MAXVARO GROUP Ofis Konumu"
                  className="absolute inset-0 w-full h-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Inquiry strip */}
      <section className="relative py-20 lg:py-24 bg-ink-900 text-white overflow-hidden">
        <Container className="relative">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8">
              <Reveal>
                <div className="eyebrow text-gold mb-5 flex items-center gap-3">
                  <span className="h-px w-10 bg-gold" /> Hemen İletişime Geçin
                </div>
                <h3 className="font-display text-3xl lg:text-4xl leading-snug">
                  Size en uygun iletişim kanalını seçin, ekibimiz sizinle iletişime geçsin.
                </h3>
              </Reveal>
            </div>
            <Reveal delay={200} className="lg:col-span-4 lg:text-right">
              <div className="flex flex-wrap lg:justify-end gap-3">
                <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-gold">
                  WhatsApp
                </a>
                <a href={`tel:${site.phoneRaw}`} className="btn btn-outline-light">
                  Hemen Ara
                </a>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
