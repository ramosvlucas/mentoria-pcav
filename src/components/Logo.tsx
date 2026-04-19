import { cn } from "@/lib/utils";

type LogoProps = {
  /** tamanho da letra do core em px (os colchetes escalam proporcionalmente) */
  size?: number;
  /** variante de contexto */
  variant?: "default" | "onLight" | "mono";
  className?: string;
};

/**
 * Wordmark PCAV no estilo "analítico/brackets":
 *   [Pcav]
 * - colchetes em JetBrains Mono amarelo
 * - "P" em amarelo, "cav" em branco (ou preto no light)
 * Um único sistema → muda `size` e tudo escala proporcional.
 */
const Logo = ({ size = 32, variant = "default", className }: LogoProps) => (
  <span
    className={cn(
      "pcav",
      variant === "onLight" && "on-light",
      variant === "mono" && "mono",
      className,
    )}
    style={{ ["--logo-size" as any]: `${size}px` }}
    aria-label="Mentoria PCAV"
  >
    <span className="brkt">[</span>
    <span className="core"><b>P</b>cav</span>
    <span className="brkt">]</span>
  </span>
);

export default Logo;
