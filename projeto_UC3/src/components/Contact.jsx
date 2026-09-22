import "../Styles/Contact.css";

import BoloRosa from "../imagens/boloRosa.png";
import Background from "../imagens/heroBack.png";

// -----------------------------------------------------------------
// Ícones simples em SVG (sem depender de bibliotecas externas)
// -----------------------------------------------------------------
const PinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M12 22s7-7.58 7-12.5A7 7 0 0 0 5 9.5C5 14.42 12 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    <circle cx="12" cy="9.5" r="2.5" fill="currentColor"/>
  </svg>
);

const ClockIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
    <path d="M12 7v5l3.5 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const PhoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.9 21 3 13.1 3 3.9c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.4 0 .8-.3 1L6.6 10.8Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
  </svg>
);

const InstaIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="3" width="18" height="18" rx="6" stroke="currentColor" strokeWidth="2"/>
    <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="2"/>
    <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor"/>
  </svg>
);

const ArrowIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const InfoRow = ({ icon, title, children }) => (
  <div className="contact-info-row">
    <span className="contact-info-icon">{icon}</span>
    <div>
      <div className="contact-info-title">{title}</div>
      <div className="contact-info-text">{children}</div>
    </div>
  </div>
);

export default function Contact() {
  return (
    <section
      className="contact-section"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <div className="contact-inner">
        {/* ---------------- Coluna esquerda: título + infos ---------------- */}
        <div className="contact-left">
          <span className="contact-heart">♡</span>
          <p className="contact-kicker">ENTRE EM</p>
          <h2 className="contact-title">CONTATO</h2>
          <h3 className="contact-title-script">
            com a gente <span className="contact-heart small">♡</span>
          </h3>
          <p className="contact-desc">
            Tem alguma dúvida, sugestão ou quer fazer um pedido especial?
            Estamos prontos para te atender!
          </p>

          <div className="contact-info-list">
            <InfoRow icon={<PinIcon />} title="Nossa Loja">
              Rua Antonio de Melo Freitas
            </InfoRow>
            <InfoRow icon={<ClockIcon />} title="Horário de Funcionamento">
              09:00 - 21:00
            </InfoRow>
            <InfoRow icon={<PhoneIcon />} title="Telefone / WhatsApp">
              +55 11 96048-1985
            </InfoRow>
            <InfoRow icon={<InstaIcon />} title="Nosso Instagram">
              doceencantodelicias1
            </InfoRow>
          </div>
        </div>

        {/* ---------------- Coluna direita: form + bolo ---------------- */}
        <div className="contact-right">
          <div className="contact-form-card">
            <span className="contact-washi" />

            <div className="contact-form-header">
              <h3>
                Envie sua mensagem <span className="contact-heart small">♡</span>
              </h3>
              <p>VAMOS ADORAR TE OUVIR!</p>
            </div>

            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="contact-form-row">
                <input type="text" placeholder="Nome" />
                <input type="email" placeholder="E-mail" />
              </div>

              <select defaultValue="">
                <option value="" disabled>
                  Assunto
                </option>
                <option value="duvida">Dúvida</option>
                <option value="pedido">Pedido especial</option>
                <option value="outro">Outro</option>
              </select>

              <textarea placeholder="Sua mensagem..." rows={5} />

              <button type="submit" className="contact-submit">
                ENVIAR MENSAGEM <ArrowIcon />
              </button>
            </form>
          </div>

          <img className="contact-cake" src={BoloRosa} alt="Bolo de morango" />
        </div>
      </div>
    </section>
  );
}