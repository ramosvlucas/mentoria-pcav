import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import wppGiselle from "@/assets/whatsapp-giselle.jpg";
import wppGuilherme from "@/assets/whatsapp-guilherme.jpg";
import wppPatrick from "@/assets/whatsapp-patrick.png";
import wppLuciano from "@/assets/whatsapp-luciano.png";
import wppLeonardo from "@/assets/whatsapp-leonardo.png";
import wppEder from "@/assets/whatsapp-eder.jpg";

const stories = [
  {
    name: "Giselle",
    tag: "Saiu do CLT",
    content: (
      <>
        <p>
          A Giselle chegou na mentoria uns meses atrás. Ainda presa no CLT, ela tinha um produto bom, mas as vendas despencaram e ela não sabia o porquê.
        </p>
        <p>
          Na primeira conversa ficou claro: ela <span className="text-foreground font-medium">não fazia pesquisa de mercado</span> e muito menos sabia que existiam dados a serem analisados.
        </p>
        <p>Depois de algumas semanas, ela me chamou no WhatsApp.</p>
        <img src={wppGiselle} alt="Mensagem da Giselle no WhatsApp" className="w-full rounded-xl border border-border/30" loading="lazy" />
        <p className="text-foreground font-medium">
          Se livrou da CLT. Hoje tem liberdade, mais qualidade de vida e tempo pra desenvolver o próprio negócio.
        </p>
      </>
    ),
  },
  {
    name: "Guilherme",
    tag: "Livre das consultorias",
    content: (
      <>
        <p>
          O Guilherme também era CLT. Trabalhava o dia todo, chegava em casa cansado e, sem tempo nem direção, pensou o que a maioria pensa: <span className="text-foreground">"Vou pagar alguém pra fazer pra mim."</span>
        </p>
        <p>
          Foi lá e gastou dinheiro em cursos e consultorias que não deram resultado nenhum. Não sabia o básico sobre o próprio negócio. Não fazia pesquisa, não conhecia os concorrentes, não sabia a margem real de cada produto.
        </p>
        <p className="font-semibold text-foreground">
          Só maluco terceiriza o próprio negócio sem ter domínio do que deve ser feito. E o pior: sendo orientado por quem nem vende.
        </p>
        <p>Foi só quando começou a aplicar o método que a ficha caiu.</p>
        <img src={wppGuilherme} alt="Mensagem do Guilherme no WhatsApp" className="w-full rounded-xl border border-border/30" loading="lazy" />
        <p className="text-foreground font-medium">
          Em menos de 10 meses, saiu do zero e conquistou a medalha Platinum.
        </p>
      </>
    ),
  },
  {
    name: "Patrick",
    tag: "Marketshare e margem",
    content: (
      <img src={wppPatrick} alt="Depoimento do Patrick no WhatsApp" className="w-full rounded-xl border border-border/30" loading="lazy" />
    ),
  },
  {
    name: "Luciano",
    tag: "R$ 1 milhão em 45 dias",
    content: (
      <img src={wppLuciano} alt="Depoimento do Luciano no WhatsApp" className="w-full rounded-xl border border-border/30" loading="lazy" />
    ),
  },
  {
    name: "Leonardo",
    tag: "Aluno PCAV",
    content: (
      <img src={wppLeonardo} alt="Depoimento do Leonardo no WhatsApp" className="w-full rounded-xl border border-border/30" loading="lazy" />
    ),
  },
  {
    name: "Éder",
    tag: "Medalha Platinum",
    content: (
      <>
        <p>O Éder acordou um dia, entrou no WhatsApp e mandou uma mensagem simples. Sem enrolação. Sem rodeio.</p>
        <img src={wppEder} alt="Mensagem do Éder no WhatsApp" className="w-full rounded-xl border border-border/30" loading="lazy" />
      </>
    ),
  },
];

const StorySection = () => {
  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));

  return (
    <section className="py-16 md:py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold leading-tight">
            Eles estavam <span className="text-gradient-gold">exatamente</span> onde você está agora
          </h2>
        </div>

        <Carousel
          plugins={[plugin.current]}
          opts={{ loop: true, align: "start" }}
          className="w-full"
        >
          <CarouselContent>
            {stories.map((story, i) => (
              <CarouselItem key={i}>
                <div className="bg-gradient-card border border-border rounded-2xl p-8 md:p-10 shadow-card">
                  <p className="font-heading font-bold text-lg text-foreground mb-6">
                    {story.name}
                  </p>
                  <div className="space-y-5 text-muted-foreground leading-relaxed">
                    {story.content}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default StorySection;
