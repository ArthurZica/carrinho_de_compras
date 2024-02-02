/* eslint-disable react/prop-types */
import { Button, Card, CardContent } from "@mui/material";
import { useContext } from "react";
import { CarrinhoContext } from "../../../App";

export default function ResumoCompra({ setOpenPage }) {
  const { carrinho, setCarrinho } = useContext(CarrinhoContext);

  const finalizarCompra = () => {
    alert("Compra finalizada com sucesso!");
    setCarrinho([]);
    setOpenPage("home");
  };

  return (
    <Card className="cardsCarrinho">
      <CardContent>
        <h2>Resumo da compra</h2>
        <div>
          <h3>
            Total de produtos:{" "}
            {carrinho.reduce((acc, produto) => acc + 1 * produto.quantidade, 0)}
          </h3>
          <h3>
            Valor total: R${" "}
            {carrinho
              .reduce(
                (acc, produto) => acc + produto.preco * produto.quantidade,
                0
              )
              .toFixed(2)}
          </h3>
        </div>
        <button style={{ color: "green" }} onClick={finalizarCompra}>
          Finalizar compra
        </button>
      </CardContent>
    </Card>
  );
}
