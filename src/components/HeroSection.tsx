const HeroSection = () => (
  <section id="home" className="min-h-screen flex flex-col justify-center px-4 sm:px-8">
    <p className="font-mono text-xs text-muted-foreground tracking-widest mb-4">// WELCOME</p>
    <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
      <span className="gradient-text">Business Data</span>
      <br />
      <span className="gradient-text">Analyst</span>
    </h1>
    <p className="font-display text-base sm:text-lg md:text-xl text-primary/80 mt-3 tracking-wider">
      Data • Insights • Decisions
    </p>
    <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mt-6 leading-relaxed font-body">
      Business Data Analyst with 3+ years of experience in MIS reporting,
      KPI dashboards, SLA monitoring, and operational analytics.
      Experienced in SQL, Advanced Excel, Power BI, Tableau, and Looker Studio
      for analyzing business data, building dashboards, and delivering
      actionable insights that drive strategic decisions.
    </p>
    <p className="text-primary/70 text-xs sm:text-sm font-mono mt-4">
      SQL | Power BI | Tableau | Excel | Looker Studio | Data Visualization
    </p>
    <div className="flex flex-wrap gap-3 mt-8">
      <a href="#projects" className="px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-display text-xs sm:text-sm tracking-wider hover:shadow-[0_0_20px_hsl(170_100%_50%/0.3)] transition-all">
        View Projects
      </a>
      <a href="#contact" className="px-6 py-2.5 rounded-lg border border-primary/50 text-primary font-display text-xs sm:text-sm tracking-wider hover:bg-primary/10 transition-all">
        Contact Me
      </a>
    </div>
  </section>
);

export default HeroSection;
