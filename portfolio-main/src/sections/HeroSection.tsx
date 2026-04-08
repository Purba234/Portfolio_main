import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail, FiMapPin } from "react-icons/fi";
import { personalInfo } from "../data/portfolio";

export default function HeroSection() {
  return (
    <section id="hero" className="scroll-mt-28 px-4 pt-10 md:px-8 md:pt-14">
      <div className="mx-auto grid w-full max-w-6xl gap-10 md:grid-cols-2 md:items-center">
        <div className="space-y-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-muted backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-accent2" />
            <FiMapPin size={13} />
            {personalInfo.location}
          </div>

          <h1 className="headline-font text-4xl font-bold leading-tight text-text sm:text-5xl md:text-6xl">
            <TypeAnimation
              sequence={[700, "Hi I am Purba Saha"]}
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

          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-full bg-gradient-to-r from-accent to-accent2 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/30 transition hover:-translate-y-0.5"
            >
              View Projects
            </a>
            <a
              href="/projects/Purba_New_cv.pdf"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-border bg-card/70 px-6 py-3 text-sm font-semibold text-text transition hover:-translate-y-0.5"
            >
              View Resume
            </a>
            <a
              href="#contact"
              className="rounded-full border border-border bg-transparent px-6 py-3 text-sm font-semibold text-text transition hover:bg-bg-soft/65"
            >
              Contact Me
            </a>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card/75 text-text transition hover:-translate-y-0.5"
              aria-label="Send email"
            >
              <FiMail size={18} />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card/75 text-text transition hover:-translate-y-0.5"
              aria-label="GitHub"
            >
              <FaGithub size={18} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card/75 text-text transition hover:-translate-y-0.5"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={18} />
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="premium-ring relative w-full max-w-sm overflow-hidden rounded-[2rem] p-6">
            <div className="absolute inset-5 rounded-full bg-accent/30 blur-3xl" />
            <div className="relative mx-auto h-72 w-72 overflow-hidden rounded-full border border-border bg-bg-soft shadow-soft md:h-80 md:w-80">
              <img
                src="/projects/Profile.jpg"
                alt="Purba Saha profile"
                className="h-full w-full object-cover"
                onError={(event) => {
                  const target = event.currentTarget;
                  target.onerror = null;
                  target.src =
                    "https://ui-avatars.com/api/?name=Purba+Saha&background=1b2558&color=e8edff&size=640";
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
