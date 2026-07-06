"use client";

export function WhatsAppButton() {
  const phone = "5511930960160";
  const message = encodeURIComponent(
    "Olá! Estava no site da Hero Partes e gostaria de mais informações para me tornar cliente."
  );

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 group"
    >
      {/* Anel de pulso */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping-slow" />

      {/* Botão */}
      <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] shadow-[0_4px_24px_rgba(37,211,102,0.5)] transition-transform duration-200 group-hover:scale-110">
        <svg viewBox="0 0 32 32" className="h-8 w-8 fill-white">
          <path d="M16 .5C7.44.5.5 7.44.5 16c0 2.74.72 5.4 2.08 7.74L.5 31.5l8-2.04A15.46 15.46 0 0 0 16 31.5C24.56 31.5 31.5 24.56 31.5 16S24.56.5 16 .5Zm0 28.3a13.74 13.74 0 0 1-7-1.92l-.5-.3-5.18 1.32 1.36-4.96-.33-.52A13.74 13.74 0 1 1 16 28.8Zm7.54-10.3c-.4-.2-2.4-1.18-2.77-1.32-.37-.13-.64-.2-.9.2s-1.04 1.32-1.27 1.6c-.23.26-.47.3-.87.1a11.1 11.1 0 0 1-3.26-2.02 12.2 12.2 0 0 1-2.26-2.8c-.23-.4 0-.62.18-.82.17-.18.4-.47.6-.7.2-.24.26-.4.4-.67.13-.27.06-.5-.03-.7-.1-.2-.9-2.18-1.24-2.98-.32-.78-.65-.67-.9-.68h-.77c-.27 0-.7.1-1.06.5a4.1 4.1 0 0 0-1.28 3.05c0 1.8 1.32 3.54 1.5 3.78.2.24 2.6 3.97 6.3 5.57 3.7 1.6 3.7 1.06 4.37 1 .67-.07 2.16-.88 2.47-1.74.3-.85.3-1.58.2-1.73-.1-.15-.36-.24-.76-.44Z" />
        </svg>
      </span>
    </a>
  );
}
