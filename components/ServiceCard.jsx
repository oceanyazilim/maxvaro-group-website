import Image from "next/image";
import Link from "next/link";

const icons = {
  Building: "M3 21h18M5 21V7l7-4 7 4v14M9 21V13h6v8M9 9h.01M15 9h.01",
  Home: "M3 11l9-7 9 7M5 10v10h14V10M10 20v-6h4v6",
  Briefcase: "M3 7h18v14H3zM8 7V5a2 2 0 012-2h4a2 2 0 012 2v2",
  Handshake: "M4 12l4-4 5 5 3-3 4 4M2 12l6 6M22 12l-6 6",
  Compass: "M12 22a10 10 0 100-20 10 10 0 000 20zM16 8l-2 6-6 2 2-6 6-2z",
  Hammer: "M14 3l7 7-3 3-7-7M3 21l8-8",
  Ruler: "M3 17l4-4 4 4 4-4 4 4M3 21h18",
  Key: "M21 2l-2 2m-7.61 7.61a5.5 5.5 0 11-7.78 7.78 5.5 5.5 0 017.78-7.78zm0 0L15.5 8 18 10.5 21 7.5l-4.5-4.5",
};

export default function ServiceCard({ service, variant = "default" }) {
  const path = icons[service.icon] || icons.Building;
  const href = `/hizmetler/${service.slug}`;

  if (variant === "image") {
    return (
      <Link href={href} className="group block relative overflow-hidden bg-ink-50">
        <div className="media-zoom relative aspect-[4/3] w-full overflow-hidden">
          <Image
            src={service.image}
            alt={service.title}
            fill
            sizes="(min-width: 1024px) 33vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-900/85 via-ink-900/30 to-transparent" />
        </div>
        <div className="absolute inset-x-0 bottom-0 p-7">
          <div className="text-gold text-[10px] tracking-widest2 uppercase mb-2">Hizmet</div>
          <h3 className="font-display text-xl md:text-2xl text-white">{service.title}</h3>
          <p className="mt-3 text-sm text-white/75 line-clamp-3">{service.short}</p>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className="group relative block bg-white border border-ink-100 p-8 lg:p-9 h-full transition-all duration-500 ease-smooth hover:border-ink-900 hover:shadow-card"
    >
      <div className="flex items-start justify-between">
        <div className="h-12 w-12 grid place-items-center border border-ink-200 text-ink group-hover:bg-ink-900 group-hover:text-gold group-hover:border-ink-900 transition-all duration-500">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
            <path d={path} />
          </svg>
        </div>
        <span className="text-[11px] tracking-widest2 text-ink-300">0{(service.idx ?? 0) + 1}</span>
      </div>
      <h3 className="mt-7 font-display text-xl lg:text-2xl text-ink leading-snug">
        {service.title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-ink-500">{service.short}</p>
      <div className="mt-7 inline-flex items-center gap-3 text-[12px] tracking-widest2 uppercase font-semibold text-ink-700">
        <span className="h-px w-6 bg-gold transition-all duration-500 group-hover:w-12" />
        Detayları Gör
      </div>
    </Link>
  );
}
