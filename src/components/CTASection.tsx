import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-16 md:py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-dark" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(45_100%_51%_/_0.08)_0%,_transparent_60%)]" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold mb-2 leading-tight">
          O botão tá aí.
        </h2>
        <p className="text-2xl md:text-3xl font-heading font-semibold text-gradient-gold mb-8 leading-tight">
          A decisão é sua.
        </p>

        <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed">
          Se você é daqueles que assumem a responsabilidade, erguem as mangas e fazem o que precisa ser feito: clica no botão, fala comigo e a gente descobre juntos se agora é a hora certa.
        </p>

        <a href="https://typebot.co/olucasvilaronga-metodo-pcav" target="_blank" rel="noopener noreferrer">
          <Button variant="cta" size="lg" className="h-16 px-12 rounded-full text-xl">
            Quero ter resultado
          </Button>
        </a>
      </div>
    </section>
  );
};

export default CTASection;
