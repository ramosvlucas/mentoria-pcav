import { X, Check } from "lucide-react";

const DifferentialsSection = () => {
  return (
    <section className="py-20 md:py-28 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 leading-tight">
            Isso aqui <span className="text-gradient-gold">não é</span> mais um curso
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Eu não te entrego um passo a passo engessado. Eu te ensino a forma correta de pensar e analisar.
          </p>
        </div>

        <div className="bg-gradient-card border border-border rounded-2xl overflow-hidden shadow-card">
          {/* Header da tabela */}
          <div className="grid grid-cols-2 border-b border-border">
            <div className="p-5 border-r border-border">
              <p className="font-heading font-bold text-sm text-destructive uppercase tracking-widest">
                Sem o método
              </p>
            </div>
            <div className="p-5">
              <p className="font-heading font-bold text-sm text-primary uppercase tracking-widest">
                Com o Método PCAV
              </p>
            </div>
          </div>
          {/* Linhas */}
          {[
            ["Compra no achismo", "Compra com dados de demanda real"],
            ["Descobre o problema depois do prejuízo", "Lê o mercado antes de agir"],
            ["Depende de consultoria para decidir", "Toma decisão sozinho, com clareza"],
            ["Ciclo: vende, abaixa, sangra, repete", "Posicionamento estratégico de preço"],
            ["Trabalha muito, lucra pouco", "Opera com margem, não com volume"],
          ].map(([sem, com], i, arr) => (
            <div key={i} className={`grid grid-cols-2 ${i < arr.length - 1 ? "border-b border-border" : ""}`}>
              <div className="p-4 border-r border-border flex items-start gap-2">
                <X className="w-4 h-4 text-destructive shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground leading-relaxed">{sem}</p>
              </div>
              <div className="p-4 flex items-start gap-2">
                <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <p className="text-sm text-foreground leading-relaxed">{com}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
