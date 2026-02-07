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
    <section className="content-section bg-background print:py-6">
      <div className="section-container">
        <h2 className="section-title">Core Competencies</h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {competencies.map((skill) => (
            <div 
              key={skill} 
              className="group flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
              <span className="text-sm text-foreground/80 group-hover:text-foreground transition-colors">
                {skill}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreCompetencies;
