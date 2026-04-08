import { projects } from "../data/portfolio";

export default function ProjectsSection() {
  return (
    <section className="px-4 md:px-8">
      <div className="mx-auto w-full max-w-6xl border-b border-border pb-16">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent2">Projects</p>
          <h2 className="headline-font mt-4 text-3xl font-bold text-text md:text-4xl">
            Case studies and shipped work.
          </h2>
        </div>

        <div className="divide-y divide-border border-y border-border">
          {projects.map((project) => (
            <article key={project.title} className="py-7 transition duration-200 hover:pl-2">
              <h3 className="headline-font text-2xl font-semibold text-text">{project.title}</h3>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted md:text-base">
                {project.description}
              </p>
              <p className="mt-4 font-mono text-xs uppercase tracking-[0.08em] text-muted">
                {project.tech.join(" / ")}
              </p>

              <div className="mt-5 flex flex-wrap gap-6 text-sm font-semibold uppercase tracking-[0.08em]">
                {project.liveLink ? (
                  <a href={project.liveLink} target="_blank" rel="noreferrer" className="nav-link text-text">
                    View Project
                  </a>
                ) : null}
                {project.githubLink ? (
                  <a href={project.githubLink} target="_blank" rel="noreferrer" className="nav-link text-text">
                    Source Code
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
