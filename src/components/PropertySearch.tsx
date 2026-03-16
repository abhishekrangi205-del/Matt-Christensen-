import { useState } from "react";
import { Search, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const PRICE_OPTIONS = [
  { value: "any", label: "Any price" },
  { value: "under-500", label: "Under $500k" },
  { value: "500-1m", label: "$500k – $1M" },
  { value: "1m-plus", label: "$1M+" },
];

const BEDS_OPTIONS = [
  { value: "any", label: "Any beds" },
  { value: "1", label: "1+" },
  { value: "2", label: "2+" },
  { value: "3", label: "3+" },
  { value: "4", label: "4+" },
];

const TYPE_OPTIONS = [
  { value: "any", label: "Any type" },
  { value: "house", label: "House" },
  { value: "condo", label: "Condo" },
  { value: "townhouse", label: "Townhouse" },
];

const FEATURED_LISTINGS = [
  {
    id: "1",
    address: "123 Oak Street",
    area: "Sudbury, ON",
    price: "$849,000",
    beds: 3,
    baths: 2,
    type: "House",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "2",
    address: "45 Harbour View Lane",
    area: "Sudbury, ON",
    price: "$1,195,000",
    beds: 4,
    baths: 3,
    type: "Townhouse",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "3",
    address: "78 King West, Unit 1202",
    area: "Sudbury, ON",
    price: "$625,000",
    beds: 2,
    baths: 2,
    type: "Condo",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=600&q=80",
  },
];

const PropertySearch = () => {
  const [query, setQuery] = useState("");
  const [price, setPrice] = useState("any");
  const [beds, setBeds] = useState("any");
  const [type, setType] = useState("any");
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
    <section id="properties" className="py-24 md:py-32">
      <div className="container max-w-4xl">
        <motion.div
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 16 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.4 }}
          className="text-center mb-10"
        >
          <h2 className="section-title text-3xl md:text-4xl font-light text-foreground mb-4">
            Find Your <span className="font-semibold">Property</span>
          </h2>
          <p className="text-muted-foreground">
            Browse available listings or inquire about off-market opportunities.
          </p>
        </motion.div>

        {/* Off-market line above search */}
        <motion.p
          initial={prefersReducedMotion ? undefined : { opacity: 0 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-muted-foreground mb-4"
        >
          Looking for something specific? Search below or ask about{" "}
          <span className="text-accent font-medium">off-market listings</span>.
        </motion.p>

        <motion.div
          initial={prefersReducedMotion ? undefined : { opacity: 0 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1 }}
          viewport={{ once: true }}
          transition={
            prefersReducedMotion ? { duration: 0 } : { duration: 0.4, delay: 0.1 }
          }
          className="mb-6"
        >
          <div className="flex items-center gap-3 border border-input rounded-lg bg-background px-4 py-2 focus-within:ring-2 focus-within:ring-accent focus-within:ring-offset-2 focus-within:border-accent/50 transition-shadow">
            <Search size={18} className="text-muted-foreground shrink-0" />
            <input
              type="text"
              placeholder="Search by location, price, or property type..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 min-w-0 bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none text-base py-2"
              aria-label="Search properties"
            />
          </div>
          {/* Off-market line below search */}
          <p className="text-center text-xs text-muted-foreground mt-3">
            Don’t see what you want? Many opportunities are off-market —{" "}
            <button
              type="button"
              onClick={scrollToContact}
              className="text-accent hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded"
            >
              tell us what you’re looking for
            </button>
            .
          </p>
        </motion.div>

        {/* Filter dropdowns (UI-only) */}
        <motion.div
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 8 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={
            prefersReducedMotion ? { duration: 0 } : { duration: 0.3, delay: 0.15 }
          }
          className="flex flex-wrap items-center gap-3 justify-center mb-14"
        >
          <Select value={price} onValueChange={setPrice}>
            <SelectTrigger className="w-[140px] rounded-md focus:ring-2 focus:ring-accent">
              <SelectValue placeholder="Price" />
            </SelectTrigger>
            <SelectContent>
              {PRICE_OPTIONS.map((opt) => (
                <SelectItem key={opt.value} value={opt.value}>
                  {opt.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={beds} onValueChange={setBeds}>
            <SelectTrigger className="w-[120px] rounded-md focus:ring-2 focus:ring-accent">
              <SelectValue placeholder="Beds" />
            </SelectTrigger>
            <SelectContent>
              {BEDS_OPTIONS.map((opt) => (
                <SelectItem key={opt.value} value={opt.value}>
                  {opt.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={type} onValueChange={setType}>
            <SelectTrigger className="w-[140px] rounded-md focus:ring-2 focus:ring-accent">
              <SelectValue placeholder="Type" />
            </SelectTrigger>
            <SelectContent>
              {TYPE_OPTIONS.map((opt) => (
                <SelectItem key={opt.value} value={opt.value}>
                  {opt.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </motion.div>

        {/* Featured / sample listings */}
        <motion.div
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 16 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.4 }}
          className="mb-12"
        >
          <h3 className="text-lg font-medium text-foreground mb-6 text-center">
            Featured listings
          </h3>
          <div className="grid sm:grid-cols-3 gap-6">
            {FEATURED_LISTINGS.map((listing, i) => (
              <motion.div
                key={listing.id}
                initial={prefersReducedMotion ? undefined : { opacity: 0, y: 12 }}
                whileInView={
                  prefersReducedMotion ? undefined : { opacity: 1, y: 0 }
                }
                viewport={{ once: true }}
                transition={
                  prefersReducedMotion
                    ? { duration: 0 }
                    : { duration: 0.3, delay: 0.1 * i }
                }
              >
                <Card className="overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow">
                  <div className="aspect-[4/3] overflow-hidden bg-muted">
                    <img
                      src={listing.image}
                      alt=""
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <p className="text-sm font-semibold text-foreground">
                      {listing.price}
                    </p>
                    <p className="text-sm text-muted-foreground flex items-center gap-1 mt-0.5">
                      <MapPin className="h-3.5 w-3.5 shrink-0" />
                      {listing.address}, {listing.area}
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">
                      {listing.beds} beds · {listing.baths} baths · {listing.type}
                    </p>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full rounded-md border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                      onClick={scrollToContact}
                    >
                      Inquire
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tell us what you're looking for CTA */}
        <motion.div
          initial={prefersReducedMotion ? undefined : { opacity: 0 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-muted-foreground text-sm mb-4">
            Don’t see the right fit? We have access to off-market and coming-soon
            properties.
          </p>
          <Button
            onClick={scrollToContact}
            className="rounded-md bg-accent text-accent-foreground hover:bg-accent/90 focus-visible:ring-2 focus-visible:ring-accent"
          >
            Tell us what you’re looking for
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default PropertySearch;
