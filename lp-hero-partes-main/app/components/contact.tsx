"use client";

import { Phone } from "lucide-react";
import { Mail } from "lucide-react";
import { MapPin } from "lucide-react";
import { ExternalLink } from "lucide-react";
import { Button } from "./button";

export function Contact() {
  const items = [
    { icon: Phone, label: "Telefone", value: "(11) 93096-0160", href: "https://api.whatsapp.com/send/?phone=5511930960160&text=Ol%C3%A1%21+Gostaria+de+informa%C3%A7%C3%B5es+sobre+um+produto.&type=phone_number&app_absent=0"},
    { icon: Mail, label: "E-mail", value: "contato@heropartes.com.br", href: "mailto:contato@heropartes.com.br" },
    { icon: MapPin, label: "Endereço", value: "Guarulhos / São Paulo - SP" },
  ];
  return (
    <section id="contato" className="relative overflow-hidden bg-brand-green-deep py-20">
      <div className="checker-pattern absolute inset-0 opacity-50" />
      <div className="relative mx-auto max-w-6xl px-6 text-center">
        <h2 className="font-display text-3xl font-bold text-white md:text-4xl">Fale Conosco</h2>
        <p className="mt-3 text-white/80">
          Entre em contato e tire suas dúvidas. Estamos prontos para atender você!
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {items.map(({ icon: Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                window.gtag?.("event", "click_contact",{
                  event_category: "btns_contact",
                  event_label:"User clicked on a contact button in contact section",
                })
              }

              }
              className="rounded-xl bg-white p-7 shadow-card-soft cursor-pointer hover:shadow-card"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-yellow/20">
                <Icon className="h-6 w-6 text-brand-green" strokeWidth={1.6} />
              </div>
              <p className="mt-4 font-semibold text-foreground">{label}</p>
              <p className="mt-1 text-sm text-muted-foreground">{value}</p>
            </a>
          ))}
        </div>
        <Button
          size="lg"
          onClick={() => {
            window.gtag?.("event", "click_catalog", {
              event_category: "btn_catalog_contact",
              event_label: "User clicked on -Acesse nosso Catálogo- button in contact section",
            });
            window.open("https://portal.heropartes.com.br/", "_blank");
          }}
          className="mt-10 bg-brand-yellow text-brand-green-deep hover:bg-brand-yellow-soft font-semibold"
        >
          Acesse nosso Catálogo <ExternalLink className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  );
}
