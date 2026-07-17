"use client"

import { useState, useEffect, useRef, useCallback } from "react";
import { Button } from "./button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const AUTOPLAY_MS = 6_000;
const PAUSE_MS = 60_000;
const ANIM_MS = 300;

type SlideButton = "catalog" | "marketplace";

const slides = [
  {
    id: "slide1",
    image: "/hero.png",
    alt: "Importadora de peças automotivas Hero Partes",
    objectPosition: "center",
    title: (
      <>
        Importadora de
        <br />
        peças automotivas
        <br />
        <span className="text-brand-yellow">de qualidade original</span>
      </>
    ),
    subtitle: <p>Conheça nossa linha original importada, produzida pela mesma fabricante responsável pelos originais de montadora.</p>,
    buttons: ["catalog", "marketplace"] as SlideButton[],
  },
  {
    id: "slide3",
    image: "/slide3.jpg",
    alt: "Hero Partes - Autopeças Importadas Premium",
    objectPosition: "top",
    title: (
      <>
        Autopeças Importadas para
        <br />
        <span className="text-brand-yellow">veículos Premium</span>
      </>
    ),
    subtitle: (
      <>
        <p>Conheça nosso portfólio exclusivo de peças de qualidade original, com um ano de garantia.</p>
        <p className="mt-3">Atendimento humanizado, linha premium e fornecimento ágil para parceiros.</p>
      </>
    ),
    buttons: ["catalog"] as SlideButton[],
  },
  {
    id: "slide2",
    image: "/slide2.jpg",
    alt: "Marcas que trabalhamos - Hero Partes",
    objectPosition: "top",
    title: (
      <>
        Marcas que
        <br />
        <span className="text-brand-yellow">trabalhamos</span>
      </>
    ),
    subtitle: <p>Qualidade original para seu veículo. Parceiros que garantem confiança, desempenho e pronta entrega.</p>,
    buttons: ["marketplace"] as SlideButton[],
  },
];

export function Hero() {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);
  const busy = useRef(false);
  const currentRef = useRef(0);
  const autoplayTimer = useRef<ReturnType<typeof setInterval> | null>(null);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const startAutoplay = useCallback(() => {
    if (autoplayTimer.current) clearInterval(autoplayTimer.current);
    autoplayTimer.current = setInterval(() => {
      if (busy.current) return;
      busy.current = true;
      setFading(true);
      setTimeout(() => {
        const next = (currentRef.current + 1) % slides.length;
        currentRef.current = next;
        setCurrent(next);
        setFading(false);
        busy.current = false;
      }, ANIM_MS);
    }, AUTOPLAY_MS);
  }, []);

  const goTo = useCallback((next: number, fromUser = false) => {
    if (busy.current || next === currentRef.current) return;
    busy.current = true;
    setFading(true);
    setTimeout(() => {
      currentRef.current = next;
      setCurrent(next);
      setFading(false);
      busy.current = false;
    }, ANIM_MS);

    if (fromUser) {
      if (autoplayTimer.current) clearInterval(autoplayTimer.current);
      if (resumeTimer.current) clearTimeout(resumeTimer.current);
      resumeTimer.current = setTimeout(startAutoplay, PAUSE_MS);
    }
  }, [startAutoplay]);

  useEffect(() => {
    startAutoplay();
    return () => {
      if (autoplayTimer.current) clearInterval(autoplayTimer.current);
      if (resumeTimer.current) clearTimeout(resumeTimer.current);
    };
  }, [startAutoplay]);

  function prev() {
    const next = currentRef.current === 0 ? slides.length - 1 : currentRef.current - 1;
    goTo(next, true);
  }

  function next() {
    const next = currentRef.current === slides.length - 1 ? 0 : currentRef.current + 1;
    goTo(next, true);
  }

  const slide = slides[current];

  return (
    <section className="relative min-h-[680px] w-full overflow-hidden">

      {/* Imagens de fundo — crossfade */}
      {slides.map((s, i) => (
        <img
          key={s.id}
          src={s.image}
          alt={s.alt}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
          style={{ objectPosition: s.objectPosition }}
        />
      ))}


      {/* Gradiente escuro — apenas no slide 1 */}
      <div className={`absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent transition-opacity duration-700 ${current === 0 ? "opacity-100" : "opacity-0"}`} />

      {/* Seta esquerda */}
      <button
        onClick={prev}
        aria-label="Slide anterior"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/30 text-white hover:bg-black/50 transition cursor-pointer"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      {/* Seta direita */}
      <button
        onClick={next}
        aria-label="Próximo slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/30 text-white hover:bg-black/50 transition cursor-pointer"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Conteúdo */}
      <div
        className={`relative mx-auto flex min-h-[680px] max-w-7xl flex-col px-6 pt-32 pb-20 transition-opacity duration-300 ${
          fading ? "opacity-0" : "opacity-100"
        }`}
      >
        {/* Texto específico de cada slide — min-h garante que o botão fique sempre na mesma altura */}
        <div className="min-h-[190px] md:min-h-[270px]">
          <h1 className="max-w-2xl font-display text-4xl font-extrabold leading-[1.05] text-white md:text-6xl">
            {slide.title}
          </h1>
          {slide.subtitle && (
            <div className="mt-6 max-w-xl text-base text-white/85 md:text-lg">
              {slide.subtitle}
            </div>
          )}
        </div>

        {/* Botões — sempre na mesma altura */}
        <div className="mt-8 flex flex-wrap gap-4">
          {slide.buttons.includes("catalog") && (
            <Button
              size="lg"
              onClick={() => {
                window.gtag?.("event", "click_catalog", {
                  event_category: "btn_catalog_hero",
                  event_label: "User clicked on -Acesse nosso Catálogo- button in hero section",
                });
                window.open("https://portal.heropartes.com.br/", "_blank");
              }}
              className="bg-brand-yellow text-brand-green-deep hover:bg-brand-yellow-soft font-semibold shadow-card-soft cursor-pointer"
            >
              Acesse nosso Catálogo Online
            </Button>
          )}
          {slide.buttons.includes("marketplace") && (
            <Button
              size="lg"
              variant="outline"
              onClick={() => {
                window.gtag?.("event", "click_mktplace_modal", {
                  event_category: "btn_open_mktplace_modal",
                  event_label: "User clicked on -Compre nos maiores mktplaces- button in hero section",
                });
                document.getElementById("comprar")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="border-brand-yellow bg-brand-green/40 text-white backdrop-blur hover:bg-brand-green/60 cursor-pointer"
            >
              Compre nos maiores Marketplaces
            </Button>
          )}
        </div>
      </div>

      {/* Pontinhos de navegação */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((s, i) => (
          <button
            key={s.id}
            onClick={() => goTo(i, true)}
            aria-label={`Ir para slide ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
              i === current ? "w-6 bg-white" : "w-2 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
