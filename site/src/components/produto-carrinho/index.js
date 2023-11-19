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

<<<<<<< HEAD
      <button>Remover</button>
    </div>
  );
}
=======
            <div className='valores'>
                <h3> {props.item.produto.id} </h3>
                <h2> {props.item.produto.preco} </h2>
            </div>
        </div>
    );
}
>>>>>>> 0d3ea18c9358e8c2593119242b1f121f330a7c2c
