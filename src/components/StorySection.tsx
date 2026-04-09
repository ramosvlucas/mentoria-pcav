import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import wppGiselle from "@/assets/whatsapp-giselle.jpg";
import wppGuilherme from "@/assets/whatsapp-guilherme.jpg";
import wppPatrick from "@/assets/whatsapp-patrick.png";
import wppLuciano from "@/assets/whatsapp-luciano.png";
import wppLeonardo from "@/assets/whatsapp-leonardo.png";
import wppEder from "@/assets/whatsapp-eder.jpg";

const stories = [
  {
    name: "Giselle",
    content: (
      <div className="space-y-5 text-muted-foreground leading-relaxed">
        <p>A Giselle chegou na mentoria uns meses atrás. Ainda presa no CLT, ela tinha um produto bom, mas as vendas despencaram e ela não sabia o porquê.</p>
        <p>Na primeira conversa ficou claro: ela <span className="text-foreground font-medium">não fazia pesquisa de mercado</span> e muito menos sabia que existiam dados a serem analisados.</p>
        <p>Depois de algumas semanas, ela me chamou no WhatsApp.</p>
        <img src={wppGiselle} alt="Mensagem da Giselle no WhatsApp" className="w-full rounded-xl border border-border/30" loading="lazy" />
        <p className="text-foreground font-medium">Se livrou da CLT. Hoje tem liberdade, mais qualidade de vida e tempo pra desenvolver o próprio negócio.</p>
      </div>
    ),
  },
  {
    name: "Guilherme",
    content: (
      <div className="space-y-5 text-muted-foreground leading-relaxed">
        <p>O Guilherme também era CLT. Trabalhava o dia todo, chegava em casa cansado e, sem tempo nem direção, pensou o que a maioria pensa: <span className="text-foreground">"Vou pagar alguém pra fazer pra mim."</span></p>
        <p>Foi lá e gastou dinheiro em cursos e consultorias que não deram resultado nenhum. Não sabia o básico sobre o próprio negócio. Não fazia pesquisa, não conhecia os concorrentes, não sabia a margem real de cada produto.</p>
        <p className="font-semibold text-foreground">Só maluco terceiriza o próprio negócio sem ter domínio do que deve ser feito. E o pior: sendo orientado por quem nem vende.</p>
        <p>Foi só quando começou a aplicar o método que a ficha caiu.</p>
        <img src={wppGuilherme} alt="Mensagem do Guilherme no WhatsApp" className="w-full rounded-xl border border-border/30" loading="lazy" />
        <p className="text-foreground font-medium">Em menos de 10 meses, saiu do zero e conquistou a medalha Platinum.</p>
      </div>
    ),
  },
  {
    name: "Patrick",
    content: <img src={wppPatrick} alt="Depoimento do Patrick no WhatsApp" className="w-full rounded-xl border border-border/30" loading="lazy" />,
  },
  {
    name: "Luciano",
    content: <img src={wppLuciano} alt="Depoimento do Luciano no WhatsApp" className="w-full rounded-xl border border-border/30" loading="lazy" />,
  },
  {
    name: "Leonardo",
    content: <img src={wppLeonardo} alt="Depoimento do Leonardo no WhatsApp" className="w-full rounded-xl border border-border/30" loading="lazy" />,
  },
  {
    name: "Éder",
    content: (
      <div className="space-y-5 text-muted-foreground leading-relaxed">
        <p>O Éder acordou um dia, entrou no WhatsApp e mandou uma mensagem simples. Sem enrolação. Sem rodeio.</p>
        <img src={wppEder} alt="Mensagem do Éder no WhatsApp" className="w-full rounded-xl border border-border/30" loading="lazy" />
      </div>
    ),
  },
];

const StorySection = () => {
  const [current, setCurrent] = useState(0);

  const prev = useCallback(() => setCurrent((c) => (c - 1 + stories.length) % stories.length), []);
  const next = useCallback(() => setCurrent((c) => (c + 1) % stories.length), []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="py-16 md:py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold leading-tight">
            Eles estavam <span className="text-gradient-gold">exatamente</span> onde você está agora
          </h2>
        </div>

        <div className="relative">
          <div className="bg-gradient-card border border-border rounded-2xl p-8 md:p-10 shadow-card">
            <p className="font-heading font-bold text-lg text-foreground mb-6">
              {stories[current].name}
            </p>
            {stories[current].content}
          </div>

          {/* Navegação */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 w-9 h-9 rounded-full border border-border bg-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 w-9 h-9 rounded-full border border-border bg-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
            aria-label="Próximo"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Indicadores */}
        <div className="flex justify-center gap-2 mt-6">
          {stories.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-1.5 h-1.5 rounded-full transition-colors ${i === current ? "bg-primary" : "bg-border"}`}
              aria-label={`Ir para depoimento ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StorySection;
