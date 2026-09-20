import "../Styles/FixedBackground.css";
import backgroundHero from "../imagens/heroBack.png";

export default function FixedBackground() {
  return (
    <div className="fixed-bg" aria-hidden="true">
      <img src={backgroundHero} alt="" className="fixed-bg__img" />
      <div className="fixed-bg__overlay" />
    </div>
  );
}