const technicalSkills = ['VBA-Excel', 'SolidWorks', 'MS Project', 'Visio', 'CAD Software'];

const standards = ['AS9100', 'ISO 9001', 'FAA/EASA Compliance', 'DIN EN ISO 13485', 'FDA QSIT', 'EU 2017/745'];

const languages = [
  { name: 'German', level: 'Native', percentage: 100 },
  { name: 'Turkish', level: 'Native', percentage: 100 },
  { name: 'English', level: 'Professional', percentage: 85 },
  { name: 'French', level: 'Basic', percentage: 30 },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="content-section bg-muted/40 print:py-6 print:bg-white">
      <div className="section-container">
        <h2 className="section-title">Skills & Qualifications</h2>

        <div className="grid gap-10 md:grid-cols-3">
          {/* Technical Skills */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide">
              Technical Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {technicalSkills.map((skill) => (
                <span 
                  key={skill} 
                  className="text-sm px-3 py-1.5 bg-background border border-border rounded-full text-foreground/80 hover:border-accent/50 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Standards & Compliance */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide">
              Standards & Compliance
            </h3>
            <div className="flex flex-wrap gap-2">
              {standards.map((standard) => (
                <span 
                  key={standard} 
                  className="text-sm px-3 py-1.5 bg-accent/10 text-accent rounded-full font-medium"
                >
                  {standard}
                </span>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide">
              Languages
            </h3>
            <div className="space-y-3">
              {languages.map((lang) => (
                <div key={lang.name} className="space-y-1.5">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-foreground font-medium">{lang.name}</span>
                    <span className="text-muted-foreground text-xs">{lang.level}</span>
                  </div>
                  <div className="h-1.5 bg-border rounded-full overflow-hidden print:hidden">
                    <div 
                      className="h-full bg-accent rounded-full transition-all duration-500"
                      style={{ width: `${lang.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
