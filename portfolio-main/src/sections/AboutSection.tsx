import { personalInfo } from "../data/portfolio";

export default function AboutSection() {
  return (
    <section className="px-4 md:px-8">
      <div className="mx-auto grid w-full max-w-6xl gap-8 border-b border-border pb-16 md:grid-cols-[0.95fr_1.05fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent2">About</p>
          <h2 className="headline-font mt-4 text-3xl font-bold text-text md:text-4xl">
            Engineering with clarity, depth, and intent.
          </h2>
        </div>
        <div className="space-y-4 border-l border-border pl-0 md:pl-6">
          <h3 className="headline-font text-2xl font-bold text-text">{personalInfo.name}</h3>
          <p className="text-sm leading-relaxed text-muted md:text-base">{personalInfo.about}</p>
          <p className="text-sm leading-relaxed text-muted md:text-base">
            {personalInfo.aboutSecondary}
          </p>
        </div>
      </div>
    </section>
  );
}
