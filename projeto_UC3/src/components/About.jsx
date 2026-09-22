import "../Styles/About.css";
import regiane from "../imagens/fotoRegiane.png";
import batedeira from "../imagens/batedoura.svg";
import backBranco from "../imagens/backBranco.png";

export default function About() {
  return (
   <section
  className="about"
  style={{ backgroundImage: `url(${backBranco})` }}
>

      {/* Decorações flutuantes de fundo */}
      <img className="about__deco about__deco--whisk float-slow" src={batedeira} alt="" aria-hidden="true" />
      <span className="about__deco about__deco--heart-1 float-medium">♡</span>
      <span className="about__deco about__deco--heart-2 float-slow">♡</span>

      <div className="about__grid">

        {/* Coluna da foto */}
        <div className="about__image-col">
          <div className="about__photo-glow"></div>

          <div className="about__photo-wrap">
            <img className="about__photo" src={regiane} alt="Regiane, confeiteira e fundadora" />
          </div>

          {/* Selo girando */}
          <div className="about__badge spin-slow">
            <svg viewBox="0 0 100 100" className="about__badge-svg">
              <path id="circlePath" d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" fill="none" />
              <text>
                <textPath href="#circlePath">
                  ✦ FEITO COM AMOR ✦ ARTESANAL ✦ DESDE 2020 ✦
                </textPath>
              </text>
            </svg>
            <span className="about__badge-center">♡</span>
          </div>
        </div>

        {/* Coluna de texto */}
        <div className="about__text-col">
          <span className="about__kicker">CONHEÇA A CONFEITEIRA</span>

          <h2 className="about__title">
            Onde cada detalhe
            <br />
            <span className="about__title-highlight">
              vira encanto
              <svg className="about__underline" viewBox="0 0 300 20" preserveAspectRatio="none">
                <path d="M2,15 C60,2 240,2 298,15" stroke="#E0165C" strokeWidth="4" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </h2>

          <p className="about__body">
            Nossos ingredientes são selecionados com carinho, nossos fornos sempre
            prontos, a nossa equipe trabalha com paixão para levar até você os doces
            mais especiais.
          </p>
          <p className="about__body">
            De bolos clássicos a criações cheias de personalidade, cada peça é feita
            com criatividade e um toque de magia. Acreditamos que doces não são apenas
            sobremesas, são momentos de alegria, afeto e celebração.
          </p>

          {/* Estatísticas */}
          <div className="about__stats">
            <div className="about__stat">
              <span className="about__stat-number">5+</span>
              <span className="about__stat-label">Anos de<br />experiência</span>
            </div>
            <div className="about__stat">
              <span className="about__stat-number">1200+</span>
              <span className="about__stat-label">Doces<br />entregues</span>
            </div>
            <div className="about__stat">
              <span className="about__stat-number">98%</span>
              <span className="about__stat-label">Clientes<br />satisfeitos</span>
            </div>
          </div>

          {/* Selos */}
          <div className="about__features">
            <div className="about__feature">
              <div className="about__feature-icon">🌿</div>
              <span>Ingredientes<br />Selecionados</span>
            </div>
            <div className="about__feature">
              <div className="about__feature-icon">♡</div>
              <span>Feitos com<br />Paixão</span>
            </div>
            <div className="about__feature">
              <div className="about__feature-icon">★</div>
              <span>Doce Momentos<br />Especiais</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}