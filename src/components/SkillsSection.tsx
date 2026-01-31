const technicalSkills = ['VBA-Excel', 'SolidWorks', 'MS Project', 'Visio', 'CAD Software'];

const standards = ['AS9100', 'ISO 9001', 'FAA/EASA Compliance', 'DIN EN ISO 13485', 'FDA QSIT', 'EU 2017/745'];

const languages = [
  { name: 'German', level: 'Native' },
  { name: 'Turkish', level: 'Native' },
  { name: 'English', level: 'Professional' },
  { name: 'French', level: 'Basic' },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-8 md:py-10 bg-background border-b border-border print:py-6">
      <div className="section-container">
        <h2 className="text-lg font-semibold text-foreground mb-4 uppercase tracking-wide">
          Skills & Qualifications
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Technical Skills */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-2 uppercase tracking-wide">
              Technical Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {technicalSkills.map((skill) => (
                <span 
                  key={skill} 
                  className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Standards & Compliance */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-2 uppercase tracking-wide">
              Standards & Compliance
            </h3>
            <div className="flex flex-wrap gap-2">
              {standards.map((standard) => (
                <span 
                  key={standard} 
                  className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded"
                >
                  {standard}
                </span>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-2 uppercase tracking-wide">
              Languages
            </h3>
            <div className="space-y-1">
              {languages.map((lang) => (
                <div key={lang.name} className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">{lang.name}</span>
                  <span className="text-xs text-muted-foreground/70">{lang.level}</span>
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
