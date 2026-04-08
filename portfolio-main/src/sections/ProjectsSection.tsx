import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import SectionHeading from "../components/SectionHeading";
import { projects } from "../data/portfolio";

export default function ProjectsSection() {
  return (
    <div className="px-4 md:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeading
          eyebrow="Projects"
          title="Featured Projects"
          description="A selection of practical builds focused on analytics, intelligent systems, and usable insights."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className="group section-shell premium-ring overflow-hidden rounded-3xl"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.22 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              whileHover={{ y: -8, scale: 1.01 }}
            >
              <div className="relative h-48 overflow-hidden bg-bg-soft/45">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>
              <div className="space-y-4 p-6">
                <h3 className="headline-font text-xl font-semibold text-text">
                  {project.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tag) => (
                    <span
                      key={`${project.title}-${tag}`}
                      className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 pt-1">
                  {project.liveLink ? (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-text transition hover:bg-bg-soft/60"
                    >
                      <FiExternalLink size={14} />
                      Live
                    </a>
                  ) : null}

                  {project.githubLink ? (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-text transition hover:bg-bg-soft/60"
                    >
                      <FiGithub size={14} />
                      GitHub
                    </a>
                  ) : null}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
