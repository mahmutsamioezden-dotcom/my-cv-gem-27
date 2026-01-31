import { Mail, Phone, MapPin, Linkedin, Download, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-hero-gradient text-primary-foreground">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-2">Get In Touch</h2>
          <p className="text-primary-foreground/70 text-lg">
            Let's discuss opportunities and collaborations
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <a
                href="mailto:Mahmut.sami.oezden@gmail.com"
                className="flex items-center gap-4 p-4 bg-primary-foreground/10 rounded-xl hover:bg-primary-foreground/15 transition-colors group"
              >
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <p className="text-sm text-primary-foreground/60">Email</p>
                  <p className="font-medium group-hover:text-accent transition-colors">
                    Mahmut.sami.oezden@gmail.com
                  </p>
                </div>
                <ExternalLink className="w-5 h-5 ml-auto text-primary-foreground/40 group-hover:text-accent transition-colors" />
              </a>

              <a
                href="tel:+905464366728"
                className="flex items-center gap-4 p-4 bg-primary-foreground/10 rounded-xl hover:bg-primary-foreground/15 transition-colors group"
              >
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <p className="text-sm text-primary-foreground/60">Phone</p>
                  <p className="font-medium group-hover:text-accent transition-colors">
                    +90 546 436 67 28
                  </p>
                </div>
                <ExternalLink className="w-5 h-5 ml-auto text-primary-foreground/40 group-hover:text-accent transition-colors" />
              </a>

              <div className="flex items-center gap-4 p-4 bg-primary-foreground/10 rounded-xl">
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <p className="text-sm text-primary-foreground/60">Location</p>
                  <p className="font-medium">Schwartauer Landstraße 73, Lübeck, Germany</p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-6">
              <a
                href="https://linkedin.com/in/mahmut-sami-özden-b49a6616b"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-primary-foreground/10 rounded-xl hover:bg-primary-foreground/15 transition-colors group"
              >
                <div className="w-12 h-12 bg-[#0077B5] rounded-xl flex items-center justify-center">
                  <Linkedin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-primary-foreground/60">LinkedIn</p>
                  <p className="font-medium group-hover:text-accent transition-colors">
                    Connect with me
                  </p>
                </div>
                <ExternalLink className="w-5 h-5 ml-auto text-primary-foreground/40 group-hover:text-accent transition-colors" />
              </a>

              <a
                href="/CV_Mahmut_Sami_Ozden.pdf"
                download
                className="flex items-center gap-4 p-4 bg-accent rounded-xl hover:bg-accent/90 transition-colors group"
              >
                <div className="w-12 h-12 bg-accent-foreground/20 rounded-xl flex items-center justify-center">
                  <Download className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <p className="text-sm text-accent-foreground/80">Download</p>
                  <p className="font-medium text-accent-foreground">Get my full CV (PDF)</p>
                </div>
              </a>

              <div className="p-6 bg-primary-foreground/5 rounded-xl border border-primary-foreground/10">
                <p className="text-primary-foreground/80 text-center">
                  Open to new opportunities in procurement, supply chain management, and industrial engineering.
                </p>
              </div>
            </div>
          </div>

          {/* References Note */}
          <div className="text-center pt-8 border-t border-primary-foreground/10">
            <p className="text-primary-foreground/60 text-sm">
              Professional references available upon request
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
