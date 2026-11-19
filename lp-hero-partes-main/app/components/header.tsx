"use client";

import { useEffect, useState } from "react";

const BUTTON =
  "rounded-lg bg-brand-yellow px-4 py-2 text-sm font-semibold text-brand-green-deep shadow-[0_4px_14px_rgba(0,0,0,0.35)] transition-colors hover:bg-brand-yellow-soft";

export function Header() {
  // Sobre o banner o menu é transparente; ao descer a página, fica verde.
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Comprar Agora", href: "#comprar" },
    { label: "Nossa História", href: "#sobre" },
    { label: "Produtos", href: "#produtos" },
    { label: "FAQ", href: "#duvidas" },
    { label: "Contato", href: "#contato" },
  ];
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 backdrop-blur transition-colors duration-300 ${
        scrolled ? "bg-brand-green-deep/95 shadow-lg" : "bg-white/10"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
        <a href="#" className="flex items-center gap-2">
          <img src="/logoHeroPartes.png" alt="Hero Partes" className="h-10 w-auto drop-shadow-lg" />
        </a>
        <nav className="hidden items-center gap-4 whitespace-nowrap text-sm font-medium text-white md:flex lg:gap-5 xl:gap-7">
          {links.map((l) => (
            <a key={l.label} href={l.href}
            className="transition-colors hover:text-brand-yellow"
            onClick={() => {
              window.gtag?.("event", "click_revendedor", {
                event_category: "resselert_header_link",
                event_label: `User clicked on ${l.label} link`,
              });
            }}
            >
              {l.label}
            
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="https://portal.heropartes.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            className={`hidden whitespace-nowrap lg:inline-block ${BUTTON}`}
            onClick={() => {
              window.gtag?.("event", "click_revendedor", {
                event_category: "resselert_header_link",
                event_label: "User clicked on -Seja um Revendedor Hero- header button",
              });
            }}
          >
            Seja um Revendedor Hero
          </a>
          <a
            href="https://catalogo.heropartes.net/"
            target="_blank"
            rel="noopener noreferrer"
            className={BUTTON}
            onClick={() => {
              window.gtag?.("event", "click_catalog", {
                event_category: "btn_catalog_header",
                event_label: "User clicked on -Catálogo Online- header button",
              });
            }}
          >
            Catálogo Online
          </a>
        </div>
      </div>
      <div className="scroll-progress absolute bottom-0 left-0 h-0.5 w-full origin-left bg-brand-yellow" />
    </header>
  );
}