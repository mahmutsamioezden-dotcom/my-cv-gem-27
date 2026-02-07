import { Mail, Phone, MapPin, Linkedin, Download, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <header className="relative bg-primary text-primary-foreground overflow-hidden print:bg-white print:text-foreground">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '24px 24px'
        }} />
      </div>

      <div className="relative section-container py-16 md:py-20 lg:py-24 print:py-8">
        <div className="grid lg:grid-cols-[1fr,auto] gap-8 lg:gap-12 items-start">
          {/* Left - Name and Title */}
          <div className="space-y-4">
            <div className="space-y-1">
              <p className="text-primary-foreground/60 text-sm font-medium tracking-wide uppercase print:text-muted-foreground">
                Principal Specialist, Procurement
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight print:text-foreground print:text-3xl">
                Mahmut Sami
                <br />
                Özden
              </h1>
            </div>
            
            <p className="text-primary-foreground/70 text-base max-w-md leading-relaxed print:text-muted-foreground print:text-sm">
              B.Sc. Industrial Engineering · Aerospace & Medical Device Industries
            </p>

            {/* CTA Buttons - Print Hidden */}
            <div className="flex flex-wrap gap-3 pt-2 print:hidden">
              <Button asChild size="default" variant="secondary" className="gap-2 font-medium">
                <a href="/CV_Mahmut_Sami_Ozden.pdf" download>
                  <Download className="w-4 h-4" />
                  Download CV
                </a>
              </Button>
              <Button asChild size="default" variant="ghost" className="gap-2 text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10">
                <a href="#contact">
                  <Mail className="w-4 h-4" />
                  Get in Touch
                </a>
              </Button>
            </div>
          </div>

          {/* Right - Contact Info */}
          <div className="flex flex-col gap-3 text-sm lg:text-right lg:pt-2 print:text-foreground">
            <a 
              href="mailto:Mahmut.sami.oezden@gmail.com" 
              className="flex items-center gap-3 lg:flex-row-reverse hover:text-accent transition-colors group"
            >
              <span className="p-2 rounded-full bg-primary-foreground/10 group-hover:bg-accent/20 transition-colors print:hidden">
                <Mail className="w-4 h-4" />
              </span>
              <span className="hidden print:inline"><Mail className="w-4 h-4 inline mr-2" /></span>
              <span>Mahmut.sami.oezden@gmail.com</span>
            </a>
            <a 
              href="tel:+905464366728" 
              className="flex items-center gap-3 lg:flex-row-reverse hover:text-accent transition-colors group"
            >
              <span className="p-2 rounded-full bg-primary-foreground/10 group-hover:bg-accent/20 transition-colors print:hidden">
                <Phone className="w-4 h-4" />
              </span>
              <span className="hidden print:inline"><Phone className="w-4 h-4 inline mr-2" /></span>
              <span>+90 546 436 67 28</span>
            </a>
            <span className="flex items-center gap-3 lg:flex-row-reverse">
              <span className="p-2 rounded-full bg-primary-foreground/10 print:hidden">
                <MapPin className="w-4 h-4" />
              </span>
              <span className="hidden print:inline"><MapPin className="w-4 h-4 inline mr-2" /></span>
              <span>Lübeck, Germany</span>
            </span>
            <a 
              href="https://linkedin.com/in/mahmut-sami-özden-b49a6616b" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 lg:flex-row-reverse hover:text-accent transition-colors group"
            >
              <span className="p-2 rounded-full bg-primary-foreground/10 group-hover:bg-accent/20 transition-colors print:hidden">
                <Linkedin className="w-4 h-4" />
              </span>
              <span className="hidden print:inline"><Linkedin className="w-4 h-4 inline mr-2" /></span>
              <span>LinkedIn Profile</span>
            </a>
          </div>
        </div>

        {/* Scroll indicator - Print Hidden */}
        <div className="hidden md:flex justify-center pt-12 print:hidden">
          <a 
            href="#summary" 
            className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors animate-bounce"
            aria-label="Scroll to content"
          >
            <ArrowDown className="w-5 h-5" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
