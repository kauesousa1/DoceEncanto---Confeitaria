import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

import "../Styles/Menu.css";

// ---------------------------------------------------------------
// URL da API. Em produção, troque pelo endereço real onde a API
// vai estar hospedada (ex: https://api.seusite.com).
// ---------------------------------------------------------------
const API_URL = "https://doceria-api-w5gc.onrender.com";

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

// Formata "12.5" ou 12.5 -> "12,50" (padrão brasileiro)
function formatarPreco(preco) {
  const numero = Number(preco);
  if (Number.isNaN(numero)) return preco;
  return numero.toFixed(2).replace(".", ",");
}

// Agrupa a lista "plana" de produtos que vem da API em categorias,
// no mesmo formato que o restante do componente já espera.
function agruparPorCategoria(produtos) {
  const grupos = {};

  produtos.forEach((produto) => {
    const nomeCategoria = produto.categoria || "Outros";

    if (!grupos[nomeCategoria]) {
      grupos[nomeCategoria] = {
        id: nomeCategoria.toLowerCase().replace(/\s+/g, "-"),
        title: nomeCategoria,
        icon: "🍰",
        items: [],
      };
    }

    grupos[nomeCategoria].items.push({
      id: String(produto.id),
      name: produto.nome,
      price: formatarPreco(produto.preco),
      rating: produto.rating ?? 5,
      image: produto.imagem_url || "https://placehold.co/400x400/3d2418/d4a857?text=Foto",
      images360: produto.images360 || null,
      description: produto.descricao || "",
    });
  });

  return Object.values(grupos);
}

export default function Cardapio() {
  const [selected, setSelected] = useState(null);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(null);

  // Busca os produtos na API assim que o componente monta
  useEffect(() => {
    fetch(`${API_URL}/produtos`)
      .then((res) => {
        if (!res.ok) throw new Error("Falha ao buscar produtos");
        return res.json();
      })
      .then((data) => {
        setCategories(agruparPorCategoria(data));
        setErro(null);
      })
      .catch((err) => {
        console.error("Erro ao buscar produtos:", err);
        setErro("Não foi possível carregar o cardápio agora. Tenta recarregar a página.");
      })
      .finally(() => setLoading(false));
  }, []);

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

  if (loading) {
    return (
      <section id="cardapio-section" className="cardapio-section">
        <p>Carregando cardápio...</p>
      </section>
    );
  }

  if (erro) {
    return (
      <section id="cardapio-section" className="cardapio-section">
        <p>{erro}</p>
      </section>
    );
  }

  return (
    <section id="cardapio-section" className="cardapio-section">
      {categories.map((category) => (
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