import logoPcav from "@/assets/logo-pcav.png";

const HeroSection = () => {
  return (
    <section className="relative flex items-center justify-center overflow-hidden px-6 pt-20 pb-20 md:pt-28 md:pb-28">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-dark" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(45_100%_51%_/_0.06)_0%,_transparent_60%)]" />

      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Logo */}
        <div className="mb-8 animate-fade-up">
          <div className="inline-block bg-white rounded-xl px-5 py-3 shadow-lg">
            <img
              src={logoPcav}
              alt="Mentoria PCAV"
              className="h-14 md:h-20 w-auto"
              width={160}
              height={80}
            />
          </div>
        </div>

        {/* Badge */}
        <div className="animate-fade-up" style={{ animationDelay: '0.1s' }}>
          <span className="inline-block bg-primary/10 border border-primary/20 text-primary font-heading font-bold text-xs tracking-[0.2em] uppercase px-5 py-2 rounded-full mb-8">
            Mentoria Individual para Vendedores do Mercado Livre
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold leading-[1.1] mb-6 animate-fade-up" style={{ animationDelay: '0.2s' }}>
          Pare de <span className="text-gradient-gold">adivinhar</span> e comece a{" "}
          <span className="text-gradient-gold">dominar</span> o Mercado Livre
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed animate-fade-up" style={{ animationDelay: '0.35s' }}>
          A mentoria que transforma vendedores perdidos em donos do próprio negócio, com{" "}
          <span className="text-foreground font-medium">dados, estratégia e clareza</span> em cada decisão.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
