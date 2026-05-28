import "../styles/Contact.css";

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
          Nossa Loja
        </div>

        <div className='online'>
          Nosso App
        </div>
      </section>


      <section className='redes'>
          <div className='rua'>
            Rua. Antonio de Melo Freitas
          </div>

          <div className='numero'>
            11 99552-4620
          </div>

          <div className='insta'>
            DoceEncanto
          </div>
      </section>

      <div className="contact__cta">
        <p className="contact__eyebrow">venha</p>
        <h2 className="contact__title">
          <em className="contact__title--pink">adoçar</em> seu dia com a gente
        </h2>
        <p className="contact__sub">Estamos te esperando!</p>
      </div>
    </section>
  );
}