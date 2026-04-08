import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useTheme } from "next-themes";
import { FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";
import { navLinks, personalInfo } from "../data/portfolio";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? resolvedTheme !== "light" : true;
  const internalLinks = navLinks.filter((link) => !link.external);
  const externalLinks = navLinks.filter((link) => link.external);

  return (
    <header className="sticky top-4 z-50 px-4 md:px-8">
      <nav className="premium-ring mx-auto flex w-full max-w-6xl items-center justify-between rounded-2xl border border-border bg-card/75 px-4 py-3 shadow-soft backdrop-blur-2xl md:px-6">
        <Link
          to="/"
          className="headline-font text-sm font-bold tracking-[0.14em] text-text md:text-base"
        >
          {personalInfo.brand}
        </Link>

        <ul className="hidden items-center gap-6 lg:flex">
          {internalLinks.map((link) => (
            <li key={link.label}>
              <NavLink
                to={link.href}
                className={({ isActive }) =>
                  `nav-link text-sm font-medium transition-colors hover:text-text ${
                    isActive ? "text-text" : "text-muted"
                  } ${isActive ? "is-active" : ""}`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
          {externalLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-muted transition-colors hover:text-text"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-bg-soft/55 text-text transition hover:scale-105"
            aria-label="Toggle theme"
          >
            {isDark ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-bg-soft/55 text-text lg:hidden"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <FiX size={18} /> : <FiMenu size={18} />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="mx-auto mt-2 w-full max-w-6xl rounded-2xl border border-border bg-card/90 p-4 shadow-soft backdrop-blur-2xl lg:hidden">
          <ul className="grid gap-3">
            {internalLinks.map((link) => (
              <li key={link.label}>
                <NavLink
                  to={link.href}
                  className="block rounded-xl px-3 py-2 text-sm font-medium text-muted transition hover:bg-bg-soft/60 hover:text-text"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            {externalLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="block rounded-xl px-3 py-2 text-sm font-medium text-muted transition hover:bg-bg-soft/60 hover:text-text"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  );
}
