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
