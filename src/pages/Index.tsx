import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  const handleNavigate = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar activeSection={activeSection} onNavigate={handleNavigate} />
      <main className="flex-1 lg:ml-72 w-full max-w-full overflow-x-hidden">
        <div className="max-w-4xl mx-auto">
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <EducationSection />
          <ProjectsSection />
          <SkillsSection />
          <ContactSection />
        </div>
      </main>
    </div>
  );
};

export default Index;
