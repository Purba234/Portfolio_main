import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail, FiMapPin } from "react-icons/fi";
import { Link } from "react-router-dom";
import { personalInfo } from "../data/portfolio";

export default function HeroSection() {
  return (
    <section id="hero" className="px-4 pt-8 md:px-8 md:pt-12">
      <div className="mx-auto grid w-full max-w-6xl gap-10 border-b border-border pb-16 md:grid-cols-[1.05fr_0.95fr] md:items-start">
        <div className="space-y-7 md:pt-4">
          <div className="inline-flex items-center gap-2 border border-border px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted">
            <span className="h-2 w-2 rounded-full bg-accent2" />
            <FiMapPin size={13} />
            {personalInfo.location}
          </div>

          <h1 className="headline-font text-4xl font-bold leading-tight text-text sm:text-5xl md:text-6xl">
            <TypeAnimation
              sequence={[700, "Building practical systems with AI and full-stack engineering."]}
              speed={72}
              repeat={0}
              cursor
            />
          </h1>

          <p className="headline-font text-lg font-medium text-accent2 md:text-xl">
            {personalInfo.role}
          </p>

          <p className="max-w-xl text-sm leading-relaxed text-muted md:text-base">
            {personalInfo.intro}
          </p>

          <div className="flex flex-wrap gap-6 text-sm font-semibold uppercase tracking-[0.08em]">
            <Link to="/projects" className="nav-link text-text">
              View Projects
            </Link>
            <a
              href="/projects/Purba_New_cv.pdf"
              target="_blank"
              rel="noreferrer"
              className="nav-link text-text"
            >
              View Resume
            </a>
            <Link
              to="/contact"
              className="nav-link text-text"
            >
              Contact Me
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex h-11 w-11 items-center justify-center border border-border text-text transition hover:-translate-y-0.5"
              aria-label="Send email"
            >
              <FiMail size={18} />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 w-11 items-center justify-center border border-border text-text transition hover:-translate-y-0.5"
              aria-label="GitHub"
            >
              <FaGithub size={18} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 w-11 items-center justify-center border border-border text-text transition hover:-translate-y-0.5"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={18} />
            </a>
          </div>
        </div>

        <div className="terminal-panel border border-border bg-card px-0 py-0">
          <div className="border-b border-border px-4 py-2">
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
              runtime: portfolio-preview.ts
            </span>
          </div>
          <pre className="overflow-x-auto p-4 font-mono text-xs leading-6 text-text">
{`const profile = {
  focus: ["AI/ML", "cybersecurity", "full-stack"],
  style: "clean architecture",
  goal: "ship useful products"
};

function buildProduct() {
  return solveRealWorldProblems(profile);
}`}
          </pre>
          <div className="border-t border-border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.1em] text-accent2">
            status: ready
          </div>
        </div>
      </div>
    </section>
  );
}
