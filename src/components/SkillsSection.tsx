import { Code, FileCheck, Globe } from 'lucide-react';

const technicalSkills = [
  'VBA-Excel',
  'CAD Software',
  'SolidWorks',
  'MS Project',
  'Visio',
];

const certifications = [
  'ISO 9001',
  'Regulation (EU) 2017/745',
  'FDA QSIT',
  'DIN EN ISO 13485',
  'AS9100',
  'FAA/EASA Compliance',
];

const languages = [
  { name: 'German', level: 5, label: 'Native' },
  { name: 'Turkish', level: 5, label: 'Native' },
  { name: 'English', level: 4, label: 'Professional' },
  { name: 'French', level: 2, label: 'Basic' },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 md:py-28 bg-section-gradient">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">Technical proficiencies and certifications</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Technical Skills */}
          <div className="bg-card rounded-2xl p-8 shadow-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                <Code className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Technical Skills</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {technicalSkills.map((skill) => (
                <span key={skill} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Certifications & Standards */}
          <div className="bg-card rounded-2xl p-8 shadow-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                <FileCheck className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Standards & Compliance</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {certifications.map((cert) => (
                <span key={cert} className="skill-tag">
                  {cert}
                </span>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="bg-card rounded-2xl p-8 shadow-card md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                <Globe className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Languages</h3>
            </div>
            <div className="space-y-4">
              {languages.map((lang) => (
                <div key={lang.name}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-foreground">{lang.name}</span>
                    <span className="text-sm text-muted-foreground">{lang.label}</span>
                  </div>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((level) => (
                      <div
                        key={level}
                        className={`h-2 flex-1 rounded-full ${
                          level <= lang.level ? 'bg-accent' : 'bg-border'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Industry Keywords */}
        <div className="mt-12 bg-card rounded-2xl p-8 shadow-card">
          <h3 className="text-xl font-semibold text-foreground mb-6 text-center">Industry Expertise</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Aerospace Procurement',
              'Supplier Qualification',
              'Performance Management',
              'KPI Reporting',
              'Vendor Managed Inventory',
              'Cross-functional Coordination',
              'Production Methods',
              'Time Studies',
              'Process Optimization',
              'Quality Management',
              'Regulatory Compliance',
              'Technical Documentation',
            ].map((keyword) => (
              <span
                key={keyword}
                className="px-4 py-2 bg-primary/5 text-primary rounded-lg text-sm font-medium"
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
