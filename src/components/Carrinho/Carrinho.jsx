import { useContext } from 'react';
import { CarrinhoContext } from '../../App';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import './carrinho.css';

export default function Carrinho({ openPage }) {
  const { carrinho, setCarrinho } = useContext(CarrinhoContext);
  return (
    <>
      {openPage === 'carrinho' && (
        <div className="carrinho">
          <div id="headerCarrinho">
            <h2 id="tituloCarrinho">Carrinho</h2>
          </div>
          <div className="carrinhoContainer">
            <Card id="produtosAdicionados" >
                <h2>Produtos Adicionados</h2>
              <ul>
                {carrinho.map((produto) => (
                  <div key={produto.id} style={{textAlign:"center"}}> 
                    <p>{produto.nome} - R$: {produto.preco}</p>
                  </div>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      )}
    </>
  );
}
