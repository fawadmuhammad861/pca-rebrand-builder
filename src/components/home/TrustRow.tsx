import { Building2, Award, Users, Briefcase, Factory } from "lucide-react";

const TrustRow = () => {
  const stats = [
    { icon: Building2, label: "Since 2009", value: "16+ Years" },
    { icon: Award, label: "ISO 9001:2015", value: "Certified" },
    { icon: Briefcase, label: "Projects", value: "1,000+" },
    { icon: Users, label: "Specialists", value: "80+" },
    { icon: Factory, label: "Facilities", value: "120K sq ft" },
  ];

  return (
    <section className="py-16 bg-card border-y border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center space-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl font-bold font-heading">{stat.value}</div>
                <div className="text-sm text-muted-foreground font-body">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustRow;
