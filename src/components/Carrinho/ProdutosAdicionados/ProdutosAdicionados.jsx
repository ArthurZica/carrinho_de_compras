import { useContext } from "react";
import { CarrinhoContext } from "../../../App";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export default function ProdutosAdicionados() {
  const { carrinho, setCarrinho } = useContext(CarrinhoContext);

  function limpaCarrinho() {
    console.log("limpa carrinho");
    setCarrinho([]);
  }

  const diminuirQuantidade = (produto) => () => {
    if (produto.quantidade > 1) {
      produto.quantidade -= 1;
      setCarrinho([...carrinho]);
    } else {
      setCarrinho(carrinho.filter((p) => p.id !== produto.id));
    }
  };

  const aumentarQuantidade = (produto) => () => {
    produto.quantidade += 1;
    setCarrinho([...carrinho]);
  };

  const removeProduto = (produto) => () => {
    const carrinhoSemProduto = carrinho.filter((p) => p.id !== produto.id);
    console.log(carrinhoSemProduto);
    setCarrinho(carrinhoSemProduto);
  };

  return (
    <>
      <h2>Produtos Adicionados</h2>
      <ul>
        {carrinho?.map((produto) => (
          <div key={produto.id} id="produtoCarrinho">
            <IconButton onClick={removeProduto(produto)}>
              <DeleteIcon color="error" />
            </IconButton>
            <p>
              {produto.nome} - R$: {produto.preco}
            </p>
            <div>
              <label>Quantidade:</label>
              <div>
                <button onClick={diminuirQuantidade(produto)}>-</button>
                <span>{produto.quantidade}</span>
                <button onClick={aumentarQuantidade(produto)}>+</button>
              </div>
            </div>
          </div>
        ))}
      </ul>
      <button style={{ color: "red" }} onClick={() => limpaCarrinho()}>
        Remover todos produtos
      </button>
    </>
  );
}
