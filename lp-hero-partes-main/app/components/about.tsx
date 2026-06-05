"use client";
import { use, useState } from "react";

export function About() {
  const [showHistory, setShowHistory] = useState(false);

  return (
    <section id="sobre" className="bg-background pb-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-3xl bg-hero-gradient p-8 md:p-14">
          {/* CARD QUEM SOMOS */}
          <div
            className={`grid items-center gap-10 md:grid-cols-2 transition-all duration-700
            ${showHistory ? "opacity-0 -translate-y-10 pointer-events-none absolute inset-0" : "opacity-100 translate-y-0 relative"}
            `}
          >
            <div>
              <h2 className="font-display text-3xl font-bold text-brand-yellow md:text-4xl">
                Quem Somos
              </h2>

              <div className="mt-6 space-y-4 text-white/90">
                <p>
                  <span className="font-semibold text-brand-yellow">Hero Partes</span> é
                  especialista em peças automotivas, atendendo oficinas, lojistas e motoristas em
                  todo o Brasil. Com anos de experiência no mercado, oferecemos produtos originais
                  de montadora com o menor custo do mercado.
                </p>
                <p>
                  Todos os produtos comercializados pela Hero Partes passam por um processo
                  criterioso de seleção, priorizando qualidade original, durabilidade e
                  compatibilidade correta. Trabalhamos com fornecedores reconhecidos no mercado
                  automotivo, muitos deles os mesmos que atendem montadoras e concessionárias no
                  Brasil.
                </p>
              </div>

              <button
                onClick={() => {window.gtag?.("event", "click_sobre_nos", {
                  event_category: "btn_ver_mais",
                  event_label: "User clicked on -Mais+ - button in about us section",
                    });
                  setShowHistory(true)}
                }
                className="mt-8 border border-brand-yellow px-4 py-2 text-brand-yellow rounded-lg hover:bg-brand-yellow hover:text-brand-green-deep transition cursor-pointer"
              >
                Mais +
              </button>
            </div>

            <div className="relative h-105 overflow-hidden rounded-lg bg-white/5 ring-1 ring-white/10">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/1VT5gwmzB_Q?si=9Ph1iosm9yBmlBBS" 
                title="Vídeo institucional Hero Partes"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* CARD HISTÓRIA */}
          <div
            className={`transition-all duration-700
            ${showHistory ? "opacity-100 translate-y-0 relative" : "opacity-0 translate-y-10 pointer-events-none absolute inset-0"}
            `}
          >
            <h2 className="font-display text-3xl font-bold text-brand-yellow md:text-4xl">
              Nossa história
            </h2>

            <div className="mt-6 grid md:grid-cols-2 gap-8 text-white/90">
              <p>
                <span className="font-semibold text-brand-yellow">Hero Partes</span> é especialista
                em peças automotivas, atendendo oficinas, lojistas e motoristas em todo o Brasil.
                Com anos de experiência no mercado, oferecemos produtos originais de montadora com o
                menor custo do mercado.
              </p>
              <p>
                Todos os produtos comercializados pela Hero Partes passam por um processo criterioso
                de seleção, priorizando qualidade original, durabilidade e compatibilidade correta.
                Trabalhamos com fornecedores reconhecidos no mercado automotivo, muitos deles os
                mesmos que atendem montadoras e concessionárias no Brasil.
              </p>
            
            </div>

            <button
              onClick={() => setShowHistory(false)}
              className="mt-8 border border-brand-yellow px-4 py-2 text-brand-yellow rounded-lg hover:bg-brand-yellow hover:text-brand-green-deep transition"
            >
              Mostrar menos
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}