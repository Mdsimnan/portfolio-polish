import { useState, useEffect } from "react";
import { Menu, X, Home, User, Briefcase, GraduationCap, FolderOpen, Wrench, Mail, Linkedin, Github, Download, Moon, Sun } from "lucide-react";
import profileImg from "@/assets/profile.jpeg";

const navItems = [
  { id: "home", label: "HOME", icon: Home },
  { id: "about", label: "ABOUT", icon: User },
  { id: "experience", label: "EXPERIENCE", icon: Briefcase },
  { id: "education", label: "EDUCATION", icon: GraduationCap },
  { id: "projects", label: "PROJECTS", icon: FolderOpen },
  { id: "skills", label: "SKILLS", icon: Wrench },
  { id: "contact", label: "CONTACT", icon: Mail },
];

interface SidebarProps {
  activeSection: string;
  onNavigate: (id: string) => void;
}

const Sidebar = ({ activeSection, onNavigate }: SidebarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("light", !isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  const handleNav = (id: string) => {
    onNavigate(id);
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile hamburger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 p-2 rounded-lg bg-card glow-border lg:hidden"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="w-5 h-5 text-primary" /> : <Menu className="w-5 h-5 text-primary" />}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-30 bg-background/80 backdrop-blur-sm lg:hidden" onClick={() => setIsOpen(false)} />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 h-full w-72 bg-sidebar border-r border-border flex flex-col items-center py-6 transition-transform duration-300 lg:translate-x-0 overflow-y-auto ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Theme toggle */}
        <button
          onClick={() => setIsDark(!isDark)}
          className="self-end mr-4 mb-3 p-2 rounded-full border border-border hover:border-primary/50 transition-colors"
          aria-label="Toggle theme"
        >
          {isDark ? <Moon className="w-4 h-4 text-primary" /> : <Sun className="w-4 h-4 text-primary" />}
        </button>

        {/* Profile */}
        <div className="flex flex-col items-center mb-4 px-4">
          <div className="w-28 h-28 rounded-full p-[3px] bg-gradient-to-br from-primary via-primary/60 to-primary shadow-[0_0_25px_hsl(var(--primary)/0.4),0_0_50px_hsl(var(--primary)/0.15)] mb-3">
            <div className="w-full h-full rounded-full border-[3px] border-background overflow-hidden">
              <img src={profileImg} alt="Mohammed Simnanuddin" className="w-full h-full object-cover object-top" />
            </div>
          </div>
          <h2 className="font-display text-sm text-primary text-center">Mohammed Simnanuddin</h2>
          <p className="text-xs text-muted-foreground mt-1">Business | Data Analyst</p>
          <p className="text-xs text-primary/70 mt-0.5">SQL • Power BI • Tableau • Looker Studio</p>
        </div>

        <p className="text-xs text-muted-foreground text-center px-6 mb-4 leading-relaxed">
          Business Data Analyst with 3+ years of experience in MIS reporting, KPI dashboards, and operational analytics.
        </p>

        {/* Nav */}
        <nav className="flex-1 w-full px-4 space-y-1">
          {navItems.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => handleNav(id)}
              className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-body transition-all ${
                activeSection === id
                  ? "bg-primary/10 text-primary border border-primary/30"
                  : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              }`}
            >
              <Icon className="w-4 h-4" />
              {label}
            </button>
          ))}
        </nav>

        {/* Social links */}
        <div className="w-full px-4 space-y-1.5 mt-3">
          <a href="mailto:md15arbaz@gmail.com" className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs text-muted-foreground hover:text-primary hover:bg-sidebar-accent transition-colors">
            <Mail className="w-3.5 h-3.5" /> Email
          </a>
          <a href="https://www.linkedin.com/in/mohammed-simnanuddin-8bb7ba228" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs text-muted-foreground hover:text-primary hover:bg-sidebar-accent transition-colors">
            <Linkedin className="w-3.5 h-3.5" /> LinkedIn
          </a>
          <a href="https://github.com/mdsimnan" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs text-muted-foreground hover:text-primary hover:bg-sidebar-accent transition-colors">
            <Github className="w-3.5 h-3.5" /> GitHub
          </a>
        </div>

        {/* Download Resume */}
        <div className="w-full px-4 mt-4">
          <a
            href="/resume.pdf"
            download="Simnan_Data_Business_Analyst_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-primary text-primary-foreground font-display text-xs tracking-wider hover:shadow-[0_0_20px_hsl(170_100%_50%/0.3)] transition-all"
          >
            <Download className="w-4 h-4" />
            Download Resume
          </a>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
