import { useRef } from "react";
import { useInView } from "motion/react";
import "../Styles/Hero.css";
import regiane from "../imagens/fotoRegiane.png";
import batedeira from "../imagens/batedoura.svg";
import colherChocolate from "../imagens/colherChocolate.svg";
import logoEmpresa from "../imagens/Logoempresa.svg";

export default function Hero() {
  const dripRef = useRef(null);
  const isInView = useInView(dripRef, { once: true, margin: "-100px" });

  return (
    <section className="hero">

      {/* Elementos decorativos flutuantes */}
      <img className="hero__deco hero__deco--whisk float-slow" src={batedeira} alt="" aria-hidden="true" />
      <img className="hero__deco hero__deco--spoon float-medium" src={colherChocolate} alt="" aria-hidden="true" />

      {/* Navbar */}
      <nav className="hero__nav">
        <div className="hero__logo">
          <img src={logoEmpresa} alt="Doce Encanto" />
          <div>
            <span className="hero__logo-name">Regiane</span>
            <small>Confeiteira e Fundadora</small>
          </div>
        </div>
        <button className="hero__cta-nav">🧁 Peça agora</button>
      </nav>

      {/* Conteúdo principal */}
      <div className="hero__content">
        <div className="hero__text">
          <span className="hero__kicker">DOCES MOMENTOS, SEMPRE!</span>
          <h1 className="hero__title">
            Confeitaria feita <br />
            <span className="hero__title-script">com amor ♡</span>
          </h1>
          <p className="hero__body">
            Doces artesanais, feitos com ingredientes selecionados e muito
            carinho, para tornar seu dia ainda mais especial.
          </p>
          <button className="hero__cta">🧁 Ver cardápio →</button>
        </div>

        <div className="hero__photo-wrap">
          <img className="hero__photo" src={regiane} alt="Regiane, confeiteira e fundadora" />
        </div>
      </div>

      {/* Drip de chantilly conectando com a seção Sobre */}
<div className="hero__drip" ref={dripRef}>
  <svg viewBox="0 0 1440 180" preserveAspectRatio="none" className="hero__drip-svg">
    <path
      d="M0,0
         L0,20 C10,20 15,30 25,40 C35,50 50,90 60,90 C70,90 85,50 95,40 C105,30 110,20 120,20
         C130,20 135,32 145,45 C155,58 170,140 180,140 C190,140 205,58 215,45 C225,32 230,20 240,20
         C250,20 255,28 265,38 C275,48 290,70 300,70 C310,70 325,48 335,38 C345,28 350,20 360,20
         C370,20 375,35 385,50 C395,65 410,120 420,120 C430,120 445,65 455,50 C465,35 470,20 480,20
         C490,20 495,28 505,37 C515,46 530,60 540,60 C550,60 565,46 575,37 C585,28 590,20 600,20
         C610,20 615,32 625,48 C635,64 650,130 660,130 C670,130 685,64 695,48 C705,32 710,20 720,20
         C730,20 735,30 745,42 C755,54 770,85 780,85 C790,85 805,54 815,42 C825,30 830,20 840,20
         C850,20 855,34 865,50 C875,66 890,145 900,145 C910,145 925,66 935,50 C945,34 950,20 960,20
         C970,20 975,28 985,38 C995,48 1010,68 1020,68 C1030,68 1045,48 1055,38 C1065,28 1070,20 1080,20
         C1090,20 1095,33 1105,48 C1115,63 1130,125 1140,125 C1150,125 1165,63 1175,48 C1185,33 1190,20 1200,20
         C1210,20 1215,29 1225,40 C1235,51 1250,75 1260,75 C1270,75 1285,51 1295,40 C1305,29 1310,20 1320,20
         C1330,20 1335,33 1345,48 C1355,63 1370,135 1380,135 C1390,135 1405,63 1415,48 C1425,33 1430,20 1440,20
         L1440,0 Z"
      fill="#F27CA0"
    />
  </svg>

  {isInView && (
    <>
      <span className="hero__drop hero__drop--1"></span>
      <span className="hero__drop hero__drop--2"></span>
      <span className="hero__drop hero__drop--3"></span>
      <span className="hero__drop hero__drop--4"></span>
      <span className="hero__drop hero__drop--5"></span>
      <span className="hero__drop hero__drop--6"></span>
    </>
  )}
</div>

    </section>
  );
}