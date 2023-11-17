import './index.scss';
import Header from '../../components/header2';
import ProdutoCarrinho from '../../components/produto-carrinho';
import { useEffect, useState } from 'react';
import storage from 'local-storage';
import { BuscarImagem } from '../../api/addPrdtapi';
import { API_URL } from '../../constants';
import axios from 'axios';
import { useParams } from 'react-router-dom';


const api = axios.create({
  baseURL: API_URL,
});

export default function Carrinho() {
  const [itens, setItens] = useState([]);

  async function buscarProduto(id) {
    try {
      const resposta = await api.get(API_URL + `/listar/produto/${id}`);
      setItens(resposta.data);
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

  useEffect(() => {
    carregarCarrinho();
  }, []);

  return (
    <section className='pagina-carrinho'>
      <Header />
      <div className='titulo'>
        <h1>Carrinho</h1>
      </div>
      <div className='info-carrinho'>
        <div className='produtos-carrinho'>
          {itens.map((item, index) => (
            <ProdutoCarrinho
             item={item}
            />
          ))}
        </div>
      </div>
      <div className='total'>
        <div>
          <p>{`Total === 1 ? 'item' : 'itens'}): R$`}</p>
          <button>Fazer Compra</button>
        </div>
        <hr />
      </div>
    </section>
  );
}
