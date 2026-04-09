import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const WhatsAppBubble = ({
  lines,
  time,
}: {
  lines: string[];
  time: string;
}) => (
  <div className="rounded-2xl rounded-tl-sm bg-[#1a2b1f] border border-[#2a3f2e] p-4 shadow-md w-full">
    <div className="space-y-2">
      {lines.map((line, i) => (
        <p key={i} className="text-[#e9f5ec] text-sm leading-relaxed">
          {line}
        </p>
      ))}
    </div>
    <div className="flex justify-end mt-2 gap-1 items-center">
      <span className="text-[#8aab8e] text-xs">{time}</span>
      <svg className="w-4 h-4 text-[#53bdeb]" viewBox="0 0 16 11" fill="currentColor">
        <path d="M11.071.653a.45.45 0 0 0-.63 0L4.5 6.595 2.559 4.653a.45.45 0 0 0-.63.63l2.256 2.256a.45.45 0 0 0 .63 0l6.256-6.256a.45.45 0 0 0 0-.63zm1.415 0a.45.45 0 0 0-.63 0L5.914 7.095l-.315-.315a.45.45 0 0 0-.63.63l.63.63a.45.45 0 0 0 .63 0L12.486 1.283a.45.45 0 0 0 0-.63z"/>
      </svg>
    </div>
  </div>
);

const stories = [
  {
    name: "Giselle",
    badge: "Saiu do CLT",
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
        <WhatsAppBubble
          lines={[
            "Hello! Adivinha quem tomou vergonha na cara e foi pesquisar seus concorrentes?",
            "Estratégia, direção e ação. Foi isso que mudou tudo.",
          ]}
          time="10:42"
        />
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
    content: (
      <div className="space-y-5 text-muted-foreground leading-relaxed">
        <p>
          O Guilherme era CLT. Chegou sem saber o básico sobre o próprio
          negócio — sem pesquisa, sem margem, sem entender os concorrentes.
          Gastou dinheiro em cursos que entregaram teoria sem aplicação.
        </p>
        <p>Só quando começou a aplicar o método a ficha caiu.</p>
        <WhatsAppBubble
          lines={[
            "Kkkkk já abriu a mente demais...",
            "80% do resultado vem da pesquisa e 20% da ação.",
          ]}
          time="14:17"
        />
        <p className="text-foreground font-medium">
          Em menos de 10 meses, saiu do zero e conquistou a medalha Platinum.
        </p>
      </div>
    ),
  },
  {
    name: "Patrick",
    badge: "Marketshare dominado",
    content: (
      <div className="space-y-5 text-muted-foreground leading-relaxed">
        <p>
          O Patrick vendia, mas não sabia o tamanho do mercado em que
          estava. Não entendia o próprio marketshare, não sabia posicionar
          o anúncio, não conseguia previsibilidade.
        </p>
        <p>A pesquisa de mercado foi o divisor de águas.</p>
        <WhatsAppBubble
          lines={[
            "Meu maior resultado foi a constância de faturamento com margens saudáveis sem a necessidade de escalar com mais produtos, mas sim liderar o marketshare dos produtos que já tenho.",
            "Eu diria pra quem tem dúvida se entra na mentoria: é se de fato quer tratar seu negócio como um negócio de longo prazo ou um pinga pinga eterno.",
          ]}
          time="12:52"
        />
      </div>
    ),
  },
  {
    name: "Luciano",
    badge: "R$ 1M em 45 dias",
    content: (
      <div className="space-y-5 text-muted-foreground leading-relaxed">
        <p>
          O Luciano vendia há 2 anos — mas hoje sabe que era na base do
          feeling e da sorte. Apostou alto num estoque sazonal, o mercado
          mudou, a margem apertou. Ficou com mais de{" "}
          <span className="text-foreground font-medium">
            500 caixas paradas
          </span>{" "}
          e o prazo de pagamento chegando.
        </p>
        <WhatsAppBubble
          lines={[
            "Em cerca de 45 dias, consegui vender mais de R$ 1 milhão, pagar os fornecedores e ainda sair com lucro.",
            "O principal foi ter aprendido a interpretar os dados e tomar decisões com mais segurança. O Lucas não simplesmente me disse o que fazer. Ele me fez entender o porquê de cada decisão.",
          ]}
          time="11:17"
        />
      </div>
    ),
  },
  {
    name: "Leonardo",
    badge: "Do CPF a 50k/mês em 3 meses",
    content: (
      <div className="space-y-5 text-muted-foreground leading-relaxed">
        <p>
          O Leonardo vendia no CPF — informal, desestruturado, sem margem
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
        <WhatsAppBubble
          lines={[
            "Ver o meu patrimônio crescer na linha final do meu fluxo de caixa me faz sentir que estou progredindo de verdade.",
            "Confiar no trabalho do Lucas foi um grande acerto que tive durante a minha jornada de empreendedorismo.",
          ]}
          time="15:51"
        />
      </div>
    ),
  },
  {
    name: "Éder",
    badge: "Platinum • 300k/mês",
    content: (
      <div className="space-y-5 text-muted-foreground leading-relaxed">
        <p>
          O Éder começou em 2024 com um objetivo claro: ter o próprio
          negócio no Mercado Livre. No meio do caminho entendeu que
          precisava de método — não achismo.
        </p>
        <p>
          Em 2025 atingiu faturamento médio de{" "}
          <span className="text-foreground font-medium">
            R$ 300k por mês
          </span>
          . Em 2026 a mentoria ainda continua.
        </p>
        <WhatsAppBubble
          lines={[
            "Mano batemos platinum aqui essa semana.",
            "Meta agora é 300k mês.",
          ]}
          time="16:05"
        />
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
