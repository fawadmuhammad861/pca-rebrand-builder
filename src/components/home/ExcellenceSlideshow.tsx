import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const ExcellenceSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      brand: "DIOR",
      category: "Windows & Displays",
      title: "DIOR Backstage",
      caption: "Luxury window installation with custom acrylic fabrication",
      image: "dior-backstage",
      filterLink: "/gallery?category=windows-displays&brand=dior",
    },
    {
      brand: "CHANEL",
      category: "Retail Interiors",
      title: "CHANEL Boutique",
      caption: "Premium retail interior with signature black and gold accents",
      image: "chanel-boutique",
      filterLink: "/gallery?category=retail-interiors&brand=chanel",
    },
    {
      brand: "GUCCI",
      category: "Mall & Shop Booths",
      title: "GUCCI The Alchemist's Garden",
      caption: "Pop-up installation featuring bespoke woodwork and lighting",
      image: "gucci-garden",
      filterLink: "/gallery?category=mall-booths&brand=gucci",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const currentItem = slides[currentSlide];

  return (
    <section id="excellence" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Excellence in Installation
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Signature installations that set the benchmark for luxury retail
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="relative aspect-[16/9] rounded-lg overflow-hidden bg-card shadow-elegant group">
            {/* Image Placeholder with brand indicator */}
            <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary/90 to-secondary/80 flex items-center justify-center">
              <div className="text-center space-y-4 p-8">
                <Badge variant="outline" className="text-primary border-primary">
                  {currentItem.category}
                </Badge>
                <h3 className="font-brand text-4xl md:text-6xl font-bold text-primary">
                  {currentItem.brand}
                </h3>
                <p className="text-xl text-muted-foreground">{currentItem.title}</p>
                <p className="text-sm text-muted-foreground max-w-md mx-auto">
                  {currentItem.caption}
                </p>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Slide Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentSlide
                      ? "bg-primary w-8"
                      : "bg-background/50 hover:bg-background/80"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-8">
            <Button asChild variant="default" size="lg">
              <Link to={currentItem.filterLink}>
                View {currentItem.brand} Projects
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExcellenceSlideshow;
