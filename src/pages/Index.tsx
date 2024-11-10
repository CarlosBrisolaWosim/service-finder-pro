import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import PricingPlans from "@/components/PricingPlans";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Benefits />
      <PricingPlans />
      <Footer />
    </div>
  );
};

export default Index;