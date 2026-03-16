const scrollToContact = () => {
  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
};

const Footer = () => {
  return (
    <footer className="border-t-2 border-border bg-muted/30 py-12">
      <div className="container max-w-5xl">
        <div className="grid md:grid-cols-3 gap-8 text-sm">
          <div>
            <p className="font-semibold text-foreground mb-2" style={{ fontFamily: "'Public Sans', sans-serif" }}>
              Tristan Ritchie
            </p>
            <p className="text-muted-foreground">
              Expert Real Estate Services
            </p>
          </div>
          <div>
            <p className="font-semibold text-foreground mb-2">Contact</p>
            <div className="space-y-1.5 text-muted-foreground">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToContact();
                }}
                className="block hover:text-accent transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded"
              >
                Get in touch
              </a>
              <a
                href="mailto:tristan@example.com"
                className="block hover:text-accent transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded"
              >
                Email me
              </a>
              <a
                href="tel:+14165551234"
                className="block hover:text-accent transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded"
              >
                Call me
              </a>
            </div>
          </div>
          <div>
            <p className="font-semibold text-foreground mb-2">Follow</p>
            <div className="flex gap-4 text-muted-foreground">
              <a
                href="https://linkedin.com/in/tristanritchie"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded"
              >
                LinkedIn
              </a>
              <a
                href="https://instagram.com/tristanritchie"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded"
              >
                Instagram
              </a>
              <a
                href="https://facebook.com/tristanritchie"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Tristan Ritchie. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
