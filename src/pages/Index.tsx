import Navbar from "@/components/detailing/Navbar";
import {
  HeroSection,
  ServicesSection,
  PricingSection,
  PortfolioSection,
  AboutSection,
  ReviewsSection,
  ContactsSection,
  Footer,
} from "@/components/detailing/Sections";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#EDE8DE] overflow-x-hidden" style={{ fontFamily: "'Golos Text', sans-serif" }}>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <PricingSection />
      <PortfolioSection />
      <AboutSection />
      <ReviewsSection />
      <ContactsSection />
      <Footer />
    </div>
  );
};

export default Index;
