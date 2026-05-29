import Navbar       from "./components/Navbar";
import Hero         from "./components/Hero";
import About        from "./components/About";
// import { SmoothScrollHero } from "./SmoothScrollHero"; // ← descomente quando tiver o arquivo
import Menu         from "./components/Menu";
import Testimonials from "./components/Testimonials";
import Contact      from "./components/Contact";
import Footer       from "./components/Footer";
import { SmoothScrollHero } from "./SmoothScrollhero";

export default function App() {
  return (
    <>
      {/* Fontes do Google */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Lato:wght@300;400;700&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
      `}</style>

      <Navbar />

      <main>
        <Hero />          {/* Seção 1 — fundo pink, bolo, texto decorativo  */}
        <About />         {/* Seção 2 — fundo branco, texto + chocolate      */}
        {/* <SmoothScrollHero /> */} {/* ← descomente quando tiver o arquivo */}
        <SmoothScrollHero />
        <Menu />          {/* Seção 3 — cardápio fundo escuro                */}
        <Testimonials />  {/* Seção 4 — post-its de depoimentos              */}
        <Contact />       {/* Seção 5 — nossa loja + 99Food                  */}
      </main>

      <Footer />
    </>
  );
}