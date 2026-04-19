import { useState, useEffect } from "react";
import { X } from "lucide-react";
import imgGiselle from "@/assets/whatsapp-giselle.png";
import imgPatrick from "@/assets/whatsapp-patrick.png";
import imgLuciano from "@/assets/whatsapp-luciano.png";
import imgLeonardo from "@/assets/whatsapp-leonardo.png";
import imgEder from "@/assets/whatsapp-eder.png";
import imgJaque from "@/assets/whatsapp-jaque.png";
import imgAmanda from "@/assets/whatsapp-amanda.png";

const images = [
  { src: imgGiselle,  alt: "Depoimento da Giselle" },
  { src: imgLuciano,  alt: "Depoimento do Luciano" },
  { src: imgPatrick,  alt: "Depoimento do Patrick" },
  { src: imgEder,     alt: "Depoimento do Éder" },
  { src: imgLeonardo, alt: "Depoimento do Leonardo" },
  { src: imgAmanda,   alt: "Depoimento da Amanda" },
  { src: imgJaque,    alt: "Depoimento da Jaqueline" },
];

const StorySection = () => {
  const [lightbox, setLightbox] = useState<string | null>(null);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setLightbox(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  return (
    <section className="py-16 md:py-20">

      <div className="max-w-3xl mx-auto px-6 mb-10">
        <h2 className="text-3xl md:text-5xl font-heading font-semibold leading-[1.1] tracking-[-0.02em]">
          Eles estavam <span className="text-primary">exatamente</span> onde você está agora
        </h2>
      </div>

      {/* Carrossel — scroll snap, 1 por vez */}
      <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-none px-6 md:px-[calc((100vw-48rem)/2)]">
        {images.map((img, i) => (
          <img
            key={i}
            src={img.src}
            alt={img.alt}
            onClick={() => setLightbox(img.src)}
            className="snap-center shrink-0 h-72 md:h-80 w-auto rounded-xl border border-line cursor-zoom-in hover:opacity-85 transition-opacity select-none"
            draggable={false}
          />
        ))}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="lightbox-overlay"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Depoimento ampliado"
        >
          <button
            onClick={() => setLightbox(null)}
            aria-label="Fechar"
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5 text-white" />
          </button>
          <img
            src={lightbox}
            alt="Depoimento ampliado"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default StorySection;
