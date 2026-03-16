import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    quote:
      "Matt made the entire process seamless. His attention to detail and market knowledge are truly exceptional.",
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
      "Working with Matt felt less like a transaction and more like having a trusted advisor by our side.",
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
      "Professional, patient, and genuinely invested in our success. Matt is the gold standard in real estate.",
    name: "Robert & Ellen T.",
    context: "Downsizing Sellers",
    initials: "R&E",
  },
];

const Testimonials = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-muted/50 overflow-hidden">
      <div className="container max-w-5xl px-4 md:px-8">
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

        <Carousel 
          opts={{ align: "center", loop: true }}
          className="w-full max-w-sm md:max-w-2xl lg:max-w-4xl mx-auto cursor-grab active:cursor-grabbing"
        >
          <CarouselContent>
            {testimonials.map((t, index) => (
              <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/1">
                <div className="p-2 md:p-6 text-center">
                  <div className="min-h-[220px] flex flex-col items-center justify-center relative">
                    {/* Large opening quote mark */}
                    <Quote
                      className="absolute top-0 left-1/2 -translate-x-1/2 h-10 w-10 md:h-14 md:w-14 text-accent/30 pointer-events-none"
                      aria-hidden
                    />
                    
                    <div className="flex flex-col items-center pt-8 md:pt-10 relative z-10 w-full">
                      <p className="text-lg md:text-2xl text-foreground font-light leading-relaxed mb-6 italic max-w-2xl whitespace-break-spaces">
                        "{t.quote}"
                      </p>
                      <div className="flex items-center gap-4">
                        <div
                          className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-accent/20 text-accent flex items-center justify-center text-sm font-semibold shrink-0"
                          aria-hidden
                        >
                          {t.initials}
                        </div>
                        <div className="text-left">
                          <p className="text-sm font-semibold text-foreground">
                            {t.name}
                          </p>
                          <p className="text-xs text-muted-foreground mt-0.5">
                            {t.context}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          <div className="hidden md:flex items-center justify-center mt-8 gap-4">
            <CarouselPrevious className="relative inset-auto h-12 w-12 translate-x-0 translate-y-0" />
            <CarouselNext className="relative inset-auto h-12 w-12 translate-x-0 translate-y-0" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
