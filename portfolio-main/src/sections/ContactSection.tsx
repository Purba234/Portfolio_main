import { FiArrowUpRight, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { personalInfo } from "../data/portfolio";

export default function ContactSection() {
  return (
    <section className="px-4 pb-6 md:px-8">
      <div className="mx-auto w-full max-w-6xl border-b border-border pb-16">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent2">Contact</p>
          <h2 className="headline-font mt-4 text-3xl font-bold text-text md:text-4xl">
            Let us build something useful together.
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-3 text-sm text-muted md:text-base">
            <p className="inline-flex items-center gap-2 border border-border px-3 py-2">
              <FiMail size={15} />
              {personalInfo.email}
            </p>
            <p className="inline-flex items-center gap-2 border border-border px-3 py-2">
              <FiPhone size={15} />
              {personalInfo.phone}
            </p>
            <p className="inline-flex items-center gap-2 border border-border px-3 py-2">
              <FiMapPin size={15} />
              {personalInfo.location}
            </p>
          </div>

          <div className="divide-y divide-border border-y border-border">
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center justify-between py-4 text-text transition hover:pl-2"
            >
              <span>Email</span>
              <FiArrowUpRight size={16} />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between py-4 text-text transition hover:pl-2"
            >
              <span>GitHub</span>
              <FiArrowUpRight size={16} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between py-4 text-text transition hover:pl-2"
            >
              <span>LinkedIn</span>
              <FiArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
