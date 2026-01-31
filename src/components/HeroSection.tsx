import { Mail, Phone, MapPin, Linkedin, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <header className="bg-primary text-primary-foreground print:bg-white print:text-foreground">
      <div className="section-container py-8 md:py-12">
        {/* Name and Title Row */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-1 print:text-foreground">
              Mahmut Sami Özden
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 font-medium print:text-muted-foreground">
              Principal Specialist, Procurement
            </p>
            <p className="text-primary-foreground/70 text-sm mt-1 print:text-muted-foreground">
              B.Sc. Industrial Engineering
            </p>
          </div>
          
          {/* Contact Info - Compact Grid */}
          <div className="flex flex-col gap-2 text-sm md:text-right print:text-foreground">
            <a 
              href="mailto:Mahmut.sami.oezden@gmail.com" 
              className="flex items-center gap-2 md:justify-end hover:text-accent transition-colors"
            >
              <Mail className="w-4 h-4" />
              Mahmut.sami.oezden@gmail.com
            </a>
            <a 
              href="tel:+905464366728" 
              className="flex items-center gap-2 md:justify-end hover:text-accent transition-colors"
            >
              <Phone className="w-4 h-4" />
              +90 546 436 67 28
            </a>
            <span className="flex items-center gap-2 md:justify-end">
              <MapPin className="w-4 h-4" />
              Lübeck, Germany
            </span>
            <a 
              href="https://linkedin.com/in/mahmut-sami-özden-b49a6616b" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 md:justify-end hover:text-accent transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn Profile
            </a>
          </div>
        </div>

        {/* Download Button - Print Hidden */}
        <div className="print:hidden">
          <Button asChild size="sm" variant="secondary" className="gap-2">
            <a href="/CV_Mahmut_Sami_Ozden.pdf" download>
              <Download className="w-4 h-4" />
              Download CV (PDF)
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
