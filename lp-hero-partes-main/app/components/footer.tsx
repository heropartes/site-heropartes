"use client";

import { ShieldCheck } from "lucide-react";
import { Truck } from "lucide-react";
import { ThumbsUp } from "lucide-react";

export function Footer() {
  const features = [
    {
      icon: ShieldCheck,
      title: "Qualidade Garantida",
      desc: "Trabalhamos com peças originais aprovadas pelas montadoras.",
    },
    {
      icon: Truck,
      title: "Entrega Rápida",
      desc: "Logística estruturada para todo o Brasil com agilidade.",
    },
    {
      icon: ThumbsUp,
      title: "Melhor Preço",
      desc: "Negociação direta com fabricantes garantindo o melhor custo.",
    },
  ];
  return (
    <footer className="relative overflow-hidden bg-brand-green-deep">
      <div className="h-2 w-full bg-brand-yellow" />
      <div className="checker-pattern absolute inset-0 opacity-30" />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-3">
        <div className="space-y-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl bg-white p-5 shadow-card-soft">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-yellow/20">
                  <Icon className="h-5 w-5 text-brand-green" strokeWidth={1.6} />
                </div>
                <p className="font-semibold text-foreground">{title}</p>
              </div>
              <p className="mt-2 text-xs text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
        <div className="text-sm text-white/85">
          <p className="font-bold text-brand-yellow">AJUDA</p>
          <ul className="mt-3 space-y-2">
            <li>Central de Atendimento</li>
            <li>Trocas e Devoluções</li>
            <li>Prazos e Entregas</li>
            <li>Segurança</li>
          </ul>
          <p className="mt-6 font-bold text-brand-yellow">INSTITUCIONAL</p>
          <ul className="mt-3 space-y-2">
            <li>Quem Somos</li>
            <li>Política de Privacidade</li>
          </ul>
          <p className="mt-6 font-bold text-brand-yellow">Entre em contato</p>
          <p className="mt-2">(11) 93096-0160</p>
          <p>Seg à Sex - 9h às 18h</p>
        </div>
        <div className="space-y-6">
          <div>
            <p className="font-display text-xl font-bold text-white">
              Se torne um <br />
              <span className="text-brand-yellow">Revendedor HERO</span>
            </p>
          </div>
          <div>
            <p className="font-display text-xl font-bold text-white">
              Adquira <span className="text-brand-yellow">peças</span> <br />
              para o seu veículo
            </p>
            <div className="mt-3 flex gap-3">
              <a
                onClick={
                  () => {
                    window.gtag?.("event", "click_mktplace", {
                      event_category: "btn_mercado_livre_footer",
                      event_label: "User clicked on -Mercado Livre- footer button",
                    });
                  }
                }
                href="https://www.mercadolivre.com.br/loja/hero-partes"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-yellow text-xl"
              >
                <img src="/mercado-livre.svg" alt="logo Mercado Livre" className="w-8" /> 
                
              </a>
              <a
                onClick={
                  () => {
                    window.gtag?.("event", "click_mktplace", {
                      event_category: "btn_shopee_footer",
                      event_label: "User clicked on -Shopee- footer button",
                    });
                  }
                }
                href="https://shopee.com.br/shop/1275302067"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-yellow text-xl"
              >
                <img src="/shopee.svg" alt="logo Shopee" className="w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative border-t border-white/10 py-5 text-center text-xs text-white/60">
        © {new Date().getFullYear()} Hero Partes. Todos os direitos reservados.
      </div>
    </footer>
  );
}