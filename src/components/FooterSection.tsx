import logoPcav from "@/assets/logo-pcav.png";
import { Instagram, Youtube } from "lucide-react";

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
        <div className="flex items-center justify-center gap-5 mt-3">
          <a
            href="https://instagram.com/olucasvilaronga"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-primary/60 hover:text-primary transition-colors"
          >
            <Instagram className="w-4 h-4" />
            @olucasvilaronga
          </a>
          <a
            href="https://youtube.com/@olucasvilaronga"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-primary/60 hover:text-primary transition-colors"
          >
            <Youtube className="w-4 h-4" />
            YouTube
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
