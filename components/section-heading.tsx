type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className="grid gap-6 lg:grid-cols-[0.35fr_1fr]">
      <div
        className={`flex items-start gap-3 pt-2 font-mono text-xs font-medium uppercase tracking-[0.18em] ${
          light ? "text-white/55" : "text-ink/50"
        }`}
      >
        <span className={`mt-1.5 size-2 rounded-full ${light ? "bg-lime" : "bg-orange"}`} />
        {eyebrow}
      </div>
      <div>
        <h2
          className={`max-w-4xl text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.045em] sm:text-5xl lg:text-6xl ${
            light ? "text-white" : "text-ink"
          }`}
        >
          {title}
        </h2>
        {description ? (
          <p
            className={`mt-6 max-w-2xl text-base leading-7 sm:text-lg ${
              light ? "text-white/60" : "text-ink/60"
            }`}
          >
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}
