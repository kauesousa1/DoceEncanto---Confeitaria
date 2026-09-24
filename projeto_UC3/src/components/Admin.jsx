import { useState, useEffect } from "react";
import "../Styles/Admin.css";

const API_URL = "https://doceria-api-w5gc.onrender.com";

const CAMPOS_VAZIOS = {
  nome: "",
  descricao: "",
  preco: "",
  categoria: "",
  imagem_url: "",
  disponivel: true,
};

export default function Admin() {
  const [produtos, setProdutos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);
  const [mensagem, setMensagem] = useState(null);

  const [form, setForm] = useState(CAMPOS_VAZIOS);
  const [editandoId, setEditandoId] = useState(null); // null = criando novo

  function buscarProdutos() {
    setCarregando(true);
    // Aqui buscamos TODOS os produtos (inclusive os desativados),
    // por isso usamos uma rota diferente da que o site público usa.
    fetch(`${API_URL}/produtos/todos`)
      .then((res) => {
        if (!res.ok) throw new Error("Falha ao buscar produtos");
        return res.json();
      })
      .then((data) => {
        setProdutos(data);
        setErro(null);
      })
      .catch((err) => {
        console.error(err);
        setErro("Não foi possível carregar os produtos.");
      })
      .finally(() => setCarregando(false));
  }

  useEffect(() => {
    buscarProdutos();
  }, []);

  // Some com a mensagem de sucesso depois de alguns segundos
  useEffect(() => {
    if (!mensagem) return;
    const timer = setTimeout(() => setMensagem(null), 3000);
    return () => clearTimeout(timer);
  }, [mensagem]);

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function iniciarEdicao(produto) {
    setEditandoId(produto.id);
    setForm({
      nome: produto.nome,
      descricao: produto.descricao || "",
      preco: produto.preco,
      categoria: produto.categoria || "",
      imagem_url: produto.imagem_url || "",
      disponivel: !!produto.disponivel,
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function cancelarEdicao() {
    setEditandoId(null);
    setForm(CAMPOS_VAZIOS);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!form.nome || !form.preco) {
      setErro("Nome e preço são obrigatórios.");
      return;
    }

    const payload = {
      ...form,
      preco: Number(form.preco),
    };

    const url = editandoId
      ? `${API_URL}/produtos/${editandoId}`
      : `${API_URL}/produtos`;
    const method = editandoId ? "PUT" : "POST";

    fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Falha ao salvar produto");
        return res.json();
      })
      .then(() => {
        setMensagem(editandoId ? "Produto atualizado!" : "Produto adicionado!");
        cancelarEdicao();
        buscarProdutos();
      })
      .catch((err) => {
        console.error(err);
        setErro("Não foi possível salvar o produto.");
      });
  }

  function alternarDisponibilidade(produto) {
    fetch(`${API_URL}/produtos/${produto.id}/disponibilidade`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ disponivel: !produto.disponivel }),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Falha ao atualizar disponibilidade");
        setMensagem(
          produto.disponivel ? "Produto ocultado do site." : "Produto ativado no site."
        );
        buscarProdutos();
      })
      .catch((err) => {
        console.error(err);
        setErro("Não foi possível atualizar a disponibilidade.");
      });
  }

  function excluirProduto(produto) {
    const confirmar = window.confirm(
      `Tem certeza que quer apagar "${produto.nome}" de vez? Essa ação não pode ser desfeita.`
    );
    if (!confirmar) return;

    fetch(`${API_URL}/produtos/${produto.id}`, { method: "DELETE" })
      .then((res) => {
        if (!res.ok) throw new Error("Falha ao excluir produto");
        setMensagem("Produto excluído.");
        buscarProdutos();
      })
      .catch((err) => {
        console.error(err);
        setErro("Não foi possível excluir o produto.");
      });
  }

  return (
    <section className="admin-section">
      <h1>Gerenciar Cardápio</h1>

      {mensagem && <div className="admin-alert sucesso">{mensagem}</div>}
      {erro && <div className="admin-alert erro">{erro}</div>}

      <form className="admin-form" onSubmit={handleSubmit}>
        <h2>{editandoId ? "Editar produto" : "Adicionar novo produto"}</h2>

        <div className="admin-form-grid">
          <label>
            Nome *
            <input
              type="text"
              name="nome"
              value={form.nome}
              onChange={handleChange}
              placeholder="Ex: Bolo de Chocolate"
              required
            />
          </label>

          <label>
            Preço (R$) *
            <input
              type="number"
              step="0.01"
              name="preco"
              value={form.preco}
              onChange={handleChange}
              placeholder="Ex: 65.00"
              required
            />
          </label>

          <label>
            Categoria
            <input
              type="text"
              name="categoria"
              value={form.categoria}
              onChange={handleChange}
              placeholder="Ex: Bolos"
            />
          </label>

          <label>
            URL da imagem
            <input
              type="text"
              name="imagem_url"
              value={form.imagem_url}
              onChange={handleChange}
              placeholder="https://..."
            />
          </label>

          <label className="admin-form-full">
            Descrição
            <textarea
              name="descricao"
              value={form.descricao}
              onChange={handleChange}
              placeholder="Descrição do produto"
              rows={3}
            />
          </label>

          <label className="admin-checkbox">
            <input
              type="checkbox"
              name="disponivel"
              checked={form.disponivel}
              onChange={handleChange}
            />
            Visível no site
          </label>
        </div>

        <div className="admin-form-actions">
          <button type="submit" className="admin-btn-primary">
            {editandoId ? "Salvar alterações" : "Adicionar produto"}
          </button>
          {editandoId && (
            <button type="button" className="admin-btn-secondary" onClick={cancelarEdicao}>
              Cancelar
            </button>
          )}
        </div>
      </form>

      <div className="admin-lista">
        <h2>Produtos cadastrados ({produtos.length})</h2>

        {carregando && <p>Carregando...</p>}

        {!carregando && produtos.length === 0 && <p>Nenhum produto cadastrado ainda.</p>}

        {!carregando && produtos.length > 0 && (
          <table className="admin-table">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Categoria</th>
                <th>Preço</th>
                <th>Status</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {produtos.map((produto) => (
                <tr key={produto.id} className={!produto.disponivel ? "linha-oculta" : ""}>
                  <td>{produto.nome}</td>
                  <td>{produto.categoria}</td>
                  <td>R$ {Number(produto.preco).toFixed(2).replace(".", ",")}</td>
                  <td>
                    <span className={produto.disponivel ? "badge-ativo" : "badge-inativo"}>
                      {produto.disponivel ? "Visível" : "Oculto"}
                    </span>
                  </td>
                  <td className="admin-acoes">
                    <button onClick={() => iniciarEdicao(produto)}>Editar</button>
                    <button onClick={() => alternarDisponibilidade(produto)}>
                      {produto.disponivel ? "Ocultar" : "Ativar"}
                    </button>
                    <button className="admin-btn-perigo" onClick={() => excluirProduto(produto)}>
                      Excluir
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </section>
  );
}