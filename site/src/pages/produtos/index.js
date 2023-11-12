import Header from '../../components/header';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { API_URL } from '../../constants';
import Produto from '../../components/produto/index.js';

const api = axios.create({
  baseURL: API_URL,
});

export default function PaginaProduto() {
  const id = useParams().id;
  const [produto, setProduto] = useState({});

  async function buscarProduto() {
    try {
      
      const resposta = await api.get(`/listar/produto/${id}`, {
        params: {
          limit: 5,
        },
      });
      setProduto(resposta.data);
    } catch (erro) {
      console.error("Erro ao buscar produto:", erro);
    }
  }

  useEffect(() => {
    buscarProduto();
  }, []);

  return (
    <div className="pg-produto">
      <Header />
      <Produto produtoss={produto} />
    </div>
  );
}
