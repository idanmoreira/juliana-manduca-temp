
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import HumanDesignWidget from "@/components/HumanDesignWidget";
import About from "@/components/About";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#161627] text-white overflow-x-hidden">
      <Navigation />
      <div id="inicio">
        <Hero />
      </div>
      <Services />
      <HumanDesignWidget />
      <About />
      <Footer />
    </div>
  );
};

export default Index;
