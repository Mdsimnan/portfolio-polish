const skillGroups = [
  {
    title: "Data Skills",
    skills: ["Data Analysis", "Data Reporting", "Statistical Analysis", "Data Management"],
  },
  {
    title: "Tools",
    skills: ["SQL", "SSMS", "Microsoft SQL Server", "Oracle 10G", "Tableau", "Power BI", "Advanced MS Excel", "Looker Studio"],
  },
  {
    title: "Business Skills",
    skills: ["MIS Reporting", "Stakeholder Management", "Business Development Management"],
  },
  {
    title: "Web Development",
    skills: ["HTML", "CSS", "JavaScript"],
  },
];

const SkillsSection = () => (
  <section id="skills" className="py-16 sm:py-20 px-4 sm:px-8">
    <h2 className="font-display text-2xl sm:text-3xl gradient-text mb-8">Skills</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))" }}>
      {skillGroups.map((group) => (
        <div key={group.title} className="bg-card rounded-xl glow-border p-6 card-hover flex flex-col items-center text-center">
          <h3 className="font-display text-sm text-primary mb-4 tracking-wider">{group.title}</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {group.skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1.5 rounded-md bg-secondary text-xs text-foreground font-body border border-border hover:border-primary/40 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default SkillsSection;
