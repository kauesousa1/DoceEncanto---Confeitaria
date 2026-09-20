import Navbar       from "./components/Navbar";
import Hero         from "./components/Hero";
import About        from "./components/About";
import Menu         from "./components/Menu";
import Testimonials from "./components/Testimonials";
import Contact      from "./components/Contact";
import Footer       from "./components/Footer";
import { SmoothScrollHero } from "./SmoothScrollhero";
import FixedBackground from "./components/FixedBackground";

export default function App() {
  return (
    <>
     
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Lato:wght@300;400;700&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
      `}</style>

     <FixedBackground />

      <main style={{ position: "relative", zIndex: 1 }}>
        <Navbar />
        <Hero />
        <About />
        <Menu />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </>
  );
}