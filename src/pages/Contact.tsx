import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const locations = [
    {
      region: "Saudi Arabia",
      offices: [
        { city: "Riyadh", phone: "+966 XXX XXXX", email: "riyadh@pca-arabia.com" },
        { city: "Jeddah", phone: "+966 XXX XXXX", email: "jeddah@pca-arabia.com" },
        { city: "Dammam", phone: "+966 XXX XXXX", email: "dammam@pca-arabia.com" },
      ],
    },
    {
      region: "United Arab Emirates",
      offices: [
        { city: "Dubai", phone: "+971 XXX XXXX", email: "dubai@pca-arabia.com" },
      ],
    },
    {
      region: "United States",
      offices: [
        { city: "Houston, TX", phone: "+1 XXX XXX XXXX", email: "houston@pca-arabia.com" },
      ],
    },
    {
      region: "Canada",
      offices: [
        { city: "Toronto, ON", phone: "+1 XXX XXX XXXX", email: "toronto@pca-arabia.com" },
      ],
    },
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

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-3d-pattern">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="font-brand text-5xl md:text-6xl font-bold">
                Let's Build Together
              </h1>
              <p className="text-xl text-muted-foreground">
                Start your project with Private Collection Arabia today
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Locations */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card>
                <CardContent className="p-8">
                  <h2 className="font-heading text-2xl font-bold mb-6">
                    Request a Quote
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input id="company" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="region">Region</Label>
                      <Select>
                        <SelectTrigger id="region">
                          <SelectValue placeholder="Select region" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ksa">Saudi Arabia</SelectItem>
                          <SelectItem value="uae">United Arab Emirates</SelectItem>
                          <SelectItem value="usa">United States</SelectItem>
                          <SelectItem value="canada">Canada</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="projectType">Project Type</Label>
                      <Select>
                        <SelectTrigger id="projectType">
                          <SelectValue placeholder="Select project type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="retail">Retail Interior</SelectItem>
                          <SelectItem value="booth">Mall & Shop Booth</SelectItem>
                          <SelectItem value="display">Window Display</SelectItem>
                          <SelectItem value="event">Stage & Event</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Project Details</Label>
                      <Textarea
                        id="message"
                        rows={5}
                        placeholder="Tell us about your project..."
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Submit Request"}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Regional Offices */}
              <div className="space-y-8">
                <div>
                  <h2 className="font-heading text-2xl font-bold mb-6">
                    Our Offices
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    With locations across four continents, we're ready to serve your needs locally.
                  </p>
                </div>

                <div className="space-y-6">
                  {locations.map((location, index) => (
                    <Card key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                      <CardContent className="p-6 space-y-4">
                        <h3 className="font-heading text-xl font-semibold text-primary">
                          {location.region}
                        </h3>
                        <div className="space-y-3">
                          {location.offices.map((office, idx) => (
                            <div key={idx} className="space-y-2 border-l-2 border-border pl-4">
                              <div className="flex items-center space-x-2">
                                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                                <span className="font-medium">{office.city}</span>
                              </div>
                              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                                <Phone className="w-4 h-4 flex-shrink-0" />
                                <span>{office.phone}</span>
                              </div>
                              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                                <Mail className="w-4 h-4 flex-shrink-0" />
                                <span>{office.email}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
