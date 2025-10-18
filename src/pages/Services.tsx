import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Compass, Wrench, Printer, Package, Truck, CheckCircle, ArrowRight, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Services = () => {
  const services = [
    {
      icon: Compass,
      title: "Design & Engineering",
      description: "From concept to technical execution, we transform your vision into detailed, production-ready specifications.",
      deliverables: [
        "3D visualization & photorealistic renders",
        "Production drawings & technical specs",
        "Materials selection & sampling",
        "BIM integration & documentation"
      ],
      timeline: "2-3 weeks",
      color: "from-gold/20 to-gold-dark/20",
      badge: "Creative"
    },
    {
      icon: Wrench,
      title: "Fabrication",
      description: "120,000 sq ft of state-of-the-art workshops equipped for wood, acrylic, metal, and specialized finishing.",
      deliverables: [
        "CNC precision cutting & routing",
        "Custom joinery & millwork",
        "Professional paint & finishing rooms",
        "Metal fabrication & powder coating"
      ],
      timeline: "3-6 weeks",
      color: "from-red/20 to-red/10",
      badge: "Production"
    },
    {
      icon: Printer,
      title: "Digital Printing & Finishing",
      description: "Large-format printing with EFI & JHF technology, complemented by Kongsberg cutting systems.",
      deliverables: [
        "UV & Latex large-format printing",
        "Vinyl graphics & wallcoverings",
        "CNC cutting & routing",
        "Lamination & mounting"
      ],
      timeline: "1-2 weeks",
      color: "from-primary/20 to-primary/10",
      badge: "Digital"
    },
    {
      icon: Package,
      title: "Logistics & Storage",
      description: "Secure warehousing and comprehensive inventory management across multiple regions.",
      deliverables: [
        "Climate-controlled storage",
        "International freight coordination",
        "Inventory tracking systems",
        "Custom crating & packaging"
      ],
      timeline: "Ongoing",
      color: "from-gold-light/20 to-cream/10",
      badge: "Supply Chain"
    },
    {
      icon: Truck,
      title: "On-site Deployment",
      description: "Professional installation teams ensuring flawless execution from delivery to final handover.",
      deliverables: [
        "Site surveys & pre-installation planning",
        "Certified installation crews",
        "Project management & coordination",
        "Local compliance & permitting"
      ],
      timeline: "1-2 weeks",
      color: "from-gold/20 to-primary/10",
      badge: "Installation"
    },
    {
      icon: CheckCircle,
      title: "QA & Maintenance",
      description: "Rigorous quality control and comprehensive post-installation support programs.",
      deliverables: [
        "ISO 9001:2015 quality protocols",
        "Final inspection & testing",
        "Warranty & maintenance packages",
        "24/7 support availability"
      ],
      timeline: "Ongoing",
      color: "from-cream/20 to-gold-light/10",
      badge: "Quality"
    },
  ];

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
                End-to-End Solutions
              </Badge>
              <h1 className="font-brand text-6xl md:text-8xl font-bold">
                Turnkey <span className="text-gradient-gold">Excellence</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Zero compromises. Complete project delivery from concept to installation, backed by ISO 9001:2015 certification.
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-6">
                <div className="px-6 py-3 bg-card/50 backdrop-blur-sm rounded-full border border-border">
                  <span className="text-sm font-medium">120,000 sq ft Facilities</span>
                </div>
                <div className="px-6 py-3 bg-card/50 backdrop-blur-sm rounded-full border border-border">
                  <span className="text-sm font-medium">80+ Specialists</span>
                </div>
                <div className="px-6 py-3 bg-card/50 backdrop-blur-sm rounded-full border border-border">
                  <span className="text-sm font-medium">1,000+ Projects</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid - Modern Design */}
        <section className="py-32 bg-background relative">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card
                    key={index}
                    className="group relative overflow-hidden hover:shadow-gold transition-all duration-500 animate-fade-in border-border/50"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    <CardContent className="p-10 space-y-6 relative z-10">
                      {/* Header */}
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-elegant">
                            <Icon className="w-8 h-8 text-primary" />
                          </div>
                          <div>
                            <Badge variant="secondary" className="mb-2 text-xs">
                              {service.badge}
                            </Badge>
                            <h3 className="font-heading text-2xl font-bold">
                              {service.title}
                            </h3>
                          </div>
                        </div>
                        <span className="text-sm font-medium text-gold bg-gold/10 px-3 py-1 rounded-full border border-gold/20">
                          {service.timeline}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>

                      {/* Deliverables */}
                      <div className="space-y-3 pt-2">
                        {service.deliverables.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-3 group/item">
                            <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-gold to-primary mt-2 flex-shrink-0 group-hover/item:scale-150 transition-transform" />
                            <span className="text-sm text-muted-foreground group-hover/item:text-foreground transition-colors">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* CTA */}
                      <Button asChild variant="outline" className="w-full group/btn mt-4 border-primary/20 hover:border-primary/40">
                        <Link to="/contact" className="flex items-center justify-center gap-2">
                          Enquire About This Service
                          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section - Enhanced */}
        <section className="relative py-32 bg-gradient-to-br from-secondary via-secondary to-muted overflow-hidden">
          <div className="absolute inset-0 bg-3d-pattern opacity-30" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-10 animate-fade-in">
              <div className="space-y-6">
                <h2 className="font-brand text-5xl md:text-7xl font-bold">
                  Ready to <span className="text-gradient-gold">Elevate</span> Your Brand?
                </h2>
                <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
                  Let's transform your vision into reality with our comprehensive turnkey solutions.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
                <Button asChild size="lg" className="text-lg px-8 group">
                  <Link to="/contact">
                    Start Your Project
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-lg px-8 border-2">
                  <Link to="/gallery">Explore Our Portfolio</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
