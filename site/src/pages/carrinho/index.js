import './index.scss';
import Header from '../../components/header2';
import ProdutoCarrinho from '../../components/produto-carrinho';
import { useEffect, useState } from 'react';
import Storage from 'local-storage';
import { BuscarImagem } from '../../api/addPrdtapi';
import { API_URL } from '../../constants';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const api = axios.create({
  baseURL: API_URL,
});

export default function Carrinho() {
  const { id } = useParams();
  const [itensNoCarrinho, setItensNoCarrinho] = useState([]);
  const [detalhesProduto, setDetalhesProduto] = useState([]);

  async function buscarDetalhesProdutoPorId() {
    try {
      const resposta = await api.get(`/listar/produto/${id}`);
      setItensNoCarrinho(resposta.data);
    } catch (erro) {
      console.error("Erro ao buscar detalhes do produto por ID:", erro);
    }
  }

  async function CarregarCarrinho() {
    let carrinho = Storage('carrinho') || [];

    if (carrinho.length > 0) {
      let tempItens = [];

      for (let produtoNoCarrinho of carrinho) {
        await buscarDetalhesProdutoPorId(produtoNoCarrinho.id);
        tempItens.push({
          produto: detalhesProduto,
          detalhes: produtoNoCarrinho,
        });
      }

      setItensNoCarrinho(tempItens);
    }
  }

  useEffect(() => {
    CarregarCarrinho();
  }, [id]);

  return (
    <section className='pagina-carrinho'>
      <Header />
      <div className='titulo'>
        <h1>Carrinho</h1>
      </div>
      <div className='info-carrinho'>
        <div className='produtos-carrinho'>
          {itensNoCarrinho.map((item, index) => (
            <ProdutoCarrinho key={index} produto={item.produto} imagem={API_URL + "/" + item.img} />
          ))}
        </div>
      </div>
      <div className='total'>
        <div>
          <p>{`Total (${itensNoCarrinho.length} ${
            itensNoCarrinho.length === 1 ? 'item' : 'itens'
          }): R$0,00`}</p>
          <button>Fazer Compra</button>
        </div>
        <hr />
      </div>
    </section>
  );
}
