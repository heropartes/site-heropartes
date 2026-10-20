import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "../components/footer";
import { WhatsAppButton } from "../components/whatsapp-button";

export const metadata: Metadata = {
  title: "Política de Privacidade | Hero Partes",
  description: "Como a Hero Partes trata os dados de quem visita o site, em conformidade com a LGPD.",
};

const UPDATED_AT = "20 de outubro de 2026";

const sections = [
  {
    title: "1. Quem somos",
    body: (
      <p>
        Este site é mantido pela <strong>Hero Partes Soluções Empreendedoras Ltda.</strong>, com sede em
        Guarulhos/SP, que é a controladora dos dados pessoais tratados aqui, nos termos da Lei Geral de
        Proteção de Dados Pessoais (Lei nº 13.709/2018 — LGPD).
      </p>
    ),
  },
  {
    title: "2. Quais dados coletamos",
    body: (
      <>
        <p>
          O site não possui formulários de cadastro: não pedimos nome, e-mail, telefone ou documentos. Os
          dados coletados são apenas de navegação:
        </p>
        <ul>
          <li>
            <strong>Estatísticas de acesso (Vercel Analytics):</strong> páginas visitadas, país, tipo de
            aparelho, sistema e navegador. Não usa cookies e não identifica o visitante individualmente.
          </li>
          <li>
            <strong>Google Analytics, via Google Tag Manager:</strong> páginas visitadas, cliques em botões
            do site (como Mercado Livre, Shopee, catálogo e contato), origem da visita, aparelho, navegador e
            localização aproximada. Usa cookies e <strong>só é ativado se você aceitar</strong>.
          </li>
          <li>
            <strong>Microsoft Clarity:</strong> registro de como a página é usada — cliques, rolagem,
            movimento do mouse e mapas de calor —, além de aparelho e navegador. Usa cookies e{" "}
            <strong>só é ativado se você aceitar</strong>.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "3. Para que usamos os dados",
    body: (
      <ul>
        <li>Entender quais conteúdos e produtos despertam mais interesse;</li>
        <li>Identificar problemas de uso e melhorar o site;</li>
        <li>Medir os resultados das nossas campanhas de divulgação.</li>
      </ul>
    ),
  },
  {
    title: "4. Base legal",
    body: (
      <p>
        As estatísticas sem cookies (Vercel Analytics) são tratadas com base no legítimo interesse (art. 7º,
        IX, da LGPD), por serem dados não identificados e indispensáveis ao funcionamento e à melhoria do
        site. O Google Analytics e o Microsoft Clarity são usados somente com o seu consentimento (art. 7º,
        I), que pode ser retirado a qualquer momento.
      </p>
    ),
  },
  {
    title: "5. Cookies e como gerenciar sua escolha",
    body: (
      <>
        <p>
          Ao entrar no site pela primeira vez, você escolhe se aceita ou recusa os cookies de análise. Se
          recusar, eles não são carregados. Você pode mudar de ideia quando quiser pelo link{" "}
          <strong>Preferências de cookies</strong>, no rodapé de qualquer página — ao recusar, os cookies de
          análise gravados anteriormente são apagados.
        </p>
        <p>
          Também é possível bloquear ou apagar cookies nas configurações do seu navegador.
        </p>
      </>
    ),
  },
  {
    title: "6. Com quem os dados são compartilhados",
    body: (
      <>
        <p>
          Não vendemos dados. Os dados de navegação são processados pelos fornecedores das ferramentas
          citadas acima, que podem armazená-los em servidores fora do Brasil, com as garantias previstas nas
          suas próprias políticas:
        </p>
        <ul>
          <li>
            Google (Google Analytics e Tag Manager) —{" "}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
              policies.google.com/privacy
            </a>
          </li>
          <li>
            Microsoft (Clarity) —{" "}
            <a href="https://privacy.microsoft.com/pt-br/privacystatement" target="_blank" rel="noopener noreferrer">
              privacy.microsoft.com
            </a>
          </li>
          <li>
            Vercel (hospedagem e estatísticas) —{" "}
            <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">
              vercel.com/legal/privacy-policy
            </a>
          </li>
        </ul>
        <p>
          Alguns conteúdos de terceiros são carregados diretamente dos servidores de seus fornecedores, que
          recebem o endereço IP e dados do navegador de quem visita a página:
        </p>
        <ul>
          <li>
            <strong>Vídeo institucional (YouTube):</strong> exibido no modo de privacidade aprimorada, que não
            grava cookies enquanto o vídeo não é reproduzido. Ao dar play, valem as regras do YouTube, do
            Google —{" "}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
              policies.google.com/privacy
            </a>
            .
          </li>
          <li>
            <strong>Selo do Reclame Aqui</strong>, no rodapé, carregado dos servidores do Reclame Aqui (que
            também utiliza fontes do Google Fonts) —{" "}
            <a href="https://www.reclameaqui.com.br/politica-de-privacidade/" target="_blank" rel="noopener noreferrer">
              reclameaqui.com.br
            </a>
            .
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "7. Links para outros sites",
    body: (
      <p>
        Os botões de WhatsApp, e-mail, Mercado Livre, Shopee, portal do revendedor e redes sociais levam a
        serviços de terceiros. O que você enviar ou fizer neles segue a política de privacidade de cada
        serviço. Quando você nos chama no WhatsApp ou por e-mail, usamos seus dados apenas para responder ao
        seu contato e atender ao seu pedido.
      </p>
    ),
  },
  {
    title: "8. Por quanto tempo guardamos",
    body: (
      <p>
        Os dados de navegação ficam armazenados pelo prazo configurado em cada ferramenta, e são mantidos
        apenas enquanto forem úteis para as finalidades acima.
      </p>
    ),
  },
  {
    title: "9. Seus direitos",
    body: (
      <p>
        Pela LGPD, você pode pedir a confirmação de que tratamos seus dados, acesso, correção, anonimização,
        eliminação, informações sobre compartilhamento e a revogação do consentimento. Para isso, escreva
        para{" "}
        <a href="mailto:suporte2@heropartes.com.br">suporte2@heropartes.com.br</a>. Você também pode
        apresentar reclamação à Autoridade Nacional de Proteção de Dados (ANPD).
      </p>
    ),
  },
  {
    title: "10. Alterações nesta política",
    body: (
      <p>
        Esta política pode ser atualizada para refletir mudanças no site ou na legislação. A data da última
        atualização fica sempre indicada no topo desta página.
      </p>
    ),
  },
];

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-background">
      <header className="bg-brand-green-deep">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <Link href="/" className="flex items-center gap-2">
            <img src="/logoHeroPartes.png" alt="Hero Partes" className="h-10 w-auto" />
          </Link>
          <Link href="/" className="text-sm font-medium text-white transition-colors hover:text-brand-yellow">
            Voltar ao site
          </Link>
        </div>
        <div className="h-1 w-full bg-brand-yellow" />
      </header>

      <article className="mx-auto max-w-3xl px-6 py-12">
        <h1 className="font-display text-3xl font-bold text-brand-green md:text-4xl">Política de Privacidade</h1>
        <p className="mt-2 text-sm text-muted-foreground">Última atualização: {UPDATED_AT}</p>

        <div className="mt-10 space-y-10">
          {sections.map(({ title, body }) => (
            <section
              key={title}
              className="space-y-3 text-sm leading-relaxed text-foreground/85 md:text-base [&_a]:font-semibold [&_a]:text-brand-green [&_a]:underline [&_li]:ml-5 [&_li]:list-disc [&_ul]:space-y-2"
            >
              <h2 className="font-display text-xl font-bold text-brand-green">{title}</h2>
              {body}
            </section>
          ))}
        </div>
      </article>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
