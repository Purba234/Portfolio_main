import { motion } from "framer-motion";
import { FiCalendar, FiMapPin, FiUsers } from "react-icons/fi";
import SectionHeading from "../components/SectionHeading";
import { hackathons } from "../data/portfolio";

export default function HackathonsSection() {
  return (
    <div className="px-4 md:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeading
          eyebrow="Hackathons"
          title="Hackathon Experiences"
          description="Rapid prototyping, teamwork, and leadership across technical and organizational challenges."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {hackathons.map((item, index) => (
            <motion.article
              key={item.title}
              className="section-shell premium-ring rounded-3xl p-6"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
            >
              <h3 className="headline-font text-xl font-semibold text-text">{item.title}</h3>

              <div className="mt-4 flex flex-wrap gap-2 text-xs font-medium text-muted">
                <p className="inline-flex items-center gap-1 rounded-full border border-border px-3 py-1">
                  <FiUsers size={12} />
                  {item.role}
                </p>
                <p className="inline-flex items-center gap-1 rounded-full border border-border px-3 py-1">
                  <FiCalendar size={12} />
                  {item.date}
                </p>
                <p className="inline-flex items-center gap-1 rounded-full border border-border px-3 py-1">
                  <FiMapPin size={12} />
                  {item.location}
                </p>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-muted">{item.summary}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {item.tech.map((tag) => (
                  <span
                    key={`${item.title}-${tag}`}
                    className="rounded-full border border-border px-3 py-1 text-xs font-semibold text-text"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
