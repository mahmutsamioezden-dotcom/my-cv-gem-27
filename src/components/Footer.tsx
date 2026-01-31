const Footer = () => {
  return (
    <footer className="py-4 bg-muted/50 border-t border-border print:hidden">
      <div className="section-container">
        <p className="text-xs text-muted-foreground text-center">
          © {new Date().getFullYear()} Mahmut Sami Özden • Principal Specialist, Procurement
        </p>
      </div>
    </footer>
  );
};

export default Footer;
