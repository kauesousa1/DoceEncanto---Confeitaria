import "../Styles/Contact.css";

export default function Contact() {
  return (
    <section
      className="contact"
      id="contato"
      style={{
        backgroundImage: `url('/Contato.svg')`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >

      <section className='lojas'>
        <div className='fisica'>
          <p className="loja">Nossa Loja</p>
        </div>

        <div className='online'>
          <p className="app"> Nosso App </p>

          <div className='logo99'>
            <img src="/99-app-logo.svg" alt="" />
            <p className="nomelogo">FOOD</p>
          </div>
          <p className="frase">Seus doces favoritos entregues <br />rapidinho na sua casa!</p>
          <button className="botao99">PEDIR NA 99 FOOD</button>
        </div>
      </section>


      <section className='redes'>
          <div className='rua'>
            Rua Antonio de Melo Freitas
          </div>

          <div className="horario">
            09:00 AM - 21:00 PM
          </div>

          <div className='numero'>
            +55 11 96048-1985
          </div>

          <div className='insta'>
            doceencantodelicias1
          </div>
      </section>

      <div className="contact__cta">
        <p className="contact__eyebrow"></p>
        <h2 className="contact__title">
          <em className="contact__title--pink">Venha adoçar</em> seu dia com a gente
        </h2>
        <p className="contact__sub">Estamos te esperando!</p>
      </div>
    </section>
  );
}
