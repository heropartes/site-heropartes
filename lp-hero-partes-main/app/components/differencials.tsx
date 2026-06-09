"use client";
import { CheckCircle2, Handshake, Wrench } from "lucide-react";

export function Differentials() {
  const items = [
    {
      icon: CheckCircle2,
      title: "Curadoria Assertiva",
      desc: "Selecionamos cada produto com análise técnica e foco em aplicações confiáveis.",
    },
    {
      icon: Wrench,
      title: "Especialistas em Autopeças Digitais",
      desc: "Operação estruturada para oferecer a melhor experiência de compra online.",
    },
    {
      icon: Handshake,
      title: "Relação direta com fabricantes e importação",
      desc: "Melhor controle de qualidade, margem e desenvolvimento de portfólio com qualidade original.",
    },
  ];
  return (
    <section className="bg-background py-16">
      <div className="mx-auto grid max-w-6xl gap-6 px-6 md:grid-cols-3">
        {items.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="rounded-xl border border-border bg-card p-8 text-center shadow-card-soft transition-transform hover:-translate-y-1"
          >
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-secondary">
              <Icon className="h-7 w-7 text-brand-green" strokeWidth={1.6} />
            </div>
            <h3 className="text-lg font-bold text-foreground">{title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}