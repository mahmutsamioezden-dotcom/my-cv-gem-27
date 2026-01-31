const experiences = [
  {
    title: 'Principal Specialist, Procurement',
    company: 'B/E Aerospace Systems GmbH',
    location: 'Lübeck',
    period: 'Jul 2024 – Present',
    achievements: [
      'Qualified and evaluated suppliers for critical aerospace products (parts, components, avionics-related items)',
      'Managed supplier compliance and documentation in regulated environments (AS9100, FAA, EASA)',
      'Owned supplier performance tracking (quality, delivery, cost) and KPI reporting for management',
      'Implemented Vendor Managed Inventory (VMI) improving availability and inventory efficiency',
      'Coordinated cross-functional issue resolution (EOL materials, problem reports, corrective actions)',
    ],
  },
  {
    title: 'Project Engineer – Production Methods',
    company: 'Codan Medizintechnische Geräte GmbH',
    location: 'Lensahn',
    period: 'Oct 2022 – Mar 2023',
    achievements: [
      'Analyzed and optimized production methods and time studies to improve efficiency and throughput',
      'Supported process improvement initiatives within development and change management',
      'Prepared machine documentation ensuring compliance with internal and regulatory requirements',
      'Coordinated pilot production runs including validation and approval for series production',
    ],
  },
  {
    title: 'Calibration Technician',
    company: 'Codan Medizintechnische Geräte GmbH',
    location: 'Lensahn',
    period: '2022 – 2023',
    achievements: [
      'Performed calibration activities ensuring measurement accuracy and quality standards compliance',
      'Created operating instructions and safety guidelines for production equipment',
      'Collaborated with production, quality, and engineering teams on process changes',
    ],
  },
  {
    title: 'Project Management Assistant',
    company: 'Junge die Bäckerei',
    location: 'Lübeck',
    period: 'Dec 2021 – Jun 2022',
    achievements: [
      'Configured project software and tailored systems to business requirements',
      'Tracked cost, delivery dates, and quality KPIs to support on-time, on-budget execution',
      'Provided software support for new projects including onboarding and user guidance',
    ],
  },
  {
    title: 'Systems Engineer',
    company: 'Steinbach Ingenieurtechnik',
    location: 'Ratzeburg',
    period: 'Sep 2020 – Apr 2021',
    achievements: [
      'Created CAD designs in SolidWorks supporting engineering and manufacturing requirements',
      'Improved product designs to increase efficiency, quality, and manufacturability',
      'Prepared technical documentation for products and processes',
    ],
  },
  {
    title: 'Project Manager (Thesis)',
    company: 'Mankenberg GmbH',
    location: 'Lübeck',
    period: 'Mar 2019 – Apr 2020',
    achievements: [
      'Optimized production process of a low-pressure regulator reducing waste and improving throughput',
      'Conducted rework cost analysis identifying cost drivers and improvement opportunities',
      'Performed precision measurements using MCA articulated measuring arm',
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-8 md:py-10 bg-background border-b border-border print:py-6">
      <div className="section-container">
        <h2 className="text-lg font-semibold text-foreground mb-6 uppercase tracking-wide">
          Professional Experience
        </h2>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="print:break-inside-avoid">
              {/* Header Row */}
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                <div>
                  <h3 className="text-base font-semibold text-foreground">
                    {exp.title}
                  </h3>
                  <p className="text-sm text-accent font-medium">
                    {exp.company}, {exp.location}
                  </p>
                </div>
                <span className="text-sm text-muted-foreground font-medium whitespace-nowrap">
                  {exp.period}
                </span>
              </div>
              
              {/* Achievements */}
              <ul className="space-y-1 ml-4">
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="w-1 h-1 bg-muted-foreground/50 rounded-full mt-2 flex-shrink-0" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
