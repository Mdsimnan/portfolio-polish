import { Award } from "lucide-react";

const experiences = [
  {
    title: "Data/Business Analyst",
    company: "Indivillage Tech Solution",
    date: "March 2023 – Present",
    points: [
      "Built interactive dashboards using Tableau, Power BI, and Looker Studio to monitor operational KPIs and productivity.",
      "Developed SQL and KNIME workflows to track task uploads, completion rates, SLA adherence, and task accuracy.",
      "Created HR analytics dashboards analyzing headcount, attrition trends, and workforce distribution.",
      "Consolidated financial data from multiple sources and developed revenue and cost monitoring dashboards.",
      "Analyzed performance data for 300+ healthcare clinics to provide insights for operational improvements and marketing strategy.",
      "Managed operational analytics for e-commerce clients, tracking SLA adherence, task completion, and productivity metrics.",
      "Conducted data validation, auditing, and reconciliation to ensure high reporting accuracy.",
      "Collaborated with cross-functional teams to improve workflow efficiency and operational reporting.",
      "Organized and analyzed large datasets to maintain accurate product data and reporting systems.",
      "Applied structured data filtering methods to ensure compliance with global client guidelines.",
    ],
  },
  {
    title: "Trainee Java Full-Stack Developer",
    company: "JSpiders – Bengaluru, India",
    date: "Aug 2022 – Feb 2023",
    certificate: {
      label: "Java Full-Stack Development Program",
      url: "https://mdsimnan.github.io/Data_Analyst_Portfolio/images/Certificate/certificate.jpeg",
    },
    points: [
      "Developed responsive UI components using HTML, CSS, and JavaScript.",
      "Built backend functionality and REST APIs using Java and Spring Framework.",
      "Designed relational database schemas and performed CRUD operations using SQL and Hibernate.",
      "Worked in an Agile development environment to build full-stack web applications.",
    ],
  },
];

const ExperienceSection = () => (
  <section id="experience" className="py-16 sm:py-20 px-4 sm:px-8">
    <h2 className="font-display text-2xl sm:text-3xl gradient-text mb-8">Experience</h2>
    <div className="space-y-6">
      {experiences.map((exp) => (
        <div key={exp.title} className="bg-card rounded-xl glow-border p-6 sm:p-8 card-hover">
          <h3 className="font-display text-base sm:text-lg text-primary">{exp.title}</h3>
          <p className="text-sm text-muted-foreground mt-1">{exp.company}</p>
          <p className="text-xs text-primary/60 font-mono mt-1">{exp.date}</p>
          {exp.certificate && (
            <p className="text-xs text-muted-foreground mt-2 flex items-center gap-1">
              <Award className="w-3 h-3 text-accent" />
              Certificate:{" "}
              <a href={exp.certificate.url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                {exp.certificate.label}
              </a>
            </p>
          )}
          <ul className="mt-4 space-y-2">
            {exp.points.map((point, i) => (
              <li key={i} className="text-xs sm:text-sm text-muted-foreground leading-relaxed flex gap-2">
                <span className="text-primary mt-1 shrink-0">▹</span>
                {point}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default ExperienceSection;
