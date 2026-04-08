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
              <p className="mt-4 font-medium text-foreground">Estratégia, direção e ação. Foi isso que mudou tudo.</p>
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
              <p className="mt-6 mb-6 font-semibold text-foreground">
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
