import { ReactLenis } from "lenis/dist/lenis-react";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "motion/react";
import { useRef } from "react";
import BoloRosa from './imagens/BoloRosaBACK.png'
import Brigadieros from './imagens/brigadeiro.png'
import BrigadeiroLetras from './imagens/BrigadeiroLetras.png'
import BoloRoxa from './imagens/BoloRosasRoxa.png'
import BoloMara from './imagens/BoloMaracuja.png'

export const SmoothScrollHero = () => {
  return (
    <div style={{ background: "#F9D4E4", position: "relative" }}>  {/* ← remova zIndex: 0 */}
      <ReactLenis root options={{ lerp: 0.05 }}>
        <Hero />
      </ReactLenis>
    </div>
  );
};

const SECTION_HEIGHT = 2500;

const Hero = () => {
  return (
    <div
      style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
      className="relative w-full"
    >
      <CenterImage />
      <ParallaxImages />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "384px",
          background: "linear-gradient(to bottom, transparent, #F9D4E4)"
        }}
      />
    </div>
  );
};

const CenterImage = () => {
  const { scrollY } = useScroll();

  const clip1 = useTransform(scrollY, [0, 1500], [25, 0]);
  const clip2 = useTransform(scrollY, [0, 1500], [75, 100]);
  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

  const backgroundSize = useTransform(
    scrollY,
    [0, SECTION_HEIGHT + 500],
    ["170%", "100%"]
  );
  const opacity = useTransform(
    scrollY,
    [SECTION_HEIGHT, SECTION_HEIGHT + 500],
    [1, 1]
  );

  return (
    <motion.div
      style={{
        clipPath,
        backgroundSize,
        opacity,
        backgroundImage: `url(${BoloRosa})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "sticky",
        top: 0,
        width: "100%",
        height: "100vh",
      }}
    />
  );
};

const ParallaxImages = () => {
  return (
    <div style={{
      width: "100%",
      maxWidth: "900px",
      margin: "0 auto",
      padding: "200px 2rem 0",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "4rem",
    }}>

      {/* Linha 1: imagem à esquerda */}
      <div style={{ width: "100%", display: "flex", justifyContent: "flex-start" }}>
        <ParallaxImg
          src={Brigadieros}
          alt="Brigadeiros"
          start={-200}
          end={200}
          style={{ width: "38%" }}
        />
      </div>

      {/* Linha 2: imagem centralizada */}
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <ParallaxImg
          src={BoloMara}
          alt="Bolo de Maracujá"
          start={200}
          end={-250}
          style={{ width: "60%" }}
        />
      </div>

      {/* Linha 3: imagem à direita */}
      <div style={{ width: "100%", display: "flex", justifyContent: "flex-end" }}>
        <ParallaxImg
          src={BrigadeiroLetras}
          alt="Brigadeiro letras"
          start={-200}
          end={200}
          style={{ width: "38%" }}
        />
      </div>

      {/* Linha 4: imagem centralizada levemente à esquerda */}
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <ParallaxImg
          src={BoloRoxa}
          alt="Bolo rosa e roxo"
          start={0}
          end={-500}
          style={{ width: "45%" }}
        />
      </div>

      {/* Linha 5: esquerda */}
<div style={{ width: "100%", display: "flex", justifyContent: "flex-end" }}>
  <ParallaxImg
    src={BoloMara}
    alt="Bolo Caramelo"
    start={-200}
    end={200}
    style={{ width: "35%" }}
  />
</div>

{/* Linha 6: centro */}
<div style={{ width: "100%", display: "flex", justifyContent: "flex-start" }}>
  <ParallaxImg
    src={BoloRosa}
    alt="Bolo Roxo"
    start={-200}
    end={200}
    style={{ width: "42%" }}
  />
</div>
    </div>
  );
};

const ParallaxImg = ({ alt, src, start, end, style }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${end * -1}px`],
  });

  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  const scale  = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);
  const y      = useTransform(scrollYProgress, [0, 1], [start, end]);
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

  return (
    <motion.img
      src={src}
      alt={alt}
      ref={ref}
      style={{ ...style, transform, opacity, borderRadius: "12px" }}
    />
  );
};