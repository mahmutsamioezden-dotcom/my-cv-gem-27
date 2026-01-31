const competencies = [
  'Supplier Qualification & Evaluation',
  'Performance Management (KPIs)',
  'Vendor Managed Inventory (VMI)',
  'Cross-functional Coordination',
  'AS9100 / FAA / EASA Compliance',
  'Process Optimization',
  'Technical Documentation',
  'Time Studies & Methods',
  'Quality Management Systems',
  'Stakeholder Reporting',
  'Contract & NDA Management',
  'Production Engineering',
];

const CoreCompetencies = () => {
  return (
    <section className="py-8 md:py-10 bg-background border-b border-border print:py-6">
      <div className="section-container">
        <h2 className="text-lg font-semibold text-foreground mb-4 uppercase tracking-wide">
          Core Competencies
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-2">
          {competencies.map((skill) => (
            <div key={skill} className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreCompetencies;
