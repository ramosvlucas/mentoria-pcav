# PROJETO COMPLETO — Mentoria PCAV
> Stack: React + Vite + Tailwind CSS + shadcn/ui
> Hospedagem: Hostinger (Shared Hosting) — olucasvilaronga.com.br
> Deploy: FTP manual após `npm run build`

---

## CONTEXTO

Landing page de vendas para a **Mentoria PCAV** de Lucas Vilaronga.
Mentoria individual para vendedores do Mercado Livre focada em leitura de dados.
Valor: R$8.497 por 6 meses.
CTA: https://typebot.co/olucasvilaronga-metodo-pcav

---

## ORDEM DAS SEÇÕES

1. HeroSection
2. PainSection
3. WhoIsItForSection
4. StorySection
5. TestimonialSection
6. MethodSection
7. DifferentialsSection
8. FAQSection
9. CTASection
10. FooterSection

---

## PALETA DE CORES (CSS Variables)

- Background: azul-escuro profundo (222 28% 7%)
- Foreground: branco suave (210 20% 94%)
- Primary/Accent: dourado (45 100% 51%)
- Card: azul-escuro ligeiramente mais claro
- Destructive: vermelho (0 72% 51%)
- Fontes: Space Grotesk (títulos) + Inter (corpo)

---

---

## index.css

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Space+Grotesk:wght@500;600;700;800&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 222 28% 7%;
    --foreground: 210 20% 94%;

    --card: 222 25% 10%;
    --card-foreground: 210 20% 94%;

    --popover: 222 25% 10%;
    --popover-foreground: 210 20% 94%;

    --primary: 45 100% 51%;
    --primary-foreground: 222 28% 7%;

    --secondary: 222 22% 13%;
    --secondary-foreground: 210 20% 94%;

    --muted: 222 20% 17%;
    --muted-foreground: 215 15% 58%;

    --accent: 45 100% 51%;
    --accent-foreground: 222 28% 7%;

    --destructive: 0 72% 51%;
    --destructive-foreground: 0 0% 98%;

    --border: 222 20% 17%;
    --input: 222 20% 17%;
    --ring: 45 100% 51%;

    --radius: 0.75rem;

    --font-heading: 'Space Grotesk', sans-serif;
    --font-body: 'Inter', sans-serif;

    --gradient-gold: linear-gradient(135deg, hsl(45 100% 51%), hsl(38 100% 60%));
    --gradient-dark: linear-gradient(180deg, hsl(222 28% 8%), hsl(222 30% 5%));
    --gradient-card: linear-gradient(145deg, hsl(222 25% 11%), hsl(222 28% 8%));
    --shadow-gold: 0 0 60px hsl(45 100% 51% / 0.12);
    --shadow-card: 0 8px 32px hsl(222 30% 3% / 0.6);
  }
}

@layer base {
  * {
    @apply border-border;
  }

  body {
    @apply bg-background text-foreground;
    font-family: var(--font-body);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-heading);
  }

  ::selection {
    background: hsl(45 100% 51% / 0.3);
    color: hsl(0 0% 95%);
  }
}

@layer utilities {
  .text-gradient-gold {
    background: var(--gradient-gold);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .bg-gradient-gold {
    background: var(--gradient-gold);
  }

  .bg-gradient-dark {
    background: var(--gradient-dark);
  }

  .bg-gradient-card {
    background: var(--gradient-card);
  }

  .shadow-gold {
    box-shadow: var(--shadow-gold);
  }

  .shadow-card {
    box-shadow: var(--shadow-card);
  }
}

/* Scrolling marquee */
@keyframes scroll-left {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.animate-scroll-left {
  animation: scroll-left 30s linear infinite;
}

@keyframes fade-up {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes pulse-glow {
  0%, 100% {
    box-shadow: 0 0 20px hsl(45 100% 51% / 0.15);
  }
  50% {
    box-shadow: 0 0 50px hsl(45 100% 51% / 0.35);
  }
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

.animate-fade-up {
  animation: fade-up 0.8s ease-out both;
}

.animate-fade-in {
  animation: fade-in 0.6s ease-out both;
}

.animate-pulse-glow {
  animation: pulse-glow 2.5s ease-in-out infinite;
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

/* Lightbox */
.lightbox-overlay {
  position: fixed;
  inset: 0;
  z-index: 100;
  background: hsl(0 0% 0% / 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: zoom-out;
  backdrop-filter: blur(8px);
}

.lightbox-overlay img {
  max-width: 90vw;
  max-height: 90vh;
  border-radius: 12px;
  box-shadow: 0 0 60px hsl(0 0% 0% / 0.5);
}

```

---

## tailwind.config.ts

```tsx
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        heading: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

```

---

## pages/Index.tsx

```tsx
import HeroSection from "@/components/HeroSection";
import PainSection from "@/components/PainSection";
import WhoIsItForSection from "@/components/WhoIsItForSection";
import StorySection from "@/components/StorySection";
import TestimonialSection from "@/components/TestimonialSection";
import MethodSection from "@/components/MethodSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <PainSection />
      <WhoIsItForSection />
      <StorySection />
      <TestimonialSection />
      <MethodSection />
      <DifferentialsSection />
      <FAQSection />
      <CTASection />
      <FooterSection />
    </main>
  );
};

export default Index;

```

---

## HeroSection.tsx

```tsx
import logoPcav from "@/assets/logo-pcav.png";

const HeroSection = () => {
  return (
    <section className="relative flex items-center justify-center overflow-hidden px-6 pt-20 pb-16">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-dark" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(45_100%_51%_/_0.06)_0%,_transparent_60%)]" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Logo */}
        <div className="mb-8 animate-fade-up">
          <div className="inline-block bg-white rounded-xl px-5 py-3 shadow-lg">
            <img
              src={logoPcav}
              alt="Mentoria PCAV"
              className="h-14 md:h-20 mx-auto"
            />
          </div>
        </div>

        {/* Badge */}
        <div className="animate-fade-up" style={{ animationDelay: '0.1s' }}>
          <span className="inline-block bg-primary/10 border border-primary/20 text-primary font-heading font-bold text-xs tracking-[0.2em] uppercase px-5 py-2 rounded-full mb-8">
            Mentoria Individual para Vendedores do Mercado Livre
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold leading-[1.1] mb-6 animate-fade-up" style={{ animationDelay: '0.2s' }}>
          Pare de <span className="text-gradient-gold">adivinhar</span> e comece a{" "}
          <span className="text-gradient-gold">dominar</span> o Mercado Livre
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-up" style={{ animationDelay: '0.35s' }}>
          A mentoria que transforma vendedores perdidos em donos do próprio negócio, com{" "}
          <span className="text-foreground font-medium">dados, estratégia e clareza</span> em cada decisão.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;

```

---

## WhoIsItForSection.tsx

```tsx
import { X } from "lucide-react";

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
              "Ainda não vende no Mercado Livre.",
              "É iniciante ou ainda não tem medalha no Mercado Livre.",
              "É iniciante vendendo no CPF.",
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
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Você já vende, mas sente que está travado. O faturamento oscila, o medo e a incerteza tomam conta, o lucro some e a operação anda a deus dará.
            </p>
            <p>
              Você cansou de contar com a sorte, de depender de consultoria e de decidir tudo no achismo.
            </p>
            <p className="text-foreground font-medium">
              Quer clareza, segurança e previsibilidade pra tomar decisão com base em dados de verdade.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoIsItForSection;

```

---

## PainSection.tsx

```tsx
import { X } from "lucide-react";

const PainSection = () => {
  return (
    <section className="py-16 md:py-24 px-6">
      <div className="max-w-3xl mx-auto">

        <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8 leading-tight">
          Você já abriu o resultado do dia e ficou com a sensação de estar{" "}
          <span className="text-gradient-gold">trabalhando à toa?</span>
        </h2>

        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
          Ontem você vendeu, hoje não. O coração aperta, a cabeça surta e o caixa trava.
          E não, a culpa <strong className="text-foreground">não é do algoritmo</strong>. O problema é que você não sabe analisar dados.
        </p>

        <p className="border-l-2 border-primary pl-6 py-2 my-6 text-foreground font-medium italic text-lg">
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
              { num: "03", text: "Alguém \"roubou\" suas vendas. E isso é o que MAIS acontece." },
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

```

---

## StorySection.tsx

```tsx
const StorySection = () => {
  return (
    <section className="py-16 md:py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold leading-tight">
            Eles estavam <span className="text-gradient-gold">exatamente</span> onde você está agora
          </h2>
        </div>

        <div className="space-y-10">
          {/* Giselle */}
          <div className="bg-gradient-card border border-border rounded-2xl p-8 md:p-10 shadow-card">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-gradient-gold text-primary-foreground text-xs font-heading font-bold px-3 py-1 rounded-full">
                Saiu do CLT
              </span>
              <span className="text-foreground font-heading font-bold">Giselle</span>
            </div>

            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                A Giselle chegou na mentoria uns meses atrás. Ainda presa no CLT, ela tinha um produto bom, mas as vendas despencaram e ela não sabia o porquê.
              </p>
              <p>
                Na primeira conversa ficou claro: ela <span className="text-foreground font-medium">não fazia pesquisa de mercado</span> e muito menos sabia que existiam dados a serem analisados.
              </p>
              <p>
                Depois de algumas semanas, ela me chama no WhatsApp e solta:
              </p>

              <blockquote className="border-l-2 border-primary pl-6 py-2 text-foreground italic text-lg font-medium">
                "Hello! Adivinha quem tomou vergonha na cara pra pesquisar?"
              </blockquote>

              <p>
                Ela descobriu quem dominava o mercado, reposicionou o preço e as vendas voltaram.
              </p>
              <p className="text-foreground font-medium">
                Se livrou da CLT. Hoje tem liberdade, mais qualidade de vida e tempo pra desenvolver o próprio negócio.
              </p>
              <p>Estratégia, direção e ação. Foi isso que mudou tudo.</p>
            </div>
          </div>

          {/* Guilherme */}
          <div className="bg-gradient-card border border-border rounded-2xl p-8 md:p-10 shadow-card">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-gradient-gold text-primary-foreground text-xs font-heading font-bold px-3 py-1 rounded-full">
                Medalha Platinum
              </span>
              <span className="text-foreground font-heading font-bold">Guilherme</span>
            </div>

            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                O Guilherme também era CLT. Trabalhava o dia todo, chegava em casa cansado e, sem tempo nem direção, pensou o que a maioria pensa: <span className="text-foreground">"Vou pagar alguém pra fazer pra mim."</span>
              </p>
              <p>
                Foi lá e gastou dinheiro em cursos e consultorias que não deram resultado nenhum. Não sabia o básico sobre o próprio negócio. Não fazia pesquisa, não conhecia os concorrentes, não sabia a margem real de cada produto.
              </p>
              <p>
                Só maluco terceiriza o próprio negócio sem ter domínio do que deve ser feito. E o pior: sendo orientado por quem nem vende.
              </p>
              <p>Foi só quando começou a aplicar o método que a ficha caiu:</p>

              <blockquote className="border-l-2 border-primary pl-6 py-2 text-foreground italic text-lg font-medium">
                "Agora entendi por que eu nunca conseguia sair do lugar. Me diziam A, mas era B. Como eu não conhecia o B, achava que era o A. Estava tudo errado, cara, e gastei 15 mil na consultoria anual!"
              </blockquote>

              <p className="text-foreground font-medium">
                Em menos de 10 meses, saiu do zero e conquistou a medalha Platinum.
              </p>
              <p>
                E foi aí que ele percebeu, na prática, o que eu sempre digo: <span className="text-foreground font-medium">80% do resultado vem da pesquisa e 20% da ação.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;

```

---

## TestimonialSection.tsx

```tsx
const TestimonialSection = () => {
  return (
    <section className="py-16 px-6 bg-secondary/30">
      <div className="max-w-3xl mx-auto">
        <p className="text-center text-muted-foreground mb-10 text-sm uppercase tracking-widest font-heading font-bold">
          Resultados reais de alunos do Método PCAV
        </p>
        <div className="grid grid-cols-3 gap-6">
          {[
            { number: "10", label: "meses do zero ao Platinum" },
            { number: "367%", label: "crescimento em faturamento" },
            { number: "100%", label: "autonomia nas decisões" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-4xl md:text-6xl font-heading font-bold text-gradient-gold">{stat.number}</p>
              <p className="text-xs md:text-sm text-muted-foreground mt-2 leading-snug">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;

```

---

## MethodSection.tsx

```tsx
import { Search, ShoppingCart, Megaphone, BadgeDollarSign } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    letter: "P",
    title: "Pesquise",
    description: "Descubra quem domina o mercado, entenda o cenário e identifique oportunidades reais antes de agir.",
  },
  {
    icon: ShoppingCart,
    number: "02",
    letter: "C",
    title: "Compre",
    description: "Compre com inteligência. Saiba exatamente o que comprar, quanto comprar e quando comprar com base em dados.",
  },
  {
    icon: Megaphone,
    number: "03",
    letter: "A",
    title: "Anuncie",
    description: "Monte anúncios que convertem. Posicione seu produto com estratégia, preço e copy que fazem diferença.",
  },
  {
    icon: BadgeDollarSign,
    number: "04",
    letter: "V",
    title: "Venda",
    description: "Execute com clareza. Quem tem dados na mão não hesita: age com confiança e vende com margem.",
  },
];

const MethodSection = () => {
  return (
    <section className="py-16 md:py-24 px-6 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 leading-tight">
            O que você vai{" "}
            <span className="line-through text-muted-foreground decoration-muted-foreground/50">aprender</span>{" "}
            <span className="text-gradient-gold">aplicar</span> na prática
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Aqui você aprende a pensar e analisar — não a copiar um passo a passo engessado.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-6">
          {steps.map((step, i) => (
            <div
              key={i}
              className="bg-gradient-card border border-border rounded-2xl p-8 md:p-10 shadow-card group hover:border-primary/30 transition-all duration-300 flex flex-col md:flex-row items-start gap-6"
            >
              <div className="flex items-center gap-4 shrink-0">
                <span className="text-5xl md:text-6xl font-heading font-bold text-gradient-gold opacity-30">
                  {step.number}
                </span>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <step.icon className="w-6 h-6 text-primary" />
                  <h3 className="font-heading font-bold text-xl md:text-2xl">{step.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodSection;

```

---

## DifferentialsSection.tsx

```tsx
import { Brain, Shield, Lightbulb } from "lucide-react";

const DifferentialsSection = () => {
  return (
    <section className="py-16 md:py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 leading-tight">
            Isso aqui <span className="text-gradient-gold">não é</span> mais um curso
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Eu não te entrego um passo a passo engessado. Eu te ensino a forma correta de pensar e analisar.
          </p>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Brain, title: "Autonomia", desc: "Aprenda a tomar suas próprias decisões com base em dados. Sem depender de ninguém." },
            { icon: Lightbulb, title: "Clareza", desc: "Entenda exatamente o que está acontecendo no seu negócio a cada momento." },
            { icon: Shield, title: "Liberdade", desc: "Nunca mais dependa de consultorias ou terceiros. Seja dono de verdade." },
          ].map((d, i) => (
            <div key={i} className="bg-gradient-card border border-border rounded-2xl p-8 shadow-card text-center group hover:border-primary/20 transition-colors duration-300">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/15 transition-colors">
                <d.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-xl mb-3">{d.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;

```

---

## FAQSection.tsx

```tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Para quem é a Mentoria PCAV?",
    a: "Para vendedores do Mercado Livre que já vendem mas estão travados. Se você quer parar de vender no escuro e aprender a tomar decisões com base em dados reais, é pra você.",
  },
  {
    q: "Preciso ter experiência no Mercado Livre?",
    a: "Sim, a mentoria é para quem já vende. Se você ainda não começou, a PCAV não é pra você nesse momento.",
  },
  {
    q: "Em quanto tempo vejo resultados?",
    a: "Depende da sua dedicação. Alunos comprometidos começam a ver mudanças significativas já nas primeiras semanas. O Guilherme, por exemplo, conquistou a medalha Platinum em menos de 10 meses.",
  },
  {
    q: "É diferente de outros cursos e consultorias?",
    a: "Completamente. Aqui você não recebe um passo a passo engessado. Eu te ensino a pensar, analisar e agir com autonomia. Você nunca mais vai depender de consultoria ou terceiros.",
  },
  {
    q: "Como funciona a mentoria?",
    a: "Após clicar no botão, vou te fazer algumas perguntas para entender seu momento. Se fizer sentido para os dois, começamos a trabalhar juntos com acompanhamento individual.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-16 md:py-24 px-6 bg-secondary/30">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            Perguntas <span className="text-gradient-gold">frequentes</span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-gradient-card border border-border rounded-xl px-6 shadow-card data-[state=open]:border-primary/20 transition-colors"
            >
              <AccordionTrigger className="text-left font-heading font-semibold hover:no-underline py-5 text-base">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;

```

---

## CTASection.tsx

```tsx
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-16 md:py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-dark" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(45_100%_51%_/_0.08)_0%,_transparent_60%)]" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold mb-8 leading-tight">
          O botão tá aí.{" "}
          <span className="text-gradient-gold">A decisão é sua.</span>
        </h2>

        <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed">
          Se você é daqueles que assumem a responsabilidade, erguem as mangas e fazem o que precisa ser feito: clica no botão, fala comigo e a gente descobre juntos se agora é a hora certa.
        </p>

        <a href="https://typebot.co/olucasvilaronga-metodo-pcav" target="_blank" rel="noopener noreferrer">
          <Button variant="cta" size="lg" className="h-16 px-12 rounded-full text-xl">
            Quero ter resultado
          </Button>
        </a>
      </div>
    </section>
  );
};

export default CTASection;

```

---

## FooterSection.tsx

```tsx
import logoPcav from "@/assets/logo-pcav.png";

const FooterSection = () => {
  return (
    <footer className="py-10 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto text-center">
        <img
          src={logoPcav}
          alt="Mentoria PCAV"
          className="h-12 mx-auto mb-4 opacity-50"
        />
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Mentoria PCAV. Lucas Vilaronga. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;

```

