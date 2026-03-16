import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const HERO_IMAGE_URL =
  "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1600&q=80";

const HeroSection = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  const scrollTo = (id: string) => {
    const behavior: ScrollBehavior =
      typeof window !== "undefined" &&
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth";
    document.querySelector(id)?.scrollIntoView({ behavior });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center py-[20vh] px-4 overflow-hidden"
    >
      {/* Hero background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HERO_IMAGE_URL})` }}
        aria-hidden
      />
      {/* Gradient overlay for text readability */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/70 to-background/90"
        aria-hidden
      />
      <div className="container relative z-10 w-full h-full flex flex-col md:flex-row items-center justify-center md:justify-between gap-8 pt-10">
        
        {/* Left Side: Text Content */}
        <div className="md:w-1/2 text-left flex flex-col justify-center items-start">
          <motion.p
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 10 }}
            animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.4 }}
            className="text-sm uppercase tracking-[0.2em] text-accent font-semibold mb-4 bg-background/50 backdrop-blur-sm px-3 py-1 rounded-full inline-block"
          >
            Expert Real Estate Services
          </motion.p>
          <motion.h1
            initial={prefersReducedMotion ? undefined : { opacity: 0, x: -20 }}
            animate={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
            transition={
              prefersReducedMotion ? { duration: 0 } : { duration: 0.6, delay: 0.1 }
            }
            className="text-4xl md:text-5xl lg:text-7xl font-serif text-foreground mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            <span className="font-semibold block mb-2">Selling Sudbury</span>
            <span className="text-3xl md:text-4xl lg:text-5xl font-light">Guiding You Home with Integrity and Expertise</span>
          </motion.h1>
          <motion.p
            initial={prefersReducedMotion ? undefined : { opacity: 0 }}
            animate={prefersReducedMotion ? undefined : { opacity: 1 }}
            transition={
              prefersReducedMotion ? { duration: 0 } : { duration: 0.4, delay: 0.3 }
            }
            className="text-lg text-foreground/90 max-w-xl mb-8 font-medium bg-background/40 backdrop-blur-sm p-4 rounded-lg border border-white/20"
          >
            Your trusted partner for buying and selling homes in
            Greater Sudbury with precision, care, and unwavering dedication.
          </motion.p>
          <motion.div
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 10 }}
            animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={
              prefersReducedMotion ? { duration: 0 } : { duration: 0.4, delay: 0.45 }
            }
          >
            <Button
              size="lg"
              onClick={() => scrollTo("#contact")}
              className="rounded-md bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-6 text-base font-semibold transition-all duration-300 shadow-lg shadow-accent/20"
            >
              Schedule a consultation
            </Button>
          </motion.div>
        </div>

        {/* Right Side: Floating Glass Card */}
        <motion.div
            initial={prefersReducedMotion ? undefined : { opacity: 0, scale: 0.95, y: 20 }}
            animate={prefersReducedMotion ? undefined : { opacity: 1, scale: 1, y: 0 }}
            transition={
              prefersReducedMotion ? { duration: 0 } : { duration: 0.7, delay: 0.2 }
            }
            className="md:w-5/12 lg:w-1/3 mt-12 md:mt-0"
        >
          <div className="relative group perspective-1000">
             {/* Decorative background glow */}
             <div className="absolute -inset-1 bg-gradient-to-tr from-accent to-primary opacity-30 blur-xl rounded-2xl group-hover:opacity-50 transition duration-700"></div>
             
             {/* Glass Card */}
             <div className="relative bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl rounded-2xl overflow-hidden flex flex-col items-center p-6 transition-transform duration-500 hover:-translate-y-2">
                
                {/* Image Container with inner shadow/border */}
                <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white/30 shadow-inner mb-6 relative">
                  <img 
                    src="/file_00000000984071fd82154f5f0c70a4af.png" 
                    alt="Tristan Ritchie"
                    className="w-full h-full object-cover object-top filter brightness-105 contrast-105"
                  />
                </div>
                
                <h2 className="text-2xl font-serif font-bold text-white mb-1 shadow-black/50 drop-shadow-md">Tristan Ritchie</h2>
                <p className="text-accent font-medium tracking-wide uppercase text-sm mb-4 shadow-black/50 drop-shadow-sm">Licensed Realtor</p>
                
                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent my-4"></div>
                
                <div className="flex gap-4 w-full justify-center">
                  <div className="text-center">
                    <p className="text-white font-bold text-lg">10+</p>
                    <p className="text-xs text-white/70 uppercase">Years Exp.</p>
                  </div>
                  <div className="w-px h-8 bg-white/20"></div>
                  <div className="text-center">
                    <p className="text-white font-bold text-lg">200+</p>
                    <p className="text-xs text-white/70 uppercase">Properties</p>
                  </div>
                </div>
             </div>
          </div>
        </motion.div>
      </div>
      {/* Scroll to explore */}
      <motion.button
        type="button"
        initial={prefersReducedMotion ? undefined : { opacity: 0 }}
        animate={prefersReducedMotion ? undefined : { opacity: 1 }}
        transition={
          prefersReducedMotion ? { duration: 0 } : { duration: 0.5, delay: 0.7 }
        }
        onClick={() => scrollTo("#properties")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md"
        aria-label="Scroll to explore"
      >
        <span className="text-xs tracking-wider uppercase">Scroll to explore</span>
        <ChevronDown
          className={prefersReducedMotion ? "h-5 w-5" : "h-5 w-5 animate-bounce"}
          aria-hidden
        />
      </motion.button>
    </section>
  );
};

export default HeroSection;
