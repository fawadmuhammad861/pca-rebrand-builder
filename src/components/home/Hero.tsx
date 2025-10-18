import { Button } from "@/components/ui/button";
import { ArrowRight, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const Hero = () => {
  const scrollToExcellence = () => {
    const element = document.getElementById("excellence");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const cubeRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: -20, y: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!cubeRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const xRotation = ((clientY / innerHeight) - 0.5) * -40;
      const yRotation = ((clientX / innerWidth) - 0.5) * 40;
      
      setRotation({ x: xRotation, y: yRotation });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const projectImages = [
    "DIOR Backstage",
    "CHANEL Boutique",
    "GUCCI Garden",
    "LACOSTE Record",
    "Luxury Display",
    "Premium Setup"
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-3d-pattern">
      {/* Subtle 3D Background with Parallax */}
      <div className="absolute inset-0 z-0 parallax-subtle">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted opacity-90" />
      </div>

      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left: Text Content */}
          <div className="space-y-8 animate-fade-in">
            {/* ISO Badge */}
            <div className="flex justify-start">
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
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl font-body">
              Design, fabrication, and turnkey installations across KSA, UAE, USA, and Canada.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-start gap-4 pt-4">
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

          {/* Right: 3D Rotating Cube */}
          <div className="flex items-center justify-center perspective-[1000px] animate-fade-in" style={{ animationDelay: "200ms" }}>
            <div 
              ref={cubeRef}
              className="relative w-80 h-80 transition-transform duration-200 ease-out preserve-3d"
              style={{ 
                transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                transformStyle: 'preserve-3d'
              }}
            >
              {/* Front */}
              <div className="absolute w-full h-full backface-hidden bg-gradient-to-br from-gold-light/20 to-gold/30 border-2 border-gold/40 rounded-lg flex items-center justify-center backdrop-blur-sm"
                style={{ transform: 'translateZ(160px)' }}>
                <div className="text-center p-8">
                  <div className="text-gold text-2xl font-brand mb-2">{projectImages[0]}</div>
                  <div className="text-sm text-muted-foreground">Premium Installation</div>
                </div>
              </div>
              
              {/* Back */}
              <div className="absolute w-full h-full backface-hidden bg-gradient-to-br from-red/20 to-red/30 border-2 border-red/40 rounded-lg flex items-center justify-center backdrop-blur-sm"
                style={{ transform: 'rotateY(180deg) translateZ(160px)' }}>
                <div className="text-center p-8">
                  <div className="text-red text-2xl font-brand mb-2">{projectImages[1]}</div>
                  <div className="text-sm text-muted-foreground">Luxury Retail</div>
                </div>
              </div>
              
              {/* Right */}
              <div className="absolute w-full h-full backface-hidden bg-gradient-to-br from-primary/20 to-primary/30 border-2 border-primary/40 rounded-lg flex items-center justify-center backdrop-blur-sm"
                style={{ transform: 'rotateY(90deg) translateZ(160px)' }}>
                <div className="text-center p-8">
                  <div className="text-primary text-2xl font-brand mb-2">{projectImages[2]}</div>
                  <div className="text-sm text-muted-foreground">Pop-Up Experience</div>
                </div>
              </div>
              
              {/* Left */}
              <div className="absolute w-full h-full backface-hidden bg-gradient-to-br from-gold/20 to-gold-dark/30 border-2 border-gold-dark/40 rounded-lg flex items-center justify-center backdrop-blur-sm"
                style={{ transform: 'rotateY(-90deg) translateZ(160px)' }}>
                <div className="text-center p-8">
                  <div className="text-gold-dark text-2xl font-brand mb-2">{projectImages[3]}</div>
                  <div className="text-sm text-muted-foreground">World Record</div>
                </div>
              </div>
              
              {/* Top */}
              <div className="absolute w-full h-full backface-hidden bg-gradient-to-br from-cream/20 to-cream/30 border-2 border-cream/40 rounded-lg flex items-center justify-center backdrop-blur-sm"
                style={{ transform: 'rotateX(90deg) translateZ(160px)' }}>
                <div className="text-center p-8">
                  <div className="text-cream text-2xl font-brand mb-2">{projectImages[4]}</div>
                  <div className="text-sm text-muted-foreground">Custom Fabrication</div>
                </div>
              </div>
              
              {/* Bottom */}
              <div className="absolute w-full h-full backface-hidden bg-gradient-to-br from-gold-light/20 to-primary/30 border-2 border-primary/40 rounded-lg flex items-center justify-center backdrop-blur-sm"
                style={{ transform: 'rotateX(-90deg) translateZ(160px)' }}>
                <div className="text-center p-8">
                  <div className="text-primary text-2xl font-brand mb-2">{projectImages[5]}</div>
                  <div className="text-sm text-muted-foreground">Turnkey Solutions</div>
                </div>
              </div>
            </div>
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
