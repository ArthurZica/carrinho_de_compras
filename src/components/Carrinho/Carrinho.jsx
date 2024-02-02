import { useContext } from "react";
import { CarrinhoContext } from "../../App";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import "./carrinho.css";
import { Button } from "@mui/material";
import ProdutosAdicionados from "./ProdutosAdicionados/ProdutosAdicionados";
import ResumoCompra from "./ResumoCompra/ResumoCompra";

export default function Carrinho({ openPage, setOpenPage }) {
  const { carrinho, setCarrinho } = useContext(CarrinhoContext);

  function calculaTotal() {
    carrinho.forEach((produto) => {
      let total = produto.preco * produto.quantidade;
      return total;
    });
  }

  return (
    <>
      {openPage === "carrinho" && (
        <div className="carrinho">
          <div id="headerCarrinho">
            <h2 id="tituloCarrinho">Carrinho</h2>
          </div>
          <div className="carrinhoContainer">
            <Card className="cardsCarrinho">
              {carrinho.length === 0 && (
                <>
                  <h2>Seu carrinho está vazio</h2>
                  <button onClick={() => setOpenPage("home")}>
                    Voltar para pagina inicial
                  </button>
                </>
              )}
              {carrinho.length > 0 && <ProdutosAdicionados />}
            </Card>
            {carrinho.length > 0 && <ResumoCompra setOpenPage={setOpenPage} />}
          </div>
        </div>
      )}
    </>
  );
}
