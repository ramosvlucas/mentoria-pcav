import Logo from "@/components/Logo";

const HeroSection = () => {
  return (
    <section className="px-6 pt-12 pb-16 md:pt-16 md:pb-20">
      <div className="max-w-3xl mx-auto">
        <div className="border-t-2 border-primary pt-10">

          {/* Logo wordmark — responsivo via classes */}
          <div className="mb-12 animate-fade-up">
            <span className="block md:hidden"><Logo size={28} /></span>
            <span className="hidden md:block"><Logo size={44} /></span>
          </div>

          {/* Kicker mono */}
          <div className="animate-fade-up" style={{ animationDelay: "0.05s" }}>
            <span className="inline-flex items-center gap-2 font-mono-label text-primary mb-6">
              <span className="w-6 h-px bg-primary/60" />
              Mentoria Individual para Vendedores do Mercado Livre
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-4xl md:text-6xl font-heading font-semibold leading-[1.05] tracking-[-0.025em] mb-6 animate-fade-up"
            style={{ animationDelay: "0.15s" }}
          >
            Pare de <span className="text-primary">adivinhar</span> e comece a{" "}
            <span className="text-primary">dominar</span> o Mercado Livre
          </h1>

          {/* Sub */}
          <p
            className="text-lg text-foreground max-w-2xl leading-relaxed animate-fade-up"
            style={{ animationDelay: "0.25s" }}
          >
            A mentoria que transforma vendedores perdidos em donos do próprio negócio, com{" "}
            <span className="text-foreground font-medium">dados, estratégia e clareza</span> em cada decisão.
          </p>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
