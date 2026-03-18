import { MapPin, Mail, Phone } from "lucide-react";

const AboutSection = () => (
  <section id="about" className="py-16 sm:py-20 px-4 sm:px-8">
    <h2 className="font-display text-2xl sm:text-3xl gradient-text mb-8">About Me</h2>
    <div className="bg-card rounded-xl glow-border p-6 sm:p-8 space-y-6">
      <p className="text-muted-foreground text-sm sm:text-base leading-relaxed font-body">
        I am a Business Data Analyst with 3+ years of experience in transforming complex data into actionable insights.
        I specialize in MIS reporting, KPI dashboards, SLA monitoring, and operational analytics across finance, operations, and enterprise systems.
        Skilled in SQL, Power BI, Tableau, Looker Studio, and Advanced Excel, I work closely with cross-functional teams to improve decision-making, automate reporting, and enhance operational efficiency.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { icon: MapPin, label: "Location", value: "Raichur, India" },
          { icon: Mail, label: "Email", value: "md15arbaz@gmail.com" },
          { icon: Phone, label: "Phone", value: "+91 8904186955" },
        ].map(({ icon: Icon, label, value }) => (
          <div key={label} className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50">
            <Icon className="w-4 h-4 text-primary shrink-0" />
            <div>
              <p className="text-xs text-muted-foreground">{label}</p>
              <p className="text-sm text-foreground break-all">{value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
