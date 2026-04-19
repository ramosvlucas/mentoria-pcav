import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-16 md:py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="rounded-card bg-surface border border-line p-8 md:p-12">

          <p className="text-lg text-foreground mb-10 leading-relaxed max-w-2xl">
            Se você é daqueles que assumem a responsabilidade, erguem as mangas e fazem o que
            precisa ser feito: clica no botão, fala comigo e a gente descobre juntos se agora é
            a hora certa.
          </p>

          <a
            href="https://typebot.co/olucasvilaronga-mentoria-pcav"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mb-10"
          >
            <Button variant="pill" size="xl" className="group">
              Quero ter resultado
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
          </a>

          <h2 className="text-4xl md:text-6xl font-heading font-semibold leading-[1.05] tracking-[-0.025em]">
            A decisão é <span className="text-primary">sua.</span>
          </h2>

        </div>
      </div>
    </section>
  );
};

export default CTASection;
