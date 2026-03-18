import { BarChart3, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Operations Performance Analytics Dashboard",
    tools: "Tableau | SQL | Excel",
    dashboards: [
      { label: "Dashboard 1", url: "https://mdsimnan.github.io/Data_Analyst_Portfolio/images/Poject1/dashboard%201.png" },
      { label: "Dashboard 2", url: "https://mdsimnan.github.io/Data_Analyst_Portfolio/images/Poject1/dashboard%202.png" },
    ],
    points: [
      "Built KPI cards to provide a quick overview of operational performance including billable hours, non-billable hours, and productivity percentage.",
      "Designed an interactive operations dashboard to track key performance metrics such as productivity, utilization, total hours, and content count.",
      "Analyzed weekly trends to monitor workload distribution and operational efficiency across teams.",
      "Created visualizations to compare center-wise performance and identify variations in task completion and processing time.",
      "Implemented error rate monitoring to track quality performance and identify operational risks.",
      "Developed top and least performer analysis to evaluate employee productivity and support performance management.",
    ],
    insight: "The dashboard revealed productivity variations across centers and highlighted employees with the highest and lowest performance, enabling managers to optimize resource allocation and improve operational efficiency.",
  },
  {
    title: "HR Attrition Analytics Dashboard",
    tools: "Tableau | SQL | Excel",
    dashboards: [
      { label: "Dashboard 1", url: "https://mdsimnan.github.io/Data_Analyst_Portfolio/images/Project2/dashboard%201.png" },
      { label: "Dashboard 2", url: "https://mdsimnan.github.io/Data_Analyst_Portfolio/images/Project2/dashboard%202.png" },
    ],
    points: [
      "Developed an HR analytics dashboard to monitor employee attrition trends across different locations and roles.",
      "Analyzed attrition distribution by department, gender, and job roles to identify workforce risk areas.",
      "Created exit reason analytics to understand key factors contributing to employee turnover.",
      "Visualized voluntary vs involuntary attrition patterns to evaluate workforce stability.",
      "Built tenure-based attrition analysis to identify employees most likely to leave.",
    ],
    insight: "The dashboard revealed that attrition was highest among employees with 1–3 years of tenure, helping HR teams focus on retention strategies for early-career employees.",
  },
  {
    title: "HR Workforce Demographics & Headcount Dashboard",
    tools: "Tableau | Excel | Data Visualization",
    dashboards: [
      { label: "Dashboard 1", url: "https://mdsimnan.github.io/Data_Analyst_Portfolio/images/Project3/dashboard%201.png" },
      { label: "Dashboard 2", url: "https://mdsimnan.github.io/Data_Analyst_Portfolio/images/Project3/dashboard%202.png" },
    ],
    points: [
      "Built an HR workforce analytics dashboard to track employee headcount trends across multiple centers.",
      "Analyzed monthly headcount growth and workforce distribution across different locations.",
      "Visualized employee demographics including age distribution, gender diversity, and education levels.",
      "Developed center-wise workforce growth analysis to monitor recruitment and staffing patterns.",
      "Created tenure analysis to understand workforce experience distribution.",
    ],
    insight: "The dashboard highlighted workforce concentration in specific centers and provided insights into gender diversity and employee tenure patterns, supporting strategic workforce planning.",
  },
  {
    title: "Business Performance Dashboard",
    tools: "Power BI • Excel • Data Cleaning • Data Modeling",
    dashboards: [
      { label: "Dashboard 1", url: "https://mdsimnan.github.io/Data_Analyst_Portfolio/images/Project4/dashboard%201.png" },
      { label: "Dashboard 2", url: "https://mdsimnan.github.io/Data_Analyst_Portfolio/images/Project4/dashboard%202.png" },
    ],
    points: [
      "KPI performance indicators",
      "Trend analysis for operational metrics",
      "Comparative analysis across teams and centers",
      "Interactive filtering for detailed analysis",
    ],
    insight: "Provided clear visibility into operational performance. Enabled quick identification of performance bottlenecks. Supported management decision-making with real-time insights.",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-16 sm:py-20 px-4 sm:px-8">
    <h2 className="font-display text-2xl sm:text-3xl gradient-text mb-8">Projects</h2>
    <div className="space-y-6">
      {projects.map((project) => (
        <div key={project.title} className="bg-card rounded-xl glow-border p-6 sm:p-8 card-hover">
          <h3 className="font-display text-sm sm:text-base text-primary">{project.title}</h3>
          <p className="text-xs text-accent font-mono mt-1">{project.tools}</p>

          <div className="flex flex-wrap gap-3 mt-3">
            {project.dashboards.map((d) => (
              <a
                key={d.label}
                href={d.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-primary hover:text-accent transition-colors"
              >
                <BarChart3 className="w-3 h-3" />
                {d.label}
                <ExternalLink className="w-2.5 h-2.5" />
              </a>
            ))}
          </div>

          <ul className="mt-4 space-y-1.5">
            {project.points.map((point, i) => (
              <li key={i} className="text-xs sm:text-sm text-muted-foreground leading-relaxed flex gap-2">
                <span className="text-primary shrink-0">▹</span>
                {point}
              </li>
            ))}
          </ul>

          <div className="mt-4 p-3 rounded-lg bg-primary/5 border border-primary/10">
            <p className="text-xs text-muted-foreground">
              <span className="text-primary font-display text-[10px] tracking-wider">KEY INSIGHT: </span>
              {project.insight}
            </p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default ProjectsSection;
