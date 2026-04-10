import { Instagram, Youtube } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="py-10 px-6 border-t border-border">
      <div className="max-w-3xl mx-auto text-center">
        <div className="flex items-center justify-center gap-4 mb-5">
          <a
            href="https://www.instagram.com/olucasvilaronga/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="w-11 h-11 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors cursor-pointer"
          >
            <Instagram className="w-4 h-4" />
          </a>
          <a
            href="https://www.youtube.com/@olucasvilaronga"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="w-11 h-11 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors cursor-pointer"
          >
            <Youtube className="w-4 h-4" />
          </a>
        </div>
        <p className="text-xs text-muted-foreground/50">
          Lucas Vilaronga © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
