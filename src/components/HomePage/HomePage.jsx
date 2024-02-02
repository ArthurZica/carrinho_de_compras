import { useContext } from "react";
import { CarrinhoContext } from "../../App";
import "./homePage.css";

export default function HomePage({ openPage }) {
  const { produtosDisponiveis, carrinho, setCarrinho } =
    useContext(CarrinhoContext);

  function adicionarNoCarrinho(produto) {
    let addProduto = carrinho.find((p) => p.id === produto.id);

    if (addProduto) {
      return;
    }
    produto.quantidade = 1;

    setCarrinho((prevCarrinho) => [...prevCarrinho, produto]);
  }

  return (
    <>
      {openPage === "home" && (
        <div className="products">
          {produtosDisponiveis.map((produto) => (
            <div key={produto.id} className="produto">
              <h2>{produto.nome}</h2>
              <p>R$ {produto.preco}</p>
              {!carrinho.find((p) => p.id == produto.id) && (
                <button onClick={() => adicionarNoCarrinho(produto)}>
                  Comprar
                </button>
              )}
              {carrinho.find((p) => p.id == produto.id) && (
                <button disabled>Comprar</button>
              )}
            </div>
          ))}
        </div>
      )}
    </>
  );
}
