"use client";
export function Header() {

  const links = [
    { label: "Seja um Revendedor Hero", href: "https://portal.heropartes.com.br/" },
    { label: "Comprar agora", href: "#comprar" },
    { label: "Nossa História", href: "#sobre" },
    { label: "Produtos", href: "#produtos" },
    { label: "Contato", href: "#contato" },
  ];
  return (
    <header className="absolute top-0 left-0 right-0 z-30 bg-white/10 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
        <a href="#" className="flex items-center gap-2">
          <img src="/logoHeroPartes.png" alt="Hero Partes" className="h-10 w-auto drop-shadow-lg" />
        </a>
        <nav className="hidden items-center gap-7 text-sm font-medium text-white md:flex">
          {links.map((l) => (
            <a key={l.label} href={l.href}
            target={l.href.startsWith("http") ? "_blank" : undefined}
            rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="transition-colors hover:text-brand-yellow"
            onClick={() => {
              window.gtag?.("event", "click_revendedor", {
                event_category: "resselert_header_link",
                event_label: `User clicked on ${l.label} link`,
              });
            }}
            >
              {l.label}
            
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}