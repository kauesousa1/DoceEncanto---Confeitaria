import "../Styles/Hero.css";

import boloHero from "../imagens/boloHero.svg";
import polaroid from "../imagens/polaroid.svg";
import backgroundHero from "../imagens/heroBack.png";

export default function Hero() {
  return (
    <section className="hero">
      <img
        src={backgroundHero}
        alt=""
        aria-hidden="true"
        className="hero_background"
      />

      <div className="hero__logo-top">
        <span className="hero__logo-name">Doce Encanto</span>
        <span className="hero__logo-sub">CONFEITARIA</span>
      </div>

      <div className="hero__visual">
        <div className="hero__watermark-wrap">
          <div className="hero__brackets" aria-hidden="true">
            <span className="hero__bracket hero__bracket--left" />
            <span className="hero__bracket hero__bracket--right" />
          </div>

          <h1 className="texto_hero">DOCES</h1>
        </div>

        <img
          src={boloHero}
          alt="Bolo de chocolate com morangos"
          className="hero__cake"
        />

        <img
          src={polaroid}
          alt="Foto polaroid: feito com muito amor"
          className="hero__polaroid"
        />
      </div>

      <div className="hero__content">
        <span className="hero__kicker">
          SABORES QUE TORNAM A VIDA <br />
          <span className="hero__kicker-script">mais doce</span> ♡
        </span>
        
          
     

        <p className="hero__body">
          Bolos, doces e sobremesas artesanais feitos com ingredientes
          selecionados e muito carinho.
        </p>

        <button className="hero__cta">
          Ver nossos produtos <span aria-hidden="true">→</span>
        </button>
      </div>

      <div className="hero__rating">
        <div className="hero__avatars">
          {/* Placeholder — troca por <img> quando tiver as fotos reais */}
          <span className="hero__avatar" style={{ background: "#D9A9A0" }} />
          <span className="hero__avatar" style={{ background: "#B97A6B" }} />
          <span className="hero__avatar" style={{ background: "#8C5A4A" }} />
        </div>
        <div className="hero__rating-text">
          <span>Nossa confeitaria</span>
          <span className="hero__stars" aria-label="5 estrelas">★★★★★</span>
        </div>
      </div>
    </section>
  );
}