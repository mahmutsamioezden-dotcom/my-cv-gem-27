const SummarySection = () => {
  return (
    <section className="py-8 md:py-10 bg-muted/30 border-b border-border print:py-6 print:bg-white">
      <div className="section-container">
        <h2 className="text-lg font-semibold text-foreground mb-3 uppercase tracking-wide">
          Professional Summary
        </h2>
        <p className="text-muted-foreground leading-relaxed max-w-4xl">
          Procurement professional in the aerospace industry with a B.Sc. in Industrial Engineering. 
          Experienced in supplier evaluation and qualification, performance management, and cross-functional 
          issue resolution in regulated environments (AS9100, FAA, EASA). Strong process mindset with 
          hands-on experience in production methods, time studies, and continuous improvement. 
          Proven ability to manage supplier compliance, KPI reporting, and stakeholder communication.
        </p>
      </div>
    </section>
  );
};

export default SummarySection;
