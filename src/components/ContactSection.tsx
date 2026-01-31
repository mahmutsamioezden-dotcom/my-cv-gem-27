import { Mail, Phone, MapPin, Linkedin, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  return (
    <section id="contact" className="py-8 md:py-10 bg-primary text-primary-foreground print:hidden">
      <div className="section-container">
        <h2 className="text-lg font-semibold mb-6 uppercase tracking-wide">
          Contact
        </h2>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Contact Details */}
          <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
            <a 
              href="mailto:Mahmut.sami.oezden@gmail.com" 
              className="flex items-center gap-2 hover:text-accent transition-colors"
            >
              <Mail className="w-4 h-4" />
              Mahmut.sami.oezden@gmail.com
            </a>
            <a 
              href="tel:+905464366728" 
              className="flex items-center gap-2 hover:text-accent transition-colors"
            >
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

          {/* Download Button */}
          <Button asChild size="sm" variant="secondary" className="gap-2 w-fit">
            <a href="/CV_Mahmut_Sami_Ozden.pdf" download>
              <Download className="w-4 h-4" />
              Download CV
            </a>
          </Button>
        </div>

        <p className="text-xs text-primary-foreground/60 mt-6 pt-4 border-t border-primary-foreground/10">
          References available upon request • Open to opportunities in procurement, supply chain, and industrial engineering
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
