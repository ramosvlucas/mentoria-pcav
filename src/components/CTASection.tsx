import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 md:py-28 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-dark" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(45_100%_51%_/_0.08)_0%,_transparent_60%)]" />

      <div className="relative z-10 max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold mb-8 leading-tight text-gradient-gold">
          A decisão é sua.
        </h2>

        <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
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
