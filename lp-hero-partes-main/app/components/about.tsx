"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const AUTOPLAY_MS = 6_000;
const PAUSE_MS = 60_000;
const ANIM_MS = 250;

const slides = [
  {
    id: "quem-somos",
    title: "Quem Somos",
    hasVideo: true,
    paragraphs: [
      <>
        <span className="font-semibold text-brand-yellow">Hero Partes</span> é especialista em peças
        automotivas, atendendo oficinas, lojistas e motoristas em todo o Brasil. Com anos de
        experiência no mercado, oferecemos produtos originais de montadora com o menor custo do
        mercado.
      </>,
      <>
        Todos os produtos comercializados pela Hero Partes passam por um processo criterioso de
        seleção, priorizando qualidade original, durabilidade e compatibilidade correta. Trabalhamos
        com fornecedores reconhecidos no mercado automotivo, muitos deles os mesmos que atendem
        montadoras e concessionárias no Brasil.
      </>,
    ],
  },
  {
    id: "nossa-historia",
    title: "Nossa História",
    paragraphs: [
      <>
        <span className="font-semibold text-brand-yellow">Hero Partes</span> é especialista em peças
        automotivas, atendendo oficinas, lojistas e motoristas em todo o Brasil. Com anos de
        experiência no mercado, oferecemos produtos originais de montadora com o menor custo do
        mercado.
      </>,
      <>
        Todos os produtos comercializados pela Hero Partes passam por um processo criterioso de
        seleção, priorizando qualidade original, durabilidade e compatibilidade correta. Trabalhamos
        com fornecedores reconhecidos no mercado automotivo, muitos deles os mesmos que atendem
        montadoras e concessionárias no Brasil.
      </>,
    ],
  },
  {
    id: "missao-visao",
    left: {
      title: "Missão",
      paragraph: (
        <>
          Importar para o Brasil o melhor portfólio de peças automotivas premium, entregando esse
          portfólio com digitalização de canais de venda e logística eficiente — direto ao mecânico e
          consumidor final, e por meio de parceiros de revenda no varejo e atacado.
        </>
      ),
    },
    right: {
      title: "Visão",
      paragraph: (
        <>
          Ser a marca número 1 escolhida por instaladores profissionais no mercado de suspensão
          automotiva premium no Brasil — e usar essa liderança como base para expandir o portfólio
          para outras linhas premium do setor automotivo.
        </>
      ),
    },
  },
  {
    id: "valores",
    title: "Valores",
    values: [
      "Fornecedor confiável, sem perder competitividade — escolhemos parceiro pela confiança, sem abrir mão de preço de mercado.",
      "Zero produto com defeito — não vendemos o que não é bom, mesmo que custe estoque parado ou prazo.",
      "Fazemos o certo e cumprimos o que prometemos — com cliente, fornecedor e parceiro, mesmo quando custa mais caro no curto prazo.",
      "Operação 100% dentro da lei — nota fiscal em toda compra e venda, impostos em dia, dívida com fornecedor honrada.",
      "Investimos no crescimento de quem trabalha com a gente — metas claras, remuneração por resultado, plano de carreira real.",
      "Nenhum cliente fica sem resposta — atendimento como compromisso, não como formalidade.",
    ],
  },
];

export function About() {
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
    <section id="sobre" className="bg-background pb-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-3xl bg-hero-gradient p-8 md:p-14">

          {/* Seta esquerda */}
          <button
            onClick={prev}
            aria-label="Slide anterior"
            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/25 transition cursor-pointer"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* Seta direita */}
          <button
            onClick={next}
            aria-label="Próximo slide"
            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/25 transition cursor-pointer"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Área de conteúdo com altura fixa baseada no maior slide (Quem Somos + vídeo) */}
          <div
            className={`min-h-[480px] md:min-h-[340px] transition-opacity ease-in-out ${
              fading ? "opacity-0 duration-[150ms]" : "opacity-100 duration-[250ms]"
            }`}
            style={{ transitionDuration: fading ? "150ms" : "250ms" }}
          >
            {slide.id === "quem-somos" ? (
              <div className="grid items-center gap-10 md:grid-cols-2">
                <div>
                  <h2 className="font-display text-3xl font-bold text-brand-yellow md:text-4xl">
                    {slide.title}
                  </h2>
                  <div className="mt-6 space-y-4 text-white/90">
                    {slide.paragraphs?.map((p, i) => <p key={i}>{p}</p>)}
                  </div>
                </div>
                <div className="relative h-72 md:h-80 overflow-hidden rounded-lg bg-white/5 ring-1 ring-white/10">
                  <iframe
                    className="h-full w-full"
                    src="https://www.youtube.com/embed/1VT5gwmzB_Q?si=9Ph1iosm9yBmlBBS"
                    title="Vídeo institucional Hero Partes"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  />
                </div>
              </div>
            ) : slide.id === "nossa-historia" ? (
              <div>
                <h2 className="font-display text-3xl font-bold text-brand-yellow md:text-4xl">
                  {slide.title}
                </h2>
                <div className="mt-6 flex flex-col gap-4 text-white/90">
                  {slide.paragraphs?.map((p, i) => <p key={i}>{p}</p>)}
                </div>
              </div>
            ) : slide.id === "missao-visao" ? (
              <div className="flex flex-col gap-8">
                <div>
                  <h2 className="font-display text-3xl font-bold text-brand-yellow md:text-4xl">
                    {slide.left?.title}
                  </h2>
                  <p className="mt-4 text-white/90">{slide.left?.paragraph}</p>
                </div>
                <div>
                  <h2 className="font-display text-3xl font-bold text-brand-yellow md:text-4xl">
                    {slide.right?.title}
                  </h2>
                  <p className="mt-4 text-white/90">{slide.right?.paragraph}</p>
                </div>
              </div>
            ) : slide.id === "valores" ? (
              <div>
                <h2 className="font-display text-3xl font-bold text-brand-yellow md:text-4xl">
                  {slide.title}
                </h2>
                <ul className="mt-6 grid gap-4 md:grid-cols-2">
                  {slide.values?.map((v, i) => (
                    <li key={i} className="flex gap-3 text-white/90">
                      <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-brand-yellow" />
                      <span>{v}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>

          {/* Pontinhos de navegação */}
          <div className="mt-8 flex justify-center gap-2">
            {slides.map((s, i) => (
              <button
                key={s.id}
                onClick={() => goTo(i, true)}
                aria-label={`Ir para ${s.title}`}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  i === current
                    ? "w-6 bg-brand-yellow"
                    : "w-2 bg-white/30 hover:bg-white/60"
                }`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
