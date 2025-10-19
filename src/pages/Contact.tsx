import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Upload, X, Calendar, DollarSign, Building, User, File, ChevronRight, Sparkles, Globe, Award, Users, Target } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const regionalOffices = [
    {
      id: 1,
      city: "Riyadh",
      country: "Kingdom of Saudi Arabia",
      flag: "🇸🇦",
      address: "Industrial District, Riyadh 11461",
      phone: "+966 11 234 5678",
      email: "riyadh@pca-fabrication.com",
      specialties: ["Wood Fabrication", "Luxury Interiors", "Custom Millwork"],
      expanded: false
    },
    {
      id: 2,
      city: "Jeddah",
      country: "Kingdom of Saudi Arabia",
      flag: "🇸🇦",
      address: "Al-Baghdadiyah District, Jeddah 21442",
      phone: "+966 12 345 6789",
      email: "jeddah@pca-fabrication.com",
      specialties: ["Metal Fabrication", "Marine Applications", "Coastal Installations"],
      expanded: false
    },
    {
      id: 3,
      city: "Dammam",
      country: "Kingdom of Saudi Arabia",
      flag: "🇸🇦",
      address: "Industrial Zone, Dammam 31441",
      phone: "+966 13 456 7890",
      email: "dammam@pca-fabrication.com",
      specialties: ["Oil & Gas Sector", "Industrial Projects", "Large-Scale Fabrication"],
      expanded: false
    },
    {
      id: 4,
      city: "Dubai",
      country: "United Arab Emirates",
      flag: "🇦🇪",
      address: "Dubai Design District, Dubai 00000",
      phone: "+971 4 567 8901",
      email: "dubai@pca-fabrication.com",
      specialties: ["Luxury Retail", "Mall Installations", "Hospitality"],
      expanded: false
    },
    {
      id: 5,
      city: "Toronto",
      country: "Ontario, Canada",
      flag: "🇨🇦",
      address: "Design Quarter, Toronto ON M5V 3A8",
      phone: "+1 416 789 0123",
      email: "toronto@pca-fabrication.com",
      specialties: ["Pop-Up Stores", "Seasonal Displays", "Digital Integration"],
      expanded: false
    },
    {
      id: 6,
      city: "Houston",
      country: "Texas, USA",
      flag: "🇺🇸",
      address: "Design Center, Houston TX 77002",
      phone: "+1 713 890 1234",
      email: "houston@pca-fabrication.com",
      specialties: ["Innovation Projects", "Record Installations", "Tech Integration"],
      expanded: false
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Thank you! We'll be in touch within 24 hours.");
    }, 1500);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setUploadedFiles(prev => [...prev, ...files]);
  };

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const toggleCard = (id: number) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        {/* Hero Section - Modern Design */}
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
              <span className="text-foreground font-medium">Contact</span>
            </div>

            <div className="max-w-7xl mx-auto">
              <div className={`mb-12 transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                <Badge variant="outline" className="text-gold border-gold/50 mb-6">
                  <Sparkles className="w-3 h-3 mr-1" />
                  Global Presence, Local Excellence
                </Badge>
                
                <h1 className="font-brand text-5xl md:text-7xl font-bold mb-6 leading-tight">
                  Let's Create Your <span className="text-gradient-gold">Vision</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
                  Connect with our expert teams across KSA, UAE, USA, and Canada to bring your luxury retail project to life
                </p>
              </div>

              {/* Stats Grid */}
              <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 transition-all duration-1000 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                {[
                  { icon: Globe, label: "6 Offices", sublabel: "Global Reach", color: "from-blue-500 to-blue-600" },
                  { icon: Users, label: "24/7", sublabel: "Support", color: "from-green-500 to-green-600" },
                  { icon: Award, label: "ISO 9001", sublabel: "Certified", color: "from-amber-500 to-amber-600" },
                  { icon: Target, label: "100%", sublabel: "Client Satisfaction", color: "from-purple-500 to-purple-600" }
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

        {/* Regional Offices */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="font-brand text-4xl md:text-5xl font-bold text-primary mb-6">
                Our <span className="text-gradient-gold">Regional Offices</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Local expertise with global standards across four countries.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regionalOffices.map((office, index) => (
                <Card
                  key={office.id}
                  className={`group relative overflow-hidden hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 cursor-pointer border-primary/20 hover:border-primary/40 ${
                    expandedCard === office.id ? 'shadow-2xl shadow-primary/20 border-primary/40' : ''
                  }`}
                  onClick={() => toggleCard(office.id)}
                >
                  <CardContent className="p-0">
                    {/* Header */}
                    <div className="p-8 text-center border-b border-primary/10">
                      <div className="w-16 h-12 mx-auto mb-4 text-4xl flex items-center justify-center">
                        {office.flag}
                      </div>
                      <h3 className="font-brand text-2xl font-bold text-primary mb-2">
                        {office.city}
                      </h3>
                      <p className="text-muted-foreground">{office.country}</p>
                    </div>

                    {/* Expandable Details */}
                    <div className={`transition-all duration-300 overflow-hidden ${
                      expandedCard === office.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="p-8 space-y-6">
                        {/* Contact Information */}
                        <div className="space-y-4">
                          <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                              <MapPin className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                              <p className="font-semibold text-primary mb-1">Address</p>
                              <p className="text-sm text-muted-foreground">{office.address}</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                              <Phone className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                              <p className="font-semibold text-primary mb-1">Phone</p>
                              <p className="text-sm text-muted-foreground">{office.phone}</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                              <Mail className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                              <p className="font-semibold text-primary mb-1">Email</p>
                              <p className="text-sm text-muted-foreground">{office.email}</p>
                            </div>
                          </div>
                        </div>

                        {/* Specialties */}
                        <div>
                          <h4 className="font-semibold text-primary mb-3">Specialties</h4>
                          <div className="flex flex-wrap gap-2">
                            {office.specialties.map((specialty, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 bg-gold/10 text-gold text-xs font-medium rounded-full"
                              >
                                {specialty}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Expand Indicator */}
                    <div className="p-4 text-center border-t border-primary/10">
                      <div className="inline-flex items-center gap-2 text-primary text-sm font-medium">
                        {expandedCard === office.id ? 'Show Less' : 'View Details'}
                        <div className={`w-4 h-4 transition-transform duration-300 ${
                          expandedCard === office.id ? 'rotate-180' : ''
                        }`}>
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="6,9 12,15 18,9"></polyline>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-24 bg-gradient-to-br from-primary/5 to-gold/5">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="font-brand text-4xl md:text-5xl font-bold text-primary mb-6">
                Tell Us About Your <span className="text-gradient-gold">Project</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Share your vision and we'll help you create an iconic retail experience.
              </p>
            </div>
            
            <Card className="p-8 md:p-12 bg-card/90 backdrop-blur-sm border-primary/20 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-primary font-semibold">
                      First Name *
                    </Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      required
                      className="border-primary/20 focus:border-primary focus:ring-primary/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-primary font-semibold">
                      Last Name *
                    </Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      required
                      className="border-primary/20 focus:border-primary focus:ring-primary/20"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-primary font-semibold">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="border-primary/20 focus:border-primary focus:ring-primary/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-primary font-semibold">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      className="border-primary/20 focus:border-primary focus:ring-primary/20"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-primary font-semibold">
                      Company
                    </Label>
                    <Input
                      id="company"
                      name="company"
                      className="border-primary/20 focus:border-primary focus:ring-primary/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="position" className="text-primary font-semibold">
                      Position
                    </Label>
                    <Input
                      id="position"
                      name="position"
                      className="border-primary/20 focus:border-primary focus:ring-primary/20"
                    />
                  </div>
                </div>

                {/* Project Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="projectType" className="text-primary font-semibold">
                      Project Type *
                    </Label>
                    <Select>
                      <SelectTrigger className="border-primary/20 focus:border-primary focus:ring-primary/20">
                        <SelectValue placeholder="Select project type..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="retail-interior">Retail Interior</SelectItem>
                        <SelectItem value="window-display">Window Display</SelectItem>
                        <SelectItem value="mall-booth">Mall & Shop Booth</SelectItem>
                        <SelectItem value="pop-up">Pop-Up Installation</SelectItem>
                        <SelectItem value="event-set">Stage & Event Set</SelectItem>
                        <SelectItem value="acrylic-fabrication">Acrylic & Specialty Fabrication</SelectItem>
                        <SelectItem value="large-format">Large-Format Printing</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="budget" className="text-primary font-semibold">
                      Budget Range
                    </Label>
                    <Select>
                      <SelectTrigger className="border-primary/20 focus:border-primary focus:ring-primary/20">
                        <SelectValue placeholder="Select budget range..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-50k">Under $50,000</SelectItem>
                        <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                        <SelectItem value="100k-250k">$100,000 - $250,000</SelectItem>
                        <SelectItem value="250k-500k">$250,000 - $500,000</SelectItem>
                        <SelectItem value="500k-1m">$500,000 - $1,000,000</SelectItem>
                        <SelectItem value="over-1m">Over $1,000,000</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="region" className="text-primary font-semibold">
                      Preferred Region *
                    </Label>
                    <Select>
                      <SelectTrigger className="border-primary/20 focus:border-primary focus:ring-primary/20">
                        <SelectValue placeholder="Select region..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="riyadh">Riyadh, KSA</SelectItem>
                        <SelectItem value="jeddah">Jeddah, KSA</SelectItem>
                        <SelectItem value="dammam">Dammam, KSA</SelectItem>
                        <SelectItem value="dubai">Dubai, UAE</SelectItem>
                        <SelectItem value="toronto">Toronto, Canada</SelectItem>
                        <SelectItem value="houston">Houston, USA</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="timeline" className="text-primary font-semibold">
                      Project Timeline
                    </Label>
                    <Input
                      id="timeline"
                      name="timeline"
                      type="date"
                      className="border-primary/20 focus:border-primary focus:ring-primary/20"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="projectDetails" className="text-primary font-semibold">
                    Project Details *
                  </Label>
                  <Textarea
                    id="projectDetails"
                    name="projectDetails"
                    rows={6}
                    placeholder="Tell us about your project vision, requirements, and any specific details..."
                    required
                    className="border-primary/20 focus:border-primary focus:ring-primary/20"
                  />
                </div>

                {/* File Upload */}
                <div className="space-y-2">
                  <Label className="text-primary font-semibold">Project Files (Optional)</Label>
                  <div
                    className="border-2 border-dashed border-primary/30 rounded-lg p-8 text-center hover:border-primary hover:bg-primary/5 transition-all duration-300 cursor-pointer"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <Upload className="w-12 h-12 text-primary mx-auto mb-4" />
                    <p className="text-muted-foreground mb-2">Drag and drop files here or click to browse</p>
                    <p className="text-sm text-muted-foreground">Supports: Images, PDFs, CAD files (Max 50MB)</p>
                    <input
                      ref={fileInputRef}
                      type="file"
                      multiple
                      accept="image/*,.pdf,.dwg,.skp"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                  </div>
                  
                  {uploadedFiles.length > 0 && (
                    <div className="space-y-2">
                      {uploadedFiles.map((file, index) => (
                        <div key={index} className="flex items-center justify-between bg-primary/5 p-3 rounded-lg">
                          <div className="flex items-center gap-3">
                            <File className="w-4 h-4 text-primary" />
                            <span className="text-sm font-medium text-primary">{file.name}</span>
                            <span className="text-xs text-muted-foreground">
                              {(file.size / 1024 / 1024).toFixed(2)} MB
                            </span>
                          </div>
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => removeFile(index)}
                            className="text-red-500 hover:text-red-700"
                          >
                            <X className="w-4 h-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-primary to-gold text-white hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 py-6 text-lg font-semibold"
                >
                  {isSubmitting ? "Submitting..." : "Send Project Inquiry"}
                </Button>
              </form>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
