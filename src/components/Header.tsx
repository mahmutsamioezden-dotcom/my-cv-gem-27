import { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navItems = [
  { label: 'About', href: '#summary' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 print:hidden ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-sm border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-14 md:h-16">
          <a 
            href="#" 
            className={`text-sm font-semibold tracking-tight transition-colors ${
              isScrolled ? 'text-foreground' : 'text-primary-foreground'
            }`}
          >
            M. Sami Özden
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a 
                key={item.href} 
                href={item.href} 
                className={`px-3 py-2 text-sm rounded-md transition-colors ${
                  isScrolled 
                    ? 'text-muted-foreground hover:text-foreground hover:bg-muted' 
                    : 'text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/10'
                }`}
              >
                {item.label}
              </a>
            ))}
            <div className="ml-2">
              <Button 
                asChild 
                size="sm" 
                variant={isScrolled ? "default" : "secondary"}
                className="gap-2"
              >
                <a href="/CV_Mahmut_Sami_Ozden.pdf" download>
                  <Download className="w-3.5 h-3.5" />
                  CV
                </a>
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-md transition-colors ${
              isScrolled 
                ? 'text-foreground hover:bg-muted' 
                : 'text-primary-foreground hover:bg-primary-foreground/10'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border bg-background">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-3 mt-2 border-t border-border">
                <Button asChild size="default" variant="default" className="gap-2 w-full">
                  <a href="/CV_Mahmut_Sami_Ozden.pdf" download>
                    <Download className="w-4 h-4" />
                    Download CV
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
