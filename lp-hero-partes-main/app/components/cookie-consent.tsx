"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import Script from "next/script";

type Consent = "accepted" | "rejected";
// "pending" = ainda não sabemos (renderização no servidor).
type ConsentState = Consent | null | "pending";

const STORAGE_KEY = "hp-cookie-consent";
// Trocar sempre que o aviso ou a política mudarem o que é coletado ou com quem
// é compartilhado (junto com UPDATED_AT em politica-de-privacidade/page.tsx):
// escolhas de versões anteriores deixam de valer e o aviso volta a aparecer
// (LGPD, art. 8º, § 6º).
const CONSENT_VERSION = "2026-11-03";
const OPEN_EVENT = "hp-open-cookie-consent";
const CHANGE_EVENT = "hp-cookie-consent-change";

// Cookies que o Google Analytics (via GTM) e o Microsoft Clarity gravam no
// domínio do site. Os do domínio da Microsoft não são acessíveis daqui.
const TRACKING_COOKIES = /^(_ga|_ga_\w+|_gid|_gat\w*|_gcl_\w+|_clck|_clsk)$/;

// Usada só quando o navegador bloqueia o localStorage.
let memoryConsent: Consent | null = null;

// A escolha é guardada com a versão e a data em que foi feita.
function readConsent(): Consent | null {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "null");
    if (saved?.version !== CONSENT_VERSION) return memoryConsent;
    return saved.choice === "accepted" || saved.choice === "rejected" ? saved.choice : memoryConsent;
  } catch {
    return memoryConsent;
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

  // Recusa feita em outra aba: os scripts já carregados aqui continuariam
  // coletando, então recarrega a página. O listener fica fixo porque a troca
  // de consent desmontaria um listener dependente dele no meio do evento.
  const trackingLoaded = useRef(false);
  useEffect(() => {
    if (consent === "accepted") trackingLoaded.current = true;
  }, [consent]);
  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY && trackingLoaded.current && readConsent() !== "accepted") {
        window.location.reload();
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const choose = (value: Consent) => {
    const previous = consent;
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ choice: value, version: CONSENT_VERSION, date: new Date().toISOString() }),
      );
    } catch {
      memoryConsent = value;
    }
    setReopened(false);

    // Ao recusar, apaga também cookies de um aceite antigo. Se os scripts já
    // carregaram nesta página, não têm como ser descarregados: recarrega.
    if (value === "rejected") {
      clearTrackingCookies();
      if (previous === "accepted") {
        window.location.reload();
        return;
      }
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
            Usamos cookies de análise do Google Analytics e do Microsoft Clarity, que registra como a
            página é usada, para entender o uso do site e melhorá-lo. Os dados vão para o Google e a
            Microsoft, inclusive para servidores fora do Brasil, e a Microsoft também pode usá-los nos
            próprios serviços, incluindo publicidade. Eles só são ativados se você aceitar; se
            recusar, o site funciona normalmente. Saiba mais na nossa{" "}
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
