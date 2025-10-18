import { Lightbulb, Wrench, Truck, CheckCircle, Settings } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ProcessCards = () => {
  const processes = [
    {
      icon: Lightbulb,
      title: "Design",
      description: "Concept development and technical drawings tailored to your brand vision.",
    },
    {
      icon: Wrench,
      title: "Development",
      description: "Material selection, prototyping, and approval processes with precision.",
    },
    {
      icon: Truck,
      title: "Deployment",
      description: "Logistics coordination and on-site installation across all regions.",
    },
    {
      icon: CheckCircle,
      title: "Quality Analysis",
      description: "Rigorous inspection and compliance with international standards.",
    },
    {
      icon: Settings,
      title: "Maintenance",
      description: "Ongoing support and maintenance to ensure lasting excellence.",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Our Process
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From concept to completion, we deliver turnkey excellence at every stage
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {processes.map((process, index) => {
            const Icon = process.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-gold transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold">
                    {process.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {process.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessCards;
