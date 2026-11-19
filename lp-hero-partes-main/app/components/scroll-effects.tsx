"use client";

import { useEffect } from "react";

// Liga as animações de entrada ao rolar (ver globals.css). Cada elemento com
// data-reveal ganha .is-visible uma única vez, quando entra na tela.
export function ScrollEffects() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    const root = document.documentElement;
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");

    // O que já está na tela ao carregar aparece sem animação, para não sumir
    // e voltar (piscar) quando o JavaScript liga as animações.
    for (const el of elements) {
      const { top, bottom } = el.getBoundingClientRect();
      if (top < window.innerHeight && bottom > 0) el.classList.add("is-visible", "reveal-instant");
    }
    root.classList.add("reveal-on");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 },
    );
    elements.forEach((el) => {
      if (!el.classList.contains("is-visible")) observer.observe(el);
    });

    // Quem navega pelo teclado pode focar um botão ainda não revelado.
    const onFocus = (e: FocusEvent) => {
      (e.target as Element).closest("[data-reveal]")?.classList.add("is-visible");
    };
    document.addEventListener("focusin", onFocus);

    return () => {
      observer.disconnect();
      document.removeEventListener("focusin", onFocus);
      root.classList.remove("reveal-on");
    };
  }, []);

  return null;
}
