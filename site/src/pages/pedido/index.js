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


  async function buscarEndereco() {
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



    <div className='pagina-pedido'>

      <Header />

    


      <div className='pedido-box'>
        <h1> Pedido </h1>
        <div className='finalizar'>
          <div>Total: <span> R$ {ValorTotal()}</span></div>
          <button> Finalizar Pedido </button>
        </div>
      </div>


      <div className='info'>
        <div>
          <h2>Endereços</h2>

          <div className='enderecos'>

            {enderecos.map(item =>
              <CardEnderecopg />
            )}
          </div>

          <button > Novo </button>

        </div>

        <div className='pagamento-box'>
          <h2>Pagamento</h2>

          <div className='form'>
            <div>
              <label>Nome:</label>
              <input type='text' value onChange={e => (e.target.value)} />
            </div>
            <div>
              <label>Número:</label>
              <input type='text' value onChange={e => (e.target.value)} />
            </div>
            <div>
              <label>Validade:</label>
              <input type='text' value onChange={e => (e.target.value)} />
            </div>
            <div>
              <label>CVV:</label>
              <input type='text' value onChange={e => (e.target.value)} />
            </div>
            <div>
              <label>Tipo de Pagamento:</label>
              <select value onChange={e => (e.target.value)}   >
                <option disabled hidden selected>Selecione</option>
                <option>Crédito</option>
                <option>Débito</option>
              </select>
            </div>
            <div>
              <label>Parcelas:</label>
              <select value onChange={e => (e.target.value)}  >
                <option disabled hidden selected>Selecione</option>
                <option value={1}>01x à Vista</option>
                <option value={1}>01x sem Juros</option>
                <option value={2}>02x sem Juros</option>
                <option value={3}>03x sem Juros</option>
              </select>
            </div>
            <div />
          </div>

          <div className='info-extra'>
            <div>
              <h2> Cupom </h2>
              <div className='form'>
                <div>
                  <label>Código:</label>
                  <input type='text' value onChange={e => (e.target.value)} />
                </div>
                <div />
              </div>
            </div>
            <div>
              <h2> Frete </h2>
              <div className='form'>
                <div>
                  <label>Tipo:</label>
                  <select value onChange={e => (e.target.value)}  >
                    <option disabled hidden selected>Selecione</option>
                    <option value={'Normal'}>Normal - R$ 10,00</option>
                    <option value={'Sedex'}>Sedex - R$ 25,00</option>
                  </select>
                </div>
                <div />
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className='itens'>
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Quantidade</th>
              <th>Preço Unitário</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>




          </tbody>
        </table>
      </div>

    </div>
  )
}
