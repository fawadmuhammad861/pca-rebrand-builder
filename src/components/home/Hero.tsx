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
  const [rotation, setRotation] = useState({ x: -20, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const animationRef = useRef<number | null>(null);
  const startTimeRef = useRef<number>(Date.now());

  useEffect(() => {
    const animate = () => {
      if (!isHovered) {
        const elapsed = (Date.now() - startTimeRef.current) / 1000;
        
        // Smooth continuous rotation
        const yRotation = elapsed * 15; // 15 degrees per second (24 seconds for full rotation)
        const xRotation = -20 + Math.sin(elapsed * 0.5) * 10; // Gentle tilt oscillation
        
        setRotation({ x: xRotation, y: yRotation });
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isHovered]);

  const projectImages = [
    "DIOR Backstage",
    "CHANEL Boutique",
    "GUCCI Garden",
    "LACOSTE Record",
    "Luxury Display",
    "Premium Setup",
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      {/* Animated Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Gradient Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" 
             style={{ animationDelay: '0s', animationDuration: '8s' }} />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gold/15 rounded-full blur-3xl animate-float-delayed" 
             style={{ animationDelay: '1s', animationDuration: '10s' }} />
        <div className="absolute top-40 right-40 w-64 h-64 bg-primary/15 rounded-full blur-3xl animate-float" 
             style={{ animationDelay: '2s', animationDuration: '12s' }} />
        
        {/* Floating Particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-gold rounded-full animate-pulse opacity-60" 
             style={{ animationDelay: '0.5s' }} />
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-primary/60 rounded-full animate-pulse" 
             style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-gold/70 rounded-full animate-pulse" 
             style={{ animationDelay: '1.5s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-primary/50 rounded-full animate-pulse" 
             style={{ animationDelay: '2s' }} />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5 animate-grid-flow" />
        
        {/* Radial Light Effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full">
          <div className="w-full h-full bg-radial-gradient-gold opacity-20 animate-pulse-slow" />
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="relative grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          
          {/* Mobile: 3D Rotating Cube as Background */}
          <div
            className="absolute inset-0 flex items-center justify-center lg:hidden [perspective:1200px] pointer-events-none z-0"
          >
            <div
              className="relative w-80 h-80 sm:w-96 sm:h-96 [transform-style:preserve-3d] opacity-80"
              style={{ 
                transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                willChange: 'transform'
              }}
            >
              {/* Front */}
              <div
                className="absolute w-full h-full [backface-visibility:hidden] bg-gradient-to-br from-gold-light/30 to-gold/40 border-[6px] border-gold rounded-lg flex items-center justify-center"
                style={{ transform: "translateZ(140px)" }}
              >
                <div className="text-center"><img src="/logo.png" alt="Logo" className="w-full h-full object-contain p-4" /></div>
              </div>

              {/* Back */}
              <div
                className="absolute w-full h-full [backface-visibility:hidden] border-[6px] border-gold rounded-lg overflow-hidden"
                style={{ transform: "rotateY(180deg) translateZ(140px)" }}
              >
                <img
                  src="/image_1.jpg"
                  alt="Luxury Retail"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Right */}
              <div
                className="absolute w-full h-full [backface-visibility:hidden] border-[6px] border-gold rounded-lg overflow-hidden"
                style={{ transform: "rotateY(90deg) translateZ(140px)" }}
              >
                <img
                  src="/image_2.webp"
                  alt="Pop-Up Experience"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Left */}
              <div
                className="absolute w-full h-full [backface-visibility:hidden] border-[6px] border-gold rounded-lg overflow-hidden"
                style={{ transform: "rotateY(-90deg) translateZ(140px)" }}
              >
                <img
                  src="/image_3.webp"
                  alt="World Record"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Top */}
              <div
                className="absolute w-full h-full [backface-visibility:hidden] border-[6px] border-gold rounded-lg overflow-hidden"
                style={{ transform: "rotateX(90deg) translateZ(140px)" }}
              >
                <img
                  src="/image_4.jpg"
                  alt="Custom Fabrication"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Bottom */}
              <div
                className="absolute w-full h-full [backface-visibility:hidden] border-[6px] border-gold rounded-lg overflow-hidden"
                style={{ transform: "rotateX(-90deg) translateZ(140px)" }}
              >
                <img
                  src="/logo.png"
                  alt="Turnkey Solutions"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Mobile: Color Overlay for Text Visibility */}
          <div className="absolute inset-0 lg:hidden bg-gradient-to-b from-background/70 via-background/50 to-background/70 z-5" />

          {/* Left: Text Content */}
          <div className="space-y-8 motion-safe:animate-fade-in relative z-10">
            {/* ISO Badge */}
            <div className="flex justify-start">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-card/90 border border-border/60 rounded-full shadow-elegant backdrop-blur-md">
                <Award className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">ISO 9001:2015 Certified</span>
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="font-brand text-5xl md:text-7xl font-bold tracking-tight [text-shadow:_0_2px_20px_rgb(0_0_0_/_80%)] lg:[text-shadow:none]">
              We build{" "}
              <span className="text-gradient-gold">iconic retail</span>{" "}
              experiences.
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl font-body [text-shadow:_0_2px_15px_rgb(0_0_0_/_70%)] lg:[text-shadow:none]">
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
              <Button size="lg" variant="outline" onClick={scrollToExcellence}>
                View Our Excellence
              </Button>
            </div>
          </div>

          {/* Desktop: 3D Rotating Cube */}
          <div
            className="hidden lg:flex items-center justify-center [perspective:1200px] motion-safe:animate-fade-in"
            style={{ animationDelay: "200ms" }}
          >
            <div
              ref={cubeRef}
              className="relative w-80 h-80 [transform-style:preserve-3d] cursor-pointer transition-transform duration-300 ease-out hover:scale-105"
              style={{ 
                transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                willChange: 'transform'
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => {
                setIsHovered(false);
                startTimeRef.current = Date.now() - (rotation.y / 15) * 1000; // Resume from current position
              }}
            >
              {/* Front */}
              <div
                className="absolute w-full h-full [backface-visibility:hidden] bg-gradient-to-br from-gold-light/20 to-gold/30 border-8 border-gold/80 rounded-lg flex items-center justify-center backdrop-blur-sm"
                style={{ transform: "translateZ(160px)" }}
              >
                <div className="text-center"><img src="/logo.png" alt="Logo" className="w-full h-full object-contain" /></div>
              </div>

              {/* Back */}
              <div
                className="absolute w-full h-full [backface-visibility:hidden] border-8 border-gold/80 rounded-lg overflow-hidden"
                style={{ transform: "rotateY(180deg) translateZ(160px)" }}
              >
                <img
                  src="/image_1.jpg"
                  alt="Luxury Retail"
                  className="w-full h-full object-cover"
                />
              </div>


              {/* Right */}
              <div
                className="absolute w-full h-full [backface-visibility:hidden] border-8 border-gold/80 rounded-lg overflow-hidden"
                style={{ transform: "rotateY(90deg) translateZ(160px)" }}
              >
                <img
                  src="/image_2.webp"
                  alt="Pop-Up Experience"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Left */}
              <div
                className="absolute w-full h-full [backface-visibility:hidden] border-8 border-gold/80 rounded-lg overflow-hidden"
                style={{ transform: "rotateY(-90deg) translateZ(160px)" }}
              >
                <img
                  src="/image_3.webp"
                  alt="World Record"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Top */}
              <div
                className="absolute w-full h-full [backface-visibility:hidden] border-8 border-gold/80 rounded-lg overflow-hidden"
                style={{ transform: "rotateX(90deg) translateZ(160px)" }}
              >
                <img
                  src="/image_4.jpg"
                  alt="Custom Fabrication"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Bottom */}
              <div
                className="absolute w-full h-full [backface-visibility:hidden] border-8 border-gold/80 rounded-lg overflow-hidden"
                style={{ transform: "rotateX(-90deg) translateZ(160px)" }}
              >
                <img
                  src="/logo.png"
                  alt="Turnkey Solutions"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 motion-safe:animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
