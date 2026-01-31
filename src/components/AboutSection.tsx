import { Target, Eye, Users, Lightbulb, Heart, Sparkles } from 'lucide-react';

const highlights = [
  {
    icon: Target,
    title: 'Result-Oriented',
    description: 'Implementing and designing rationalization measures in an internationally operating mechanical engineering company.',
  },
  {
    icon: Eye,
    title: 'Perfectionist',
    description: 'Planning ahead enables smoother and more efficient execution.',
  },
  {
    icon: Users,
    title: 'Team Player',
    description: 'Enjoying collaborative work in diverse team environments.',
  },
];

const strengths = [
  { icon: Heart, label: 'Sense of Responsibility' },
  { icon: Eye, label: 'Attention to Detail' },
  { icon: Sparkles, label: 'Passion' },
  { icon: Users, label: 'Motivated Leader' },
  { icon: Lightbulb, label: 'Creativity' },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-section-gradient">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">What drives my professional excellence</p>
        </div>

        {/* Highlights */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {highlights.map((item, index) => (
            <div
              key={item.title}
              className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <item.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Strengths */}
        <div className="bg-card rounded-2xl p-8 md:p-12 shadow-card">
          <h3 className="text-2xl font-display font-semibold text-foreground mb-8 text-center">
            Core Strengths
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {strengths.map((strength) => (
              <div
                key={strength.label}
                className="flex items-center gap-3 px-6 py-3 bg-secondary rounded-full"
              >
                <strength.icon className="w-5 h-5 text-accent" />
                <span className="font-medium text-secondary-foreground">{strength.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Selected Highlights */}
        <div className="mt-16">
          <h3 className="text-2xl font-display font-semibold text-foreground mb-8 text-center">
            Selected Highlights
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Supplier performance management with a clear KPI focus (quality, delivery, cost) and stakeholder-ready reporting.',
              'Experience working in regulated environments and supporting audit-ready documentation.',
              'Hands-on cross-functional coordination between engineering, quality, supply chain, and suppliers.',
              'Strong process mindset (time studies, production methods) and continuous improvement orientation.',
            ].map((highlight, index) => (
              <div key={index} className="flex items-start gap-4 p-6 bg-card rounded-xl shadow-card">
                <div className="w-8 h-8 bg-accent/10 rounded-lg flex-shrink-0 flex items-center justify-center">
                  <span className="text-accent font-semibold">{index + 1}</span>
                </div>
                <p className="text-muted-foreground leading-relaxed">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
