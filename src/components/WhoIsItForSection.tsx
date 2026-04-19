import { Check, X } from "lucide-react";

const notFor = [
  "Ainda não vende no Mercado Livre.",
  "Ainda não tem empresa aberta (CNPJ).",
  "Quer aprender sobre Shopee, Amazon ou qualquer outra plataforma.",
  "Não tem dinheiro pra investir no próprio negócio.",
];

const forYou = [
  "Já vende mas sente que está travado e o faturamento oscila sem explicação.",
  "O medo e a incerteza tomam conta e o lucro some sem você entender o porquê.",
  "Cansou de depender de consultoria e de decidir tudo no achismo.",
  "Quer clareza, segurança e previsibilidade pra tomar decisão com base em dados de verdade.",
];

const WhoIsItForSection = () => {
  return (
    <section className="py-16 md:py-20 px-6">
      <div className="max-w-3xl mx-auto">


        <div className="mb-12">
          <p className="text-foreground text-lg mb-4">Antes de qualquer coisa, deixa eu ser bem claro...</p>
          <h2 className="text-3xl md:text-5xl font-heading font-semibold leading-[1.1] tracking-[-0.02em]">
            A Mentoria PCAV <span className="text-primary">não é pra todo mundo</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5">

          {/* NÃO é pra você */}
          <div className="bg-surface border border-line rounded-card p-7 md:p-8">
            <p className="font-mono-label text-destructive mb-5">Não é pra você se…</p>
            <ul className="space-y-4">
              {notFor.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-destructive shrink-0 mt-1" />
                  <p className="text-lg text-foreground leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* É pra você */}
          <div className="bg-surface border border-line rounded-card p-7 md:p-8">
            <p className="font-mono-label text-primary mb-5">É pra você se…</p>
            <ul className="space-y-4">
              {forYou.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-1" />
                  <p className="text-lg text-foreground leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhoIsItForSection;
