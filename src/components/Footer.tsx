const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-primary">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-primary-foreground/60 text-sm">
          <p>© {currentYear} Mahmut Sami Özden. All rights reserved.</p>
          <p>Principal Specialist, Procurement • B.Sc. Industrial Engineering</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
