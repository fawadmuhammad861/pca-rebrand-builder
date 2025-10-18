import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Award, Heart, Lightbulb, Shield, Zap, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Accessibility",
      description: "Making luxury retail experiences accessible across all markets",
    },
    {
      icon: Heart,
      title: "Customer-Oriented",
      description: "Every project tailored to our clients' unique vision and needs",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Pushing boundaries with cutting-edge fabrication techniques",
    },
    {
      icon: Zap,
      title: "Courage",
      description: "Taking on ambitious projects that others won't attempt",
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Dedication to excellence in every detail we create",
    },
    {
      icon: Users,
      title: "Selflessness",
      description: "Team-first approach ensures the best outcomes for clients",
    },
  ];

  const milestones = [
    { year: "2009", event: "Founded in Saudi Arabia" },
    { year: "2015", event: "ISO 9001:2015 Certification" },
    { year: "2018", event: "Expanded to UAE & North America" },
    { year: "2022", event: "LACOSTE Guinness World Record" },
    { year: "2024", event: "1,000+ Projects Delivered" },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-3d-pattern">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-card border border-border rounded-full mb-4">
                <Award className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Since 2009</span>
              </div>
              <h1 className="font-brand text-5xl md:text-6xl font-bold">
                Our Story
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                For over 15 years, Private Collection Arabia has been crafting iconic retail experiences 
                for the world's most prestigious luxury brands. From our headquarters in Saudi Arabia to 
                installations across four continents, we've built our reputation on uncompromising quality 
                and turnkey execution.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
                Our Values
              </h2>
              <p className="text-xl text-muted-foreground">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card
                    key={index}
                    className="group hover:shadow-gold transition-all duration-300 animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardContent className="p-8 space-y-4">
                      <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-7 h-7 text-primary" />
                      </div>
                      <h3 className="font-heading text-xl font-semibold">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Guinness Record Highlight */}
        <section className="py-24 bg-accent text-accent-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <Award className="w-16 h-16 mx-auto" />
              <h2 className="font-brand text-4xl md:text-5xl font-bold">
                Guinness World Record
              </h2>
              <p className="text-xl">
                In 2022, we partnered with LACOSTE to create a record-breaking cardboard sculpture 
                of a Saudi palm tree, showcasing our ability to execute ambitious, world-class installations.
              </p>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
                Our Journey
              </h2>
              <p className="text-xl text-muted-foreground">
                Key milestones in our 15-year history
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-8 group animate-slide-in-left"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex-shrink-0 w-24 text-right">
                      <span className="font-heading text-2xl font-bold text-primary">
                        {milestone.year}
                      </span>
                    </div>
                    <div className="flex-shrink-0 w-4 h-4 rounded-full bg-primary group-hover:scale-125 transition-transform" />
                    <div className="flex-grow">
                      <p className="text-lg text-foreground">{milestone.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-24 bg-secondary text-secondary-foreground">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "120,000", label: "sq ft facilities" },
                { value: "80+", label: "team members" },
                { value: "1,000+", label: "projects delivered" },
                { value: "4", label: "countries" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center space-y-2 animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-4xl md:text-5xl font-bold font-heading text-primary">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
