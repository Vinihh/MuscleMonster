import { BuscarImagem } from '../../api/addPrdtapi';
import './index.scss';
import storage, { set } from 'local-storage';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useState } from 'react';

export default function PaginaProduto(props) {

  const { id } = useParams();

  function FormatarPreco(preco) {
    return Number(preco).toFixed(2);
  }

  function AdicionarAoCarrinho() {
    let carrinho = storage('carrinho') || [];

    if (!carrinho.find(item => item.id === id)) {

      carrinho.push({ id: id, quantidade: 1 });
      storage('carrinho', carrinho);
    }

     toast.success('Produto adicionado ao carrinho com sucesso')
  }

  return (
    <div className="pg-produto">
      <nav>
        <div className="imagem">
          <img src={BuscarImagem(props.produtoss.imagem)} alt="Imagem do produto" />
        </div>

        <div className="info-produto">
          <div>
            <h1>{props.produtoss.produto}</h1>
            <h2>{'R$ ' + FormatarPreco(props.produtoss.preco)}</h2>
            <h3>{'Disponível: ' + props.produtoss.estoque}</h3>

            <div className="imagens">
              <img src="/assets/images/produto1.png" alt="Produto 1" />
              <img src="/assets/images/produto2.png" alt="Produto 2" />
              <img src="/assets/images/produto3.png" alt="Produto 3" />
            </div>

            <button onClick={AdicionarAoCarrinho}>Adicionar ao carrinho</button>

            <div className="form-pay">
              <img src="/assets/images/form-pay1.png" alt="Forma de pagamento 1" />
              <img src="/assets/images/form-pay2.png" alt="Forma de pagamento 2" />
              <img src="/assets/images/form-pay3.png" alt="Forma de pagamento 3" />
              <img src="/assets/images/form-pay4.png" alt="Forma de pagamento 4" />
            </div>
          </div>
        </div>
      </nav>

      <hr></hr>

      <section>
        <h1>Descrição</h1>

        <div className="descricao">
          <h1>{props.produtoss.descricao}</h1>
        </div>
      </section>
    </div>
  );
}
