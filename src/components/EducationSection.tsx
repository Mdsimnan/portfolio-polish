import { GraduationCap } from "lucide-react";

const education = [
  { degree: "Bachelor of Engineering (B.E)", school: "Navodaya Institute of Technology, Raichur, India", date: "August 2022" },
  { degree: "Pre-University Course (PUC) – Science", school: "Sri Krishna Academy PU College, Raichur" },
  { degree: "SSLC", school: "The Little Angels High School, Raichur" },
];

const EducationSection = () => (
  <section id="education" className="py-16 sm:py-20 px-4 sm:px-8">
    <h2 className="font-display text-2xl sm:text-3xl gradient-text mb-8">Education</h2>
    <div className="space-y-4">
      {education.map((edu) => (
        <div key={edu.degree} className="bg-card rounded-xl glow-border p-5 sm:p-6 flex items-start gap-4 card-hover">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
            <GraduationCap className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h3 className="font-display text-sm sm:text-base text-foreground">{edu.degree}</h3>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1">{edu.school}</p>
            {edu.date && <p className="text-xs text-primary/60 font-mono mt-1">{edu.date}</p>}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default EducationSection;
