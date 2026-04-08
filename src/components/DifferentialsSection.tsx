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
