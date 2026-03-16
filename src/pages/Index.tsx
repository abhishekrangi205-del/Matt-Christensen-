import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import PropertySearch from "@/components/PropertySearch";
import ServiceCards from "@/components/ServiceCards";
import AboutSection from "@/components/AboutSection";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <PropertySearch />
      <ServiceCards />
      <AboutSection />
      <Testimonials />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
