import { X } from "lucide-react";

const PainSection = () => {
  return (
    <section className="py-20 md:py-28 px-6">
      <div className="max-w-3xl mx-auto">

        <h2 className="text-3xl md:text-5xl font-heading font-bold mb-12 leading-tight">
          Você já abriu o resultado do dia e ficou com a sensação de estar{" "}
          <span className="text-gradient-gold">trabalhando à toa?</span>
        </h2>

        <p className="text-xl font-medium text-foreground mb-3 leading-snug">
          Ontem você vendeu, hoje não.
        </p>
        <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
          O coração aperta, a cabeça surta e o caixa trava.
        </p>
        <p className="text-lg font-semibold text-foreground mb-2">
          E não, a culpa não é do algoritmo.
        </p>
        <p className="text-xl font-bold text-foreground mb-8 leading-snug">
          O problema é que você ainda não aprendeu a analisar dados.
        </p>

        <p className="border-l-2 border-primary pl-6 py-2 mt-10 mb-6 text-foreground font-medium italic text-lg">
          Tomar qualquer decisão no Mercado Livre sem ler dados é como entrar em um labirinto sem mapa.
        </p>

        <p className="text-muted-foreground mb-10 leading-relaxed">
          Eu sei exatamente o que acontece:
        </p>

        {/* The cycle */}
        <div className="bg-gradient-card border border-destructive/20 rounded-2xl p-8 shadow-card mb-10">
          <div className="space-y-4">
            {[
              "Você compra o que não deveria comprar.",
              "Não consegue vender no preço que pensou que venderia.",
              "A notificação \"Você vendeu!\" não aparece e você abaixa o preço no desespero.",
              "Começa a vender com margem baixa ou no prejuízo.",
              "Sobe o preço de novo.",
              "As vendas somem outra vez.",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <X className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                <p className="text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <p className="text-muted-foreground mb-12 leading-relaxed">
          E esse ciclo se repete, não é? O desânimo bate, você começa a se questionar sobre a sua capacidade, se compara com outras pessoas e a frustração só aumenta.
        </p>

        {/* 3 reasons */}
        <div className="bg-gradient-card border border-border rounded-2xl p-8 shadow-card">
          <p className="text-foreground font-heading font-bold text-lg mb-4">
            Repita comigo em voz alta:
          </p>
          <blockquote className="border-l-2 border-primary pl-6 py-2 text-foreground italic text-xl font-medium mb-8">
            "As minhas vendas não somem de uma hora pra outra."
          </blockquote>
          <p className="text-muted-foreground mb-6">Só existem 3 opções para uma queda de vendas:</p>
          <div className="space-y-3">
            {[
              { num: "01", text: "O produto não vende mais (saturou ou era hype)." },
              { num: "02", text: "As vendas caíram pra todo mundo, e não só pra você." },
              { num: "03", text: "Alguém tomou o seu espaço no mercado e você nem percebeu. E isso é o que MAIS acontece." },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <span className="text-primary font-heading font-bold text-sm shrink-0 mt-0.5">{item.num}</span>
                <p className="text-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default PainSection;
