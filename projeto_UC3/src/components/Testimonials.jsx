import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

import cardBrownBg from "../imagens/heroBack.png";

import "../Styles/Testimonials.css";

// ---------------------------------------------------------------
// DADOS DOS DEPOIMENTOS
// Nem todo depoimento precisa ter vídeo — é só não incluir os campos
// "video" e "poster" que o card central mostra automaticamente uma
// versão só com o texto (sem player/botão de play).
// ---------------------------------------------------------------

const TESTIMONIALS = [
   {
    id: 1,
    name: "Lucinete Ribeiro",
    // role: "Marketing Head",
    quote:
      "\"Desde de 2018 sou cliente e posso afirmar com toda certeza que tem um trabalho sensacional, podem adquirir sem receios, tudo muito caprichado, um super atendimento , qualidade e preço justo!.\"",

    rating: 5,
    date: "08/14/2024",
    avatar: "https://i.pravatar.cc/80?img=32",
    poster: "https://placehold.co/500x700/3d3d3d/ffffff?text=Video",
    // video: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
  },
  {
    id: 2,
    name: "Kane Williamson",
    // role: "Lead Designer",
    quote:
      "\"This adventure exceeded all my expectations and gave me memories I'll cherish forever.\"",
    rating: 5,
    date: "09/30/2024",
    avatar: "https://i.pravatar.cc/80?img=12",
    poster: "https://placehold.co/500x700/3d3d3d/ffffff?text=Video",
    video: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
  },
 
  {
    id: 3,
    name: "Gleidson Ribeiro",
    // role: "Founder",
    quote: "\"Muito bom... vale a pena cada centavo 🤝\"",
    rating: 5,
    date: "07/28/2024",
    avatar: "https://i.pravatar.cc/80?img=45",
  },
  {
    id: 4,
    name: "Viviana Silvano",
    // role: "Operations Manager",
    quote:
      "\"De fato aquele doce que encanta ❣️\"",
    rating: 4,
    date: "07/02/2024",
    avatar: "https://i.pravatar.cc/80?img=48",
  },
  {
    id: 5,
    name: "Henrique",
    // role: "CTO",
    quote: "\"a melhor q temos, perfeitaaaaaa👏👏👏👏👏\"",
    rating: 5,
    date: "06/19/2024",
    avatar: "https://i.pravatar.cc/80?img=51",
    poster: "https://placehold.co/500x700/3d3d3d/ffffff?text=Video",
    // video: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
  },
  {
    id: 6,
    name: "Meire Felipe",
    // role: "Product Manager",
    quote: "\"Bolos e doces maravilhosos\"",
    rating: 5,
    date: "05/30/2024",
    avatar: "https://i.pravatar.cc/80?img=25",
  },
  {
    id: 7,
    name: "Erika Lima",
    // role: "CEO",
    quote: "\"Super recomendo.\"",
    rating: 4,
    date: "05/12/2024",
    avatar: "https://i.pravatar.cc/80?img=15",
  },
  {
    id: 8,
    name: "Juliana Costa",
    // role: "Head of Growth",
    quote: "\"O resultado apareceu já no primeiro mês. Time muito profissional.\"",
    rating: 5,
    date: "04/22/2024",
    avatar: "https://i.pravatar.cc/80?img=36",
    poster: "https://placehold.co/500x700/3d3d3d/ffffff?text=Video",
    // video: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
  },
  {
    id: 9,
    name: "Crislaine Santos",
    // role: "Founder",
    quote: "\"Atendimento excelente. Doces de alta qualidades!!!\"",
    rating: 5,
    date: "04/05/2024",
    avatar: "https://i.pravatar.cc/80?img=60",
  },
  {
    id: 10,
    name: "Kim",
    // role: "Marketing Lead",
    quote: "\"Simplesmente uma delícia e viciante ❤️🥰😍\"",
    rating: 5,
    date: "03/18/2024",
    avatar: "https://i.pravatar.cc/80?img=44",
    poster: "https://placehold.co/500x700/3d3d3d/ffffff?text=Video",
    video: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
  },
];

function Stars({ count }) {
  return (
    <div className="testimonials-stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < count ? "star filled" : "star"}>
          ★
        </span>
      ))}
    </div>
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="#1a1a1a">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

// Ícone pequeno de "play" usado no selo dos cards laterais quando o
// depoimento é vídeo.
function PlayBadgeIcon() {
  return (
    <svg viewBox="0 0 24 24" width="10" height="10" fill="#fff">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

// Ícone pequeno de "aspas" usado no selo dos cards laterais quando o
// depoimento é só texto.
function QuoteBadgeIcon() {
  return (
    <svg viewBox="0 0 24 24" width="10" height="10" fill="#fff">
      <path d="M7.17 6C5.97 7.29 5 9.36 5 11.5c0 3.31 2.24 5.5 5 5.5.14-2.65-.76-4.5-2.5-5.5C6.06 10.06 6.83 7.6 8.5 6L7.17 6zm9 0c-1.2 1.29-2.17 3.36-2.17 5.5 0 3.31 2.24 5.5 5 5.5.14-2.65-.76-4.5-2.5-5.5-1.44-1.44-.67-3.9 1-5.5H16.17z" />
    </svg>
  );
}

// Ícone grande de aspas, usado só no card CENTRAL (versão texto), em destaque.
function QuoteMarkIcon() {
  return (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
      <path d="M7.17 6C5.97 7.29 5 9.36 5 11.5c0 3.31 2.24 5.5 5 5.5.14-2.65-.76-4.5-2.5-5.5C6.06 10.06 6.83 7.6 8.5 6L7.17 6zm9 0c-1.2 1.29-2.17 3.36-2.17 5.5 0 3.31 2.24 5.5 5 5.5.14-2.65-.76-4.5-2.5-5.5-1.44-1.44-.67-3.9 1-5.5H16.17z" />
    </svg>
  );
}

// Variantes de animação: controla se o card entra vindo da direita
// (indo pro próximo) ou da esquerda (voltando pro anterior).
// Card central
const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? "70%" : "-70%",
    opacity: 0,
    scale: 0.92,
  }),
  center: { x: 0, opacity: 1, scale: 1 },
  exit: (direction) => ({
    x: direction > 0 ? "-70%" : "70%",
    opacity: 0,
    scale: 0.92,
  }),
};

// Cards laterais
const sideVariants = {
  enter: (direction) => ({ x: direction > 0 ? "60%" : "-60%", opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (direction) => ({ x: direction > 0 ? "-60%" : "60%", opacity: 0 }),
};

const slideTransition = { duration: 0.45, ease: [0.4, 0, 0.2, 1] };

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const total = TESTIMONIALS.length;
  const prevIndex = (activeIndex - 1 + total) % total;
  const nextIndex = (activeIndex + 1) % total;

  const active = TESTIMONIALS[activeIndex];
  const activeHasVideo = Boolean(active.video);

  // dir: 1 = avançando (setinha direita), -1 = voltando (setinha esquerda)
  const goTo = (index, dir) => {
    if (index === activeIndex) return;
    setDirection(dir);
    setIsPlaying(false);
    setActiveIndex(index);
  };

  const goPrev = () => goTo(prevIndex, -1);
  const goNext = () => goTo(nextIndex, 1);

  const handlePlayClick = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  // Sempre que troca o depoimento central, reseta o vídeo do zero
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.pause();
    }
    setIsPlaying(false);
  }, [activeIndex]);

  return (
    <section className="testimonials-section">
      <div className="testimonials-header">
        {/* <span className="testimonials-badge">Testimonial</span> */}
        <h2>
          Veja o que nossos clientes estão dizendo sobre suas experiências!
        </h2>
        {/* <p>
          Veja o que nossos clientes estão dizendo sobre suas experiências e os
          resultados que alcançaram trabalhando conosco.
        </p> */}
        {/* <button className="testimonials-cta">Fale com Vendas</button> */}
      </div>

      <div className="testimonials-carousel">
  {/* Seta esquerda: cards deslizam pra ESQUERDA (o da direita vem pro meio) */}
  <button
    className="testimonials-arrow left"
    onClick={goPrev}
    aria-label="Próximo depoimento"
  >
    ←
  </button>

  {/* Card da esquerda */}
  <div className="testimonials-slot testimonials-slot-side">
    <AnimatePresence mode="popLayout" initial={false} custom={direction}>
      <motion.div
        key={TESTIMONIALS[prevIndex].id}
        className="testimonials-slide-wrap"
        custom={direction}
        variants={sideVariants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={slideTransition}
      >
        <div
          className="testimonials-side-card"
          onClick={() => goTo(prevIndex, -1)}
        >
          <SideCardContent item={TESTIMONIALS[prevIndex]} />
        </div>
      </motion.div>
    </AnimatePresence>
  </div>

  {/* Card central */}
  <div className="testimonials-slot testimonials-slot-main">
    <AnimatePresence mode="popLayout" initial={false} custom={direction}>
            <motion.div
  key={active.id}
  className={`testimonials-main-card${
    activeHasVideo ? " has-video" : " text-only"
  }`}
  style={{ backgroundImage: `url(${cardBrownBg})` }}
  custom={direction}
  variants={slideVariants}
  initial="enter"
  animate="center"
  exit="exit"
  transition={slideTransition}
>
        {activeHasVideo ? (
          <MainVideoContent
            item={active}
            videoRef={videoRef}
            isPlaying={isPlaying}
            onToggle={handlePlayClick}
            onEnded={() => setIsPlaying(false)}
          />
        ) : (
          <MainTextContent item={active} />
        )}
      </motion.div>
    </AnimatePresence>
  </div>

  {/* Card da direita */}
  <div className="testimonials-slot testimonials-slot-side">
    <AnimatePresence mode="popLayout" initial={false} custom={direction}>
      <motion.div
        key={TESTIMONIALS[nextIndex].id}
        className="testimonials-slide-wrap"
        custom={direction}
        variants={sideVariants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={slideTransition}
      >
        <div
          className="testimonials-side-card"
          onClick={() => goTo(nextIndex, 1)}
        >
          <SideCardContent item={TESTIMONIALS[nextIndex]} />
        </div>
      </motion.div>
    </AnimatePresence>
  </div>

  {/* Seta direita: cards deslizam pra DIREITA (o da esquerda vem pro meio) */}
  <button
    className="testimonials-arrow right"
    onClick={goNext}
    aria-label="Depoimento anterior"
  >
    →
  </button>
</div>

      {/* Indicadores (bolinhas) — opcional, ajuda em telas menores */}
      <div className="testimonials-dots">
        {TESTIMONIALS.map((item, index) => (
          <button
            key={item.id}
            className={index === activeIndex ? "dot active" : "dot"}
            onClick={() => goTo(index, index > activeIndex ? 1 : -1)}
            aria-label={`Ir para depoimento de ${item.name}`}
          />
        ))}
      </div>
    </section>
  );
}

// ---------- CONTEÚDO DO CARD CENTRAL — VERSÃO VÍDEO ----------
function MainVideoContent({ item, videoRef, isPlaying, onToggle, onEnded }) {
  return (
    <>
      <div className="testimonials-main-topbar">
        <div className="testimonials-main-person">
          <div className="testimonials-main-name">{item.name}</div>
          <div className="testimonials-main-role">{item.role}</div>
        </div>
      </div>

      <video
        ref={videoRef}
        className="testimonials-video"
        src={item.video}
        poster={item.poster}
        playsInline
        onEnded={onEnded}
        onClick={(e) => {
          e.stopPropagation();
          onToggle();
        }}
      />

      {!isPlaying && (
        <button
          className="testimonials-play-btn"
          onClick={(e) => {
            e.stopPropagation();
            onToggle();
          }}
          aria-label="Reproduzir vídeo"
        >
          <PlayIcon />
        </button>
      )}

      <div className="testimonials-main-bottombar">
        <Stars count={item.rating} />
        <span className="testimonials-date">{item.date}</span>
      </div>
    </>
  );
}

// ---------- CONTEÚDO DO CARD CENTRAL — VERSÃO SÓ TEXTO ----------
function MainTextContent({ item }) {
  return (
    <div className="testimonials-main-text-wrap">
      <span className="testimonials-main-quote-icon">
        <QuoteMarkIcon />
      </span>

      <p className="testimonials-main-quote">{item.quote}</p>

      <div className="testimonials-main-text-footer">
        <img
          className="testimonials-side-avatar"
          src={item.avatar}
          alt={item.name}
        />
        <div>
          <div className="testimonials-side-name">{item.name}</div>
          <div className="testimonials-side-role">{item.role}</div>
        </div>
      </div>

      <div className="testimonials-main-text-bottombar">
        <Stars count={item.rating} />
        <span className="testimonials-date">{item.date}</span>
      </div>
    </div>
  );
}

// ---------- CARDS LATERAIS (com selo + capa indicando vídeo ou texto) ----------
function SideCardContent({ item }) {
  const hasVideo = Boolean(item.video);

  return (
    <>
      {/* Capa do vídeo — só aparece quando o depoimento tem vídeo, pra
          a pessoa já saber, antes de clicar, que aquele card vira um
          vídeo ao ser aberto no centro. */}
      {hasVideo && (
        <div
          className="testimonials-side-thumb"
          style={{ backgroundImage: `url(${item.poster})` }}
        >
          <span className="testimonials-side-play">
            <PlayBadgeIcon />
          </span>
        </div>
      )}

      <div className="testimonials-side-topbar">
        <div className="testimonials-side-person">
          <div className="testimonials-side-avatar-wrap">
            <img
              className="testimonials-side-avatar"
              src={item.avatar}
              alt={item.name}
            />
            {/* Selo no canto do avatar: play (vídeo) ou aspas (texto) */}
            <span
              className={`testimonials-type-badge${
                hasVideo ? " video" : " text"
              }`}
              title={hasVideo ? "Depoimento em vídeo" : "Depoimento em texto"}
            >
              {hasVideo ? <PlayBadgeIcon /> : <QuoteBadgeIcon />}
            </span>
          </div>
          <div>
            <div className="testimonials-side-name">{item.name}</div>
            <div className="testimonials-side-role">{item.role}</div>
          </div>
        </div>

      </div>

      <p
        className={`testimonials-side-quote${hasVideo ? " short" : ""}`}
      >
        {item.quote}
      </p>

      <div className="testimonials-side-bottombar">
        <Stars count={item.rating} />
        <span className="testimonials-date">{item.date}</span>
      </div>
    </>
  );
}