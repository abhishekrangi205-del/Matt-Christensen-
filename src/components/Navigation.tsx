import { useState, useEffect, useRef, useCallback } from "react";
import { useTheme } from "next-themes";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Properties", href: "#properties" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const SECTION_IDS = navLinks.map((l) => l.href.slice(1));

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState<string>(SECTION_IDS[0]);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const { theme, setTheme } = useTheme();
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const viewportMid = window.scrollY + window.innerHeight * 0.35;
      let current = SECTION_IDS[0];
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= viewportMid) current = id;
      }
      setActiveSection(current);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = useCallback(
    (href: string) => {
      setMobileOpen(false);
      const behavior: ScrollBehavior =
        typeof window !== "undefined" &&
        typeof window.matchMedia === "function" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "auto"
          : "smooth";
      document.querySelector(href)?.scrollIntoView({ behavior });
    },
    []
  );

  // Focus first focusable when menu opens, restore to toggle when it closes
  useEffect(() => {
    if (mobileOpen && menuRef.current) {
      const focusables = menuRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])'
      );
      focusables[0]?.focus();
    } else if (!mobileOpen) {
      toggleRef.current?.focus();
    }
  }, [mobileOpen]);

  // Focus trap inside mobile menu
  const onMenuKeyDown = (e: React.KeyboardEvent) => {
    if (e.key !== "Tab" || !menuRef.current) return;
    const focusables = Array.from(
      menuRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled])')
    );
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (e.shiftKey) {
      if (document.activeElement === first) {
        e.preventDefault();
        last?.focus();
      }
    } else {
      if (document.activeElement === last) {
        e.preventDefault();
        first?.focus();
      }
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 h-16 flex flex-row items-center transition-all duration-300",
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b"
          : "bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between">
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleClick("#home"); }}
          className="text-lg font-semibold tracking-tight text-foreground"
          style={{ fontFamily: "'Public Sans', sans-serif" }}
        >
          Matt Christensen
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const sectionId = link.href.slice(1);
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleClick(link.href); }}
                className={cn(
                  "relative text-sm transition-colors duration-200 py-2 after:absolute after:left-0 after:right-0 after:bottom-0 after:h-0.5 after:bg-accent after:rounded-full after:transition-transform after:duration-200 after:origin-left",
                  isActive
                    ? "text-foreground after:scale-x-100"
                    : "text-muted-foreground hover:text-foreground after:scale-x-0 hover:after:scale-x-100"
                )}
              >
                {link.label}
              </a>
            );
          })}
          {mounted && (
            <button
              type="button"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-md border border-border bg-background text-foreground hover:bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
          )}
          <Button
            className="rounded-md bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-200 text-sm focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            onClick={() => handleClick("#contact")}
          >
            Schedule a Consultation
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          ref={toggleRef}
          type="button"
          className="md:hidden text-foreground p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded relative z-[60]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden"
            onClick={() => setMobileOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile slide-out drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            ref={menuRef}
            initial={prefersReducedMotion ? false : { x: "100%" }}
            animate={prefersReducedMotion ? undefined : { x: 0 }}
            exit={prefersReducedMotion ? undefined : { x: "100%" }}
            transition={prefersReducedMotion ? { duration: 0 } : { type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 bottom-0 right-0 z-50 w-[80vw] max-w-sm overflow-y-auto bg-background border-l shadow-2xl md:hidden"
            onKeyDown={onMenuKeyDown}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col h-full px-6 py-20 gap-8">
              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleClick(link.href); }}
                    className={cn(
                      "text-xl transition-colors py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded",
                      activeSection === link.href.slice(1)
                        ? "text-foreground font-semibold border-l-4 border-accent pl-4 -ml-4"
                        : "text-muted-foreground hover:text-foreground pl-0"
                    )}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              
              <div className="mt-auto flex flex-col gap-6 w-full">
                <div className="flex items-center justify-between border-t pt-6">
                  <span className="text-sm font-medium">Theme</span>
                  {mounted && (
                    <button
                      type="button"
                      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                      className="p-3 rounded-md border border-border text-foreground hover:bg-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
                    >
                      {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                    </button>
                  )}
                </div>
                
                <Button
                  size="lg"
                  className="w-full rounded-md bg-accent text-accent-foreground hover:bg-accent/90 text-sm focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  onClick={() => handleClick("#contact")}
                >
                  Schedule a Consultation
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
