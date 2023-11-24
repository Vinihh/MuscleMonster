import React, { useState } from 'react';
import { BuscarImagem } from '../../api/addPrdtapi';
import './index.scss';

export default function ProdutoCarrinho(props) {

  const [quantidade, setQuantidade] = useState(1);

  const aumentarQuantidade = () => {
    setQuantidade(quantidade + 1);
  };

  const diminuirQuantidade = () => {
    if (quantidade > 1) {
      setQuantidade(quantidade - 1);
    }
  };

  function decimal(preco) {
    return Number(preco).toFixed(2)
  };

  return (
    <div className="produto-carrinho"> 
      <div className='infos'>
        <img src={BuscarImagem(props.produto.imagem)} alt={props.produto.produto} />
        <h3>{props.produto.produto}</h3>
      </div>
      

      <div className='valores'>
      <div>
      <button onClick={diminuirQuantidade}>-</button>
      <input type="text" value={quantidade} readOnly />
      <button onClick={aumentarQuantidade}>+</button>
    </div>
        <h2>{'R$' + decimal(props.produto.preco)}</h2>
      </div>

      <button className='button' onClick={props.remover}>Remover</button>
    </div>
  );
}
