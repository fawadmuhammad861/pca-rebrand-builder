import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  MapPin, Calendar, Award, Globe, ArrowRight, 
  ChevronRight, Sparkles, TrendingUp, Building2, 
  Users, Trophy, Target, Maximize2, Filter, Grid3x3,
  Layers, Star, Clock, ChevronDown
} from "lucide-react";

interface Project {
  id: number;
  title: string;
  brand: string;
  category: string;
  region: string;
  year: string;
  description: string;
  featured: boolean;
  awards: string[];
  size: string;
  duration: string;
  budget: string;
  team: string;
  image: string;
}

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedRegion, setSelectedRegion] = useState<string>("all");
  const [selectedYear, setSelectedYear] = useState<string>("all");
  const [viewMode, setViewMode] = useState<"grid" | "masonry">("masonry");
  const [isLoaded, setIsLoaded] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isModalOpen) {
        setIsModalOpen(false);
      }
    };
    
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isModalOpen]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  useScrollReveal();

  const categories = [
    { id: "all", name: "All Projects", icon: "🌟", color: "from-primary to-gold" },
    { id: "retail-interiors", name: "Retail Interiors", icon: "🏪", color: "from-blue-500 to-blue-600" },
    { id: "boutiques", name: "Luxury Boutiques", icon: "💎", color: "from-purple-500 to-purple-600" },
    { id: "pop-ups", name: "Pop-Up Experiences", icon: "✨", color: "from-pink-500 to-pink-600" },
    { id: "windows", name: "Window Displays", icon: "🪟", color: "from-amber-500 to-amber-600" },
    { id: "events", name: "Events & Exhibitions", icon: "🎭", color: "from-red-500 to-red-600" },
    { id: "flagship", name: "Flagship Stores", icon: "🏢", color: "from-indigo-500 to-indigo-600" },
  ];

  const regions = [
    { id: "all", name: "Global", flag: "🌍" },
    { id: "KSA", name: "Saudi Arabia", flag: "🇸🇦" },
    { id: "UAE", name: "United Arab Emirates", flag: "🇦🇪" },
    { id: "USA", name: "United States", flag: "🇺🇸" },
    { id: "Canada", name: "Canada", flag: "🇨🇦" },
  ];

  const years = ["all", "2024", "2023", "2022", "2021", "2020"];

  const projects = [
    {
      id: 1,
      title: "DIOR Backstage Experience",
      brand: "DIOR",
      category: "windows",
      region: "KSA",
      year: "2024",
      description: "Immersive window display featuring cutting-edge lighting design and premium materials",
      featured: true,
      awards: ["Best Window Display 2024", "Innovation Award"],
      size: "Large",
      duration: "3 weeks",
      budget: "$250K+",
      team: "15 specialists",
      image: "/image_1.jpg"
    },
    {
      id: 2,
      title: "CHANEL Flagship Boutique",
      brand: "CHANEL",
      category: "flagship",
      region: "UAE",
      year: "2024",
      description: "Complete flagship store design with bespoke fixtures and timeless elegance",
      featured: true,
      awards: ["Luxury Retail Excellence", "Design of the Year"],
      size: "Extra Large",
      duration: "12 weeks",
      budget: "$1M+",
      team: "30 specialists",
      image: "/image_2.webp"
    },
    {
      id: 3,
      title: "GUCCI Alchemist's Garden",
      brand: "GUCCI",
      category: "pop-ups",
      region: "KSA",
      year: "2024",
      description: "Botanical pop-up installation with interactive sensory experiences",
      featured: true,
      awards: ["Innovation Award 2024", "Best Pop-Up"],
      size: "Medium",
      duration: "5 weeks",
      budget: "$400K",
      team: "20 specialists",
      image: "/image_3.webp"
    },
    {
      id: 4,
      title: "LACOSTE World Record Palm",
      brand: "LACOSTE",
      category: "events",
      region: "KSA",
      year: "2023",
      description: "Guinness World Record - Largest cardboard sculpture ever created",
      featured: true,
      awards: ["Guinness World Record", "Engineering Excellence"],
      size: "Massive",
      duration: "8 weeks",
      budget: "$500K",
      team: "40 specialists",
      image: "/image_4.jpg"
    },
    {
      id: 5,
      title: "Louis Vuitton Maison",
      brand: "Louis Vuitton",
      category: "flagship",
      region: "USA",
      year: "2024",
      description: "Iconic flagship store combining heritage craftsmanship with modern luxury",
      featured: true,
      awards: ["Global Design Award"],
      size: "Extra Large",
      duration: "16 weeks",
      budget: "$1.5M",
      team: "35 specialists",
      image: "/image_5.webp"
    },
    {
      id: 6,
      title: "Hermès Artisan Window",
      brand: "Hermès",
      category: "windows",
      region: "Canada",
      year: "2023",
      description: "Craftsmanship-focused window display celebrating artisanal excellence",
      featured: false,
      awards: ["Visual Merchandising Award"],
      size: "Medium",
      duration: "2 weeks",
      budget: "$150K",
      team: "10 specialists",
      image: "/placeholder.svg"
    },
    {
      id: 7,
      title: "Prada Fashion Event Stage",
      brand: "Prada",
      category: "events",
      region: "UAE",
      year: "2023",
      description: "Modular event stage for exclusive fashion showcase",
      featured: false,
      awards: ["Event Design Excellence"],
      size: "Large",
      duration: "6 weeks",
      budget: "$350K",
      team: "25 specialists",
      image: "/placeholder.svg"
    },
    {
      id: 8,
      title: "Cartier Jewelry Exhibition",
      brand: "Cartier",
      category: "boutiques",
      region: "KSA",
      year: "2024",
      description: "Exclusive jewelry exhibition with custom secure display systems",
      featured: false,
      awards: ["Security Innovation Award"],
      size: "Medium",
      duration: "4 weeks",
      budget: "$300K",
      team: "18 specialists",
      image: "/placeholder.svg"
    }
  ];

  const filteredProjects = projects.filter(project => {
    const categoryMatch = selectedCategory === "all" || project.category === selectedCategory;
    const regionMatch = selectedRegion === "all" || project.region === selectedRegion;
    const yearMatch = selectedYear === "all" || project.year === selectedYear;
    return categoryMatch && regionMatch && yearMatch;
  });

  const stats = [
    { value: "1,000+", label: "Projects Delivered", icon: Target, color: "from-blue-500 to-blue-600" },
    { value: "25+", label: "Luxury Brands", icon: Trophy, color: "from-purple-500 to-purple-600" },
    { value: "6", label: "Global Locations", icon: Globe, color: "from-green-500 to-green-600" },
    { value: "16+", label: "Years Excellence", icon: Award, color: "from-amber-500 to-amber-600" },
  ];

  return (
    <div className={`min-h-screen bg-background transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Navigation />
      <main className="pt-20">
        {/* Hero Section - Ultra Premium */}
        <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-background via-primary/5 to-gold/5">
          {/* Animated Background */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDuration: '20s' }} />
            <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-gold/10 rounded-full blur-3xl animate-float-delayed" style={{ animationDuration: '25s' }} />
            <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            {/* Breadcrumb */}
            <div className={`flex items-center gap-2 text-sm text-muted-foreground mb-8 max-w-7xl mx-auto transition-all duration-700 ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`}>
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-foreground font-medium">Portfolio</span>
            </div>

            <div className="max-w-7xl mx-auto">
              <div className={`mb-12 transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                <Badge variant="outline" className="text-gold border-gold/50 mb-6">
                  <Sparkles className="w-3 h-3 mr-1" />
                  1,000+ Projects Worldwide
                </Badge>
                
                <h1 className="font-brand text-5xl md:text-7xl font-bold mb-6 leading-tight">
                  Portfolio of <span className="text-gradient-gold">Excellence</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
                  Discover our world-class luxury retail installations that define the future of brand experiences across four continents
                </p>
              </div>

              {/* Stats Grid */}
              <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 transition-all duration-1000 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                {stats.map((stat, idx) => (
                  <Card key={idx} className="group relative overflow-hidden border-primary/10 hover:border-primary/30 transition-all hover:-translate-y-2 hover:shadow-xl">
                    <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity`} />
                    <CardContent className="p-6 text-center relative">
                      <div className={`inline-flex w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                        <stat.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-3xl md:text-4xl font-bold text-primary mb-1">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Advanced Filters Section - Compact */}
        <section className="sticky top-20 z-40 bg-background/95 backdrop-blur-lg border-b border-primary/10 shadow-lg">
          <div className="container mx-auto px-4 py-3">
            <div className="max-w-7xl mx-auto">
              {/* Filter Toggle for Mobile */}
              <div className="flex items-center justify-between mb-2 md:hidden">
                <h3 className="font-semibold text-sm">Filters</h3>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => setShowFilters(!showFilters)}
                  className="gap-2 h-8"
                >
                  <Filter className="w-3 h-3" />
                  {showFilters ? "Hide" : "Show"}
                  <ChevronDown className={`w-3 h-3 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
                </Button>
              </div>

              <div className={`space-y-3 ${showFilters ? 'block' : 'hidden md:block'}`}>
                {/* Category Filter - Compact */}
                <div className="flex items-start gap-2">
                  <Layers className="w-3.5 h-3.5 text-primary mt-1" />
                  <div className="flex-1">
                    <div className="text-xs font-semibold text-foreground mb-2">Category</div>
                    <div className="flex flex-wrap gap-1.5">
                      {categories.map((category) => (
                        <button
                          key={category.id}
                          onClick={() => setSelectedCategory(category.id)}
                          className={`px-3 py-1.5 rounded-full font-medium text-xs transition-all duration-300 ${
                            selectedCategory === category.id
                              ? `bg-gradient-to-r ${category.color} text-white shadow-md scale-105`
                              : "bg-card border border-primary/20 text-muted-foreground hover:text-foreground hover:border-primary/40"
                          }`}
                        >
                          <span className="flex items-center gap-1.5">
                            <span className="text-sm">{category.icon}</span>
                            <span className="hidden sm:inline">{category.name}</span>
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Region, Year & View - Single Row */}
                <div className="flex flex-wrap items-start gap-4">
                  {/* Region */}
                  <div className="flex items-start gap-2">
                    <MapPin className="w-3.5 h-3.5 text-primary mt-1" />
                    <div>
                      <div className="text-xs font-semibold mb-1.5">Region</div>
                      <div className="flex flex-wrap gap-1.5">
                        {regions.map((region) => (
                          <button
                            key={region.id}
                            onClick={() => setSelectedRegion(region.id)}
                            className={`px-2.5 py-1 rounded-md text-xs transition-all ${
                              selectedRegion === region.id
                                ? "bg-primary text-white"
                                : "bg-card border border-primary/20 hover:border-primary/40"
                            }`}
                          >
                            {region.flag} <span className="hidden sm:inline">{region.name}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Year */}
                  <div className="flex items-start gap-2">
                    <Calendar className="w-3.5 h-3.5 text-primary mt-1" />
                    <div>
                      <div className="text-xs font-semibold mb-1.5">Year</div>
                      <div className="flex flex-wrap gap-1.5">
                        {years.map((year) => (
                          <button
                            key={year}
                            onClick={() => setSelectedYear(year)}
                            className={`px-2.5 py-1 rounded-md text-xs transition-all ${
                              selectedYear === year
                                ? "bg-primary text-white"
                                : "bg-card border border-primary/20 hover:border-primary/40"
                            }`}
                          >
                            {year === "all" ? "All" : year}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* View Mode */}
                  <div className="flex items-start gap-2 ml-auto">
                    <Grid3x3 className="w-3.5 h-3.5 text-primary mt-1" />
                    <div>
                      <div className="text-xs font-semibold mb-1.5">View</div>
                      <div className="flex gap-1.5">
                        <button
                          onClick={() => setViewMode("masonry")}
                          className={`p-1.5 rounded-md transition-all ${
                            viewMode === "masonry" ? "bg-primary text-white" : "bg-card border border-primary/20"
                          }`}
                        >
                          <Layers className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => setViewMode("grid")}
                          className={`p-1.5 rounded-md transition-all ${
                            viewMode === "grid" ? "bg-primary text-white" : "bg-card border border-primary/20"
                          }`}
                        >
                          <Grid3x3 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Results Count - Compact */}
                <div className="flex items-center justify-between text-xs text-muted-foreground pt-2 border-t border-primary/10">
                  <span className="font-medium">{filteredProjects.length} projects</span>
                  {(selectedCategory !== "all" || selectedRegion !== "all" || selectedYear !== "all") && (
                    <button
                      onClick={() => {
                        setSelectedCategory("all");
                        setSelectedRegion("all");
                        setSelectedYear("all");
                      }}
                      className="text-primary hover:text-gold transition-colors text-xs font-medium"
                    >
                      Clear filters
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              {filteredProjects.length > 0 ? (
                <div className={viewMode === "masonry" 
                  ? "columns-1 md:columns-2 lg:columns-3 gap-6" 
                  : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                }>
                  {filteredProjects.map((project, index) => (
                    <Card
                      key={project.id}
                      onClick={() => {
                        setSelectedProject(project);
                        setIsModalOpen(true);
                      }}
                      className={`animate-on-scroll group relative overflow-hidden hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 cursor-pointer border-border/50 hover:border-primary/30 ${
                        viewMode === "masonry" ? "break-inside-avoid mb-6" : ""
                      } ${viewMode === "grid" && project.featured ? "md:col-span-2" : ""}`}
                    >
                      <CardContent className="p-0">
                        {/* Image Container - Fixed Aspect Ratio */}
                        <div className="relative overflow-hidden aspect-[4/3]">
                          <img 
                            src={project.image} 
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          
                          {/* Overlay Gradient */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                          
                          {/* Featured Badge */}
                          {project.featured && (
                            <div className="absolute top-4 left-4">
                              <Badge className="bg-gradient-to-r from-primary to-gold text-white border-0">
                                <Star className="w-3 h-3 mr-1" />
                                Featured
                              </Badge>
                            </div>
                          )}

                          {/* Brand Badge */}
                          <div className="absolute top-4 right-4">
                            <Badge className="bg-black/60 backdrop-blur-sm text-white border-white/20">
                              {project.brand}
                            </Badge>
                          </div>

                          {/* Content Overlay */}
                          <div className="absolute inset-x-0 bottom-0 p-6 text-white transform translate-y-0 group-hover:translate-y-0 transition-transform">
                            <div className="space-y-3">
                              <div className="flex items-center gap-2">
                                <Badge variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-white/20">
                                  {categories.find(c => c.id === project.category)?.name}
                                </Badge>
                                {project.awards.length > 0 && (
                                  <Badge variant="outline" className="bg-gold/20 backdrop-blur-sm text-white border-gold/30">
                                    <Trophy className="w-3 h-3 mr-1" />
                                    Award Winner
                                  </Badge>
                                )}
                              </div>

                              <h3 className="font-brand text-2xl md:text-3xl font-bold">
                                {project.title}
                              </h3>

                              <p className="text-white/90 text-sm md:text-base line-clamp-2">
                                {project.description}
                              </p>

                              <div className="flex flex-wrap items-center gap-4 text-sm text-white/80">
                                <div className="flex items-center gap-1">
                                  <MapPin className="w-4 h-4" />
                                  <span>{project.region}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <Calendar className="w-4 h-4" />
                                  <span>{project.year}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <Clock className="w-4 h-4" />
                                  <span>{project.duration}</span>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Expand Icon - Click to View */}
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                            <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex flex-col items-center justify-center gap-1 border-2 border-white/40">
                              <Maximize2 className="w-8 h-8 text-white" />
                              <span className="text-white text-xs font-semibold">View Details</span>
                            </div>
                          </div>
                        </div>

                        {/* Project Specs */}
                        <div className="p-6 bg-card/50 backdrop-blur-sm border-t border-primary/10">
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div className="space-y-1">
                              <div className="text-xs text-muted-foreground">Project Size</div>
                              <div className="font-semibold text-foreground">{project.size}</div>
                            </div>
                            <div className="space-y-1">
                              <div className="text-xs text-muted-foreground">Team Size</div>
                              <div className="font-semibold text-foreground">{project.team}</div>
                            </div>
                            <div className="space-y-1">
                              <div className="text-xs text-muted-foreground">Budget</div>
                              <div className="font-semibold text-gold">{project.budget}</div>
                            </div>
                            <div className="space-y-1">
                              <div className="text-xs text-muted-foreground">Awards</div>
                              <div className="font-semibold text-primary">{project.awards.length}</div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-24">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
                    <Sparkles className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-brand font-bold text-primary mb-2">No projects found</h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    Try adjusting your filters to discover more projects
                  </p>
                  <Button
                    onClick={() => {
                      setSelectedCategory("all");
                      setSelectedRegion("all");
                      setSelectedYear("all");
                    }}
                    variant="outline"
                  >
                    Reset Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Awards & Recognition */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-gold/5">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="animate-on-scroll text-center mb-12">
                <Badge variant="secondary" className="mb-4">
                  <Trophy className="w-3 h-3 mr-1" />
                  Recognition & Awards
                </Badge>
                <h2 className="font-brand text-4xl md:text-5xl font-bold mb-4">
                  Industry <span className="text-gradient-gold">Excellence</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Recognized globally for innovation, quality, and exceptional craftsmanship
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { award: "Guinness World Record", year: "2023", icon: Trophy },
                  { award: "ISO 9001:2015", year: "Certified", icon: Award },
                  { award: "Design Excellence", year: "2024", icon: Star },
                  { award: "Innovation Leader", year: "2024", icon: TrendingUp }
                ].map((item, idx) => (
                  <Card key={idx} className="animate-on-scroll group text-center p-8 border-primary/10 hover:border-primary/30 transition-all hover:-translate-y-2 hover:shadow-xl">
                    <div className="inline-flex w-16 h-16 rounded-full bg-gradient-to-br from-primary to-gold items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">{item.award}</h3>
                    <p className="text-sm text-muted-foreground">{item.year}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-background via-primary/5 to-gold/5 border-t border-primary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center animate-on-scroll">
              <Badge variant="outline" className="text-gold border-gold/50 mb-6">
                <Sparkles className="w-3 h-3 mr-1" />
                Let's Create Together
              </Badge>
              
              <h2 className="font-brand text-4xl md:text-6xl font-bold mb-6">
                Ready to Build Your <span className="text-gradient-gold">Legacy?</span>
              </h2>
              
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                Join the world's most prestigious luxury brands who trust us to bring their visions to life
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="text-lg px-10 py-6 shadow-xl hover:shadow-2xl hover:scale-105 transition-all">
                  <Link to="/contact">
                    Start Your Project
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-lg px-10 py-6 border-2 hover:scale-105 transition-all">
                  <Link to="/services">
                    Explore Services
                  </Link>
                </Button>
              </div>

              {/* Trust Badges */}
              <div className="mt-16 pt-12 border-t border-primary/10">
                <p className="text-sm text-muted-foreground mb-6">Trusted by world-leading luxury brands</p>
                <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
                  {["DIOR", "CHANEL", "GUCCI", "LACOSTE", "LOUIS VUITTON", "HERMÈS"].map((brand) => (
                    <span key={brand} className="font-brand text-xl text-foreground/60 hover:text-primary transition-colors">
                      {brand}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* Project Detail Modal */}
      {isModalOpen && selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div 
            className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-background rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/80 transition-all"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Content */}
            <div className="relative">
              {/* Hero Image */}
              <div className="relative h-[400px] overflow-hidden">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                
                {/* Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge className="bg-gradient-to-r from-primary to-gold text-white border-0 text-base px-4 py-1">
                      {selectedProject.brand}
                    </Badge>
                    {selectedProject.featured && (
                      <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30">
                        <Star className="w-3 h-3 mr-1" />
                        Featured
                      </Badge>
                    )}
                  </div>
                  <h2 className="font-brand text-4xl md:text-5xl font-bold mb-3">
                    {selectedProject.title}
                  </h2>
                  <p className="text-xl text-white/90 max-w-3xl">
                    {selectedProject.description}
                  </p>
                </div>
              </div>

              {/* Details Section */}
              <div className="p-8 space-y-8">
                {/* Key Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center p-6 bg-gradient-to-br from-primary/5 to-gold/5 rounded-xl border border-primary/10">
                    <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
                    <div className="text-sm text-muted-foreground mb-1">Location</div>
                    <div className="font-bold text-lg text-foreground">{selectedProject.region}</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-primary/5 to-gold/5 rounded-xl border border-primary/10">
                    <Calendar className="w-8 h-8 text-primary mx-auto mb-3" />
                    <div className="text-sm text-muted-foreground mb-1">Year</div>
                    <div className="font-bold text-lg text-foreground">{selectedProject.year}</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-primary/5 to-gold/5 rounded-xl border border-primary/10">
                    <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
                    <div className="text-sm text-muted-foreground mb-1">Duration</div>
                    <div className="font-bold text-lg text-foreground">{selectedProject.duration}</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-primary/5 to-gold/5 rounded-xl border border-primary/10">
                    <Users className="w-8 h-8 text-primary mx-auto mb-3" />
                    <div className="text-sm text-muted-foreground mb-1">Team Size</div>
                    <div className="font-bold text-lg text-foreground">{selectedProject.team}</div>
                  </div>
                </div>

                {/* Project Information */}
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Left Column */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
                        <Building2 className="w-5 h-5 text-primary" />
                        Project Details
                      </h3>
                      <div className="space-y-3">
                        <div className="flex justify-between py-3 border-b border-primary/10">
                          <span className="text-muted-foreground">Category</span>
                          <span className="font-semibold">{categories.find(c => c.id === selectedProject.category)?.name}</span>
                        </div>
                        <div className="flex justify-between py-3 border-b border-primary/10">
                          <span className="text-muted-foreground">Project Size</span>
                          <span className="font-semibold">{selectedProject.size}</span>
                        </div>
                        <div className="flex justify-between py-3 border-b border-primary/10">
                          <span className="text-muted-foreground">Budget</span>
                          <span className="font-semibold text-gold">{selectedProject.budget}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
                        <Trophy className="w-5 h-5 text-primary" />
                        Awards & Recognition
                      </h3>
                      {selectedProject.awards.length > 0 ? (
                        <div className="space-y-3">
                          {selectedProject.awards.map((award, idx) => (
                            <div key={idx} className="flex items-start gap-3 p-4 bg-gradient-to-br from-gold/5 to-primary/5 rounded-lg border border-gold/20">
                              <Award className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                              <span className="font-medium">{award}</span>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-muted-foreground">No awards listed</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-primary/10">
                  <Button asChild size="lg" className="flex-1">
                    <Link to="/contact">
                      Start Similar Project
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="flex-1">
                    <Link to="/services">
                      View Our Services
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Scroll reveal animation hook
function useScrollReveal() {
  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(".animate-on-scroll")
    );

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
            el.style.transition = "opacity 800ms cubic-bezier(0.4, 0, 0.2, 1), transform 800ms cubic-bezier(0.4, 0, 0.2, 1)";
            el.classList.add("animate-in");
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    elements.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(40px)";
      el.style.willChange = "opacity, transform";
      io.observe(el);
    });

    return () => io.disconnect();
  }, []);
}

export default Gallery;
