import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import "../Styles/Hero.css";

export default function Hero() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Fatia sai para baixo-direita girando levemente
  const handY       = useTransform(scrollYProgress, [0, 0.6], [0, 320]);
  const handX       = useTransform(scrollYProgress, [0, 0.6], [0, 180]);
  const handOpacity = useTransform(scrollYProgress, [0, 0.45], [1, 0]);
  const handRotate  = useTransform(scrollYProgress, [0, 0.6], [0, 20]);

  return (
    <section className="hero" ref={sectionRef}>

      {/* Texto marquee de fundo */}
      <div className="hero__bg-text" aria-hidden="true">
        {[0, 1, 2, 3].map((_, i) => (
          <div key={i} className={`hero__marquee hero__marquee--${i % 2 === 0 ? "right" : "left"}`}>
            <div className="hero__marquee-track">
              <span>DOCE ENCANTO</span>
              <span>DOCE ENCANTO</span>
              <span>DOCE ENCANTO</span>
              <span>DOCE ENCANTO</span>
            </div>
          </div>
        ))}
      </div>

      {/* Composição do bolo */}
      <div className="hero__composition">

        {/* Bolo inteiro com buraco — SVG 1440x833, fica como base */}
        <img
          className="hero__bolo-base"
          src="/BoloInteiro.svg"
          alt="Bolo de chocolate"
        />

        {/* Fatia + mão — SVG 696x508 rotacionado 7°, encaixado no buraco */}
        <motion.img
          className="hero__fatia"
          src="/FatiaBolo.svg"
          alt="Fatia sendo retirada"
          style={{
            y: handY,
            x: handX,
            opacity: handOpacity,
            rotate: handRotate,
          }}
        />

      </div>

      {/* Drip branco na base */}
      <div className="hero__drip">
        <p className="hero__sub"></p>
      </div>

    </section>
  );
}
