const ClientsStrip = () => {
  const clients = [
    "DIOR",
    "CHANEL",
    "GUCCI",
    "LACOSTE",
    "HERMÈS",
    "LOUIS VUITTON",
    "PRADA",
    "CARTIER",
    "BURBERRY",
    "VERSACE",
    "FENDI",
    "GIVENCHY",
  ];

  const MarqueeRow = ({ direction = "left", items }: { direction?: "left" | "right"; items: string[] }) => (
    <div className="relative overflow-hidden py-4">
      <div
        className={`flex gap-12 ${
          direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
        }`}
      >
        {[...items, ...items, ...items].map((client, index) => (
          <span
            key={index}
            className="font-brand text-2xl md:text-4xl font-bold tracking-wider opacity-60 hover:opacity-100 hover:text-gradient-gold transition-all duration-300 whitespace-nowrap"
          >
            {client}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <section className="py-16 bg-card border-y border-border overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <div className="text-center">
          <h3 className="font-heading text-3xl md:text-4xl font-semibold mb-2">
            Trusted by Luxury Brands Worldwide
          </h3>
          <p className="text-muted-foreground text-lg">
            Delivering excellence for iconic names in retail
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <MarqueeRow direction="right" items={clients.slice(0, 4)} />
        <MarqueeRow direction="left" items={clients.slice(4, 8)} />
        <MarqueeRow direction="right" items={clients.slice(8, 12)} />
      </div>
    </section>
  );
};

export default ClientsStrip;
