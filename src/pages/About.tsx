import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, Sparkles, Award, Users, Globe, Building2 } from "lucide-react";

/**
 * PCA About Page – React + Tailwind
 *
 * Notes:
 * - Place hero/background images in /public/resources/ as used below.
 * - Tailwind required. No external CSS dependencies.
 * - Animations: IntersectionObserver adds .animate-in on scroll.
 * - Navbar: translucent, adds shadow on scroll.
 * - Enhanced with hover effects, load animations, and theme colors
 */

export default function AboutPage() {
  const [navScrolled, setNavScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setNavScrolled(window.scrollY > 10);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    
    // Page load animation
    const timer = setTimeout(() => setIsLoaded(true), 100);
    
    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimeout(timer);
    };
  }, []);

  useScrollReveal();

  const geometricBgStyle: React.CSSProperties = useMemo(
    () => ({
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      zIndex: -1,
      opacity: 0.08,
      backgroundImage:
        "linear-gradient(45deg, transparent 45%, rgba(199,159,94,0.1) 50%, transparent 55%)," +
        "linear-gradient(-45deg, transparent 45%, rgba(0,0,0,0.05) 50%, transparent 55%)",
      backgroundSize: "100px 100px",
    }),
    []
  );

  return (
    <div className={`min-h-screen bg-background text-foreground transition-all duration-1000 overflow-x-hidden ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      {/* Background */}
      <div style={geometricBgStyle} />

     <Navigation />

      {/* Hero - Modern Design */}
      <section className="relative py-20 md:py-24 overflow-hidden bg-gradient-to-br from-background via-primary/5 to-gold/5">
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
            <span className="text-foreground font-medium">About Us</span>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className={`mb-12 transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <Badge variant="outline" className="text-gold border-gold/50 mb-6">
                <Sparkles className="w-3 h-3 mr-1" />
                16+ Years of Excellence
              </Badge>
              
              <h1 className="font-brand text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Our Story of <span className="text-gradient-gold">Excellence</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
                Crafting iconic retail experiences for the world's most prestigious brands across KSA, UAE, USA, and Canada
              </p>
            </div>

            {/* Stats Grid */}
            <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 transition-all duration-1000 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              {[
                { icon: Building2, label: "1,000+", sublabel: "Projects Delivered", color: "from-blue-500 to-blue-600" },
                { icon: Users, label: "80+", sublabel: "Specialists", color: "from-purple-500 to-purple-600" },
                { icon: Globe, label: "4 Countries", sublabel: "Global Reach", color: "from-green-500 to-green-600" },
                { icon: Award, label: "ISO 9001", sublabel: "Certified", color: "from-amber-500 to-amber-600" }
              ].map((stat, idx) => (
                <Card key={idx} className="group relative overflow-hidden border-primary/10 hover:border-primary/30 transition-all hover:-translate-y-2 hover:shadow-xl">
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity`} />
                  <CardContent className="p-6 text-center relative">
                    <div className={`inline-flex w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-primary mb-1">{stat.label}</div>
                    <div className="text-sm text-muted-foreground">{stat.sublabel}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="w-full bg-background py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Left Corner: Text Content */}
            <div className="animate-on-scroll space-y-8">
              <div className="space-y-6">
                <h2 className="font-brand text-5xl md:text-6xl font-bold text-primary leading-tight">
                  Crafting Luxury{" "}
                  <span className="text-gradient-gold">Since 2009</span>
                </h2>
                
                <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
                  <p>
                    Private Collection Arabia is an inter-connected global network of leading manufacturing and designing retail visual merchandising for all high-end brands around the world. We provide the best talent, creativity, technology and innovation to some of the world's most iconic and successful brands, offering comprehensive marketing solutions spanning brand advertising and specialty services.
                  </p>
                  
                  <p>
                    We are specialists with turnkey solutions - a single stop destination for top brands for all advertising and marketing solutions. Our journey has been marked by continuous innovation, unwavering commitment to quality, and partnerships with prestigious luxury brands. From DIOR Backstage installations to our Guinness World Record achievement with LACOSTE, every project demonstrates our dedication to excellence.
                  </p>
                  
                  <p>
                    Today, with over 120,000 square feet of state-of-the-art facilities across 6 locations and a team of 80+ highly skilled specialists, we continue to push the boundaries of luxury retail fabrication. Our in-house capabilities include woodwork, acrylic work, metal work, painting, and a printing house - delivering complete turnkey solutions with logistical support both locally and internationally.
                  </p>
                </div>
              </div>

              {/* Key Achievements */}
              <div className="grid grid-cols-2 gap-6 pt-8">
                <div className="text-center p-6 bg-card/50 rounded-xl border border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg">
                  <div className="text-3xl font-bold text-primary">16+</div>
                  <div className="text-sm text-muted-foreground mt-1">Years of Excellence</div>
                </div>
                <div className="text-center p-6 bg-card/50 rounded-xl border border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg">
                  <div className="text-3xl font-bold text-primary">120K+</div>
                  <div className="text-sm text-muted-foreground mt-1">Sq Ft Facilities</div>
                </div>
              </div>
            </div>

            {/* Right Corner: Animated Company Logo */}
            <div className="animate-on-scroll flex items-center justify-center lg:justify-end">
              <div className="relative w-full max-w-[500px] aspect-square lg:mr-0">
                {/* Rotating Background Elements */}
                <div className="absolute inset-0">
                  <div className="absolute inset-0 border-4 border-primary/10 rounded-full animate-spin" style={{animationDuration: '25s'}}></div>
                  <div className="absolute inset-12 border-2 border-gold/20 rounded-full animate-spin" style={{animationDuration: '20s', animationDirection: 'reverse'}}></div>
                  <div className="absolute inset-24 border border-primary/30 rounded-full animate-spin" style={{animationDuration: '15s'}}></div>
                </div>
                
                {/* Center Company Logo */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    {/* Main Logo */}
                    <div className="w-64 h-64 md:w-80 md:h-80 flex items-center justify-center transform hover:scale-105 transition-transform duration-500 p-8">
                      <img 
                        src="/logo.png" 
                        alt="PCA Private Collection Arabia Logo" 
                        className="w-full h-full object-contain"
                      />
                    </div>
                    
                    {/* Floating Brand Elements */}
                    <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 w-10 h-10 md:w-12 md:h-12 bg-gold rounded-full flex items-center justify-center shadow-lg animate-bounce" style={{animationDelay: '0s'}}>
                      <span className="text-white text-base md:text-lg">🏆</span>
                    </div>
                    <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 w-10 h-10 md:w-12 md:h-12 bg-primary rounded-full flex items-center justify-center shadow-lg animate-bounce" style={{animationDelay: '1s'}}>
                      <span className="text-white text-base md:text-lg">⭐</span>
                    </div>
                    <div className="absolute top-1/2 -left-8 md:-left-12 w-6 h-6 md:w-8 md:h-8 bg-gold-light rounded-full animate-bounce" style={{animationDelay: '2s'}}></div>
                    <div className="absolute top-1/2 -right-8 md:-right-12 w-6 h-6 md:w-8 md:h-8 bg-primary rounded-full animate-bounce" style={{animationDelay: '3s'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="bg-card py-24">
        <div className="mx-auto max-w-6xl px-6">
          {/* Country Flags */}
          <div className="animate-on-scroll flex justify-center items-center gap-4 md:gap-8 mb-12">
            {[
              { flag: "🇸🇦", name: "Saudi Arabia" },
              { flag: "🇦🇪", name: "UAE" },
              { flag: "🇺🇸", name: "United States" },
              { flag: "🇨🇦", name: "Canada" }
            ].map((country, index) => (
              <div 
                key={country.name} 
                className="group relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-primary/10 to-gold/10 border-2 border-primary/20 flex items-center justify-center text-4xl md:text-5xl transition-all duration-300 hover:scale-110 hover:border-primary/40 hover:shadow-xl cursor-pointer">
                  {country.flag}
                </div>
                {/* Tooltip */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <span className="text-xs font-medium text-muted-foreground whitespace-nowrap">{country.name}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="animate-on-scroll text-center mb-16">
            <h2 className="font-brand text-4xl md:text-5xl font-bold text-primary mb-6">
              Global <span className="text-gradient-gold">Presence</span>
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
              Serving luxury brands across 6 strategic locations in four countries with state-of-the-art facilities and local expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              { country: "Saudi Arabia", city: "Riyadh", projects: "400+", year: "2009", flag: "🇸🇦", info: "Headquarters" },
              { country: "Saudi Arabia", city: "Dammam", projects: "200+", year: "2010", flag: "🇸🇦", info: "Regional Hub" },
              { country: "Saudi Arabia", city: "Jeddah", projects: "250+", year: "2011", flag: "🇸🇦", info: "Western Region" },
              { country: "UAE", city: "Dubai", projects: "300+", year: "2012", flag: "🇦🇪", info: "Gulf Operations" },
              { country: "United States", city: "Houston, Texas", projects: "100+", year: "2018", flag: "🇺🇸", info: "North America" },
              { country: "Canada", city: "Toronto, Ontario", projects: "100+", year: "2018", flag: "🇨🇦", info: "North America" }
            ].map((location, index) => (
              <div key={`${location.country}-${location.city}`} className="animate-on-scroll group text-center p-8 bg-background/50 rounded-2xl border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary/10 to-gold/10 border-2 border-primary/30 rounded-full flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
                  {location.flag}
                </div>
                <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-3">
                  {location.info}
                </div>
                <h3 className="font-semibold text-lg text-primary mb-1">{location.country}</h3>
                <p className="text-muted-foreground mb-3">{location.city}</p>
                <div className="text-2xl font-bold text-gold mb-1">{location.projects}</div>
                <div className="text-sm text-muted-foreground">Since {location.year}</div>
              </div>
            ))}
          </div>

          {/* Facilities Showcase */}
          <div className="animate-on-scroll bg-gradient-to-r from-primary/5 to-gold/5 rounded-3xl p-12 text-center">
            <h3 className="font-brand text-3xl font-bold text-primary mb-6">State-of-the-Art Facilities</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="text-4xl font-bold text-primary">120,000+</div>
                <div className="text-muted-foreground">Square Feet of Manufacturing Space</div>
              </div>
              <div className="space-y-4">
                <div className="text-4xl font-bold text-primary">50+</div>
                <div className="text-muted-foreground">Advanced CNC Machines</div>
              </div>
              <div className="space-y-4">
                <div className="text-4xl font-bold text-primary">24/7</div>
                <div className="text-muted-foreground">Production Capabilities</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="animate-on-scroll text-center">
            <h2 className="font-brand text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our <span className="text-gradient-gold">Values</span>
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
              The principles that guide every project and partnership.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {values.map((v, index) => (
              <div key={v.title} className={`value-card group animate-on-scroll cursor-pointer transform transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl hover:shadow-primary/20 ${isLoaded ? 'delay-' + (index * 100) : ''}`}>
                <div className="relative overflow-hidden rounded-3xl bg-card p-8 shadow-lg border border-primary/10 transition-all duration-300 group-hover:shadow-xl group-hover:border-primary/30 h-full">
                  {/* Icon Container */}
                  <div className="flex justify-center mb-8">
                    <div className="grid h-24 w-24 place-items-center rounded-2xl bg-gradient-to-br from-primary to-gold-light text-4xl text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg">
                      <span aria-hidden>{v.icon}</span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="text-center space-y-4">
                    <h3 className="font-brand text-2xl font-bold text-primary transition-colors duration-300 group-hover:text-gold">
                      {v.title}
                    </h3>
                    <p className="leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-foreground text-lg">
                      {v.description}
                    </p>
                  </div>
                  
                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="animate-on-scroll text-center mb-16">
            <h2 className="font-brand text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our <span className="text-gradient-gold">Journey</span>
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
              Key milestones in our pursuit of excellence and global expansion.
            </p>
          </div>

          <div className="relative mx-auto max-w-4xl">
            {/* Timeline Line - Hidden on mobile, visible on desktop */}
            <div className="pointer-events-none absolute left-4 md:left-1/2 top-0 md:-ml-[2px] h-full w-1 bg-gradient-to-b from-primary via-gold to-gold-dark" />
            
            <div className="space-y-12 md:space-y-20">
              {timeline.map((item, idx) => (
                <div key={item.year} className="timeline-item group relative animate-on-scroll">
                  {/* Timeline Marker */}
                  <div className="timeline-marker absolute left-0 md:left-1/2 top-8 md:-ml-4 h-8 w-8 rounded-full border-4 border-background bg-gradient-to-br from-primary to-gold shadow-xl transition-all duration-300 group-hover:scale-125 group-hover:shadow-2xl">
                    <div className="absolute inset-1 rounded-full bg-white"></div>
                  </div>
                  
                  {/* Timeline Content */}
                  <div
                    className={`timeline-content relative rounded-3xl border border-primary/20 bg-card p-6 md:p-8 shadow-xl transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 
                    ml-12 md:ml-0 text-left
                    ${
                      idx % 2 === 0
                        ? "md:mr-[55%] md:text-right"
                        : "md:ml-[55%] md:text-left"
                    }`}
                  >
                    {/* Year Badge */}
                    <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary to-gold text-white text-sm font-bold rounded-full mb-4">
                      {item.year}
                    </div>
                    
                    <h3 className="font-brand text-xl md:text-2xl font-bold text-primary mb-3 md:mb-4 group-hover:text-gold transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-base md:text-lg">{item.description}</p>
                    
                    {/* Hover Effect Overlay */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Guinness */}
      {/* <section className="bg-gradient-to-br from-secondary to-primary py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="guinness-content animate-on-scroll text-center group">
            <div className="guinness-badge mx-auto mb-8 grid h-28 w-28 place-items-center rounded-full bg-white text-4xl font-bold text-primary shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
              🏆
            </div>
            <h2 className="guinness-title font-heading text-4xl font-bold transition-all duration-300 group-hover:text-gold-light">Guinness World Record Holder</h2>
            <p className="guinness-description mx-auto mt-4 max-w-3xl text-[1.1rem] leading-8 opacity-90 transition-all duration-300 group-hover:opacity-100">
              In 2023, we achieved the Guinness World Record for the largest cardboard sculpture, creating a magnificent palm tree installation for Lacoste. This project showcased our ability to work with unconventional materials while maintaining the precision and quality expected in luxury retail environments.
            </p>
            <img
              src="/resources/lacoste-record.jpg"
              alt="Guinness World Record Achievement"
              className="guinness-image mx-auto mt-8 h-[300px] w-full max-w-4xl rounded-2xl object-cover shadow-2xl transition-all duration-500 hover:scale-105 hover:shadow-3xl cursor-pointer"
            />
          </div>
        </div>
      </section> */}

      {/* Team */}
      <section className="bg-card py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="animate-on-scroll text-center mb-16">
            <h2 className="font-brand text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our <span className="text-gradient-gold">Leadership</span>
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
              Meet the visionary leaders who drive innovation and excellence across our global operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {team.map((m, index) => (
              <div key={m.name} className={`team-card group animate-on-scroll cursor-pointer transform transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl hover:shadow-primary/20 ${isLoaded ? 'delay-' + (index * 150) : ''}`}>
                <div className="relative overflow-hidden rounded-3xl bg-card shadow-xl border-2 border-primary/10 hover:border-primary/30">
                  {/* Image Container */}
                  <div className="relative h-80 md:h-96 overflow-hidden">
                    <img src={m.image} alt={m.name} className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    
                    {/* Role Badge */}
                    <div className="absolute top-6 right-6 px-4 py-2 bg-primary/90 text-white text-sm font-semibold rounded-full backdrop-blur-sm">
                      {m.role.split(' ')[0]}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-10 relative">
                    <h3 className="font-brand text-2xl md:text-3xl font-bold text-primary mb-3 transition-colors duration-300 group-hover:text-gold">
                      {m.name}
                    </h3>
                    <p className="text-primary/80 font-semibold text-lg mb-5 transition-colors duration-300 group-hover:text-primary">
                      {m.role}
                    </p>
                    <p className="text-muted-foreground leading-relaxed text-base md:text-lg transition-all duration-300 group-hover:text-foreground">
                      {m.bio}
                    </p>
                    
                    {/* Hover Effect Overlay */}
                    <div className="absolute inset-0 rounded-b-3xl bg-gradient-to-t from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Team Stats */}
          <div className="mt-20 animate-on-scroll">
            <div className="bg-gradient-to-r from-primary/5 to-gold/5 rounded-3xl p-12">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="space-y-4">
                  <div className="text-4xl font-bold text-primary">80+</div>
                  <div className="text-muted-foreground">Specialized Team Members</div>
                </div>
                <div className="space-y-4">
                  <div className="text-4xl font-bold text-primary">16+</div>
                  <div className="text-muted-foreground">Average Years Experience</div>
                </div>
                <div className="space-y-4">
                  <div className="text-4xl font-bold text-primary">100%</div>
                  <div className="text-muted-foreground">Client Satisfaction Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="animate-on-scroll text-center mb-16">
            <h2 className="font-brand text-4xl md:text-5xl font-bold text-foreground mb-6">
              By the <span className="text-gradient-gold">Numbers</span>
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
              Our impact and achievements speak for themselves.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((s, index) => (
              <div key={s.label} className={`stat-item group animate-on-scroll text-center cursor-pointer transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl hover:shadow-primary/20 ${isLoaded ? 'delay-' + (index * 100) : ''}`}>
                <div className="relative p-8 bg-card rounded-3xl border border-primary/20 hover:border-primary/40 transition-all duration-300">
                  <div className="stat-number font-brand text-6xl font-bold text-primary transition-all duration-300 group-hover:text-gold group-hover:scale-110 mb-4">
                    {s.number}
                  </div>
                  <div className="stat-label text-lg font-semibold text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                    {s.label}
                  </div>
                  
                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
              </div>
            ))}
          </div>

          {/* Additional Impact Stats */}
          <div className="mt-20 animate-on-scroll">
            <div className="bg-gradient-to-r from-primary/10 to-gold/10 rounded-3xl p-12">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div className="space-y-4">
                  <div className="text-4xl font-bold text-primary">$50M+</div>
                  <div className="text-muted-foreground">Total Project Value</div>
                </div>
                <div className="space-y-4">
                  <div className="text-4xl font-bold text-primary">98%</div>
                  <div className="text-muted-foreground">On-Time Delivery</div>
                </div>
                <div className="space-y-4">
                  <div className="text-4xl font-bold text-primary">25+</div>
                  <div className="text-muted-foreground">Luxury Brands Served</div>
                </div>
                <div className="space-y-4">
                  <div className="text-4xl font-bold text-primary">1</div>
                  <div className="text-muted-foreground">Guinness World Record</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

function NavLink({ to, children, active }: { to: string; children: React.ReactNode; active?: boolean }) {
  return (
    <Link
      to={to}
      className={
        "relative font-medium transition-all duration-300 hover:text-primary hover:scale-105 " +
        (active ? "text-primary" : "text-foreground")
      }
    >
      <span className={`after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 ${active ? 'after:w-full' : 'after:w-0 hover:after:w-full'}`}>
        {children}
      </span>
    </Link>
  );
}

function MobileLink({ to, children, onClick }: { to: string; children: React.ReactNode; onClick?: () => void }) {
  return (
    <Link 
      to={to} 
      onClick={onClick} 
      className="block py-2 text-base font-medium transition-all duration-200 hover:text-primary hover:translate-x-2"
    >
      {children}
    </Link>
  );
}

function useScrollReveal() {
  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(".animate-on-scroll, .timeline-item")
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

// ----- Content Data -----
const values = [
  {
    icon: "🎯",
    title: "Accessibility",
    description:
      "We believe luxury should be accessible to all stakeholders, maintaining transparent communication and inclusive design processes throughout every project.",
  },
  {
    icon: "🤝",
    title: "Customer-Oriented",
    description:
      "Every decision we make is centered around our clients' success, ensuring their vision is realized with precision and care.",
  },
  {
    icon: "💡",
    title: "Innovation",
    description:
      "We constantly push the boundaries of fabrication technology and design, bringing fresh perspectives to luxury retail environments.",
  },
  {
    icon: "🦁",
    title: "Courage",
    description:
      "We embrace challenging projects and unconventional materials, as demonstrated by our Guinness World Record achievement.",
  },
  { icon: "❤️", title: "Passion", description: "Our team brings genuine enthusiasm and dedication to every project, treating each installation as a work of art." },
  {
    icon: "🤲",
    title: "Selflessness",
    description:
      "We prioritize the success of our clients and partners above all else, working collaboratively to achieve exceptional results.",
  },
];

const timeline = [
  {
    year: "2009",
    title: "Foundation in Riyadh",
    description:
      "Private Collection Arabia was founded in Riyadh, Saudi Arabia, with a vision to transform luxury retail spaces through superior fabrication and installation services, establishing our headquarters and primary manufacturing facility.",
  },
  {
    year: "2010-2011",
    title: "Regional Expansion in KSA",
    description:
      "Expanded across Saudi Arabia with new facilities in Dammam (2010) and Jeddah (2011), establishing comprehensive coverage across the Kingdom to better serve luxury brands in the Eastern and Western regions.",
  },
  {
    year: "2012",
    title: "Dubai Operations & DIOR Backstage",
    description:
      "Opened operations in Dubai, UAE, marking our first international expansion. Completed flagship DIOR Backstage installations, establishing our reputation for excellence in luxury brand retail experiences across the Gulf.",
  },
  {
    year: "2015",
    title: "ISO 9001:2015 Certification",
    description:
      "Achieved ISO 9001:2015 certification, demonstrating our commitment to quality management and continuous improvement in all manufacturing and installation processes.",
  },
  {
    year: "2018",
    title: "North American Expansion",
    description:
      "Expanded to North America with facilities in Houston, Texas (USA) and Toronto, Ontario (Canada), establishing our presence as a truly global luxury retail fabrication company serving international brands.",
  },
  {
    year: "2023",
    title: "Guinness World Record - LACOSTE",
    description:
      "Achieved Guinness World Record for the largest cardboard box sculpture with LACOSTE - a magnificent 4.67-meter tall Saudi palm tree made from 22,500 boxed perfumes at Mall of Arabia, Jeddah. This achievement showcased our innovation and technical excellence in creating extraordinary displays.",
  },
  {
    year: "2024",
    title: "1,000+ Projects & 120K Sq Ft Facilities",
    description:
      "Reached the milestone of 1,000+ completed projects across 6 locations with over 120,000 square feet of state-of-the-art manufacturing facilities and 80+ specialized team members, reinforcing our position as a leader in luxury retail fabrication.",
  },
];

const team = [
  {
    name: "Muhammad Saleem",
    role: "Chief Executive Officer",
    bio: "Visionary leader with 16+ years of luxury retail experience, driving innovation and excellence across all operations and global markets.",
    image: "/resources/workshop-wood.jpg",
  },
  {
    name: "Abdul Sattar",
    role: "General Manager",
    bio: "Strategic operations expert ensuring seamless project execution, quality standards, and client satisfaction across all facilities.",
    image: "/resources/workshop-metal.jpg",
  },
];

const stats = [
  { number: "16+", label: "Years Experience" },
  { number: "1,000+", label: "Projects Completed" },
  { number: "80+", label: "Team Members" },
  { number: "6", label: "Global Locations" },
];
