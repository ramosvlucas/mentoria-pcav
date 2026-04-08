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
