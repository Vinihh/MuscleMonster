import React from 'react';
import { BuscarImagem } from '../../api/addPrdtapi';
import './index.scss';

export default function ProdutoCarrinho(props) {

  function decimal(preco) {
    return Number(preco).toFixed(2)
  }

  return (
    <div className="produto-carrinho">
      <img src={BuscarImagem(props.produto.imagem)} alt={props.produto.produto} />

      <div className='valores'>
        <h3>{props.produto.produto}</h3>
        <h2>{'R$' + decimal(props.produto.preco)}</h2>
      </div>

      <button onClick={props.remover}>Remover</button>
    </div>
  );
}
