# PROJETO COMPLETO — Mentoria PCAV

> **Stack:** React 18 + Vite + TypeScript + Tailwind CSS + shadcn/ui
> **Hospedagem:** Hostinger (Shared Hosting) — https://olucasvilaronga.com.br
> **Deploy:** Script Python automático via FTP → `python3 deploy.py`

---

## DEPLOY

O deploy é feito pelo script `deploy.py` na raiz do projeto.
Ele faz o build automaticamente e sobe os arquivos via FTP para a Hostinger.

**Credenciais FTP (Hostinger):**
- Host: `82.25.67.111`
- Porta: `21`
- Usuário: `u636536733`
- Senha: `1234Claudecode!`
- Caminho remoto: `/domains/olucasvilaronga.com.br/public_html/`

**Para fazer deploy:**
```
python3 deploy.py
```

O Claude executa isso diretamente. Não é necessária nenhuma ação manual.

---

## CONTEXTO DO PROJETO

Landing page de vendas para a **Mentoria PCAV** de Lucas Vilaronga.
Mentoria individual para vendedores do Mercado Livre focada em leitura de dados.

- **Valor:** R$ 8.497
- **Duração:** 6 meses
- **Mentor:** Lucas Vilaronga
- **CTA principal:** https://typebot.co/olucasvilaronga-mentoria-pcav

---

## ESTRUTURA DE ARQUIVOS

```
src/
├── pages/
│   └── Index.tsx              ← monta a ordem das seções
├── components/
│   ├── HeroSection.tsx        ← headline + CTA acima da dobra
│   ├── PainSection.tsx        ← ciclo do problema + 3 motivos
│   ├── WhoIsItForSection.tsx  ← qualificação: é / não é pra você
│   ├── StorySection.tsx       ← depoimentos com lightbox
│   ├── MethodSection.tsx      ← método PCAV (P·C·A·V)
│   ├── DifferentialsSection.tsx ← tabela sem método × com método
│   ├── CTASection.tsx         ← bloco final de conversão
│   ├── FooterSection.tsx      ← rodapé com redes sociais
│   └── Logo.tsx               ← wordmark [Pcav] em HTML/CSS (sem SVG)
├── assets/
│   ├── whatsapp-giselle.png
│   ├── whatsapp-patrick.png
│   ├── whatsapp-luciano.png
│   ├── whatsapp-leonardo.png
│   ├── whatsapp-eder.png
│   ├── whatsapp-jaque.png
│   └── whatsapp-amanda.png
├── index.css                  ← design system, tokens, animações
└── App.tsx                    ← rotas (/ e 404)
```

---

## ORDEM DAS SEÇÕES (Index.tsx)

1. HeroSection
2. PainSection
3. WhoIsItForSection
4. StorySection
5. MethodSection
6. DifferentialsSection
7. CTASection
8. FooterSection

---

## DESIGN SYSTEM

**Paleta (CSS Variables em `index.css`):**
- Background: `#121212` (cinza carvão, não preto puro)
- Foreground: `#FFFFFF`
- Primary / Accent: `#FBC105` (amarelo da marca)
- Destructive: vermelho `hsl(0 62% 52%)` — usado em seções negativas
- Surface: `hsl(0 0% 12%)` — cards e blocos
- fg-dim: texto secundário
- fg-muted: texto terciário

**Fontes:**
- Space Grotesk (títulos)
- Inter (corpo)
- JetBrains Mono (labels, mono-label, contadores)

**Tokens de borda:**
- `border-line` → `rgb(255 255 255 / 0.08)` (sutil)
- `rounded-card` → `1.25rem`
- `rounded-pill` → `100px` (botões CTA)

---

## CONVENÇÕES DE COR POR CONTEXTO

- **Positivo / destaque:** `text-primary` (amarelo)
- **Negativo / problema:** `text-destructive` ou `text-destructive/70` (vermelho)
- **Neutro / secundário:** `text-fg-dim` ou `text-fg-muted` (cinza)
- **Listas negativas** (ciclo do problema, "Sem o método", "Não é pra você"): vermelho
- **Listas positivas** (método PCAV, "Com o método", "É pra você"): branco + amarelo

---

## IDENTIDADE VISUAL

Os arquivos SVG da nova identidade visual ficam na raiz do projeto:
- `logo-pcav.svg` — versão principal
- `logo-pcav-mono.svg` — versão monocromática
- `logo-pcav-favicon.svg` — versão ícone (somente [P])

O componente `Logo.tsx` ainda renderiza o wordmark via HTML/CSS. A integração dos SVGs pode ser feita futuramente.

---

## SEÇÕES PREVISTAS MAS AINDA NÃO IMPLEMENTADAS

- **TestimonialSection** — bloco de números/estatísticas (ex: "10 meses do zero ao Platinum")
- **FAQSection** — perguntas frequentes com accordion

---

## LINKS IMPORTANTES

- Site ao vivo: https://olucasvilaronga.com.br
- Instagram: https://www.instagram.com/olucasvilaronga/
- YouTube: https://www.youtube.com/@olucasvilaronga
- Typebot (formulário de contato): https://typebot.co/olucasvilaronga-mentoria-pcav
