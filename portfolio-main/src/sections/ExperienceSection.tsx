import { experience } from "../data/portfolio";

export default function ExperienceSection() {
  return (
    <section className="px-4 md:px-8">
      <div className="mx-auto w-full max-w-6xl border-b border-border pb-16">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent2">Experience</p>
          <h2 className="headline-font mt-4 text-3xl font-bold text-text md:text-4xl">
            Timeline of hands-on work.
          </h2>
        </div>

        <div className="timeline-track pl-6">
          {experience.map((item) => (
            <article key={item.title} className="timeline-node pb-9 last:pb-0">
              <p className="font-mono text-xs uppercase tracking-[0.12em] text-accent2">{item.period}</p>
              <h3 className="headline-font mt-2 text-xl font-semibold text-text">{item.title}</h3>
              {item.location ? <p className="mt-2 text-sm text-muted">{item.location}</p> : null}
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted md:text-base">
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
