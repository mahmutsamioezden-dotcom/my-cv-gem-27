import { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navItems = [
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 print:hidden ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-sm shadow-sm border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-12">
          <a href="#" className="text-sm font-semibold text-foreground">
            M. Sami Özden
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a 
                key={item.href} 
                href={item.href} 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </a>
            ))}
            <Button asChild size="sm" variant="outline" className="gap-2 h-8 text-xs">
              <a href="/CV_Mahmut_Sami_Ozden.pdf" download>
                <Download className="w-3 h-3" />
                CV
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-1 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-3 border-t border-border bg-background">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-foreground py-1"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button asChild size="sm" variant="outline" className="gap-2 w-fit mt-2">
                <a href="/CV_Mahmut_Sami_Ozden.pdf" download>
                  <Download className="w-3 h-3" />
                  Download CV
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
