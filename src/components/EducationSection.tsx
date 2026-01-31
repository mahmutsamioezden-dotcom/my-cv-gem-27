import { GraduationCap, BookOpen, Award } from 'lucide-react';

const EducationSection = () => {
  return (
    <section id="education" className="py-20 md:py-28 bg-background">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">Academic background and qualifications</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-card hover:shadow-card-hover transition-all duration-300">
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <div className="w-20 h-20 bg-accent/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-10 h-10 text-accent" />
              </div>
              
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className="px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full">
                    Bachelor of Science
                  </span>
                  <span className="text-muted-foreground text-sm">September 2016 – July 2020</span>
                </div>
                
                <h3 className="text-2xl font-display font-semibold text-foreground mb-2">
                  Industrial Engineering
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Technische Hochschule Lübeck
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <BookOpen className="w-5 h-5 text-accent mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">Thesis Advisor</p>
                      <p className="text-muted-foreground">Prof. Dr. rer. nat. André Köhler</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-accent mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">Bachelor's Thesis</p>
                      <p className="text-muted-foreground">
                        "Optimization of the production process of a low-pressure regulator"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Academic Focus Areas */}
        <div className="mt-12 max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold text-foreground mb-6 text-center">Areas of Study</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Production Engineering',
              'Quality Management',
              'Supply Chain Management',
              'Process Optimization',
              'Project Management',
              'Industrial Systems',
            ].map((area) => (
              <div
                key={area}
                className="px-5 py-3 bg-card rounded-xl shadow-card text-foreground font-medium"
              >
                {area}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
