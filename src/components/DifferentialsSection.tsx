import { Check, X } from "lucide-react";

const rows: [string, string][] = [
  ["Compra no achismo", "Compra com dados de demanda real"],
  ["Descobre o problema depois do prejuízo", "Lê o mercado antes de agir"],
  ["Depende de consultoria para decidir", "Decide sozinho e com clareza"],
  ["Ciclo: vende, abaixa, sangra e repete", "Posicionamento estratégico de preço"],
  ["Trabalha muito e lucra pouco", "Opera com margem, não com volume"],
];

const DifferentialsSection = () => {
  return (
    <section className="py-16 md:py-20 px-6">
      <div className="max-w-3xl mx-auto">


        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-heading font-semibold mb-5 leading-[1.1] tracking-[-0.02em]">
            Isso aqui <span className="text-primary">não é</span> mais um curso
          </h2>
          <p className="text-lg text-foreground leading-relaxed">
            Eu não te entrego um passo a passo engessado. Eu te ensino a forma correta de analisar, pensar e decidir.
          </p>
        </div>

        <div className="bg-surface border border-line rounded-card overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-2 border-b border-line">
            <div className="p-5 border-r border-line">
              <p className="font-mono-label text-destructive/70">Sem o método</p>
            </div>
            <div className="p-5">
              <p className="font-mono-label text-primary">Com o método PCAV</p>
            </div>
          </div>
          {/* Linhas */}
          {rows.map(([sem, com], i) => (
            <div
              key={i}
              className={`grid grid-cols-2 ${i < rows.length - 1 ? "border-b border-line" : ""}`}
            >
              <div className="p-5 border-r border-line flex items-start gap-3">
                <X className="w-5 h-5 text-destructive shrink-0 mt-1" />
                <p className="text-lg text-foreground leading-relaxed">{sem}</p>
              </div>
              <div className="p-5 flex items-start gap-3">
                <Check className="w-5 h-5 text-primary shrink-0 mt-1" />
                <p className="text-lg text-foreground leading-relaxed">{com}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default DifferentialsSection;
