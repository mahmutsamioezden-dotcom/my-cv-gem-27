const SummarySection = () => {
  return (
    <section id="summary" className="content-section bg-muted/40 print:py-6 print:bg-white">
      <div className="section-container">
        <h2 className="section-title">About</h2>
        
        <div className="space-y-4">
          <p className="text-lg md:text-xl text-foreground leading-relaxed font-light">
            Procurement professional in the aerospace industry with a B.Sc. in Industrial Engineering.
          </p>
          <p className="text-muted-foreground leading-relaxed max-w-2xl">
            Experienced in supplier evaluation and qualification, performance management, and cross-functional 
            issue resolution in regulated environments (AS9100, FAA, EASA). Strong process mindset with 
            hands-on experience in production methods, time studies, and continuous improvement. 
            Proven ability to manage supplier compliance, KPI reporting, and stakeholder communication.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SummarySection;
