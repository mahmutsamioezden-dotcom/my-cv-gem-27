const EducationSection = () => {
  return (
    <section id="education" className="py-8 md:py-10 bg-muted/30 border-b border-border print:py-6 print:bg-white">
      <div className="section-container">
        <h2 className="text-lg font-semibold text-foreground mb-4 uppercase tracking-wide">
          Education
        </h2>

        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
          <div>
            <h3 className="text-base font-semibold text-foreground">
              Bachelor of Science in Industrial Engineering
            </h3>
            <p className="text-sm text-accent font-medium">
              Technische Hochschule Lübeck
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Thesis: "Optimization of the production process of a low-pressure regulator"
            </p>
            <p className="text-sm text-muted-foreground">
              Advisor: Prof. Dr. rer. nat. André Köhler
            </p>
          </div>
          <span className="text-sm text-muted-foreground font-medium whitespace-nowrap">
            Sep 2016 – Jul 2020
          </span>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
