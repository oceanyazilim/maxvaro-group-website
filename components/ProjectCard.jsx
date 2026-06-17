import Image from "next/image";

export default function ProjectCard({ project, priority = false }) {
  return (
    <article className="group block">
      <div className="media-zoom relative aspect-[4/5] w-full overflow-hidden bg-ink-100">
        <Image
          src={project.cover}
          alt={project.name}
          fill
          sizes="(min-width: 1280px) 420px, (min-width: 768px) 33vw, 100vw"
          priority={priority}
          className="object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900/80 via-ink-900/10 to-transparent transition-opacity duration-700 group-hover:opacity-90" />
        <div className="absolute top-5 left-5">
          <span className="inline-flex items-center px-3 py-1 bg-white/95 text-ink text-[10px] tracking-widest2 uppercase font-semibold">
            {project.status}
          </span>
        </div>
        <div className="absolute inset-x-0 bottom-0 p-6">
          <div className="text-gold text-[10px] tracking-widest2 uppercase mb-2">
            {project.category}
          </div>
          <h3 className="font-display text-2xl md:text-[26px] leading-tight text-white">
            {project.name}
          </h3>
          <div className="mt-2 text-white/80 text-sm">{project.location}</div>
          <div className="mt-5 flex items-center gap-3 text-white text-[12px] tracking-widest2 uppercase font-semibold opacity-90">
            <span className="h-px w-6 bg-gold transition-all duration-500 group-hover:w-10" />
            <span>Detayları Gör</span>
          </div>
        </div>
      </div>
    </article>
  );
}
