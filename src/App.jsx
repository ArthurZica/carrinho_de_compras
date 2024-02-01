import { createContext, useState } from "react";
import AppHeader from "./components/AppHeader/AppHeader";
import HomePage from "./components/HomePage/HomePage";
import "./App.css";
import Carrinho from "./components/Carrinho/Carrinho";

export const CarrinhoContext = createContext({
  produtosDisponiveis: [],
  carrinho: [],
  setCarrinho: () => {},
});

function App() {
  const [carrinho, setCarrinho] = useState([]);
  const [openPage, setOpenPage] = useState("home");

  const produtos = [
    { id: 1, nome: "Produto 1", preco: 199.99 },
    { id: 2, nome: "Produto 2", preco: 225.79 },
    { id: 3, nome: "Produto 3", preco: 219.99 },
    { id: 4, nome: "Produto 4", preco: 159.99 },
  ];

  function adicionarNoCarrinho(produto) {
    setCarrinho((prevCarrinho) => [...prevCarrinho, produto]);
  }

  return (
    <CarrinhoContext.Provider value={{ produtosDisponiveis: produtos, carrinho, setCarrinho }}>
      <AppHeader setOpenPage={setOpenPage} />
      <div className="container">
       <HomePage openPage={openPage} adicionarNoCarrinho={adicionarNoCarrinho} />
        <Carrinho openPage={openPage} />
      </div>
    </CarrinhoContext.Provider>
  );
}

export default App;
