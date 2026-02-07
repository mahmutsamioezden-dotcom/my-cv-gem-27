import { Mail, Phone, MapPin, Linkedin, Download, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  return (
    <section id="contact" className="content-section bg-primary text-primary-foreground print:hidden">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left - CTA */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              Let's Connect
            </h2>
            <p className="text-primary-foreground/70 leading-relaxed max-w-md">
              Open to opportunities in procurement, supply chain, and industrial engineering. 
              References available upon request.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button asChild size="default" variant="secondary" className="gap-2 font-medium">
                <a href="/CV_Mahmut_Sami_Ozden.pdf" download>
                  <Download className="w-4 h-4" />
                  Download CV
                </a>
              </Button>
              <Button asChild size="default" variant="ghost" className="gap-2 text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10">
                <a href="mailto:Mahmut.sami.oezden@gmail.com">
                  <Mail className="w-4 h-4" />
                  Send Email
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </Button>
            </div>
          </div>

          {/* Right - Contact Details */}
          <div className="grid sm:grid-cols-2 gap-4">
            <a 
              href="mailto:Mahmut.sami.oezden@gmail.com" 
              className="group p-4 rounded-lg bg-primary-foreground/5 hover:bg-primary-foreground/10 transition-colors"
            >
              <div className="flex items-center gap-3 mb-2">
                <Mail className="w-5 h-5 text-primary-foreground/60" />
                <span className="text-xs uppercase tracking-wide text-primary-foreground/60">Email</span>
              </div>
              <span className="text-sm font-medium group-hover:text-accent transition-colors">
                Mahmut.sami.oezden@gmail.com
              </span>
            </a>

            <a 
              href="tel:+905464366728" 
              className="group p-4 rounded-lg bg-primary-foreground/5 hover:bg-primary-foreground/10 transition-colors"
            >
              <div className="flex items-center gap-3 mb-2">
                <Phone className="w-5 h-5 text-primary-foreground/60" />
                <span className="text-xs uppercase tracking-wide text-primary-foreground/60">Phone</span>
              </div>
              <span className="text-sm font-medium group-hover:text-accent transition-colors">
                +90 546 436 67 28
              </span>
            </a>

            <div className="p-4 rounded-lg bg-primary-foreground/5">
              <div className="flex items-center gap-3 mb-2">
                <MapPin className="w-5 h-5 text-primary-foreground/60" />
                <span className="text-xs uppercase tracking-wide text-primary-foreground/60">Location</span>
              </div>
              <span className="text-sm font-medium">Lübeck, Germany</span>
            </div>

            <a 
              href="https://linkedin.com/in/mahmut-sami-özden-b49a6616b"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 rounded-lg bg-primary-foreground/5 hover:bg-primary-foreground/10 transition-colors"
            >
              <div className="flex items-center gap-3 mb-2">
                <Linkedin className="w-5 h-5 text-primary-foreground/60" />
                <span className="text-xs uppercase tracking-wide text-primary-foreground/60">LinkedIn</span>
              </div>
              <span className="text-sm font-medium group-hover:text-accent transition-colors flex items-center gap-1">
                View Profile
                <ArrowUpRight className="w-3 h-3" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
