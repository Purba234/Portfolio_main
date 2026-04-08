const skillGroups = [
  {
    title: "Core AI/ML",
    items: ["LangChain", "Ollama", "OpenAI", "Machine Learning", "Predictive Modeling"],
  },
  {
    title: "Data Science",
    items: ["Python", "Scikit-learn", "Pandas", "NumPy", "Data Science", "Analytics"],
  },
  {
    title: "Data Systems",
    items: ["SQL", "Data Visualization", "Power BI", "DAX", "Deployment"],
  },
];

export default function SkillsSection() {
  return (
    <section className="px-4 md:px-8">
      <div className="mx-auto w-full max-w-6xl border-b border-border pb-16">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent2">Skills</p>
          <h2 className="headline-font mt-4 text-3xl font-bold text-text md:text-4xl">
            Tooling and systems I use to ship outcomes.
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {skillGroups.map((group) => (
            <article key={group.title} className="border-t border-border pt-5">
              <h3 className="headline-font text-xl font-semibold text-text">{group.title}</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted md:text-base">
                {group.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
          </div>
        </div>
    </section>
  );
}
