import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/home/Hero";
import TrustRow from "@/components/home/TrustRow";
import ProcessCards from "@/components/home/ProcessCards";
import ExcellenceSlideshow from "@/components/home/ExcellenceSlideshow";
import ClientsStrip from "@/components/home/ClientsStrip";
import FacilitiesBand from "@/components/home/FacilitiesBand";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <TrustRow />
        <ProcessCards />
        <ExcellenceSlideshow />
        <ClientsStrip />
        <FacilitiesBand />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
