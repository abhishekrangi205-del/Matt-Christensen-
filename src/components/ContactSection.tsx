import { useState } from "react";
import { motion } from "framer-motion";
import { Loader2, Mail, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const inputClass =
  "w-full bg-transparent border-b border-border pb-3 pt-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded transition-colors duration-200 text-sm";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 800));
    toast({ title: "Message sent", description: "Tristan will be in touch shortly." });
    setForm({ name: "", email: "", phone: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-24 md:py-32" aria-labelledby="contact-heading">
      <div className="container max-w-5xl">
        <motion.div
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 16 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.4 }}
          className="text-center mb-12"
        >
          <h2 id="contact-heading" className="section-title text-3xl md:text-4xl font-light text-foreground mb-4">
            Get In <span className="font-semibold">Touch</span>
          </h2>
          <p className="text-muted-foreground text-sm mb-2">
            Ready to start your journey? Reach out and let&apos;s discuss your goals.
          </p>
          <p className="text-sm text-accent font-medium">
            We&apos;ll respond within 24 hours.
          </p>
        </motion.div>

        <motion.div
          initial={prefersReducedMotion ? undefined : { opacity: 0 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1 }}
          viewport={{ once: true }}
          transition={
            prefersReducedMotion ? { duration: 0 } : { duration: 0.4, delay: 0.1 }
          }
          className="grid md:grid-cols-2 gap-12 md:gap-16 items-start"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="contact-name" className="text-foreground mb-1.5 block">
                Full Name
              </Label>
              <input
                id="contact-name"
                type="text"
                placeholder="Your name"
                required
                aria-required="true"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={inputClass}
                disabled={isSubmitting}
              />
            </div>
            <div>
              <Label htmlFor="contact-email" className="text-foreground mb-1.5 block">
                Email
              </Label>
              <input
                id="contact-email"
                type="email"
                placeholder="you@example.com"
                required
                aria-required="true"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={inputClass}
                disabled={isSubmitting}
              />
            </div>
            <div>
              <Label htmlFor="contact-phone" className="text-foreground mb-1.5 block">
                Phone <span className="text-muted-foreground font-normal">(optional)</span>
              </Label>
              <input
                id="contact-phone"
                type="tel"
                placeholder="(555) 000-0000"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className={inputClass}
                disabled={isSubmitting}
              />
            </div>
            <div>
              <Label htmlFor="contact-message" className="text-foreground mb-1.5 block">
                Message
              </Label>
              <textarea
                id="contact-message"
                placeholder="How can we help?"
                rows={4}
                required
                aria-required="true"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className={`${inputClass} resize-none`}
                disabled={isSubmitting}
              />
            </div>
            <div className="pt-2">
              <Button
                type="submit"
                disabled={isSubmitting}
                aria-busy={isSubmitting}
                className="rounded-md bg-primary text-primary-foreground hover:bg-primary/90 px-12 py-3 text-sm transition-all duration-200 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden />
                    Sending…
                  </>
                ) : (
                  "Send Message"
                )}
              </Button>
            </div>
          </form>

          <div className="space-y-8 md:pt-2">
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
                Contact details
              </h3>
              <div className="space-y-4">
                <a
                  href="mailto:tristan@example.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors"
                >
                  <Mail className="h-5 w-5 shrink-0 text-accent/80" />
                  <span>tristan@example.com</span>
                </a>
                <a
                  href="tel:+14165551234"
                  className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors"
                >
                  <Phone className="h-5 w-5 shrink-0 text-accent/80" />
                  <span>(416) 555-1234</span>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
                Hours
              </h3>
              <div className="flex items-start gap-3 text-muted-foreground">
                <Clock className="h-5 w-5 shrink-0 text-accent/80 mt-0.5" />
                <div className="text-sm space-y-1">
                  <p>Mon – Fri: 9am – 6pm</p>
                  <p>Sat: 10am – 4pm</p>
                  <p>Sun: By appointment</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
