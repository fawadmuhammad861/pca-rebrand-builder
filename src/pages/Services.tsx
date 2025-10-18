import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Compass, Wrench, Printer, Package, Truck, CheckCircle } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Compass,
      title: "Design & Engineering",
      deliverables: [
        "Concept development & 3D visualization",
        "Production drawings & technical specifications",
        "Materials approval & sampling",
      ],
      timeline: "2-3 weeks",
    },
    {
      icon: Wrench,
      title: "Fabrication",
      deliverables: [
        "Wood, acrylic, and metal fabrication",
        "Professional paint & finishing",
        "Custom joinery & millwork",
      ],
      timeline: "3-6 weeks",
    },
    {
      icon: Printer,
      title: "Digital Printing & Finishing",
      deliverables: [
        "Large-format printing (EFI/JHF)",
        "Vinyl graphics & application",
        "CNC cutting & routing",
      ],
      timeline: "1-2 weeks",
    },
    {
      icon: Package,
      title: "Logistics & Storage",
      deliverables: [
        "Secure warehousing facilities",
        "Local & international shipping",
        "Inventory management",
      ],
      timeline: "Ongoing",
    },
    {
      icon: Truck,
      title: "On-site Deployment",
      deliverables: [
        "Professional installation teams",
        "Site supervision & coordination",
        "Compliance with local regulations",
      ],
      timeline: "1-2 weeks",
    },
    {
      icon: CheckCircle,
      title: "QA & Maintenance",
      deliverables: [
        "Quality inspection & testing",
        "Post-installation support",
        "Ongoing maintenance programs",
      ],
      timeline: "Ongoing",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-3d-pattern">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="font-brand text-5xl md:text-6xl font-bold">
                Turnkey Execution
              </h1>
              <p className="text-xl text-muted-foreground">
                Zero compromises. Complete project delivery from concept to installation.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card
                    key={index}
                    className="group hover:shadow-gold transition-all duration-300 animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardContent className="p-8 space-y-6">
                      <div className="flex items-start justify-between">
                        <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <Icon className="w-7 h-7 text-primary" />
                        </div>
                        <span className="text-sm font-medium text-muted-foreground">
                          {service.timeline}
                        </span>
                      </div>

                      <div>
                        <h3 className="font-heading text-2xl font-semibold mb-4">
                          {service.title}
                        </h3>
                        <ul className="space-y-2">
                          {service.deliverables.map((item, idx) => (
                            <li key={idx} className="flex items-start space-x-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                              <span className="text-muted-foreground">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Button asChild variant="outline" className="w-full">
                        <Link to="/contact">Enquire About This Service</Link>
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-secondary text-secondary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 className="font-heading text-4xl md:text-5xl font-bold">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl text-muted-foreground">
                Let's discuss how we can bring your vision to life with our turnkey solutions.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg">
                  <Link to="/contact">Get Started</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/gallery">View Our Work</Link>
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
