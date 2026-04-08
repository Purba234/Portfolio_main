import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { personalInfo } from "../data/portfolio";

export default function FooterSection() {
  return (
    <footer className="px-4 pb-8 pt-4 md:px-8 md:pb-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start gap-4 border-t border-border pt-6 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="nav-link inline-flex items-center gap-2 text-text"
          >
            <FaGithub size={16} />
            GitHub
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            className="nav-link inline-flex items-center gap-2 text-text"
          >
            <FaLinkedin size={16} />
            LinkedIn
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="nav-link inline-flex items-center gap-2 text-text"
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
