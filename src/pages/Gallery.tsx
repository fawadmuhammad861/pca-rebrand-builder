import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "retail-interiors", name: "Retail Interiors" },
    { id: "mall-booths", name: "Mall & Shop Booths" },
    { id: "stage-events", name: "Stage & Event Sets" },
    { id: "windows-displays", name: "Windows & Displays" },
    { id: "acrylic-specialty", name: "Acrylic & Specialty" },
    { id: "printing-signage", name: "Large-Format Printing" },
    { id: "workshop", name: "Workshop & Process" },
    { id: "other", name: "Other Works" },
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
        {/* Hero Section */}
        <section className="py-24 bg-3d-pattern">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="font-brand text-5xl md:text-6xl font-bold">
                Our Gallery
              </h1>
              <p className="text-xl text-muted-foreground">
                Explore our portfolio of luxury retail installations across the globe
              </p>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 bg-card border-b border-border sticky top-20 z-40">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <Card
                  key={project.id}
                  className="group overflow-hidden hover:shadow-gold transition-all duration-300 cursor-pointer animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-0">
                    {/* Image Placeholder */}
                    <div className="aspect-[4/3] bg-gradient-to-br from-secondary via-secondary/90 to-secondary/80 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
                      <div className="text-center p-6">
                        <Badge variant="outline" className="mb-4 border-primary text-primary">
                          {project.brand}
                        </Badge>
                        <h3 className="font-brand text-2xl font-bold text-primary">
                          {project.title}
                        </h3>
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="p-6 space-y-3">
                      <h3 className="font-heading text-xl font-semibold line-clamp-2">
                        {project.title}
                      </h3>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span>{project.region}</span>
                        <span>{project.year}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="text-center py-16">
                <p className="text-xl text-muted-foreground">
                  No projects found in this category.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
