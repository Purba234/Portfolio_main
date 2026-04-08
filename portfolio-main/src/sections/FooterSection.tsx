import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { personalInfo } from "../data/portfolio";

export default function FooterSection() {
  return (
    <footer className="px-4 pb-8 pt-4 md:px-8 md:pb-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-5 rounded-3xl border border-border bg-card/75 px-6 py-7 text-center shadow-soft backdrop-blur-xl">
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-text transition hover:bg-bg-soft/60"
          >
            <FaGithub size={16} />
            GitHub
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-text transition hover:bg-bg-soft/60"
          >
            <FaLinkedin size={16} />
            LinkedIn
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-text transition hover:bg-bg-soft/60"
          >
            <FiMail size={16} />
            {personalInfo.email}
          </a>
        </div>

        <p className="text-xs text-muted">
          {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
