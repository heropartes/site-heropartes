"use client";
export function Marketplaces() {

    return (
    <section id="comprar" className="bg-yellow-gradient">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-2">
        <div className="overflow-hidden rounded-2xl shadow-2xl">
          <img
            src="/delivery.png"
            alt="Entrega Hero Partes"
            className="h-[360px] w-full object-cover"
            loading="lazy"
            width={800}
            height={900}
          />
        </div>
        <div>
          <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
            Adquira <span className="text-brand-green-deep">peças</span>
            <br /> para o seu veículo
          </h2>
          <p className="mt-5 max-w-md text-white/95">
            Tenha acesso a um portfólio exclusivo com as melhores peças para o seu veículo no
            varejo. Estamos nos maiores marketplaces.
          </p>
          <p className="mt-5 text-sm font-semibold text-white">Acesse nossas lojas oficiais</p>
          <div className="mt-3 flex gap-4">
            <a
              onClick={
                () => {
                  window.gtag?.("event", "click_mktplace", {
                    event_category: "btn_mercado_livre",
                    event_label: "User clicked on -Mercado Livre- marketplace button",
                  });
                }
              }
              href="https://www.mercadolivre.com.br/loja/hero-partes"
              className="flex items-center gap-2 rounded-lg bg-brand-green-deep px-5 py-3 text-sm font-semibold text-white shadow-lg transition-transform hover:-translate-y-0.5"
            >
              <img src="/mercado-livre.svg" alt="logo Mercado Livre" className="w-20" />
              
            </a>
            <a
              onClick={
                () => {
                  window.gtag?.("event", "click_mktplace", {
                    event_category: "btn_shopee",
                    event_label: "User clicked on -Shopee- marketplace button",
                  });
                }
              }
              href="https://shopee.com.br/shop/1275302067"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg bg-brand-green-deep px-7 py-3 text-sm font-semibold text-white shadow-lg transition-transform hover:-translate-y-0.5"
            >
              <img src="/shopee.svg" alt="logo Shopee" className="w-15" />
            
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}