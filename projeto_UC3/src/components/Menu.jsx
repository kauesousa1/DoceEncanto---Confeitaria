import "../styles/Menu.css";

const BOLOS_SABORES = [
  { name: "*Chocolate", price: "RS 00,00" },
  { name: "*Chocolate", price: "RS 00,00" },
];

const BOLOS_MASSAS = [
  { name: "*Chocolate", price: "RS 00,00" },
  { name: "*Chocolate", price: "RS 00,00" },
  { name: "*Chocolate", price: "RS 00,00" },
];

const TORTAS = [
  { name: "*Torta de Maracujá", price: "RS 00,00" },
  { name: "*Torta de Morango", price: "RS 00,00" },
  { name: "Torta de Ninho", price: "RS 00,00" },
];

const BOLOS_POTE = [
  { name: "*Chocolate", price: "RS 00,00" },
  { name: "*Abacaxi com Coco", price: "RS 00,00" },
  { name: "*Morango", price: "RS 00,00" },
  { name: "*Ninho c/ Nutella", price: "RS 00,00" },
  { name: "*Abacaxi", price: "RS 00,00" },
];

const COPOS = [
  {
    name: "MORANGO",
    price: "RS 00,00",
    image: "/copos/CopoMorango.png",
  },
  {
    name: "AVELÃ",
    price: "RS 00,00",
    image: "/copos/CopoChocolate.png",
  },
  {
    name: "ABACAXI",
    price: "RS 00,00",
    image: "/copos/CopoAbacaxi.png",
  },
];

const OUTROS_DOCES = [
  { name: "*Brownie", price: "RS 00,00" },
  { name: "*Pudim", price: "RS 00,00" },
  { name: "*Brigadeirão", price: "RS 00,00" },
  { name: "*Beijinho", price: "RS 00,00" },
  { name: "*Bombom de Uva", price: "RS 00,00" },
  { name: "*Trufa", price: "RS 00,00" },
  { name: "*Palha Italiana", price: "RS 00,00" },
];

const MINI_BOLOS = [
  { name: "*Mini Bolo de Chocolate", price: "RS 00,00" },
  { name: "*Mini Bolo Abacaxi com Coco", price: "RS 00,00" },
  { name: "*Mini Bolo Ninho com Nutella", price: "RS 00,00" },
];

function Card({ title, children }) {
  return (
    <div className="mcard">
      <h3 className="mcard__title">{title}</h3>
      {children}
    </div>
  );
}

function Item({ name, price }) {
  return (
    <div className="mitem">
      <span className="mitem__name">{name}</span>
      <span className="mitem__dots" aria-hidden="true" />
      <span className="mitem__price">{price}</span>
    </div>
  );
}

function Sub({ label }) {
  return <p className="msub">{label}</p>;
}

export default function Menu() {
  return (
    <section className="menu" id="cardapio">

      {/* Título */}
      <div className="menu__header">
        <h2 className="menu__title">Cardápio</h2>
        <p className="menu__subtitle">
          Doces que encantam, momentos que fazem
        </p>
      </div>

      {/* Grid principal */}
      <div className="menu__grid">

        {/* Coluna esquerda */}
        <div className="menu__col">

          <Card title="🎂 Bolos">
            <Sub label="Sabores" />
            {BOLOS_SABORES.map((i, k) => (
              <Item key={k} {...i} />
            ))}

            <Sub label="Massas" />
            {BOLOS_MASSAS.map((i, k) => (
              <Item key={k} {...i} />
            ))}
          </Card>

          <Card title="🥧 Tortas">
            {TORTAS.map((i, k) => (
              <Item key={k} {...i} />
            ))}
          </Card>

          <Card title="🍯 Bolos de Pote">
            {BOLOS_POTE.map((i, k) => (
              <Item key={k} {...i} />
            ))}
          </Card>

        </div>

        {/* Coluna direita */}
        <div className="menu__col">

          <Card title="🥤 Copos da Felicidade">
            <div className="menu__copos">

              {COPOS.map((c, k) => (
                <div key={k} className="menu__copo">

                  <div className="menu__copo-img">
                    <span>{c.emoji}</span>
                  </div>

                  <p className="menu__copo-name">{c.name}</p>
                  <p className="menu__copo-price">{c.price}</p>

                </div>
              ))}

            </div>
          </Card>

          <Card title="🍬 Outros Doces">
            {OUTROS_DOCES.map((i, k) => (
              <Item key={k} {...i} />
            ))}
          </Card>

          <Card title="🧁 Mini Bolos">
            {MINI_BOLOS.map((i, k) => (
              <Item key={k} {...i} />
            ))}
          </Card>

        </div>

      </div>

      {/* Footer */}
      <div className="menu__footer">

        {[
          {
            icon: "📦",
            label: "Encomendas com Antecedência",
          },
          {
            icon: "❤️",
            label: "Produtos Feitos com Muito Carinho",
          },
          {
            icon: "✅",
            label: "Ingredientes Selecionados",
          },
        ].map((f, i) => (
          <div key={i} className="menu__footer-item">

            <span className="menu__footer-icon">
              {f.icon}
            </span>

            <span className="menu__footer-label">
              {f.label}
            </span>

          </div>
        ))}

      </div>

    </section>
  );
}