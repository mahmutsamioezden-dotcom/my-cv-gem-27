const Footer = () => {
  return (
    <footer className="py-6 bg-background border-t border-border print:hidden">
      <div className="section-container">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Mahmut Sami Özden
          </p>
          <p className="text-xs">
            Principal Specialist, Procurement · Lübeck, Germany
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
