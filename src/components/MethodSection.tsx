const steps = [
  {
    letter: "P",
    title: "Pesquise",
    description:
      "Entenda o que é demanda de verdade. Aprenda a encontrar produtos com potencial, analisar grupos de anúncios, mapear concorrentes e identificar mudanças de mercado antes que elas te peguem de surpresa.",
  },
  {
    letter: "C",
    title: "Compre",
    description:
      "Aprenda a negociar com fornecedores, calcular margem e definir o volume certo de compra. Cada decisão com número na mão, não no feeling.",
  },
  {
    letter: "A",
    title: "Anuncie",
    description:
      "Monte um anúncio de alta conversão do zero. Título, fotos, clips e ficha técnica estruturados pra vender sem você precisar ser o mais barato.",
  },
  {
    letter: "V",
    title: "Venda",
    description:
      "Opere com estratégia. Metas, logística, ranqueamento e publicidade alinhados com o controle financeiro pra você crescer com consistência.",
  },
];

const MethodSection = () => {
  return (
    <section className="py-16 md:py-20 px-6">
      <div className="max-w-3xl mx-auto">

        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-heading font-semibold mb-5 leading-[1.1] tracking-[-0.02em]">
            O que você vai{" "}
            <span className="line-through text-foreground/40 decoration-foreground/40">aprender</span>{" "}
            <span className="text-primary">aplicar</span> na prática
          </h2>
          <p className="text-lg text-foreground leading-relaxed">
            Eu não te entrego um passo a passo engessado. Eu te ensino a forma correta de analisar, pensar e decidir.
          </p>
        </div>

        <div className="flex flex-col divide-y divide-line">
          {steps.map((step, i) => (
            <article
              key={step.letter}
              className="flex items-center gap-7 py-8 group"
            >
              {/* Letra: P amarelo, C/A/V branco */}
              <span
                className={`font-heading font-semibold leading-none shrink-0 select-none ${step.letter === "P" ? "text-primary" : "text-foreground"}`}
                style={{ fontSize: "clamp(52px, 10vw, 76px)" }}
                aria-hidden
              >
                {step.letter}
              </span>

              {/* Conteúdo */}
              <div className="flex-1">
                <h3 className="font-heading font-semibold text-lg tracking-tight text-foreground mb-1">
                  {step.title}
                </h3>
                <p className="text-foreground leading-relaxed text-lg">
                  {step.description}
                </p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default MethodSection;
