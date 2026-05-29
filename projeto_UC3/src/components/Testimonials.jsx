import "../Styles/Testimonials.css";

export default function Testimonials() {
  return (
    <section
      className="testi"
      id="depoimentos"
      style={{
        backgroundImage: `url('/Opiniao.svg')`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >

    
      <section>
          <div className="depoi_andre">
              <h2>simplesmente o melhor <br></br>brigadeiro que já comi!<br></br>Derrete na boca e dá pra<br></br> sentir o carinho em cada <br></br> detalhe. Já virei cliente fiel!</h2>
              <span className="Nome_Depoi">Andressa M.</span>
          </div>
          <div className="depoi_lucas">
              <h2>O bolo de chocolate com <br></br> morango é surrel! O <br></br> equilíbrio perfeito entre<br></br>doce e frescor. <br></br> Melhor confeiteira!</h2>
              <span className="Nome_Depoi">Lucas S.</span>
          </div>
          <div className="depoi_patri">
              <h2>Cada detalhe, cada sabor... tudo <br></br> feito com muito amor! <br></br>É nítido o cuidado em cada etapa. <br></br> Vocês fazem a diferença!</h2>
              <span className="Nome_Depoi">Patricia A.</span>
          </div>
          <div className="depoi_camila">
              <h2>Os doces são impecáveis!<br></br>Além de lindos, são super <br></br>frescos e deliciosos.<br></br>Perfeitos para <br></br> qualquer ocasião!</h2>
              <span className="Nome_Depoi">Camila R.</span>
          </div>
          <div className="depoi_bea">
              <h2>Atendimento maravilhoso <br></br>e entrega super rápida!<br></br>Tudo chegou perfeito e <br></br>com um cheirinho<br></br>incrível. Recomendo de <br></br>olhos fechados!</h2>
              <span className="Nome_Depoi">Beatriz L.</span>
          </div>








      </section>
      <div className="testi__header">
        <p className="testi__eyebrow">o que dizem sobre nós</p>
        <h2 className="testi__title">
          Feito com amor,{" "}
          <em className="testi__title--pink">aprovado por você!</em>
        </h2>
        <p className="testi__desc">
          Cada encontro nos inspira a continuar adoçando histórias e criando momentos inesquecíveis.
        </p>
      </div>

      <div className="testi__cta">
        <p className="testi__cta-text">Sua opinião é muito<br></br> importante para nós!</p>
        <button className="testi__btn">Deixar Avaliação</button>
      </div>
    </section>
  );
}
