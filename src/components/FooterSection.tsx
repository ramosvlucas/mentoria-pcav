import { Instagram, Youtube } from "lucide-react";
import Logo from "@/components/Logo";

const FooterSection = () => {
  return (
    <footer className="py-8 md:py-10 px-6 bg-surface">
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

          <Logo size={22} />

          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/olucasvilaronga/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
            >
              <Instagram className="w-4 h-4" />
              <span className="font-mono text-xs">Instagram</span>
            </a>
            <a
              href="https://www.youtube.com/@olucasvilaronga"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
            >
              <Youtube className="w-4 h-4" />
              <span className="font-mono text-xs">YouTube</span>
            </a>
          </div>
        </div>

        <div className="mt-8">
          <p className="font-mono text-xs text-foreground">
            Lucas Vilaronga © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
