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

        {/* Redes Sociais */}
        <div className="mt-10 flex flex-wrap justify-center gap-8">
          <a
            href="https://www.instagram.com/heropartes/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="group flex flex-col items-center gap-2 text-foreground/50 transition-colors hover:text-[#e21d92]"
          >
            <span
              className="flex h-16 w-16 items-center justify-center rounded-full border border-foreground/10 transition-all"
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "linear-gradient(white, white) padding-box, linear-gradient(135deg, #e21d92, #fac986, #4e58d7, #fb631e, #9350d5) border-box";
                el.style.borderColor = "transparent";
                el.style.boxShadow = "0 0 12px rgba(226,29,146,0.3), 0 0 20px rgba(147,80,213,0.2)";
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "";
                el.style.borderColor = "";
                el.style.boxShadow = "";
              }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </span>
            <span className="text-xs font-medium">Instagram</span>
          </a>

          <a
            href="https://www.facebook.com/people/Hero-Partes/100083576190261/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="group flex flex-col items-center gap-2 text-foreground/50 transition-colors hover:text-[#1877F2]"
          >
            <span className="flex h-16 w-16 items-center justify-center rounded-full border border-foreground/10 transition-all group-hover:border-[#1877F2]/30 group-hover:bg-[#1877F2]/5">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8" aria-hidden="true">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </span>
            <span className="text-xs font-medium">Facebook</span>
          </a>

          <a
            href="https://www.youtube.com/@HeroPartesAutomotive"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="group flex flex-col items-center gap-2 text-foreground/50 transition-colors hover:text-[#FF0000]"
          >
            <span className="flex h-16 w-16 items-center justify-center rounded-full border border-foreground/10 transition-all group-hover:border-[#FF0000]/30 group-hover:bg-[#FF0000]/5">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8" aria-hidden="true">
                <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </span>
            <span className="text-xs font-medium">YouTube</span>
          </a>

          <a
            href="https://www.reclameaqui.com.br/empresa/hero-partes-solucoes-empreendedoras-ltda/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Reclame Aqui"
            className="group flex flex-col items-center gap-2 text-foreground/50 transition-colors hover:text-[#0a7739]"
          >
            <span className="flex h-16 w-16 items-center justify-center rounded-full border border-foreground/10 transition-all group-hover:border-[#96bd2e] group-hover:bg-[#cfe4c5]/30" style={{ transition: "border-color 0.3s, background-color 0.3s, box-shadow 0.3s" }} onMouseEnter={e => (e.currentTarget as HTMLElement).style.boxShadow = "0 0 0 3px #c4dc8c55"} onMouseLeave={e => (e.currentTarget as HTMLElement).style.boxShadow = ""}>
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8" aria-hidden="true">
                <path d="M12 2L4 6v5c0 5.25 3.5 10.15 8 11.5 4.5-1.35 8-6.25 8-11.5V6L12 2z" />
                <text x="12" y="15" textAnchor="middle" fill="white" fontSize="6.5" fontWeight="bold" fontFamily="sans-serif">RA</text>
              </svg>
            </span>
            <span className="text-xs font-medium">Reclame Aqui</span>
          </a>
        </div>

      </div>
    </section>
  );
}
