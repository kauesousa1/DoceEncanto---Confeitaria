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

const SocialIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="3" width="18" height="18" rx="6" stroke="currentColor" strokeWidth="2"/>
    <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="2"/>
    <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor"/>
  </svg>
);

const ScooterIcon = () => (
  <svg width="46" height="46" viewBox="0 0 64 64" fill="none">
    <circle cx="16" cy="48" r="6" stroke="currentColor" strokeWidth="2.5"/>
    <circle cx="46" cy="48" r="6" stroke="currentColor" strokeWidth="2.5"/>
    <path d="M16 48h14l4-14h10M34 34h8l6 8v6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="42" y="22" width="10" height="8" rx="2" fill="currentColor"/>
  </svg>
);

// Mancha de tinta decorativa atrás dos títulos
const PaintBlob = ({ color, style }) => (
  <svg
    viewBox="0 0 220 90"
    style={{ position: "absolute", zIndex: 0, ...style }}
  >
    <path
      d="M8 45C2 25 25 5 55 8c25 2 35-10 60-6 22 4 30 22 45 28 20 8 22 30 2 38-22 9-45-4-70-2C68 68 45 78 25 68 8 60 12 60 8 45Z"
      fill={color}
    />
  </svg>
);

// Fita washi decorativa
const WashiTape = ({ style, color = "#f2a6c0" }) => (
  <div
    style={{
      position: "absolute",
      width: "90px",
      height: "34px",
      background: `repeating-linear-gradient(135deg, ${color} 0 6px, transparent 6px 12px), ${color}55`,
      opacity: 0.85,
      borderRadius: "2px",
      boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
      ...style,
    }}
  />
);

const InfoRow = ({ icon, children }) => (
  <div className="info-row">
    <span className="info-icon">{icon}</span>
    <span className="info-text">{children}</span>
  </div>
);

export default function VisiteNos() {
  return (
    <section className="visit-section">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;1,700&family=Dancing+Script:wght@600&display=swap');

        .visit-section {
          --cream: #fbeee0;
          --card: #fff8ef;
          --pink: #ec6fa0;
          --pink-soft: #f6c6d9;
          --brown: #3d2418;
          --brown-soft: #6b4a38;
          --gold: #d4a857;
          --coral: #e8607a;
          position: relative;
          background: var(--cream);
          padding: 90px 24px 110px;
          overflow: hidden;
        }

        /* Onda de transição vindo da seção marrom do cardápio */
        .visit-wave {
          position: absolute;
          top: -1px;
          left: 0;
          width: 100%;
          height: 60px;
          fill: #2b1710;
        }

        /* Padrão sutil de doodles de confeitaria espalhados no fundo */
        .visit-doodles {
          position: absolute;
          inset: 0;
          opacity: 0.35;
          pointer-events: none;
          background-image:
            radial-gradient(circle, var(--pink-soft) 1.5px, transparent 1.6px);
          background-size: 42px 42px;
        }

        .visit-header {
          position: relative;
          text-align: center;
          margin-bottom: 64px;
          z-index: 1;
        }

        .visit-header .heart {
          color: var(--pink);
          font-size: 28px;
          vertical-align: middle;
          margin: 0 14px;
        }

        .visit-header h2 {
          display: inline-block;
          font-family: 'Playfair Display', Georgia, serif;
          font-weight: 700;
          color: var(--brown);
          font-size: clamp(28px, 4vw, 42px);
          margin: 0;
        }

        .visit-header .script {
          font-family: 'Dancing Script', cursive;
          color: var(--pink);
          font-weight: 600;
        }

        .visit-header p {
          margin: 10px 0 0;
          color: var(--gold);
          text-transform: uppercase;
          letter-spacing: 2px;
          font-size: 13px;
          font-weight: 600;
        }

        .visit-cards {
          position: relative;
          z-index: 1;
          max-width: 1180px;
          margin: 0 auto;
          display: flex;
          gap: 32px;
          flex-wrap: wrap;
        }

        .visit-card {
          position: relative;
          flex: 1 1 420px;
          background: var(--card);
          border-radius: 32px;
          padding: 44px 40px;
          box-shadow: 0 18px 40px rgba(61, 36, 24, 0.1);
          overflow: hidden;
        }

        .visit-card h3 {
          position: relative;
          z-index: 1;
          font-family: 'Playfair Display', Georgia, serif;
          color: var(--brown);
          font-size: 28px;
          margin: 0 0 32px;
        }

        /* -------- Card: Nossa Loja -------- */
        .loja-content {
          position: relative;
          z-index: 1;
          display: flex;
          gap: 32px;
          align-items: flex-start;
        }

        .loja-info {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 22px;
        }

        .info-row {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .info-icon {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: var(--pink-soft);
          color: var(--coral);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .info-text {
          color: var(--brown);
          font-size: 15px;
          font-weight: 500;
        }

        .polaroid {
          position: relative;
          flex-shrink: 0;
          width: 190px;
          background: #fff;
          padding: 10px 10px 30px;
          border-radius: 6px;
          box-shadow: 0 12px 24px rgba(61, 36, 24, 0.18);
          transform: rotate(4deg);
        }

        .polaroid img {
          width: 100%;
          aspect-ratio: 4 / 5;
          object-fit: cover;
          border-radius: 2px;
          display: block;
        }

        /* -------- Card: Nosso App -------- */
        .app-content {
          position: relative;
          z-index: 1;
          text-align: center;
        }

        .app-badge {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: #fff;
          border: 1px solid #f0ddc9;
          border-radius: 18px;
          padding: 12px 22px;
          margin-bottom: 28px;
        }

        .app-badge .number {
          background: var(--gold);
          color: var(--brown);
          font-weight: 800;
          font-size: 22px;
          border-radius: 10px;
          padding: 4px 10px;
        }

        .app-badge .label {
          font-weight: 800;
          font-size: 22px;
          color: var(--brown);
          letter-spacing: 1px;
        }

        .app-content p {
          color: var(--brown);
          font-size: 17px;
          font-weight: 600;
          line-height: 1.5;
          max-width: 360px;
          margin: 0 auto 28px;
        }

        .app-cta {
          background: var(--coral);
          color: #fff;
          border: none;
          padding: 16px 32px;
          border-radius: 999px;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.5px;
          cursor: pointer;
          transition: transform 0.15s ease, background 0.2s ease;
        }

        .app-cta:hover {
          background: #d84e68;
          transform: translateY(-2px);
        }

        .scooter {
          position: absolute;
          bottom: 24px;
          right: 28px;
          color: var(--pink);
          opacity: 0.8;
          z-index: 0;
        }

        @media (max-width: 640px) {
          .loja-content { flex-direction: column-reverse; }
          .polaroid { align-self: center; }
        }
      `}</style>

      <svg className="visit-wave" viewBox="0 0 1200 60" preserveAspectRatio="none">
        <path d="M0 0h1200v20c-200 30-400 30-600 10S200-10 0 20V0Z" />
      </svg>

      <div className="visit-doodles" />

      <div className="visit-header">
        <span className="heart">♡</span>
        <h2>
          <span className="script">Venha adoçar</span> seu dia com a gente
        </h2>
        <span className="heart">♡</span>
        <p>Estamos te esperando!</p>
      </div>

      <div className="visit-cards">
        {/* ---------------- Nossa Loja ---------------- */}
        <div className="visit-card">
          <PaintBlob color="#f2a6c0" style={{ top: -18, left: 40, width: 220 }} />
          <WashiTape style={{ top: -6, right: 60, transform: "rotate(-8deg)" }} />
          <h3>Nossa Loja</h3>
          <div className="loja-content">
            <div className="loja-info">
              <InfoRow icon={<PinIcon />}>Rua Antonio de Melo Freitas</InfoRow>
              <InfoRow icon={<ClockIcon />}>09:00 - 21:00</InfoRow>
              <InfoRow icon={<PhoneIcon />}>+55 11 96048-1985</InfoRow>
              <InfoRow icon={<SocialIcon />}>doceencantodelicias1</InfoRow>
            </div>
            <div className="polaroid">
              <WashiTape
                color="#f2a6c0"
                style={{ top: -14, left: "50%", transform: "translateX(-50%) rotate(-4deg)", width: 70 }}
              />
              <img
                src="https://placehold.co/300x375/f6c6d9/3d2418?text=Foto+da+Loja"
                alt="Fachada da loja Doce Encanto"
              />
            </div>
          </div>
        </div>

        {/* ---------------- Nosso App ---------------- */}
        <div className="visit-card">
          <PaintBlob color="#f2a6c0" style={{ top: -18, left: 40, width: 220 }} />
          <WashiTape style={{ top: -6, right: 60, transform: "rotate(8deg)" }} />
          <h3>Nosso App</h3>
          <div className="app-content">
            <div className="app-badge">
              <span className="number">99</span>
              <span className="label">FOOD</span>
            </div>
            <p>Seus doces favoritos entregues rapidinho na sua casa!</p>
            <button className="app-cta">PEDIR NA 99 FOOD</button>
          </div>
          <div className="scooter">
            <ScooterIcon />
          </div>
        </div>
      </div>
    </section>
  );
}