import { Search, Package, Monitor, Banknote } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    letter: "P",
    title: "Pesquise",
    description: "Descubra quem domina o mercado, entenda o cenário e identifique oportunidades reais antes de agir.",
  },
  {
    icon: Package,
    number: "02",
    letter: "C",
    title: "Compre",
    description: "Compre com inteligência. Saiba exatamente o que comprar, quanto comprar e quando comprar com base em dados.",
  },
  {
    icon: Monitor,
    number: "03",
    letter: "A",
    title: "Anuncie",
    description: "Monte anúncios que convertem. Posicione seu produto com estratégia, preço e copy que fazem diferença.",
  },
  {
    icon: Banknote,
    number: "04",
    letter: "V",
    title: "Venda",
    description: "Execute com clareza. Quem tem dados na mão não hesita: age com confiança e vende com margem.",
  },
];

const MethodSection = () => {
  return (
    <section className="py-24 md:py-32 px-6 bg-secondary/30">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 leading-tight">
            O que você vai{" "}
            <span className="line-through text-muted-foreground decoration-muted-foreground/50">aprender</span>{" "}
            <span className="text-gradient-gold">aplicar</span> na prática
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Aqui você aprende a pensar e analisar, não a copiar um passo a passo engessado.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-6">
          {steps.map((step, i) => (
            <div
              key={i}
              className="bg-gradient-card border border-border rounded-2xl p-8 md:p-10 shadow-card group hover:border-primary/30 transition-all duration-300 motion-reduce:transition-none flex flex-col gap-4"
            >
              <div className="flex items-center gap-4">
                <span className="text-5xl md:text-6xl font-heading font-bold text-gradient-gold opacity-50">
                  {step.letter}
                </span>
                <div className="flex items-center gap-3">
                  <step.icon className="w-6 h-6 text-primary" />
                  <h3 className="font-heading font-bold text-xl md:text-2xl">{step.title}</h3>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodSection;
