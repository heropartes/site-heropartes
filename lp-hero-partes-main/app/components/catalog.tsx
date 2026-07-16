"use client";
import { ExternalLink } from "lucide-react";
import { Button } from "./button";
import { Zap, Cog, Ruler, Wrench } from "lucide-react";

export function Catalog() {
  const cats = [
    { icon: Zap, label: "Coxins do Motor", href: "https://portal.heropartes.com.br/" },
    { icon: Cog, label: "Coxins de Câmbio", href: "https://portal.heropartes.com.br/" },
    { icon: Ruler, label: "Braços, Buchas e Bandejas", href: "https://portal.heropartes.com.br/" },
    { icon: Wrench, label: "Ferramentas", href: "https://portal.heropartes.com.br/" },
  ];
  
  return (
    <section id="produtos" className="bg-secondary py-20">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
          O que você encontrará no catálogo?
        </h2>
        <p className="mt-3 text-muted-foreground">
          Temos um catálogo completo de peças para diversas marcas e modelos.
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cats.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-xl bg-card p-6 shadow-card-soft transition-all hover:-translate-y-1 hover:shadow-lg"
              onClick={() => {
                window.gtag?.("event", "click_catalog", {
                  event_category: "btns_catalog",
                  event_label: `user clicked on ${label} category in catalog section`,
                });
              }}
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-secondary transition-colors group-hover:bg-brand-yellow/30">
                <Icon className="h-6 w-6 text-brand-green" strokeWidth={1.6} />
              </div>
              <p className="mt-4 text-sm font-semibold text-foreground">{label}</p>
              
            </a>
          ))}
        </div>
        <Button
          size="lg"
          onClick={() => {
            window.gtag?.("event", "click_revendedor", {
              event_category: "loja_online_btn",
              event_label: "User clicked on Loja Online para Distribuidores button",
            });
            window.open("https://portal.heropartes.com.br/", "_blank");
          }}
          className="mt-10 bg-brand-yellow text-brand-green-deep hover:bg-brand-yellow-soft font-semibold"
        >
          Loja Online para Distribuidores <ExternalLink className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  );
}