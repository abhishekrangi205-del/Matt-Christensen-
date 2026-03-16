import { motion } from "framer-motion";
import { KeyRound, Sparkles, LineChart } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const services = [
  {
    title: "Buying",
    description:
      "Navigate the buying process with confidence. From first showing to final closing, every detail is handled with precision.",
    icon: KeyRound,
  },
  {
    title: "Selling",
    description:
      "Strategic pricing, professional staging, and targeted marketing to maximize your property's value in any market.",
    icon: Sparkles,
  },
  {
    title: "Market Analysis",
    description:
      "Data-driven insights into local trends, pricing, and timing to inform your most important real estate decisions.",
    icon: LineChart,
  },
];

const ServiceCards = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  const scrollToContact = () => {
    const behavior: ScrollBehavior =
      typeof window !== "undefined" &&
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth";
    document.querySelector("#contact")?.scrollIntoView({ behavior });
  };

  return (
    <section id="services" className="py-24 md:py-32 bg-muted/50">
      <div className="container">
        <motion.div
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 16 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.4 }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-3xl md:text-4xl font-light text-foreground mb-4">
            How I Can <span className="font-semibold">Help</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Comprehensive real estate services tailored to your unique needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((service, i) => {
            const Icon = service.icon;
            const isMiddle = i === 1;
            return (
              <motion.div
                key={service.title}
                initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
                whileInView={
                  prefersReducedMotion ? undefined : { opacity: 1, y: 0 }
                }
                viewport={{ once: true }}
                transition={
                  prefersReducedMotion
                    ? { duration: 0 }
                    : { duration: 0.4, delay: i * 0.1 }
                }
                className={cn(
                  "group flex flex-col bg-primary text-primary-foreground p-8 rounded-lg relative overflow-hidden transition-all duration-200 hover:-translate-y-1",
                  "md:shadow-sm",
                  isMiddle && "md:shadow-lg md:-translate-y-2 md:hover:-translate-y-3"
                )}
              >
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/20 text-accent">
                  <Icon size={24} strokeWidth={1.75} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-primary-foreground/70 text-sm leading-relaxed flex-1">
                  {service.description}
                </p>
                <button
                  type="button"
                  onClick={scrollToContact}
                  className="mt-6 text-left text-sm font-medium text-accent hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary rounded"
                >
                  Learn more →
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
