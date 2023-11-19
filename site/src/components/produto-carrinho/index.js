import React from 'react';
import { BuscarImagem } from '../../api/addPrdtapi';
import './index.scss';

export default function ProdutoCarrinho(props) {

  return (
    <div className="produto-carrinho">
      <img src={BuscarImagem(props.produto.imagem)} alt={props.produto.produto} />

      <div className='valores'>
        <h3>{props.produto.produto}</h3>
        <h2>{props.produto.preco}</h2>
      </div>

      <button>Remover</button>
    </div>
  );
}
