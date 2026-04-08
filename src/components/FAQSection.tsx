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
