import { useState } from "react";
import { Menu, X, Home, User, Briefcase, GraduationCap, FolderOpen, Wrench, Mail, Linkedin, Github, Download, Moon } from "lucide-react";

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
        className={`fixed top-0 left-0 z-40 h-full w-72 bg-sidebar border-r border-border flex flex-col items-center py-8 transition-transform duration-300 lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Profile */}
        <div className="flex flex-col items-center mb-6 px-4">
          <div className="w-20 h-20 rounded-full border-2 border-primary overflow-hidden mb-3 flex items-center justify-center bg-secondary">
            <User className="w-10 h-10 text-primary" />
          </div>
          <h2 className="font-display text-sm text-primary text-center">Mohammed Simnanuddin</h2>
          <p className="text-xs text-muted-foreground mt-1">Business | Data Analyst</p>
          <p className="text-xs text-primary/70 mt-0.5">SQL • Power BI • Tableau • Looker Studio</p>
        </div>

        <p className="text-xs text-muted-foreground text-center px-6 mb-6 leading-relaxed">
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
        <div className="w-full px-4 space-y-2 mt-4">
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
      </aside>
    </>
  );
};

export default Sidebar;
