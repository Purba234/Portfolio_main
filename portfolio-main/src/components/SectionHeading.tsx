type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mb-8 space-y-3 text-center md:mb-10">
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accent2">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="headline-font text-3xl font-bold tracking-tight text-text md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mx-auto max-w-2xl text-sm leading-relaxed text-muted md:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}
