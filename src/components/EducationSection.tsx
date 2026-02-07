import { GraduationCap } from 'lucide-react';

const EducationSection = () => {
  return (
    <section id="education" className="content-section bg-background print:py-6">
      <div className="section-container">
        <h2 className="section-title">Education</h2>

        <div className="flex gap-4 items-start">
          {/* Icon */}
          <div className="flex-shrink-0 p-3 rounded-lg bg-accent/10 text-accent print:hidden">
            <GraduationCap className="w-6 h-6" />
          </div>
          
          {/* Content */}
          <div className="flex-1 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
            <div className="space-y-1">
              <h3 className="text-lg font-semibold text-foreground">
                Bachelor of Science in Industrial Engineering
              </h3>
              <p className="text-base text-accent font-medium">
                Technische Hochschule Lübeck
              </p>
              <div className="pt-2 space-y-1">
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground/80">Thesis:</span> "Optimization of the production process of a low-pressure regulator"
                </p>
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground/80">Advisor:</span> Prof. Dr. rer. nat. André Köhler
                </p>
              </div>
            </div>
            <span className="text-sm text-muted-foreground font-mono whitespace-nowrap">
              Sep 2016 – Jul 2020
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
