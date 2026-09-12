import { ReactLenis } from "lenis/dist/lenis-react";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "motion/react";
import { useRef } from "react";
import BoloRosa from './imagens/imagemBack.png'

export const SmoothScrollHero = () => {
  return (
    <div style={{ background: "#F9D4E4", position: "relative" }}>
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
      <ParallaxCards />
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

// Lista de depoimentos - troque nome, estrelas e texto pelos reais
const reviews = [
  { name: "Ana Clara", stars: 5, text: "O bolo estava ótimo." },
  { name: "Pedro Souza", stars: 5, text: "Melhor brigadeiro que já comi!" },
  { name: "Juliana Lima", stars: 4, text: "Entrega rápida e muito saboroso." },
  { name: "Marcos Vinícius", stars: 5, text: "Recomendo demais, ficou lindo!" },
  { name: "Beatriz Alves", stars: 5, text: "Superou minhas expectativas." },
  { name: "Rafael Costa", stars: 4, text: "Qualidade excelente, voltarei a comprar." },
];

const ParallaxCards = () => {
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

      {/* Linha 1: card à esquerda */}
      <div style={{ width: "100%", display: "flex", justifyContent: "flex-start" }}>
        <ParallaxCard
          review={reviews[0]}
          start={-200}
          end={200}
          style={{ width: "38%" }}
        />
      </div>

      {/* Linha 2: card centralizado */}
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <ParallaxCard
          review={reviews[1]}
          start={200}
          end={-250}
          style={{ width: "60%" }}
        />
      </div>

      {/* Linha 3: card à direita */}
      <div style={{ width: "100%", display: "flex", justifyContent: "flex-end" }}>
        <ParallaxCard
          review={reviews[2]}
          start={-200}
          end={200}
          style={{ width: "38%" }}
        />
      </div>

      {/* Linha 4: card centralizado */}
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <ParallaxCard
          review={reviews[3]}
          start={0}
          end={-500}
          style={{ width: "45%" }}
        />
      </div>

      {/* Linha 5: card à direita */}
      <div style={{ width: "100%", display: "flex", justifyContent: "flex-end" }}>
        <ParallaxCard
          review={reviews[4]}
          start={-200}
          end={200}
          style={{ width: "35%" }}
        />
      </div>

      {/* Linha 6: card à esquerda */}
      <div style={{ width: "100%", display: "flex", justifyContent: "flex-start" }}>
        <ParallaxCard
          review={reviews[5]}
          start={-200}
          end={200}
          style={{ width: "42%" }}
        />
      </div>
    </div>
  );
};

const Stars = ({ count }) => {
  return (
    <div style={{ display: "flex", gap: "2px", marginTop: "2px" }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          style={{
            fontSize: "16px",
            color: i < count ? "#F2B84B" : "#E0E0E0",
            lineHeight: 1,
          }}
        >
          ★
        </span>
      ))}
    </div>
  );
};

const ReviewCard = ({ name, stars, text }) => {
  return (
    <div
      style={{
        background: "#FFFFFF",
        borderRadius: "24px",
        padding: "28px 32px",
        boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
        display: "flex",
        flexDirection: "column",
        gap: "18px",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
        <div
          style={{
            width: "56px",
            height: "56px",
            borderRadius: "50%",
            background: "#D9D9D9",
            flexShrink: 0,
          }}
        />
        <div>
          <div style={{ fontSize: "18px", fontWeight: 500, color: "#1A1A1A" }}>
            {name}
          </div>
          <Stars count={stars} />
        </div>
      </div>
      <div style={{ fontSize: "20px", color: "#1A1A1A", lineHeight: 1.4 }}>
        “{text}”
      </div>
    </div>
  );
};

const ParallaxCard = ({ review, start, end, style }) => {
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
    <motion.div
      ref={ref}
      style={{ ...style, transform, opacity }}
    >
      <ReviewCard name={review.name} stars={review.stars} text={review.text} />
    </motion.div>
  );
};