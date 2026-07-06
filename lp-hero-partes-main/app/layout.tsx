import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Poppins, Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

const poppins = Poppins({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://site-heropartes.vercel.app"),
  title: "Hero Partes | Peças Automotivas no Atacado - Guarulhos/SP",
  description: "Hero Partes é especialista em peças automotivas, atendendo oficinas, lojistas e motoristas em todo o Brasil. Com anos de experiência no mercado, oferecemos peças de alta qualidade com preços justo.",

  openGraph: {
    title: "Hero Partes | Peças Automotivas no Atacado",
    description: "Peças de alta qualidade com preço justo para oficinas e lojistas.",
    url: "https://heropartes.com.br",
    siteName: "Hero Partes",
    images: [
      {
        url: "/og-hero.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${poppins.variable} ${inter.variable} ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <GoogleAnalytics gaId="G-RNLLXTJ6J3" />
        <Analytics />
        <Script id="clarity" strategy="afterInteractive">{`
          if (window.location.hostname !== 'localhost') {
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "xi7plaoebn");
          }
        `}</Script>
      </body>
    </html>
  );
}
