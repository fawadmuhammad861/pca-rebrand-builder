import { Factory, Paintbrush, Printer } from "lucide-react";

const FacilitiesBand = () => {
  const facilities = [
    {
      icon: Factory,
      title: "Wood & Acrylic Workshop",
      stat: "40,000 sq ft",
      description: "State-of-the-art fabrication with CNC precision",
    },
    {
      icon: Paintbrush,
      title: "Paint & Finishing Rooms",
      stat: "Professional Grade",
      description: "Climate-controlled finishing for flawless results",
    },
    {
      icon: Printer,
      title: "Digital Printing",
      stat: "EFI/JHF/Kongsberg",
      description: "Large-format printing with color accuracy",
    },
  ];

  return (
    <section className="py-24 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            World-Class Facilities
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            120,000 sq ft of cutting-edge production capabilities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {facilities.map((facility, index) => {
            const Icon = facility.icon;
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg bg-card/5 border border-border/20 p-8 hover:border-primary/50 transition-all animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative z-10 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl font-semibold mb-2">
                      {facility.title}
                    </h3>
                    <div className="text-primary font-bold mb-2">{facility.stat}</div>
                    <p className="text-muted-foreground">{facility.description}</p>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FacilitiesBand;
