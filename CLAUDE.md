# Regras do projeto — Mentoria PCAV

## PROIBIDO: travessão

NUNCA use travessão (—) em nenhum texto do site. Nem em copy, nem em código, nem em sugestões.

Use "e", vírgula, ponto ou reescreva a frase. Jamais travessão.

## Deploy

Para publicar o site, rode:

```bash
python3 deploy.py
```

O script faz o build e sobe via FTP para a Hostinger automaticamente.

## Identidade visual

- Cor primária (amarelo da marca): `#FBC105`
- Fundo: `#121212`
- O logo é o wordmark `[Pcav]` renderizado via componente `Logo.tsx`
- Os SVGs da nova identidade estão na raiz: `logo-pcav.svg`, `logo-pcav-mono.svg`, `logo-pcav-favicon.svg`

## Convenção de cores no copy

- Positivo / destaque: amarelo (`text-primary`)
- Negativo / problema: vermelho (`text-destructive`)
- Secundário: cinza (`text-fg-dim`, `text-fg-muted`)

## Componentes ativos

HeroSection, PainSection, WhoIsItForSection, StorySection, MethodSection, DifferentialsSection, CTASection, FooterSection, Logo.

## Depoimentos

Capturas de conversa no WhatsApp. Ficam em `src/assets/whatsapp-[nome].png` e são carregadas no `StorySection.tsx`.
