import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Calendar, Sparkles } from "lucide-react";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { id: "all", name: "All Projects", count: 1000 },
    { id: "retail-interiors", name: "Retail Interiors", count: 250 },
    { id: "mall-booths", name: "Mall & Shop Booths", count: 180 },
    { id: "stage-events", name: "Stage & Event Sets", count: 120 },
    { id: "windows-displays", name: "Windows & Displays", count: 150 },
    { id: "acrylic-specialty", name: "Acrylic & Specialty", count: 100 },
    { id: "printing-signage", name: "Large-Format Printing", count: 90 },
    { id: "workshop", name: "Workshop & Process", count: 60 },
    { id: "other", name: "Other Works", count: 50 },
  ];

  const projects = [
    {
      id: 1,
      title: "DIOR Backstage Window Display",
      brand: "DIOR",
      category: "windows-displays",
      region: "KSA",
      year: "2023",
      image: "dior-backstage",
    },
    {
      id: 2,
      title: "CHANEL Boutique Interior",
      brand: "CHANEL",
      category: "retail-interiors",
      region: "UAE",
      year: "2023",
      image: "chanel-boutique",
    },
    {
      id: 3,
      title: "GUCCI The Alchemist's Garden Pop-Up",
      brand: "GUCCI",
      category: "mall-booths",
      region: "KSA",
      year: "2024",
      image: "gucci-garden",
    },
    {
      id: 4,
      title: "LACOSTE Guinness World Record",
      brand: "LACOSTE",
      category: "stage-events",
      region: "KSA",
      year: "2022",
      image: "lacoste-record",
    },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        {/* Hero Section - Enhanced */}
        <section className="relative py-32 bg-3d-pattern overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/50" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
              <Badge variant="outline" className="text-gold border-gold/50 mb-4">
                <Sparkles className="w-3 h-3 mr-1" />
                1,000+ Completed Projects
              </Badge>
              <h1 className="font-brand text-6xl md:text-8xl font-bold">
                Our <span className="text-gradient-gold">Portfolio</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
                Luxury retail installations that define excellence across KSA, UAE, USA, and Canada
              </p>
            </div>
          </div>
        </section>

        {/* Filters - Modern Pills */}
        <section className="py-12 bg-card/50 backdrop-blur-sm border-y border-border sticky top-20 z-40">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-3 justify-center max-w-5xl mx-auto">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`group relative px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? "bg-gradient-to-r from-gold to-gold-dark text-black shadow-gold scale-105"
                      : "bg-background/50 text-muted-foreground hover:text-foreground hover:bg-background border border-border hover:border-gold/30"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {category.name}
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      selectedCategory === category.id
                        ? "bg-black/20"
                        : "bg-primary/10"
                    }`}>
                      {category.count}+
                    </span>
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid - Modern Cards */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
              {filteredProjects.map((project, index) => (
                <Card
                  key={project.id}
                  className="group relative overflow-hidden hover:shadow-gold transition-all duration-500 cursor-pointer animate-fade-in border-border/50"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <CardContent className="p-0">
                    {/* Image Placeholder with Overlay */}
                    <div className="aspect-[4/3] bg-gradient-to-br from-secondary via-secondary/90 to-secondary/80 flex items-center justify-center relative overflow-hidden">
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                      
                      {/* Content */}
                      <div className="text-center p-8 relative z-20 group-hover:scale-110 transition-transform duration-500">
                        <Badge variant="outline" className="mb-4 border-gold text-gold bg-black/20 backdrop-blur-sm">
                          {project.brand}
                        </Badge>
                        <h3 className="font-brand text-2xl md:text-3xl font-bold text-gradient-gold">
                          {project.title}
                        </h3>
                      </div>

                      {/* Category Badge - Top Right */}
                      <div className="absolute top-4 right-4 z-20">
                        <Badge className="bg-black/50 backdrop-blur-sm border-gold/30">
                          {categories.find(c => c.id === project.category)?.name || "Project"}
                        </Badge>
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="p-6 space-y-4 bg-card group-hover:bg-card/50 transition-colors">
                      <h3 className="font-heading text-xl font-bold line-clamp-2 group-hover:text-gold transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          <span>{project.region}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span>{project.year}</span>
                        </div>
                      </div>
                      
                      {/* View Details Button */}
                      <Button 
                        variant="ghost" 
                        className="w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-gold hover:text-gold-dark hover:bg-gold/10"
                      >
                        View Project Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="text-center py-24">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-muted mb-6">
                  <Sparkles className="w-10 h-10 text-muted-foreground" />
                </div>
                <h3 className="text-2xl font-heading font-semibold mb-2">No projects found</h3>
                <p className="text-lg text-muted-foreground">
                  Try selecting a different category to explore our work.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-br from-secondary via-secondary to-muted border-t border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 className="font-brand text-4xl md:text-6xl font-bold">
                Start Your <span className="text-gradient-gold">Next Project</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Join the world's leading luxury brands who trust us with their retail experiences.
              </p>
              <Button asChild size="lg" className="text-lg px-8">
                <a href="/contact">Get in Touch</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
