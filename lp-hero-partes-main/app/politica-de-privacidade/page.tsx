import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "../components/footer";
import { WhatsAppButton } from "../components/whatsapp-button";

export const metadata: Metadata = {
  title: "Política de Privacidade | Hero Partes",
  description: "Como a Hero Partes trata os dados de visitantes do site e de clientes, em conformidade com a LGPD.",
};

// Ao mudar o que os cookies de análise coletam ou com quem compartilham, trocar
// também CONSENT_VERSION em components/cookie-consent.tsx.
const UPDATED_AT = "11 de novembro de 2026";

const sections = [
  {
    title: "1. Quem somos",
    body: (
      <>
        <p>
          Este site é mantido pela <strong>Hero Partes Soluções Empreendedoras Ltda.</strong>, inscrita no
          CNPJ sob o nº 45.776.153/0001-63, que é a controladora dos dados pessoais de visitantes do site
          e de clientes descritos aqui, nos termos da Lei Geral de Proteção de Dados Pessoais (Lei nº
          13.709/2018 — LGPD).
        </p>
        <p>
          Endereço: Mini-01 — R. Olária, 420 — Box 54 — Cidade Industrial Satélite de São Paulo,
          Guarulhos/SP, CEP 07223-260. E-mail:{" "}
          <a href="mailto:suporte2@heropartes.com.br">suporte2@heropartes.com.br</a>.
        </p>
      </>
    ),
  },
  {
    title: "2. Dados coletados pelo site",
    body: (
      <>
        <p>
          O site não possui formulários de cadastro: não pedimos nome, e-mail, telefone ou documentos. No
          site, os dados coletados são apenas de navegação (os dados de clientes estão no item 3):
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
            movimento do mouse, gravações da navegação e mapas de calor —, além de aparelho e navegador. Usa
            cookies e <strong>só é ativado se você aceitar</strong>.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "3. Dados de clientes e comunicações",
    body: (
      <>
        <p>
          Quando você compra da Hero Partes — diretamente, pelo WhatsApp, pelo portal de revendedores ou
          por marketplaces como Mercado Livre e Shopee — ou fala conosco, guardamos no nosso cadastro de
          clientes: nome, CPF ou CNPJ, telefone, e-mail, endereço e histórico de compras.
        </p>
        <p>Usamos esses dados para:</p>
        <ul>
          <li>
            processar e entregar seus pedidos, dar suporte e atender trocas e garantias (art. 7º, V, da
            LGPD);
          </li>
          <li>emitir notas fiscais e cumprir outras obrigações legais (art. 7º, II);</li>
          <li>
            enviar ofertas, promoções e novidades por e-mail, WhatsApp, SMS ou ligação, com base no nosso
            legítimo interesse em divulgar nossos produtos a quem já comprou ou já entrou em contato
            conosco (art. 7º, IX, e art. 10, I).
          </li>
        </ul>
        <p>
          <strong>Você pode deixar de receber ofertas a qualquer momento</strong>, sem custo: pelo link
          &quot;sair&quot; nos e-mails, respondendo &quot;PARAR&quot; no WhatsApp ou no SMS, pedindo durante a
          ligação ou escrevendo para{" "}
          <a href="mailto:suporte2@heropartes.com.br">suporte2@heropartes.com.br</a>. A recusa não afeta
          suas compras nem o seu atendimento.
        </p>
        <p>
          Esses dados podem ser compartilhados com quem nos ajuda a atender seus pedidos — o nosso sistema
          de gestão, os marketplaces onde a compra foi feita, os meios de pagamento, as transportadoras e a
          contabilidade — e com as ferramentas que usamos para enviar mensagens e ofertas. Algumas delas,
          como o WhatsApp, podem armazenar dados em servidores fora do Brasil. Não vendemos dados de
          clientes.
        </p>
      </>
    ),
  },
  {
    title: "4. Para que usamos os dados do site",
    body: (
      <ul>
        <li>Entender quais conteúdos e produtos despertam mais interesse;</li>
        <li>Identificar problemas de uso e melhorar o site;</li>
        <li>Medir os resultados das nossas campanhas de divulgação.</li>
        <li>
          No caso do Microsoft Clarity, a Microsoft também pode usar os dados nos próprios serviços,
          inclusive de publicidade.
        </li>
      </ul>
    ),
  },
  {
    title: "5. Base legal dos dados do site",
    body: (
      <>
        <p>
          As estatísticas sem cookies (Vercel Analytics), o registro técnico de acessos feito pela
          hospedagem e o carregamento do vídeo e do selo do Reclame Aqui se baseiam no legítimo interesse
          (art. 7º, IX, da LGPD): são necessários para o site funcionar e ser melhorado, e usam apenas o
          mínimo de dados.
        </p>
        <p>
          O Google Analytics e o Microsoft Clarity são usados somente com o seu consentimento (art. 7º, I),
          que pode ser retirado a qualquer momento. Esse consentimento abrange também o envio desses dados
          para servidores do Google e da Microsoft fora do Brasil, informado no aviso de cookies (art. 33,
          VIII).
        </p>
        <p>
          Você não é obrigado a consentir. Se recusar, todo o site continua funcionando normalmente; apenas
          as suas visitas não entram nas nossas estatísticas de uso.
        </p>
      </>
    ),
  },
  {
    title: "6. Cookies e como gerenciar sua escolha",
    body: (
      <>
        <p>
          Ao entrar no site pela primeira vez, você escolhe se aceita ou recusa os cookies de análise. Se
          recusar, eles não são carregados. Guardamos no seu navegador a sua escolha, com a data e a versão
          desta política; se ela mudar o que é coletado, o aviso aparece de novo para você decidir. Você
          pode mudar de ideia quando quiser pelo link <strong>Preferências de cookies</strong>, no rodapé
          de qualquer página — ao recusar, os cookies de análise gravados no domínio do site são apagados.
          Cookies gravados pela Microsoft no domínio dela podem ser apagados nas configurações do seu
          navegador.
        </p>
        <p>
          Também é possível bloquear ou apagar cookies nas configurações do seu navegador.
        </p>
      </>
    ),
  },
  {
    title: "7. Com quem os dados do site são compartilhados",
    body: (
      <>
        <p>
          Não vendemos dados. Os dados de navegação são processados pelos fornecedores das ferramentas
          citadas acima, que podem armazená-los em servidores fora do Brasil, com as garantias previstas nas
          suas próprias políticas. Pelos termos do Microsoft Clarity, a Microsoft também pode usar esses
          dados para melhorar os próprios serviços, inclusive de publicidade.
        </p>
        <p>Fornecedores e suas políticas de privacidade:</p>
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
    title: "8. Links para outros sites",
    body: (
      <p>
        Os botões de WhatsApp, e-mail, Mercado Livre, Shopee, portal do revendedor e redes sociais levam a
        serviços de terceiros. O que você enviar ou fizer neles segue a política de privacidade de cada
        serviço. Quando você nos chama no WhatsApp ou por e-mail, seus dados passam a fazer parte do nosso
        cadastro de clientes, descrito no item 3.
      </p>
    ),
  },
  {
    title: "9. Por quanto tempo guardamos",
    body: (
      <ul>
        <li>
          <strong>Google Analytics:</strong> os dados de eventos e de usuários ficam guardados por 14 meses
          e depois são apagados automaticamente. O cookie <code>_ga</code> dura até 2 anos no seu navegador.
        </li>
        <li>
          <strong>Microsoft Clarity:</strong> os cookies <code>_clck</code> e <code>_clsk</code> duram até 1
          ano e 1 dia, respectivamente. As gravações e os mapas de calor ficam com a Microsoft pelos prazos do
          serviço.
        </li>
        <li>
          <strong>Vercel Analytics:</strong> guarda apenas estatísticas agregadas, sem identificar ninguém.
        </li>
        <li>
          <strong>Dados de clientes:</strong> guardados por 5 anos a partir da última compra; cada nova
          compra reinicia esse prazo. Depois disso, são eliminados, exceto o que a lei nos obrigar a manter.
          Quem entrou em contato mas não comprou tem os dados eliminados 2 anos após o último contato.
          Se você pedir para não receber ofertas, seus dados continuam guardados apenas para atender suas
          compras e cumprir a lei, nunca para campanhas.
        </li>
      </ul>
    ),
  },
  {
    title: "10. Seus direitos",
    body: (
      <>
        <p>
          Pelo art. 18 da LGPD, você pode pedir, a qualquer momento e sem custo:
        </p>
        <ul>
          <li>a confirmação de que tratamos seus dados e o acesso a eles;</li>
          <li>a correção de dados incompletos, inexatos ou desatualizados;</li>
          <li>
            a anonimização, o bloqueio ou a eliminação de dados desnecessários, excessivos ou tratados em
            desconformidade com a lei;
          </li>
          <li>a portabilidade dos dados a outro fornecedor;</li>
          <li>a eliminação dos dados tratados com o seu consentimento;</li>
          <li>a informação sobre com quem compartilhamos seus dados;</li>
          <li>a informação sobre a possibilidade de não consentir e as consequências da recusa;</li>
          <li>a revogação do consentimento;</li>
          <li>a oposição a um tratamento feito sem consentimento, se ele descumprir a lei.</li>
        </ul>
        <p>
          Para isso, escreva para{" "}
          <a href="mailto:suporte2@heropartes.com.br">suporte2@heropartes.com.br</a>. Respondemos em até 15
          dias (art. 19). Você também pode apresentar reclamação à Agência Nacional de Proteção de Dados
          (ANPD) ou aos órgãos de defesa do consumidor.
        </p>
      </>
    ),
  },
  {
    title: "11. Encarregado pelo tratamento de dados",
    body: (
      <p>
        A Hero Partes é empresa de pequeno porte e, nos termos da Resolução CD/ANPD nº 2/2022, está
        dispensada de indicar um encarregado (art. 41 da LGPD). O canal para qualquer assunto sobre dados
        pessoais é o e-mail{" "}
        <a href="mailto:suporte2@heropartes.com.br">suporte2@heropartes.com.br</a>.
      </p>
    ),
  },
  {
    title: "12. Crianças e adolescentes",
    body: (
      <p>
        Este site é voltado a empresas, oficinas, lojistas e motoristas, e não se destina a menores de 18
        anos. Não coletamos intencionalmente dados de crianças ou adolescentes.
      </p>
    ),
  },
  {
    title: "13. Alterações nesta política",
    body: (
      <p>
        Esta política pode ser atualizada para refletir mudanças no site ou na legislação. A data da última
        atualização fica sempre indicada no topo desta página. Se a mudança alterar o que os cookies de
        análise coletam ou com quem compartilham, o aviso de cookies aparece de novo para você decidir.
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
