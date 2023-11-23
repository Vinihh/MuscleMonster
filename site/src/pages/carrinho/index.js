import './index.scss';
import Header from '../../components/header2';
import ProdutoCarrinho from '../../components/produto-carrinho';
import { useEffect, useState } from 'react';
import storage from 'local-storage';
import { API_URL } from '../../constants';
import axios from 'axios';
import { confirmAlert } from 'react-confirm-alert';
import { Link } from 'react-router-dom';

const api = axios.create({
  baseURL: API_URL,
});

export default function Carrinho() {
  const [itens, setItens] = useState([]);

  async function buscarProduto(id) {
    try {
      const resposta = await api.get(API_URL + `/listar/produto/${id}`);
      return resposta.data;
    } catch (erro) {
      console.error("Erro ao buscar produto por ID:", erro);
      return null;
    }
  }

  async function carregarCarrinho() {
    let carrinho = storage('carrinho');
    if (carrinho) {
      let array = [];

      for (let produto of carrinho) {
        let p = await buscarProduto(produto.id);

        if (p) {
          array.push({
            produto: p,
            qtd: produto.qtd,
          });
        }
      }

      setItens(array);
    }
  }

  function qtdItens() {
    return itens.length;
  }

  function ValorTotal(itens) {
    let total = 0;

    for (let item of itens) {
      if (item.produto) {
        total += item.produto.preco * 1;
      }
    }
    return total.toFixed(2);
  }

  function RemoverItem(id) {
    let carrinho = storage('carrinho')
    carrinho = carrinho.filter(item => id !== id)

    storage('carrinho', carrinho)
    carregarCarrinho()
  }

  function ApagarItemDoCarrinho() {
    confirmAlert({
      title: 'Usuário',
      message: 'Tem certeza que deseja apagar todos os itens do carrinho?',
      buttons: [
        {
          label: 'Sim',
          onClick: async () => {
            storage.clear('carrinho');
            window.location.reload('/carrinho')
          },
        },
        {
          label: 'Não',
        },
      ],
    });
  }

  useEffect(() => {
    carregarCarrinho();
  }, []);


  return (
    <section className='pagina-carrinho'>
      <Header />
      <div className='titulo'>
        <h1>Carrinho </h1>
        <h2>{`( ${qtdItens()} )`}</h2>
      </div>

  

      <div className='info-carrinho'>
        <div className='produtos-carrinho'>
          {itens.map((item, index) => (
            <ProdutoCarrinho
              key={index}
              produto={item.produto}
              imagem={item.produto.imagem}
              qtd={item.qtd}
              remover={RemoverItem}
            />
            
          ))}
        </div>
      </div>
      <div className='total'>
        <div>
        
          <p>{`Valor total ${ValorTotal(itens)}`}</p>
          <Link to='/pedido' ><button>Prosseguir compra</button></Link>
        </div>
        <hr/>
      </div>
    </section>
  );
}
