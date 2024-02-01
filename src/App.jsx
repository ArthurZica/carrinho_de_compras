import { useState } from "react";
import AppHeader from "./components/AppHeader/AppHeader";
import "./App.css";
import { Snackbar } from "@mui/base";
import { Alert } from "@mui/material";

function App() {
  const [carrinho, setCarrinho] = useState([]);

  const [openPage, setOpenPage] = useState("home");

  const produtos = [
    { id: 1, nome: "Produto 1", preco: 199.9 },
    { id: 2, nome: "Produto 2", preco: 225.7 },
    { id: 3, nome: "Produto 3", preco: 219.9 },
    { id: 4, nome: "Produto 4", preco: 159.9 },
  ];

  function adicionarNoCarrinho(produto) {
    setCarrinho([...carrinho, produto]);
  }

  return (
    <>
      <AppHeader carrinho={carrinho} setOpenPage={setOpenPage} />
      <div className="container">
        {openPage === "home" && (
          <div className="products">
            {produtos.map((produto) => {
              return (
                <div key={produto.id} className="produto">
                  <h2>{produto.nome}</h2>
                  <p>R$ {produto.preco}</p>
                  <button onClick={() => adicionarNoCarrinho(produto)}>
                    Comprar
                  </button>
                </div>
              );
            })}
          </div>
        )}
        {openPage === "carrinho" && (
          <div className="carrinho">
            <div id="headerCarrinho">
              <h2 id="tituloCarrinho">Carrinho</h2>
            </div>
            <ul>
              {carrinho.map((produto) => {
                return (
                  <div key={produto.id}>
                    {produto.nome} - R$ {produto.preco}
                  </div>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
