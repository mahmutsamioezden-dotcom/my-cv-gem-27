import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    title: 'Principal Specialist, Procurement',
    company: 'B/E Aerospace Systems GmbH',
    location: 'Lübeck',
    period: 'Jul 2024 – Present',
    responsibilities: [
      'Qualified and evaluated suppliers for critical aerospace products (parts, components, avionics-related items).',
      'Managed supplier compliance and documentation in regulated environments (AS9100, FAA, EASA).',
      'Owned supplier performance tracking (quality, delivery, cost) and KPI reporting for management.',
      'Led supplier onboarding and supported contract/NDA workflows.',
      'Implemented and maintained Vendor Managed Inventory (VMI) to improve availability and inventory efficiency.',
      'Coordinated cross-functional issue resolution (e.g., EOL materials, problem reports, corrective actions).',
    ],
  },
  {
    title: 'Project Engineer – Production Methods and Time Studies',
    company: 'Codan Medizintechnische Geräte GmbH',
    location: 'Lensahn',
    period: 'Oct 2022 – Mar 2023',
    responsibilities: [
      'Supported process and product improvement initiatives, focusing on development and change management within production operations.',
      'Analyzed and optimized production methods and time studies to improve efficiency, standardization, and throughput.',
      'Prepared and maintained machine documentation, including operation and maintenance instructions, ensuring compliance with internal and regulatory requirements.',
      'Coordinated and supported pilot production runs, including trial manufacturing, validation, and approval for series production.',
    ],
  },
  {
    title: 'Calibration Technician',
    company: 'Codan Medizintechnische Geräte GmbH',
    location: 'Lensahn',
    period: '2022 – 2023',
    responsibilities: [
      'Performed and supported calibration activities to ensure measurement accuracy and compliance with quality standards.',
      'Created and updated operating instructions and safety guidelines to ensure safe and compliant use of production equipment.',
      'Collaborated with production, quality, and engineering teams to implement process changes and ensure smooth operational execution.',
    ],
  },
  {
    title: 'Project Management Assistant',
    company: 'Junge die Bäckerei',
    location: 'Lübeck',
    period: 'Dec 2021 – Jun 2022',
    responsibilities: [
      'Supported project software configuration and tailoring to business requirements.',
      'Monitored and controlled project software usage, data quality, and adherence to project standards.',
      'Provided software support for new projects, including onboarding and user guidance.',
      'Tracked cost, delivery dates, and quality KPIs to support on-time, on-budget execution.',
    ],
  },
  {
    title: 'Systems Engineer',
    company: 'Steinbach Ingenieurtechnik Handelsgesellschaft mbH',
    location: 'Ratzeburg',
    period: 'Sep 2020 – Apr 2021',
    responsibilities: [
      'Prepared technical documentation for products and processes to ensure traceability and compliance.',
      'Created CAD designs in SolidWorks to support engineering and manufacturing requirements.',
      'Improved product designs to increase efficiency, quality, and manufacturability.',
    ],
  },
  {
    title: 'Project Manager (Thesis)',
    company: 'Mankenberg GmbH',
    location: 'Lübeck',
    period: 'Mar 2019 – Apr 2020',
    responsibilities: [
      'Performed precision measurements using an MCA articulated measuring arm.',
      'Conducted rework cost analysis to identify cost drivers and improvement opportunities.',
      'Optimized the production process to reduce waste and improve throughput.',
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 md:py-28 bg-background">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-subtitle">My career journey in engineering and procurement</p>
        </div>

        <div className="relative">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-card">
              <div className="bg-card rounded-2xl p-6 md:p-8 shadow-card hover:shadow-card-hover transition-all duration-300">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-1">{exp.title}</h3>
                    <div className="flex items-center gap-2 text-accent font-medium">
                      <Briefcase className="w-4 h-4" />
                      {exp.company}
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </span>
                  </div>
                </div>
                <ul className="space-y-2">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
