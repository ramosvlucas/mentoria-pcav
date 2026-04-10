import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import imgGiselle from "@/assets/whatsapp-giselle.jpg";
import imgGuilherme from "@/assets/whatsapp-guilherme.jpg";
import imgPatrick from "@/assets/whatsapp-patrick.png";
import imgLuciano from "@/assets/whatsapp-luciano.png";
import imgLeonardo from "@/assets/whatsapp-leonardo.png";
import imgEder from "@/assets/whatsapp-eder.png";
import imgJaque from "@/assets/whatsapp-jaque.png";
import imgAmanda from "@/assets/whatsapp-amanda.png";

const stories = [
  {
    name: "Giselle",
    badge: "Saiu do CLT",
    image: imgGiselle,
    imageAlt: "Print de WhatsApp da Giselle",
    content: (
      <div className="space-y-5 text-muted-foreground leading-relaxed">
        <p>
          A Giselle chegou na mentoria ainda presa no CLT. Tinha um produto
          bom, mas as vendas despencaram e ela não sabia o porquê.
        </p>
        <p>
          Na primeira conversa ficou claro: ela{" "}
          <span className="text-foreground font-medium">
            não fazia pesquisa de mercado
          </span>{" "}
          e muito menos sabia que existiam dados a serem analisados.
        </p>
        <p className="text-foreground font-medium">
          Se livrou do CLT. Hoje tem liberdade, mais qualidade de vida
          e tempo pra desenvolver o próprio negócio.
        </p>
      </div>
    ),
  },
  {
    name: "Guilherme",
    badge: "Medalha Platinum",
    image: imgGuilherme,
    imageAlt: "Print de WhatsApp do Guilherme",
    content: (
      <div className="space-y-5 text-muted-foreground leading-relaxed">
        <p>
          O Guilherme era CLT. Chegou sem saber o básico sobre o próprio
          negócio: sem pesquisa, sem margem, sem entender os concorrentes.
          Gastou dinheiro em cursos que entregaram teoria sem aplicação.
        </p>
        <p>Só quando começou a aplicar o método a ficha caiu.</p>
        <p className="text-foreground font-medium">
          Em menos de 10 meses, saiu do zero e conquistou a medalha Platinum.
        </p>
      </div>
    ),
  },
  {
    name: "Patrick",
    badge: "Marketshare dominado",
    image: imgPatrick,
    imageAlt: "Print de WhatsApp do Patrick",
    content: (
      <div className="space-y-5 text-muted-foreground leading-relaxed">
        <p>
          O Patrick vendia, mas não sabia o tamanho do mercado em que
          estava. Não entendia o próprio marketshare, não sabia posicionar
          o anúncio, não conseguia previsibilidade.
        </p>
        <p>A pesquisa de mercado foi o divisor de águas.</p>
      </div>
    ),
  },
  {
    name: "Luciano",
    badge: "R$ 1M em 45 dias",
    image: imgLuciano,
    imageAlt: "Print de WhatsApp do Luciano",
    content: (
      <div className="space-y-5 text-muted-foreground leading-relaxed">
        <p>
          O Luciano vendia há 2 anos. Mas hoje sabe que era na base do
          feeling e da sorte. Apostou alto num estoque sazonal, o mercado
          mudou, a margem apertou. Ficou com mais de{" "}
          <span className="text-foreground font-medium">
            500 caixas paradas
          </span>{" "}
          e o prazo de pagamento chegando.
        </p>
      </div>
    ),
  },
  {
    name: "Leonardo",
    badge: "Do CPF a 50k/mês em 3 meses",
    image: imgLeonardo,
    imageAlt: "Print de WhatsApp do Leonardo",
    content: (
      <div className="space-y-5 text-muted-foreground leading-relaxed">
        <p>
          O Leonardo vendia no CPF, informal, desestruturado, sem margem
          real e sem visão de futuro. Chegou a ter produto apreendido
          nos Correios.
        </p>
        <p>
          Entrou na mentoria, abriu o CNPJ e começou do zero com método.
          Em 3 meses:{" "}
          <span className="text-foreground font-medium">
            Full ativo, empresa aberta e 50k por mês
          </span>
          . De informal a empreendedor de verdade.
        </p>
      </div>
    ),
  },
  {
    name: "Amanda",
    badge: "Clareza e confiança",
    image: imgAmanda,
    imageAlt: "Print de depoimento da Amanda",
    content: (
      <div className="space-y-5 text-muted-foreground leading-relaxed">
        <p>
          A Amanda entrou na mentoria querendo crescer no Mercado Livre, mas ainda tomava decisões no achismo,
          sem entender os números e sem saber como o mercado funcionava de verdade.
        </p>
        <p>
          Depois que começou a aplicar o método, passou a{" "}
          <span className="text-foreground font-medium">
            enxergar o mercado de forma mais estratégica
          </span>{" "}
          e a tomar decisões com segurança.
        </p>
        <p className="text-foreground font-medium">
          "Sinto uma diferença enorme na minha forma de pensar e agir. Tenho muito mais confiança no que estou fazendo."
        </p>
      </div>
    ),
  },
  {
    name: "Jaqueline",
    badge: "Mentoria individual",
    image: imgJaque,
    imageAlt: "Print de depoimento da Jaqueline",
    content: (
      <div className="space-y-5 text-muted-foreground leading-relaxed">
        <p>
          A Jaque já tinha passado por outras mentorias. Mas sempre em grupos lotados,
          sem suporte direto e sem o mentor presente.
        </p>
        <p>
          Na mentoria PCAV foi diferente: aprendeu a pesquisar mercado, a ter um{" "}
          <span className="text-foreground font-medium">
            olhar cirúrgico na escolha dos produtos
          </span>{" "}
          e a entender como o algoritmo funciona na prática.
        </p>
        <p className="text-foreground font-medium">
          "Você é muito mais que um mentor. É o cara fora do comum em conhecimento e empatia."
        </p>
      </div>
    ),
  },
  {
    name: "Éder",
    badge: "Platinum • 300k/mês",
    image: imgEder,
    imageAlt: "Print de WhatsApp do Éder",
    content: (
      <div className="space-y-5 text-muted-foreground leading-relaxed">
        <p>
          O Éder começou em 2024 com um objetivo claro: ter o próprio
          negócio no Mercado Livre. No meio do caminho entendeu que
          precisava de método, não de achismo.
        </p>
        <p>
          Em 2025 atingiu faturamento médio de{" "}
          <span className="text-foreground font-medium">
            R$ 300k por mês
          </span>
          . Em 2026 a mentoria ainda continua.
        </p>
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
    <section className="py-20 md:py-28 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-heading font-bold leading-tight">
            Eles estavam <span className="text-gradient-gold">exatamente</span> onde você está agora
          </h2>
        </div>

        <div className="relative">
          <div className="bg-gradient-card border border-border rounded-2xl p-8 md:p-10 shadow-card">
            <div className="flex items-center gap-3 mb-6 flex-wrap">
              <p className="font-heading font-bold text-lg text-foreground">
                {stories[current].name}
              </p>
              {stories[current].badge && (
                <span className="bg-primary/10 border border-primary/20 text-primary font-heading font-bold text-xs tracking-wide px-3 py-1 rounded-full">
                  {stories[current].badge}
                </span>
              )}
            </div>

            {stories[current].content}

            <div className="mt-6">
              <img
                src={stories[current].image}
                alt={stories[current].imageAlt}
                className="w-full rounded-xl border border-border/40 shadow-md"
              />
            </div>
          </div>

          {/* Navegação — oculta no mobile, visível a partir de md */}
          <button
            onClick={prev}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 w-11 h-11 rounded-full border border-border bg-card items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors cursor-pointer touch-action-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label="Depoimento anterior"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={next}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 w-11 h-11 rounded-full border border-border bg-card items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors cursor-pointer touch-action-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label="Próximo depoimento"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Indicadores */}
        <div className="flex justify-center gap-1 mt-6">
          {stories.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="p-2 cursor-pointer touch-action-manipulation focus-visible:outline-none"
              aria-label={`Ir para depoimento ${i + 1}`}
            >
              <span className={`block w-1.5 h-1.5 rounded-full transition-colors ${i === current ? "bg-primary" : "bg-border"}`} />
            </button>
          ))}
        </div>

      </div>
    </section>
  );
};

export default StorySection;
