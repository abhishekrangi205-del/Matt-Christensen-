import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const ABOUT_IMAGE_URL = "/file_00000000984071fd82154f5f0c70a4af.png";

const stats = [
  { value: "10+", label: "Years experience" },
  { value: "200+", label: "Transactions" },
  { value: "Greater Sudbury & area", label: "Areas served" },
];

const AboutSection = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Headshot / professional image */}
          <motion.div
            initial={prefersReducedMotion ? undefined : { opacity: 0, x: -20 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.5 }}
            className="aspect-[3/4] rounded-lg overflow-hidden bg-muted shadow-md"
          >
            <img
              src={ABOUT_IMAGE_URL}
              alt="Tristan Ritchie, Realtor"
              className="h-full w-full object-cover object-top"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={prefersReducedMotion ? undefined : { opacity: 0, x: 20 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={
              prefersReducedMotion ? { duration: 0 } : { duration: 0.5, delay: 0.1 }
            }
            className="relative pl-8"
          >
            {/* Vertical accent line */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-accent" />

            {/* About label with horizontal accent underline */}
            <div className="mb-4">
              <p className="text-sm uppercase tracking-[0.2em] text-accent mb-2">
                About
              </p>
              <div className="h-0.5 w-12 rounded-full bg-accent" />
            </div>
            <h2 className="section-title section-title-left text-3xl md:text-4xl font-light text-foreground mb-6">
              A Client-First <span className="font-semibold">Philosophy</span>
            </h2>

            {/* Stats row */}
            <div className="flex flex-wrap gap-8 mb-8">
              {stats.map((stat, i) => (
                <div key={stat.label}>
                  <span className="block text-2xl font-semibold text-foreground">
                    {stat.value}
                  </span>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
              <p>
                With deep roots in the local market and an unwavering commitment
                to my clients, I bring a unique blend of market expertise and
                personal attention to every transaction.
              </p>
              <p>
                My approach is built on trust, transparency, and a genuine
                understanding of what home means to you. Whether you're buying
                your first home or selling a long-held property, I navigate the
                complexities so you don't have to.
              </p>
              <p>
                Every client relationship begins with listening — understanding
                your goals, timeline, and vision — and ends with the confidence
                that every detail was handled with care.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
