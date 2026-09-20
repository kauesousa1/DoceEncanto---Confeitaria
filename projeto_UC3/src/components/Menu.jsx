import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

import boloMaracuja from "../imagens/BoloMaracuja.png";

import "../Styles/Menu.css"

// ---------------------------------------------------------------
// DADOS DO CARDÁPIO
// Troque "image" pelos imports reais das suas fotos
// (ex: import BoloChocolate from './imagens/bolo-chocolate.png')
//
// Pra um produto ter o giro 360° de verdade, adicione "images360":
// um array com o caminho de cada foto da sequência, em ordem
// (ex: frame-01.jpg até frame-24.jpg). Produtos sem "images360"
// continuam funcionando normalmente, só sem o giro real.
// ---------------------------------------------------------------

// Frames de exemplo só pra você ver o mecanismo funcionando.
// Troque por: Array.from({ length: 24 }, (_, i) => `/produtos/bolo-chocolate/frame-${String(i + 1).padStart(2, "0")}.jpg`)
const demoFrames360 = Array.from(
  { length: 12 },
  (_, i) => `https://placehold.co/500x500/3d2418/d4a857?text=Frame+${i + 1}`
);

const CATEGORIES = [
  {
    id: "bolos",
    title: "Bolos",
    icon: "🎂",
    items: [
      { id: "b1", name: "Bolo de Chocolate", price: "65,00", rating: 5, image: "./imagens/bolo-chocolate.png", images360: demoFrames360, description: "Massa de chocolate fofinha com recheio de brigadeiro e cobertura cremosa." },
      { id: "b2", name: "Bolo de Ninho", price: "70,00", rating: 5, image: "https://placehold.co/400x400/3d2418/d4a857?text=Foto", description: "Massa branca aerada com recheio de leite ninho e morango." },
      { id: "b3", name: "Bolo Red Velvet", price: "75,00", rating: 4, image: "https://placehold.co/400x400/3d2418/d4a857?text=Foto", description: "Massa aveludada com cream cheese, um clássico que encanta." },
      { id: "b4", name: "Bolo de Cenoura", price: "60,00", rating: 5, image: "https://placehold.co/400x400/3d2418/d4a857?text=Foto", description: "Massa de cenoura com cobertura de brigadeiro na medida certa." },
      { id: "b5", name: "Bolo de Limão", price: "62,00", rating: 4, image: "https://placehold.co/400x400/3d2418/d4a857?text=Foto", description: "Massa leve com recheio cítrico e cobertura de merengue." },
    ],
  },
  // {
  //   id: "tortas",
  //   title: "Tortas",
  //   icon: "🥧",
  //   items: [
  //     { id: "t1", name: "Torta de Maracujá", price: "55,00", rating: 5, image: "https://placehold.co/400x400/3d2418/d4a857?text=Foto", description: "Base crocante, creme de maracujá e cobertura de chantilly." },
  //     { id: "t2", name: "Torta de Morango", price: "58,00", rating: 4, image: "https://placehold.co/400x400/3d2418/d4a857?text=Foto", description: "Massa amanteigada, creme confeiteiro e morangos frescos." },
  //     { id: "t3", name: "Torta de Ninho", price: "60,00", rating: 5, image: "https://placehold.co/400x400/3d2418/d4a857?text=Foto", description: "Camadas de leite ninho com cobertura crocante." },
  //   ],
  // },
  {
    id: "copos",
    title: "Copos da Felicidade",
    icon: "🍮",
    items: [
      { id: "c1", name: "Ovomaltine Cremoso", price: "29,17", rating: 5, image: "https://placehold.co/400x400/3d2418/d4a857?text=Foto", description: "Copo da Felicidade 300ml- Camadas generosas de brigadeiro belga, bolo de chocolate úmido, creme de ninho e ovalmatine crocante. Combinação irresistível!" },
      { id: "c2", name: "Oreo Supreme", price: "29,17", rating: 4.5, image: "https://placehold.co/400x400/3d2418/d4a857?text=Foto", description: "Copo da Felicidade 300ml- Camada de brigadeiro ninho, crocantes pedaços de oreo, brigadeiro belga, e chantininho. Uma combinação irresistível!" },
      { id: "c3", name: "Ninho com Morango", price: "29,92", rating: 4, image: boloMaracuja, description: "Bolo leve, creme e abacaxi caramelizado." },
      { id: "c4", name: "Morango Encantado", price: "30,00", rating:5, image: "../imagens/BoloMaracuja.png", description:"Copo da Felicidade 300ml- Bolo de chocolate umido, brigadeiro de ninho, morangos fresquinhos, chantininho. Combinação simplesmente inesquecível!"},
      { id: "c5", name: "Mousse de Nutella", price: "30,00", rating:4, image: "", description:"Copo da Felicidade 300ml- Camadas generosas de bolo de chocolate, intercaladas com mousse de nutella, brigadeiro belga e chantininho. Cada colherada traz uma explosão de sabor!"},
      { id: "c6", name: "Ninho com Uva", price: "32,80", rating:5, image: "", description:"Copo da Felicidade 300ml- Camadas de brownie, brigadeiro cremoso de Ninho, uvas fresquinhas e chantininho, finalizadas com muito carinho para deixar cada colherada irresistível."},
    ],
  },
  
  {
    id: "outros",
    title: "Outros Doces",
    icon: "🍫",
    items: [
      { id: "o1", name: "Brownie", price: "12,00", rating: 5, image: "https://placehold.co/400x400/3d2418/d4a857?text=Foto", description: "Denso, achocolatado, com gotas de chocolate." },
      { id: "o2", name: "Pudim", price: "15,00", rating: 4, image: "https://placehold.co/400x400/3d2418/d4a857?text=Foto", description: "Pudim de leite condensado tradicional, cremoso." },
      { id: "o3", name: "Brigadeirão", price: "16,00", rating: 5, image: "https://placehold.co/400x400/3d2418/d4a857?text=Foto", description: "Textura de brigadeiro com calda cremosa." },
      { id: "o4", name: "Beijinho", price: "3,50", rating: 4, image: "https://placehold.co/400x400/3d2418/d4a857?text=Foto", description: "Docinho de coco, unidade." },
      { id: "o5", name: "Trufa", price: "6,00", rating: 5, image: "https://placehold.co/400x400/3d2418/d4a857?text=Foto", description: "Trufa de chocolate belga, unidade." },
    ],
  },
];

function Stars({ count }) {
  return (
    <div className="stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < count ? "star filled" : "star"}>★</span>
      ))}
    </div>
  );
}

// Componente que faz o giro 360° de verdade: troca o "src" da imagem
// rapidamente entre os frames da sequência. O layoutId continua o mesmo
// em todos os frames, então o Framer Motion segue animando a posição e
// o tamanho (o "crescer do card até aqui") normalmente, e o giro real
// acontece por cima, trocando qual foto está sendo mostrada.
function Product360Image({ frames, layoutId, spin = true, style, ...motionProps }) {
  const [frameIndex, setFrameIndex] = useState(0);

  // Pré-carrega os frames assim que o componente monta, pra troca ficar
  // instantânea (sem "piscar" esperando a imagem baixar).
  useEffect(() => {
    frames.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [frames]);

  // Anima uma volta completa (0 até o último frame) durante a abertura.
  useEffect(() => {
    if (!spin) return;
    const duration = 700; // ms — tempo da "voltinha" ao abrir
    const start = performance.now();
    let raf;

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      setFrameIndex(Math.floor(progress * (frames.length - 1)));
      if (progress < 1) raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [spin, frames.length]);

  // Bônus: depois que a intro termina, dá pra "arrastar" pra girar
  // manualmente. Se não quiser essa interação, pode remover o onPan.
  const handlePan = (event, info) => {
    const framesPerPixel = frames.length / 300; // ajuste a sensibilidade aqui
    setFrameIndex((prev) => {
      const next = Math.round(prev + info.delta.x * framesPerPixel);
      return ((next % frames.length) + frames.length) % frames.length;
    });
  };

  return (
    <motion.img
      layoutId={layoutId}
      src={frames[frameIndex]}
      alt=""
      draggable={false}
      onPan={handlePan}
      style={{ cursor: "grab", ...style }}
      {...motionProps}
    />
  );
}

export default function Cardapio() {
  const [selected, setSelected] = useState(null);

  // Fecha o painel com a tecla ESC
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // Trava o scroll da página enquanto o painel do produto está aberto
useEffect(() => {
  if (selected) {
    const scrollY = window.scrollY;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
      window.scrollTo(0, scrollY);
    };
  }
}, [selected]);

  return (
    <section className="cardapio-section">

      <div className="cardapio-header">
        <h2 className="texto_cardapio">DELICIOSOS</h2>
        <p className="subTitulo_cardapio">PRODUTOS <br/> QUE ENCANTAM EM TODOS OS <br/> MOMENTOS</p>
      </div>

      {CATEGORIES.map((category) => (
        <div className="cardapio-category" key={category.id}>
          <div className="cardapio-category-title">
            <span>{category.icon}</span> {category.title}
          </div>
          <div className="cardapio-grid">
            {category.items.map((item) => (
              <div
                className="cardapio-card"
                key={item.id}
                onClick={() => setSelected({ ...item, category: category.title })}
              >
                {selected?.id === item.id ? (
                  // Enquanto o painel está aberto, a imagem "real" vive no painel
                  // (mesmo layoutId). Aqui fica só um espaço reservado, pra não
                  // saltar o grid.
                  <div className="cardapio-card-placeholder" />
                ) : (
                  <motion.img
                    layoutId={`product-image-${item.id}`}
                    src={item.images360 ? item.images360[0] : item.image}
                    alt={item.name}
                    transition={{ type: "spring", stiffness: 260, damping: 30 }}
                  />
                )}
                <div
                  className="cardapio-card-info"
                  style={{ opacity: selected?.id === item.id ? 0 : 1 }}
                >
                  <div className="name">{item.name}</div>
                  <div className="price">R$ {item.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      <AnimatePresence>
        {selected && (
          <>
            <button className="cardapio-panel-close" onClick={() => setSelected(null)}>
              ✕
            </button>

            {/* Painel em tela cheia, dividido em duas colunas */}
            <motion.div
              className="cardapio-panel"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="cardapio-panel-image-side">
                {/* Mesmo layoutId do card: o Framer Motion calcula sozinho a
                    posição/tamanho de origem (o card) e de destino (aqui) e
                    anima entre os dois — isso dá o efeito de crescer até aqui,
                    e de encolher de volta pro card quando fecha. */}
                {selected.images360 ? (
                  <Product360Image
                    frames={selected.images360}
                    layoutId={`product-image-${selected.id}`}
                    spin
                    transition={{ layout: { type: "spring", stiffness: 260, damping: 30 } }}
                  />
                ) : (
                  <motion.img
                    layoutId={`product-image-${selected.id}`}
                    src={selected.image}
                    alt={selected.name}
                    style={{ transformStyle: "preserve-3d" }}
                    initial={{ rotateY: -110, opacity: 0.3 }}
                    animate={{ rotateY: 0, opacity: 1 }}
                    exit={{ rotateY: 110, opacity: 0 }}
                    transition={{
                      layout: { type: "spring", stiffness: 260, damping: 30 },
                      rotateY: { duration: 0.6, ease: "easeOut" },
                      opacity: { duration: 0.3 },
                    }}
                  />
                )}
              </div>

              <div className="cardapio-panel-info-side">
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 16 }}
                  transition={{ delay: 0.35, duration: 0.35 }}
                >
                  <div className="category-tag">{selected.category}</div>
                  <h3>{selected.name}</h3>
                  <Stars count={selected.rating} />
                  <p className="description">{selected.description}</p>
                  <div className="price">R$ {selected.price}</div>
                  <button className="cta">Peça agora</button>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}