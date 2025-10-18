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
  ];

  return (
    <section className="py-16 bg-card border-y border-border">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="font-heading text-2xl font-semibold mb-2">
            Trusted by Luxury Brands Worldwide
          </h3>
          <p className="text-muted-foreground">
            Delivering excellence for iconic names in retail
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-6 opacity-60 hover:opacity-100 transition-opacity animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <span className="font-brand text-xl md:text-2xl font-bold tracking-wider">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsStrip;
