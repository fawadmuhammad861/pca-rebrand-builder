import { Button } from "@/components/ui/button";
import { ArrowRight, Award } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  const scrollToExcellence = () => {
    const element = document.getElementById("excellence");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-3d-pattern">
      {/* Subtle 3D Background with Parallax */}
      <div className="absolute inset-0 z-0 parallax-subtle">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted opacity-90" />
      </div>

      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          {/* ISO Badge */}
          <div className="flex justify-center">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-card border border-border rounded-full shadow-elegant">
              <Award className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">ISO 9001:2015 Certified</span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="font-brand text-5xl md:text-7xl font-bold tracking-tight">
            We build{" "}
            <span className="text-gradient-gold">iconic retail</span>{" "}
            experiences.
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-body">
            Design, fabrication, and turnkey installations across KSA, UAE, USA, and Canada.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button asChild size="lg" variant="default" className="group">
              <Link to="/contact">
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToExcellence}
            >
              View Our Excellence
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
