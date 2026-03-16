import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const testimonials = [
  {
    quote:
      "Tristan made the entire process seamless. His attention to detail and market knowledge are truly exceptional.",
    name: "Sarah & David M.",
    context: "First-time Buyers",
    initials: "S&D",
  },
  {
    quote:
      "We sold our home above asking price in under two weeks. His strategy was flawless from start to finish.",
    name: "Michael R.",
    context: "Home Seller",
    initials: "MR",
  },
  {
    quote:
      "Working with Tristan felt less like a transaction and more like having a trusted advisor by our side.",
    name: "Priya & Arjun K.",
    context: "Relocation Buyers",
    initials: "P&A",
  },
  {
    quote:
      "His market analysis gave us the confidence to make the right decision at the right time. Couldn't recommend more highly.",
    name: "Jennifer L.",
    context: "Investment Property",
    initials: "JL",
  },
  {
    quote:
      "Professional, patient, and genuinely invested in our success. Tristan is the gold standard in real estate.",
    name: "Robert & Ellen T.",
    context: "Downsizing Sellers",
    initials: "R&E",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [prefersReducedMotion]);

  const goPrev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  const goNext = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const t = testimonials[current];

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-muted/50">
      <div className="container max-w-3xl">
        <motion.div
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 16 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.4 }}
          className="mb-16 text-center"
        >
          <h2 className="section-title text-3xl md:text-4xl font-light text-foreground mb-4">
            Client <span className="font-semibold">Testimonials</span>
          </h2>
        </motion.div>

        <div className="flex items-center gap-4 md:gap-6">
          {/* Prev arrow */}
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous testimonial"
            className="shrink-0 p-2 rounded-full border border-border bg-background text-foreground hover:bg-muted hover:border-accent/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="min-h-[220px] flex-1 flex flex-col items-center justify-center text-center relative">
            {/* Large opening quote mark */}
            <Quote
              className="absolute top-0 left-1/2 -translate-x-1/2 h-12 w-12 md:h-14 md:w-14 text-accent/30 pointer-events-none"
              aria-hidden
            />
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={
                  prefersReducedMotion ? undefined : { opacity: 0, scale: 0.99 }
                }
                animate={
                  prefersReducedMotion ? undefined : { opacity: 1, scale: 1 }
                }
                exit={prefersReducedMotion ? undefined : { opacity: 0, scale: 0.99 }}
                transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.4 }}
                className="flex flex-col items-center pt-8"
              >
                <p className="text-lg md:text-xl text-foreground font-light leading-relaxed mb-6 italic">
                  {t.quote}
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                  <div
                    className="h-12 w-12 rounded-full bg-accent/20 text-accent flex items-center justify-center text-sm font-semibold shrink-0"
                    aria-hidden
                  >
                    {t.initials}
                  </div>
                  <div className="text-left sm:text-center">
                    <p className="text-sm font-semibold text-foreground">
                      {t.name}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {t.context}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Next arrow */}
          <button
            type="button"
            onClick={goNext}
            aria-label="Next testimonial"
            className="shrink-0 p-2 rounded-full border border-border bg-background text-foreground hover:bg-muted hover:border-accent/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Dot indicators */}
        <div
          className="flex justify-center gap-2 mt-10"
          role="tablist"
          aria-label="Testimonial navigation"
        >
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === current}
              aria-label={`Go to testimonial ${i + 1}`}
              onClick={() => setCurrent(i)}
              className={cn(
                "h-2 rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2",
                i === current
                  ? "w-6 bg-accent"
                  : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
