import { hackathons } from "../data/portfolio";

export default function HackathonsSection() {
  return (
    <section className="px-4 md:px-8">
      <div className="mx-auto w-full max-w-6xl border-b border-border pb-16">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent2">Hackathons</p>
          <h2 className="headline-font mt-4 text-3xl font-bold text-text md:text-4xl">
            Competitive builds and team execution.
          </h2>
        </div>

        <div className="timeline-track pl-6">
          {hackathons.map((item) => (
            <article key={item.title} className="timeline-node pb-9 last:pb-0">
              <p className="font-mono text-xs uppercase tracking-[0.12em] text-accent2">{item.date}</p>
              <h3 className="headline-font mt-2 text-xl font-semibold text-text">{item.title}</h3>
              <p className="mt-2 text-sm text-muted">{item.role}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">{item.summary}</p>
              <p className="mt-4 font-mono text-xs uppercase tracking-[0.08em] text-muted">
                {item.tech.join(" / ")}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
