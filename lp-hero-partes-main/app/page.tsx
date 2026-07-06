import { Hero } from "./components/hero";
import { Differentials } from "./components/differencials";
import { About } from "./components/about";
import { Header } from "./components/header";
import { Catalog } from "./components/catalog";
import { Reseller } from "./components/reseller";
import { Marketplaces } from "./components/marketplace";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";
import { WhatsAppButton } from "./components/whatsapp-button";

export default async function Home() {

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Differentials />
      <About />
      <Catalog />
      <Reseller />
      <Marketplaces />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
