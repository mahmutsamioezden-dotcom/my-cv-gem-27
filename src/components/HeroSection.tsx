import { Mail, Phone, MapPin, Linkedin, Download, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profilePhoto from '@/assets/profile-photo.png';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-hero-gradient text-primary-foreground overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10 py-24 md:py-32">
        <div className="grid md:grid-cols-3 gap-12 items-center">
          {/* Content */}
          <div className="md:col-span-2 space-y-6">
            <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <p className="text-accent font-medium mb-2">Industrial Engineering Professional</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-4">
                Mahmut Sami Özden
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/80 font-light">
                Principal Specialist, Procurement
              </p>
            </div>

            <p className="text-lg text-primary-foreground/70 max-w-2xl animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Procurement professional in the aerospace industry with a B.Sc. in Industrial Engineering. 
              Experienced in supplier evaluation and qualification, performance management, and cross-functional 
              issue resolution in regulated environments (AS9100, FAA, EASA).
            </p>

            <div className="flex flex-wrap gap-4 text-sm text-primary-foreground/80 animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <a href="mailto:Mahmut.sami.oezden@gmail.com" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Mail className="w-4 h-4" />
                Mahmut.sami.oezden@gmail.com
              </a>
              <a href="tel:+905464366728" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Phone className="w-4 h-4" />
                +90 546 436 67 28
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Lübeck, Germany
              </span>
              <a 
                href="https://linkedin.com/in/mahmut-sami-özden-b49a6616b" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-accent transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </div>

            <div className="flex flex-wrap gap-4 pt-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <Button asChild size="lg" variant="secondary" className="gap-2">
                <a href="/CV_Mahmut_Sami_Ozden.pdf" download>
                  <Download className="w-5 h-5" />
                  Download CV
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <a href="#contact">
                  Get in Touch
                </a>
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="hidden md:flex justify-center animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <div className="w-64 h-64 lg:w-72 lg:h-72 rounded-2xl overflow-hidden border-4 border-primary-foreground/20 shadow-2xl">
                <img
                  src={profilePhoto}
                  alt="Mahmut Sami Özden"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent rounded-xl flex items-center justify-center">
                <span className="text-accent-foreground font-display font-bold text-lg">B.Sc.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-primary-foreground/50 hover:text-primary-foreground transition-colors"
        aria-label="Scroll to content"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
};

export default HeroSection;
