"use client"

import { useState } from "react";
import { Button } from "./button";

export function Hero() {
  const [open, setOpen] = useState(false);

  const marketplaces = [
    {
      name: "Mercado Livre",
      image: "/mercado-livre.svg",
      link: "https://www.mercadolivre.com.br/loja/hero-partes",
    },
    {
      name: "Shopee",
      image: "/shopee.svg",
      link: "https://shopee.com.br/shop/1275302067",
    },
  ];

  return (
    <section className="relative min-h-[680px] w-full overflow-hidden">
      {/* BG */}
      <img
        src="/hero.png"
        alt="Importadora de peças automotivas Hero Partes"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />

      {/* CONTENT */}
      <div className="relative mx-auto flex min-h-[680px] max-w-7xl flex-col justify-center px-6 pt-32 pb-20">
        <h1 className="max-w-2xl font-display text-4xl font-extrabold leading-[1.05] text-white md:text-6xl">
          Importadora de
          <br />
          peças automotivas
          <br />
          <span className="text-brand-yellow">
            de qualidade original
          </span>
        </h1>

        <p className="mt-6 max-w-xl text-base text-white/85 md:text-lg">
          Conheça nossa linha original importada, produzida pela mesma fabricante responsável pelos
          originais de montadora.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Button
            size="lg"
            onClick={() => {
              window.gtag?.("event", "click_catalog", {
                event_category: "btn_catalog_hero",
                event_label: "User clicked on -Acesse nosso Catálogo- button in hero section",
              });
              window.open(
                "https://portal.heropartes.com.br/",
                "_blank"
              );
            }}
            className="bg-brand-yellow text-brand-green-deep hover:bg-brand-yellow-soft font-semibold shadow-card-soft cursor-pointer"
          >
            Acesse nosso Catálogo Online
          </Button>

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
        </div>
      </div>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* overlay */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          {/* content */}
          <div className="relative bg-white rounded-2xl shadow-xl w-[600px] max-w-[90%] p-6">
            {/* header */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-gray-700 font-medium">
                Nossos Marketplaces
              </h2>

              <button
                onClick={() => setOpen(false)}
                className="text-gray-500 hover:text-black"
              >
                ✕
              </button>
            </div>

            {/* cards */}
            <div className="flex gap-6 justify-center">
              {marketplaces.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
             
                  className="relative w-40 h-40 bg-brand-green-deep rounded-xl flex flex-col items-center justify-center shadow-lg hover:scale-105 transition"
                  onClick={
                  () => {
                    window.gtag?.("event", "click_mktplace", {
                      event_category: "btn_mktplace_modal",
                      event_label: "User clicked on -mktplace- modal button",
                    });
                  }
                }

                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-contain"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}