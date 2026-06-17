import Reveal from "./Reveal";

export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  invert = false,
  className = "",
}) {
  const alignCls = align === "center" ? "text-center mx-auto" : "text-left";
  const eyebrowColor = invert ? "text-gold" : "text-gold-dark";
  const titleColor = invert ? "text-white" : "text-ink";
  const descColor = invert ? "text-white/70" : "text-ink-500";

  return (
    <div className={`${alignCls} max-w-2xl ${className}`}>
      {eyebrow && (
        <Reveal>
          <div className={`eyebrow ${eyebrowColor} mb-4 flex items-center gap-3 ${align === "center" ? "justify-center" : ""}`}>
            <span className="h-px w-8 bg-current opacity-60" />
            <span>{eyebrow}</span>
          </div>
        </Reveal>
      )}
      <Reveal delay={80}>
        <h2 className={`font-display text-3xl sm:text-4xl lg:text-5xl leading-[1.08] tracking-tight ${titleColor}`}>
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={160}>
          <p className={`mt-5 text-base sm:text-lg leading-relaxed ${descColor}`}>
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
