import "../Styles/About.css";

export default function About() {
  return (
    <section className="about">
      <div className="about__grid">

        {/* Imagem do chocolate — troque por <img src="..." /> */}
        <div className="about__image-col">
          <div className="about__img-placeholder">
            {/* <img src="/images/chocolate.png" alt="Chocolate" /> */}
            <span>🍫</span>
            <small>imagem do chocolate</small>
          </div>
        </div>

        {/* Texto */}
        <div className="about__text-col">
          <h2 className="about__title">
            Onde Cada Detalhe<br />Vira Encanto
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
        </div>

      </div>
    </section>
  );
}