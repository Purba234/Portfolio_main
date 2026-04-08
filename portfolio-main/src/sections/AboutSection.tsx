import SectionHeading from "../components/SectionHeading";
import { personalInfo } from "../data/portfolio";

export default function AboutSection() {
  return (
    <div className="px-4 md:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeading title="About Me" />
        <article className="section-shell premium-ring mx-auto max-w-3xl rounded-3xl p-8 md:p-10">
          <h3 className="headline-font text-2xl font-bold text-text">{personalInfo.name}</h3>
          <p className="mt-4 text-sm leading-relaxed text-muted md:text-base">
            {personalInfo.about}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
            {personalInfo.aboutSecondary}
          </p>
        </article>
      </div>
    </div>
  );
}
