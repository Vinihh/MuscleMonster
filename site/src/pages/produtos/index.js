import Header from '../../components/header';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { API_URL } from '../../constants';
import Footer from '../../components/footer';
import Produto from '../../components/produto/index.js';

const api = axios.create({
  baseURL: API_URL,
});

export default function PaginaProduto() {
  const { id } = useParams();
  const [produto, setProduto] = useState({});

  async function buscarProduto() {
    try {
      const resposta = await api.get(`/listar/produto/${id}`, {
        params: {
          limit: 1,
        },
      });
      setProduto(resposta.data);
    } catch (erro) {
      console.error("Erro ao buscar produto:", erro);
    }
  }

  useEffect(() => {
    buscarProduto();
  }, [id]);

  return (
    <div className="pg-produto">
      <Header />
      <Produto produtoss={produto} />
      <Footer />
    </div>
  );
}
