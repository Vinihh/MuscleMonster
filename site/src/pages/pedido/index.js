import './index.scss';
import Header from '../../components/header2';
import Produtopedido from '../../components/produto-carrinho';
import { useEffect, useState } from 'react';
import storage from 'local-storage';
import { API_URL } from '../../constants';
import axios from 'axios';
import { confirmAlert } from 'react-confirm-alert';
import { Link } from 'react-router-dom';
import { listEndereco } from '../../api/addPrdtapi';
import CardEnderecopg from '../../components/cardEndereco2';

const api = axios.create({
  baseURL: API_URL,
});

export default function Pedido() {
  const [itens, setItens] = useState([]);
  const id = storage('usuario-logado').id;
  const [enderecos, setEnderecos] = useState([]);


  async function buscarProduto(id) {
    try {
      const resposta = await api.get(API_URL + `/listar/produto/${id}`);
      return resposta.data;
    } catch (erro) {
      console.error("Erro ao buscar produto por ID:", erro);
      return null;
    }
  }

  async function carregarpedido() {
    let pedido = storage('pedido');
    if (pedido) {
      let array = [];

      for (let produto of pedido) {
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
    let pedido = storage('pedido')
    pedido = pedido.filter(item => id != id)

    storage('pedido', pedido)
    carregarpedido()
  }

  function ApagarItemDopedido() {
    confirmAlert({
      title: 'Usuário',
      message: 'Tem certeza que deseja apagar todos os itens do pedido?',
      buttons: [
        {
          label: 'Sim',
          onClick: async () => {
            storage.clear('pedido');
            window.location.reload('/pedido')
          },
        },
        {
          label: 'Não',
        },
      ],
    });
  }


  async function buscarEndereco(){
    const id = storage('usuario-logado').id;
    const r = await listEndereco(id);
    setEnderecos(r)
  }

  useEffect(() => {
    carregarpedido();
  }, []);

  useEffect(() => {
    buscarEndereco();
   }, []);


  return (
    <section className='pagina-pedidos'>
      <Header />
      
      <aside>
        <h1>Pedido</h1>  
        <div>
        <h3>Total:</h3>
        <h1>{` ${ValorTotal(itens)}`}</h1>
        <button>Finalizar pedido</button>
        </div>
      </aside>

      <article>
        <div className='pt-cima'>
          <h1>Carinnho</h1>

          <div >
            {enderecos.map(item =>
              <CardEnderecopg item={item} />
              )}
          </div>

        </div>

        <div className='pt-baixo' >
          <h1>Pagamento</h1>
          <div>
              <h1>Nome</h1>
              <input type='text' />
          </div>

          <div>
              <h1>Nome</h1>
              <input type='text' />
          </div>

          <div>
              <h1>Nome</h1>
              <input type='text' />
          </div>

          <div>
              <h1>Nome</h1>
              <input type='text' />
          </div>
        </div>
      </article>
    </section>
  );
}
