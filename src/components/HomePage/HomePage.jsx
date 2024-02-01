import { useContext } from 'react';
import { CarrinhoContext } from '../../App';
import './homePage.css';

export default function HomePage({ openPage, adicionarNoCarrinho }) {
  const { produtosDisponiveis } = useContext(CarrinhoContext);

  return (
    <>
      {openPage === 'home' && (
        <div className="products">
          {produtosDisponiveis.map((produto) => (
            <div key={produto.id} className="produto">
              <h2>{produto.nome}</h2>
              <p>R$ {produto.preco}</p>
              <button onClick={() => adicionarNoCarrinho(produto)}>
                Comprar
              </button>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
