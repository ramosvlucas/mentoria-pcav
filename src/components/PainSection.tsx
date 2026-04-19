const cycleItems = [
  "Você compra o que não deveria comprar.",
  "Não consegue vender no preço que pensou que venderia.",
  "A notificação \"Você vendeu!\" não aparece e você abaixa o preço no desespero.",
  "Começa a vender com margem baixa ou no prejuízo.",
  "Sobe o preço de novo.",
  "As vendas somem outra vez.",
];

const reasons = [
  "O produto não vende mais (saturou ou era hype).",
  "As vendas caíram pra todo mundo, e não só pra você.",
  "Alguém tomou o seu espaço no mercado e você nem percebeu. E isso é o que MAIS acontece.",
];

const PainSection = () => {
  return (
    <section className="py-16 md:py-20 px-6">
      <div className="max-w-3xl mx-auto">

        <h2 className="text-3xl md:text-5xl font-heading font-semibold mb-10 leading-[1.1] tracking-[-0.02em]">
          Você já abriu o resultado do dia e ficou com a sensação de estar{" "}
          <span className="text-primary">trabalhando à toa?</span>
        </h2>

        <div className="space-y-3 mb-10">
          <p className="text-lg font-semibold text-foreground leading-snug">
            Ontem você vendeu, hoje não.
          </p>
          <p className="text-lg text-foreground leading-relaxed">
            O coração aperta, a cabeça surta e o caixa trava.
          </p>
          <p className="text-lg font-semibold text-foreground">
            E não, a culpa não é do algoritmo.
          </p>
          <p className="text-lg font-bold text-foreground leading-snug">
            O problema é que você ainda não aprendeu a analisar dados.
          </p>
        </div>

        {/* Destaque tipográfico — sem borda lateral */}
        <p className="text-lg font-heading font-semibold text-primary leading-snug my-10">
          Tomar qualquer decisão no Mercado Livre sem ler dados é como entrar em um labirinto sem mapa.
        </p>

        <p className="text-foreground mb-8 leading-relaxed">
          Eu sei exatamente o que acontece:
        </p>

        {/* O ciclo */}
        <div className="bg-surface border border-line rounded-card p-7 md:p-9 mb-12">
          <ul className="space-y-4">
            {cycleItems.map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="text-destructive shrink-0 mt-1 leading-none select-none">–</span>
                <p className="text-foreground leading-relaxed">{item}</p>
              </li>
            ))}
          </ul>
        </div>

        <p className="text-foreground mb-12 leading-relaxed">
          E esse ciclo se repete, não é? O desânimo bate, você começa a se questionar sobre a sua
          capacidade, se compara com outras pessoas e a frustração só aumenta.
        </p>

        {/* 3 motivos */}
        <div className="bg-surface border border-line rounded-card p-7 md:p-9">
          <p className="font-mono text-xs tracking-[0.16em] uppercase text-foreground mb-5">
            Repita comigo em voz alta
          </p>
          <p className="text-foreground text-lg font-semibold mb-8 leading-snug">
            "As minhas vendas não somem de uma hora pra outra."
          </p>
          <p className="text-foreground mb-6">Só existem 3 opções para uma queda de vendas:</p>
          <ul className="space-y-4">
            {reasons.map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="text-foreground shrink-0 mt-1 leading-none select-none">·</span>
                <p className="text-foreground leading-relaxed">{item}</p>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
};

export default PainSection;
