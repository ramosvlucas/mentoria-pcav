import { X, Check } from "lucide-react";

const WhoIsItForSection = () => {
  return (
    <section className="py-16 md:py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12">
          <p className="text-muted-foreground text-lg mb-4">Antes de qualquer coisa, deixa eu ser bem claro...</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 leading-tight">
            A Mentoria PCAV <span className="text-gradient-gold">não é pra todo mundo</span>
          </h2>
        </div>

        {/* NOT for */}
        <div className="bg-gradient-card border border-destructive/20 rounded-2xl p-8 shadow-card mb-6">
          <h3 className="font-heading font-bold text-lg mb-6 text-destructive">Pode fechar essa página se...</h3>
          <div className="space-y-4">
            {[
              "Ainda não vende no Mercado Livre ou está começando agora.",
              "Não tem medalha no Mercado Livre (seja vendendo no CPF ou CNPJ).",
              "Quer aprender sobre Shopee, Amazon ou qualquer outra plataforma.",
              "Não tem dinheiro pra investir no próprio negócio.",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <X className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                <p className="text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* IS for */}
        <div className="bg-gradient-card border border-primary/20 rounded-2xl p-8 shadow-card shadow-gold">
          <h3 className="font-heading font-bold text-lg mb-6 text-gradient-gold">Essa página foi feita pra você se...</h3>
          <div className="space-y-4">
            {[
              "Você já vende, mas sente que está travado e o faturamento oscila sem explicação.",
              "O medo e a incerteza tomam conta e o lucro some sem você entender o porquê.",
              "Cansou de depender de consultoria e de decidir tudo no achismo.",
              "Quer clareza, segurança e previsibilidade pra tomar decisão com base em dados de verdade.",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoIsItForSection;
