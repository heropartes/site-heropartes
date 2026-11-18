"use client";

import { useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./accordion";

// As FEATURED primeiras aparecem sempre; as demais só depois de "Ver todas as perguntas".
const FEATURED = 5;

const questions = [
  {
    q: "As peças vendidas pela Hero Partes são originais?",
    a: [
      "Trabalhamos com peças importadas da marca Hero Partes e peças do mercado de reposição nacional com qualidade equivalente às utilizadas pelas montadoras (OEM).",
    ],
  },
  {
    q: "A Hero Partes oferece garantia nos produtos?",
    a: [
      "Sim. Todos os nossos produtos possuem garantia contra defeitos de fabricação.",
      "Produtos da marca Hero Partes possuem 12 meses de garantia. Para produtos de outras marcas, vale a garantia do fabricante.",
    ],
  },
  {
    q: "Como saber se a peça é compatível com meu veículo?",
    a: [
      "Todas as informações de aplicação, como modelos de veículos compatíveis, anos e números originais (OEM), estão descritas em nosso catálogo de produtos e nos anúncios das peças. Isso facilita a confirmação da compatibilidade antes da compra.",
      "Caso ainda tenha dúvidas, entre em contato com nossa equipe informando o número do chassi do veículo, e teremos prazer em ajudar na verificação da aplicação correta.",
    ],
  },
  {
    q: "Onde posso comprar os produtos da Hero Partes?",
    a: [
      "Você pode encontrar os produtos da Hero Partes com revendedores parceiros e também nas lojas oficiais da marca nos principais marketplaces e canais digitais.",
    ],
  },
  {
    q: "Como posso me tornar um revendedor da Hero Partes?",
    a: [
      "Para revender nossos produtos, basta realizar o cadastro em nosso portal B2B. Após a análise cadastral, você terá acesso ao catálogo e às condições comerciais.",
    ],
  },
  {
    q: "As peças são novas ou recondicionadas?",
    a: [
      "Todos os produtos comercializados pela Hero Partes são novos. Não trabalhamos com peças usadas ou recondicionadas.",
    ],
  },
  {
    q: "A Hero Partes vende diretamente para o consumidor final?",
    a: [
      "Nossos produtos estão disponíveis para clientes B2C através dos nossos parceiros digitais, e para clientes B2B através do nosso portal on-line, garantindo praticidade, segurança e rapidez na entrega.",
    ],
  },
  {
    q: "A Hero Partes entrega para todo o Brasil?",
    a: [
      "Sim. Trabalhamos com plataformas e transportadoras que permitem entregas para todo o território nacional.",
    ],
  },
  {
    q: "Os produtos acompanham nota fiscal?",
    a: [
      "Sim. Todas as vendas são realizadas com emissão de nota fiscal, garantindo segurança e procedência dos produtos.",
    ],
  },
  {
    q: "Como funciona o prazo de entrega?",
    a: [
      "O prazo de entrega depende da plataforma de compra, da modalidade de envio e da localização do cliente. As informações de prazo são exibidas antes da finalização da compra.",
    ],
  },
  {
    q: "Posso rastrear meu pedido?",
    a: [
      "Sim. Após o envio, o código de rastreamento fica disponível para que você acompanhe o status da entrega em tempo real.",
    ],
  },
  {
    q: "A Hero Partes trabalha com pronta entrega?",
    a: [
      "Grande parte do nosso portfólio está disponível à pronta entrega, permitindo envio rápido após a confirmação do pedido.",
    ],
  },
  {
    q: "A Hero Partes trabalha com importação de peças?",
    a: [
      "Sim. Atuamos como importadora digital de autopeças, trazendo produtos de fabricantes reconhecidos internacionalmente, além de trabalhar com parceiros nacionais homologados.",
    ],
  },
  {
    q: "A Hero Partes atende revendedores e autopeças?",
    a: [
      "Sim. Temos um portal B2B exclusivo para lojas de autopeças e distribuidores do setor automotivo.",
    ],
  },
  {
    q: "Existe pedido mínimo para compras no atacado?",
    a: [
      "O pedido mínimo pode variar de acordo com a linha de produtos e as condições comerciais. Nosso time pode orientar sobre as melhores condições para cada caso.",
    ],
  },
  {
    q: "Oficinas mecânicas podem comprar com a Hero Partes?",
    a: [
      "Sim. Oficinas mecânicas podem encontrar os produtos da Hero Partes com revendedores parceiros autorizados e também nas lojas oficiais da marca em diversos canais digitais, como marketplaces e outras plataformas.",
    ],
  },
  {
    q: "A Hero Partes presta suporte técnico sobre as peças?",
    a: [
      "Sim. Nossa equipe está disponível para auxiliar com informações técnicas, aplicação de peças e orientações de instalação pelo nosso WhatsApp (11) 93096-0160 ou pelo e-mail suporte2@heropartes.com.br.",
    ],
  },
  {
    q: "Como funciona o processo de garantia?",
    a: [
      "Caso ocorra algum problema, entre em contato pelo nosso WhatsApp (11) 93096-0160 ou pelo e-mail sac@heropartes.com.br informando o ocorrido. A peça passará por análise técnica conforme os critérios de garantia.",
    ],
  },
  {
    q: "Como acompanhar lançamentos e novidades da Hero Partes?",
    a: [
      "Divulgamos novos produtos, promoções e novidades através das nossas lojas oficiais, redes sociais e catálogo online.",
    ],
  },
  {
    q: "Por que escolher a Hero Partes?",
    a: [
      "A Hero Partes é uma importadora digital especializada em autopeças premium, trabalhando com fabricantes reconhecidos no setor automotivo e oferecendo produtos com garantia, nota fiscal e suporte técnico.",
      "Somos uma das únicas empresas no Brasil com portfólio amplo focado em veículos premium e disponibilidade de pronta entrega com cobertura nacional, através de nossas plataformas e canais digitais.",
    ],
  },
  {
    q: "A Hero Partes tem peças com a marca própria Hero?",
    a: [
      "Sim. Trabalhamos com as melhores peças do mercado internacional, fabricadas com a mesma qualidade, matéria-prima e tecnologia do item original, com a nossa marca Hero. Nossos fornecedores atendem também grandes concessionárias e montadoras.",
    ],
  },
  {
    q: "Como vocês garantem a qualidade dos itens importados pela Hero?",
    a: [
      "A Hero Partes trabalha com fabricantes selecionados que seguem padrões internacionais de qualidade, incluindo certificações e processos utilizados pela indústria automotiva.",
      "Antes de lançar um produto no mercado, avaliamos o fabricante, os processos produtivos e as especificações técnicas das peças, garantindo que os itens atendam aos padrões exigidos no setor automotivo.",
    ],
  },
];

const WHATSAPP = "(11) 93096-0160";
const WHATSAPP_URL = "https://wa.me/5511930960160";

// Torna clicáveis o WhatsApp e os e-mails citados nas respostas.
function linkify(text: string): ReactNode[] {
  return text.split(/(\(11\) 93096-0160|[\w.]+@heropartes\.com\.br)/).map((part, i) => {
    if (part === WHATSAPP) {
      return (
        <a key={i} href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
          {part}
        </a>
      );
    }
    if (part.endsWith("@heropartes.com.br")) {
      return (
        <a key={i} href={`mailto:${part}`}>
          {part}
        </a>
      );
    }
    return part;
  });
}

// Dados estruturados para o Google ler todas as perguntas e respostas, mesmo
// as que só aparecem depois do clique.
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: questions.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a.join(" ") },
  })),
};

export function Faq() {
  const [showAll, setShowAll] = useState(false);
  const [open, setOpen] = useState("");

  const toggle = () => {
    if (showAll) {
      // Fecha uma pergunta que vai sumir e volta ao começo da seção, para a
      // página não "pular" para o rodapé quando a lista encolhe.
      if (questions.findIndex(({ q }) => q === open) >= FEATURED) setOpen("");
      document.getElementById("duvidas")?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.gtag?.("event", "click_faq", {
        event_category: "btn_faq_ver_todas",
        event_label: "User clicked on -Ver todas as perguntas- button in FAQ section",
      });
    }
    setShowAll(!showAll);
  };

  return (
    <section id="duvidas" className="scroll-mt-4 bg-background py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-center font-display text-3xl font-bold text-brand-green md:text-4xl">
          Perguntas Frequentes
        </h2>
        <p className="mt-3 text-center text-muted-foreground">
          Tire suas dúvidas sobre nossos produtos, compras e entregas.
        </p>

        <Accordion
          id="faq-lista"
          type="single"
          collapsible
          value={open}
          onValueChange={setOpen}
          className="mt-10 rounded-xl border border-border bg-card px-6 shadow-card-soft"
        >
          {questions.map(({ q, a }, i) => (
            <AccordionItem
              key={q}
              value={q}
              hidden={!showAll && i >= FEATURED}
              className={!showAll && i === FEATURED - 1 ? "border-b-0" : "last:border-b-0"}
            >
              <AccordionTrigger className="cursor-pointer text-base font-semibold text-foreground hover:text-brand-green hover:no-underline">
                {q}
              </AccordionTrigger>
              <AccordionContent className="space-y-3 leading-relaxed text-muted-foreground [&_a]:font-semibold [&_a]:text-brand-green [&_a]:underline">
                {a.map((p) => (
                  <p key={p}>{linkify(p)}</p>
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-8 text-center">
          <button
            type="button"
            aria-expanded={showAll}
            aria-controls="faq-lista"
            onClick={toggle}
            className="inline-flex cursor-pointer items-center gap-2 rounded-lg bg-brand-yellow px-6 py-3 text-sm font-semibold text-brand-green-deep shadow-card-soft transition-colors hover:bg-brand-yellow-soft"
          >
            {showAll ? "Ver menos" : `Ver todas as perguntas (${questions.length})`}
            <ChevronDown className={`h-4 w-4 transition-transform ${showAll ? "rotate-180" : ""}`} />
          </button>
        </div>
      </div>
    </section>
  );
}
