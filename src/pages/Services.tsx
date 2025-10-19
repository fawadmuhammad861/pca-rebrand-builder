import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Compass, Wrench, Printer, Package, Truck, CheckCircle, ArrowRight, Sparkles,
  Globe, Award, Shield, Zap, Users, Building2, TrendingUp, Clock,
  ChevronRight, Star, MapPin, Factory, Lightbulb, Target
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";

const Services = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Page load animation
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useScrollReveal();
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
    <div className={`min-h-screen bg-background text-foreground transition-all duration-1000 overflow-x-hidden ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
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
              <span className="text-foreground font-medium">Services</span>
            </div>

            <div className="max-w-7xl mx-auto">
              <div className={`mb-12 transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                <Badge variant="outline" className="text-gold border-gold/50 mb-6">
                  <Sparkles className="w-3 h-3 mr-1" />
                  Complete Turnkey Solutions
                </Badge>
                
                <h1 className="font-brand text-5xl md:text-7xl font-bold mb-6 leading-tight">
                  Enterprise-Grade <span className="text-gradient-gold">Luxury Retail</span> Solutions
                </h1>
                
                <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
                  From initial concept to final installation, we deliver comprehensive solutions that set the standard for luxury retail excellence across four continents
                </p>
              </div>

              {/* Stats Grid */}
              <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 transition-all duration-1000 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                {[
                  { value: "120K+ sq ft", label: "Facilities", icon: Building2, color: "from-blue-500 to-blue-600" },
                  { value: "80+", label: "Specialists", icon: Users, color: "from-purple-500 to-purple-600" },
                  { value: "4 Countries", label: "Global Reach", icon: Globe, color: "from-green-500 to-green-600" },
                  { value: "ISO 9001", label: "Certified", icon: Award, color: "from-amber-500 to-amber-600" }
                ].map((stat, idx) => (
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

        {/* Process Timeline Section */}
        <section className="py-24 bg-background relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="animate-on-scroll text-center mb-16">
              <Badge variant="secondary" className="mb-4">
                <Target className="w-3 h-3 mr-1" />
                Our Process
              </Badge>
              <h2 className="font-brand text-4xl md:text-5xl font-bold mb-4">
                Seamless <span className="text-gradient-gold">Project Delivery</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                A proven methodology refined over 1,000+ successful projects
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { phase: "01", title: "Discovery & Planning", desc: "Strategic consultation, site analysis, and detailed project planning", icon: Lightbulb },
                  { phase: "02", title: "Design & Fabrication", desc: "3D visualization, engineering, and precision manufacturing", icon: Factory },
                  { phase: "03", title: "Deployment & Support", desc: "Professional installation, quality assurance, and ongoing maintenance", icon: Shield }
                ].map((step, idx) => (
                  <div key={idx} className="animate-on-scroll group">
                    <Card className="relative overflow-hidden border-primary/10 hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <CardContent className="p-8">
                        <div className="flex items-start gap-4 mb-6">
                          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-gold/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all shadow-lg">
                            <step.icon className="w-7 h-7 text-primary" />
                          </div>
                          <div className="text-5xl font-brand font-bold text-gold/20 group-hover:text-gold/40 transition-colors">
                            {step.phase}
                          </div>
                        </div>
                        <h3 className="font-heading text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                          {step.desc}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid - Modern Design with Scroll Animations */}
        <section className="py-24 bg-muted/30 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-40 left-10 w-72 h-72 bg-gold/10 rounded-full blur-3xl animate-pulse-slow" />
            <div className="absolute bottom-40 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" 
                 style={{ animationDelay: '3s' }} />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            {/* Section Header */}
            <div className="animate-on-scroll text-center mb-16">
              <Badge variant="secondary" className="mb-4">
                <Zap className="w-3 h-3 mr-1" />
                Core Capabilities
              </Badge>
              <h2 className="font-brand text-4xl md:text-5xl font-bold text-foreground mb-4">
                Complete <span className="text-gradient-gold">Turnkey Services</span>
              </h2>
              <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
                Six integrated service divisions working in perfect harmony to deliver exceptional results
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card
                    key={index}
                    className="animate-on-scroll group relative overflow-hidden hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 border-border/50 hover:border-primary/30 cursor-pointer transform hover:-translate-y-2"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    <CardContent className="p-10 space-y-6 relative z-10">
                      {/* Header */}
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-gold/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                            <Icon className="w-8 h-8 text-primary group-hover:text-gold transition-colors duration-300" />
                          </div>
                          <div>
                            <Badge variant="secondary" className="mb-2 text-xs group-hover:bg-primary/20 transition-colors">
                              {service.badge}
                            </Badge>
                            <h3 className="font-heading text-2xl font-bold group-hover:text-primary transition-colors duration-300">
                              {service.title}
                            </h3>
                          </div>
                        </div>
                        <span className="text-sm font-medium text-gold bg-gold/10 px-3 py-1 rounded-full border border-gold/20 group-hover:bg-gold/20 group-hover:scale-110 transition-all duration-300">
                          {service.timeline}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
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
                      <Button asChild variant="outline" className="w-full group/btn mt-4 border-primary/20 hover:border-primary/40 hover:bg-primary/5">
                        <Link to="/contact" className="flex items-center justify-center gap-2">
                          Enquire About This Service
                          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </CardContent>
                    
                    {/* Decorative corner accent */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Global Capabilities Section */}
        <section className="py-24 bg-background relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="animate-on-scroll text-center mb-16">
              <Badge variant="secondary" className="mb-4">
                <Globe className="w-3 h-3 mr-1" />
                Global Operations
              </Badge>
              <h2 className="font-brand text-4xl md:text-5xl font-bold mb-4">
                Worldwide <span className="text-gradient-gold">Presence</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Strategic facilities across four continents, delivering excellence locally
              </p>
            </div>

            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                {[
                  { country: "Saudi Arabia", city: "Riyadh", icon: MapPin, projects: "400+", flag: "🇸🇦" },
                  { country: "United Arab Emirates", city: "Dubai", icon: MapPin, projects: "300+", flag: "🇦🇪" },
                  { country: "United States", city: "New York", icon: MapPin, projects: "200+", flag: "🇺🇸" },
                  { country: "Canada", city: "Toronto", icon: MapPin, projects: "100+", flag: "🇨🇦" }
                ].map((location, idx) => (
                  <div key={idx} className="animate-on-scroll group">
                    <Card className="relative overflow-hidden border-primary/10 hover:border-primary/30 transition-all hover:-translate-y-2 hover:shadow-xl">
                      <CardContent className="p-6 text-center">
                        <div className="text-4xl mb-3">{location.flag}</div>
                        <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">{location.country}</h3>
                        <p className="text-sm text-muted-foreground mb-3">{location.city}</p>
                        <div className="text-2xl font-bold text-gold">{location.projects}</div>
                        <div className="text-xs text-muted-foreground">Projects Delivered</div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>

              {/* Capabilities Grid */}
              <div className="animate-on-scroll grid md:grid-cols-3 gap-6">
                {[
                  { icon: Clock, title: "24/7 Operations", desc: "Round-the-clock production and support capabilities" },
                  { icon: TrendingUp, title: "98% On-Time", desc: "Industry-leading project delivery performance" },
                  { icon: Shield, title: "Full Insurance", desc: "Comprehensive coverage for all projects and installations" }
                ].map((cap, idx) => (
                  <div key={idx} className="bg-gradient-to-br from-card to-card/50 border border-primary/10 rounded-xl p-6 hover:border-primary/30 transition-all hover:scale-105">
                    <cap.icon className="w-10 h-10 text-primary mb-4" />
                    <h4 className="font-bold text-lg mb-2">{cap.title}</h4>
                    <p className="text-sm text-muted-foreground">{cap.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Technology & Certifications */}
        <section className="py-24 bg-muted/30 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Left: Certifications */}
                <div className="animate-on-scroll space-y-8">
                  <div>
                    <Badge variant="secondary" className="mb-4">
                      <Award className="w-3 h-3 mr-1" />
                      Certified Excellence
                    </Badge>
                    <h2 className="font-brand text-4xl md:text-5xl font-bold mb-4">
                      Industry-Leading <span className="text-gradient-gold">Standards</span>
                    </h2>
                    <p className="text-lg text-muted-foreground">
                      Our commitment to quality is validated by international certifications and industry recognition
                    </p>
                  </div>

                  <div className="space-y-4">
                    {[
                      { icon: Award, title: "ISO 9001:2015 Certified", desc: "Quality management systems excellence" },
                      { icon: Star, title: "Guinness World Record", desc: "Largest cardboard sculpture achievement" },
                      { icon: Shield, title: "Safety Compliant", desc: "OSHA and local safety standards adherence" },
                      { icon: TrendingUp, title: "15+ Years Excellence", desc: "Proven track record since 2009" }
                    ].map((cert, idx) => (
                      <div key={idx} className="flex items-start gap-4 p-4 bg-card/50 rounded-xl border border-primary/10 hover:border-primary/30 transition-all hover:translate-x-2">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-gold/10 flex items-center justify-center flex-shrink-0">
                          <cert.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-bold mb-1">{cert.title}</h4>
                          <p className="text-sm text-muted-foreground">{cert.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: Technology */}
                <div className="animate-on-scroll space-y-8">
                  <div>
                    <Badge variant="secondary" className="mb-4">
                      <Zap className="w-3 h-3 mr-1" />
                      Advanced Technology
                    </Badge>
                    <h2 className="font-brand text-4xl md:text-5xl font-bold mb-4">
                      State-of-the-Art <span className="text-gradient-gold">Equipment</span>
                    </h2>
                    <p className="text-lg text-muted-foreground">
                      Cutting-edge machinery and technology powering precision manufacturing
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: "50+", sublabel: "CNC Machines" },
                      { label: "120K+", sublabel: "Sq Ft Space" },
                      { label: "EFI & JHF", sublabel: "Printers" },
                      { label: "Kongsberg", sublabel: "Cutting Systems" },
                      { label: "3D", sublabel: "Visualization" },
                      { label: "BIM", sublabel: "Integration" }
                    ].map((tech, idx) => (
                      <div key={idx} className="bg-gradient-to-br from-primary/5 to-gold/5 border border-primary/20 rounded-xl p-6 text-center hover:scale-105 transition-all">
                        <div className="text-3xl font-bold text-primary mb-2">{tech.label}</div>
                        <div className="text-sm text-muted-foreground">{tech.sublabel}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Indicators - Brands Served */}
        <section className="py-20 bg-background relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="animate-on-scroll text-center max-w-4xl mx-auto">
              <p className="text-sm uppercase tracking-wider text-muted-foreground mb-8">Trusted by the world's most prestigious brands</p>
              <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
                {["DIOR", "CHANEL", "GUCCI", "LACOSTE", "HERMÈS", "LOUIS VUITTON"].map((brand, idx) => (
                  <div key={idx} className="font-brand text-2xl text-foreground/40 hover:text-primary transition-colors">
                    {brand}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - Enhanced with Animations */}
        <section className="relative py-24 bg-gradient-to-br from-background via-primary/5 to-gold/5 overflow-hidden border-t border-primary/10">
          {/* Animated Background */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
            <div className="absolute top-20 left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl animate-float" 
                 style={{ animationDuration: '15s' }} />
            <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float-delayed" 
                 style={{ animationDuration: '18s' }} />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="animate-on-scroll max-w-5xl mx-auto">
              <div className="text-center space-y-6 mb-12">
                <Badge variant="outline" className="text-gold border-gold/50 bg-background/50 backdrop-blur-sm">
                  <Sparkles className="w-3 h-3 mr-1" />
                  Let's Build Something Extraordinary
                </Badge>
                <h2 className="font-brand text-4xl md:text-6xl font-bold text-foreground">
                  Start Your Next <span className="text-gradient-gold">Luxury Retail</span> Project
                </h2>
                <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto">
                  Partner with the industry leader in luxury retail fabrication. From concept to completion, we deliver excellence.
                </p>
              </div>
              
              {/* Key Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                {[
                  { value: "1,000+", label: "Projects Completed" },
                  { value: "98%", label: "On-Time Delivery" },
                  { value: "15+", label: "Years Experience" },
                  { value: "100%", label: "Satisfaction Rate" }
                ].map((metric, idx) => (
                  <div key={idx} className="bg-card/70 backdrop-blur-sm rounded-xl p-6 border border-primary/20 hover:border-primary/40 transition-all hover:scale-105 text-center shadow-lg">
                    <div className="text-3xl font-bold text-primary mb-1">{metric.value}</div>
                    <div className="text-xs text-foreground/60 font-medium">{metric.label}</div>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg" className="text-lg px-10 py-6 group hover:shadow-2xl hover:scale-105 transition-all shadow-lg">
                  <Link to="/contact">
                    Start Your Project
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-lg px-10 py-6 border-2 border-primary/30 hover:bg-primary/10 hover:border-primary/50 hover:scale-105 transition-all bg-background/50 backdrop-blur-sm">
                  <Link to="/about">Learn More About Us</Link>
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

// Scroll reveal animation hook
function useScrollReveal() {
  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(".animate-on-scroll")
    );

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            // Add staggered delay for elements in the same section
            const delay = index * 100;
            setTimeout(() => {
              el.style.opacity = "1";
              el.style.transform = "translateY(0)";
              el.style.transition = "opacity 800ms cubic-bezier(0.4, 0, 0.2, 1), transform 800ms cubic-bezier(0.4, 0, 0.2, 1)";
              el.classList.add("animate-in");
            }, delay);
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    // Prime all elements as hidden before reveal
    elements.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(40px)";
      el.style.willChange = "opacity, transform";
      io.observe(el);
    });

    return () => io.disconnect();
  }, []);
}

export default Services;
