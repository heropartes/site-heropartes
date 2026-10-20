"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import Script from "next/script";

type Consent = "accepted" | "rejected";
// "pending" = ainda não sabemos (renderização no servidor).
type ConsentState = Consent | null | "pending";

const STORAGE_KEY = "hp-cookie-consent";
const OPEN_EVENT = "hp-open-cookie-consent";
const CHANGE_EVENT = "hp-cookie-consent-change";

// Cookies gravados pelo Google Analytics (via GTM) e pelo Microsoft Clarity.
const TRACKING_COOKIES = /^(_ga|_gid|_gat|_gcl|_clck|_clsk|CLID|MUID|ANONCHK|SM)/;

// Cópia em memória para quando o navegador bloqueia o localStorage.
let memoryConsent: Consent | null = null;

function readConsent(): Consent | null {
  if (memoryConsent) return memoryConsent;
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    return value === "accepted" || value === "rejected" ? value : null;
  } catch {
    return null;
  }
}

function subscribe(callback: () => void) {
  window.addEventListener(CHANGE_EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(CHANGE_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

function clearTrackingCookies() {
  const domains = ["", window.location.hostname, `.${window.location.hostname.replace(/^www\./, "")}`];
  document.cookie.split(";").forEach((cookie) => {
    const name = cookie.split("=")[0].trim();
    if (!TRACKING_COOKIES.test(name)) return;
    domains.forEach((domain) => {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${domain ? `; domain=${domain}` : ""}`;
    });
  });
}

// Usado no rodapé para o visitante rever a escolha a qualquer momento.
export function openCookiePreferences() {
  window.dispatchEvent(new Event(OPEN_EVENT));
}

export function CookieConsent() {
  const consent = useSyncExternalStore<ConsentState>(subscribe, readConsent, () => "pending");
  const [reopened, setReopened] = useState(false);
  const visible = consent === null || reopened;

  useEffect(() => {
    const open = () => setReopened(true);
    window.addEventListener(OPEN_EVENT, open);
    return () => window.removeEventListener(OPEN_EVENT, open);
  }, []);

  const choose = (value: Consent) => {
    const previous = consent;
    memoryConsent = value;
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {}
    setReopened(false);

    // Os scripts já carregados não têm como ser descarregados: limpa os
    // cookies e recarrega a página para parar a coleta de imediato.
    if (value === "rejected" && previous === "accepted") {
      clearTrackingCookies();
      window.location.reload();
      return;
    }
    window.dispatchEvent(new Event(CHANGE_EVENT));
  };

  return (
    <>
      {consent === "accepted" && (
        // Um único script, com o Clarity antes do GTM: o contêiner do GTM
        // também dispara o Clarity e quebra se window.clarity ainda não existir.
        <Script id="tracking" strategy="afterInteractive">
          {`// Microsoft Clarity
(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", "xi7plaoebn");
// Google Tag Manager
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-KMXD5S7H');`}
        </Script>
      )}

      {visible && (
        <div
          role="dialog"
          aria-live="polite"
          aria-label="Aviso de cookies"
          className="fixed inset-x-4 bottom-4 z-[60] mx-auto max-w-3xl rounded-xl border-t-4 border-brand-yellow bg-white p-5 shadow-[0_8px_32px_rgba(0,0,0,0.25)] md:bottom-6"
        >
          <p className="font-display text-base font-bold text-brand-green">Sua privacidade</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Usamos cookies de análise (Google Analytics e Microsoft Clarity) para entender como o
            site é usado e melhorá-lo. Eles só são ativados se você aceitar. Saiba mais na nossa{" "}
            <a href="/politica-de-privacidade" className="font-semibold text-brand-green underline">
              Política de Privacidade
            </a>
            .
          </p>
          <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={() => choose("rejected")}
              className="cursor-pointer rounded-lg border border-brand-green px-5 py-2.5 text-sm font-semibold text-brand-green transition-colors hover:bg-brand-green/5"
            >
              Recusar
            </button>
            <button
              type="button"
              onClick={() => choose("accepted")}
              className="cursor-pointer rounded-lg bg-brand-green px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-green-deep"
            >
              Aceitar cookies
            </button>
          </div>
        </div>
      )}
    </>
  );
}
