import { motion } from "framer-motion";
import { FiMapPin } from "react-icons/fi";
import SectionHeading from "../components/SectionHeading";
import { experience } from "../data/portfolio";

export default function ExperienceSection() {
  return (
    <div className="px-4 md:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeading title="Experience" />

        <div className="grid gap-6 md:grid-cols-2">
          {experience.map((item, index) => (
            <motion.article
              key={item.title}
              className="section-shell premium-ring rounded-3xl p-6"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.07 }}
            >
              <h3 className="headline-font text-xl font-semibold text-text">{item.title}</h3>
              <p className="mt-1 text-sm font-medium text-accent2">{item.period}</p>

              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted">
                {item.points.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent2" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {item.location ? (
                <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs font-medium text-muted">
                  <FiMapPin size={12} />
                  {item.location}
                </p>
              ) : null}
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
