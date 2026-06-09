"use client";
import { ExternalLink } from "lucide-react";
import { Button } from "./button";
import { use } from "react";

 export function Reseller() {
  return (
    <section id="revendedor" className="bg-hero-gradient">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
            Se torne um <br />
            <em className="not-italic font-extrabold">
              Revendedor <span className="text-brand-yellow">HERO</span>
            </em>
          </h2>
          <p className="mt-5 max-w-md text-white/85">
            Se você é lojista ou revendedor, acesse nossa plataforma B2B e faça seus pedidos de
            forma rápida e prática, com condições exclusivas.
          </p>
          <Button
            size="lg"
            onClick={() => {
              window.gtag?.("event", "click_revendedor", {
                event_category: "resselert_btn",
                event_label: "User clicked on Seja um Revendedor Hero button",
              });
              window.open("https://portal.heropartes.com.br/", "_blank");
            }}
            className="mt-7 bg-brand-yellow text-brand-green-deep hover:bg-brand-yellow-soft font-semibold"
          >
            Seja um Distribuidor <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>
        <div className="overflow-hidden rounded-2xl shadow-2xl">
          <img
            src="/handshake.png"
            alt="Aperto de mãos parceria Hero Partes"
            className="h-85 w-full object-cover"
            loading="lazy"
            width={800}
            height={600}
          />
        </div>
      </div>
    </section>
  );
}
