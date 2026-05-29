import "../Styles/Navbar.css";

const LINKS = ["Início", "Cardápio", "Depoimentos", "Contato"];

export default function Navbar() {
  return (
    <div className="navbar__wrapper">
      <nav className="navbar">

        {/* Links da esquerda */}
        <ul className="navbar__links navbar__links--left">
          {LINKS.slice(0, 2).map((l) => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} className="navbar__link">{l}</a>
            </li>
          ))}
        </ul>

        {/* Logo centralizada */}
        <span className="navbar__logo">Doce Encanto</span>

        {/* Links da direita */}
        <ul className="navbar__links navbar__links--right">
          {LINKS.slice(2).map((l) => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} className="navbar__link">{l}</a>
            </li>
          ))}
        </ul>

      </nav>
    </div>
  );
}
