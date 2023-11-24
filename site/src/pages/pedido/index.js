import './index.scss';
import Header from '../../components/header2';
import Produtopedido from '../../components/produto-carrinho';
import { useEffect, useState } from 'react';
import storage, { set } from 'local-storage';
import { API_URL } from '../../constants';
import axios from 'axios';
import { confirmAlert } from 'react-confirm-alert';
import { Link } from 'react-router-dom';
import { listEndereco } from '../../api/addPrdtapi';
import CardEnderecopg from '../../components/cardEndereco2';
import { BuscarImagem } from '../../api/addPrdtapi';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


const api = axios.create({
  baseURL: API_URL,
});

export default function Pedido() {
  const [itens, setItens] = useState([]);
  const usuario = storage('usuario-logado');
  const [enderecos, setEnderecos] = useState([]);
  const [titular, setTitular] = useState('');
  const [numero, setNumero] = useState(0);
  const [cvv, setCvv] = useState(0);
  const [validade, setValidade] = useState(0);

  function FormataValor(preco) {
    return Number(preco).toFixed(2);
  }

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
    let pedido = storage('carrinho');
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


  function Valor(itens) {
    let total = 0;

    for (let item of itens) {
      if (item.produto) {
        total += item.qtd;
      }
    }
    return total;
  }

  function RemoverItem(id) {
    let pedido = storage('pedido')
    pedido = pedido.filter(item => id != id)

    storage('pedido', pedido)
    carregarpedido()
  }

  function qtdItens() {
    return itens.length;
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

  async function Pagamento() {

    const pagamento = {
      id:usuario.id,
      titular: titular,
      numero: numero,
      validade: validade,
      cvv: cvv
    };



    try {

      let resposta = await axios.post(API_URL + '/pagamento', pagamento)
      toast.success('Pagamento Aprovado com sucesso')

    } catch (err) {
      toast.error(err.response.data.erro);


    };
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
    <section className='pagina-pedidos'>
      <Header />

      <aside>
        <h1>Pedido</h1>
        <div>
          <h2>Total{` ${ValorTotal(itens)}`}</h2>
         <Link to={'/'}> <button  onClick={Pagamento}>Finalizar pedido</button> </Link>
        </div>
      </aside>

      <article>
        <div className='pt-cima'>
          <h1>Endereço</h1>

          <button>Adicone novo endereço</button>

          <div >
            {enderecos.map(item =>
              <CardEnderecopg item={item} />
            )}
          </div>

        </div>

        <div className='pt-baixo' >
          <h1>Pagamento</h1>
          
          <div>
            <h1>Nome:</h1>
            <input type='text' value={titular} onChange={e => setTitular(e.target.value)} />
          </div>

          <div>
            <h1>Numero do cartao: </h1>
            <input type='text' value={numero} onChange={e => setNumero(e.target.value)} />
          </div>

          <div>
            <h1>Validade:</h1>
            <input type='text' value={validade} onChange={e => setValidade(e.target.value)} />
          </div>

          <div>
            <h1>CVV:</h1>
            <input type='text' value={cvv} onChange={e => setCvv(e.target.value)} />
          </div>
        </div>

        
      </article>

      <div className='itens'>
        <table>
          <thead>
            <tr>
              <th>Imagem</th>
              <th>Produto</th>
              <th>Categoria</th>
              <th>Quantidade</th>
              <th>Preço Unitário</th>
            </tr>
          </thead>
          <tbody>

            {itens.map(item =>
              <tr>
                <td>
                  <div className='celula-item'>

                    <div>
                      <img src={API_URL + '/' + item.produto.imagem} />
                    </div>
                  </div>
                </td>
                <td>
                  <p> {item.produto.produto} </p>
                </td>
                <td>
                  <p> {item.produto.categoria} </p>
                </td>
                <td>
                  <p> {qtdItens()} </p>
                </td>

                <td>
                  <p> {FormataValor(item.produto.preco)} </p>
                </td>
              </tr>
            )}

          </tbody>
        </table>
      </div>
    </section>
  );
}