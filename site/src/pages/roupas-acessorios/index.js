import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import PaginaEquipamentos from '../../components/equipamentoscomp';
import './index.scss';
import { API_URL } from '../../constants';
import axios from 'axios';
import Header from '../../components/header';

const api = axios.create({
  baseURL: API_URL
});

export default function RoupasAcessorios() {

  const id = useParams().id

  const navigate = useNavigate()

  const [produtosroupasacessorios, setProdutoRoupasAcessorios] = useState([])

  async function BuscaRoupasAcessorios() {
    const resposta = await api.get(`/consulta/roupas/acessorios/${id}`)
    setProdutoRoupasAcessorios(resposta.data)
  }

  useEffect(() => {
    BuscaRoupasAcessorios()
  }, [])

  return (
    <div className="pagina-suplementos">
      <Header />

      <nav>
        <h1>Roupas e Acessórios</h1>
      </nav>
      <div className='produto-suplementos'>
        {produtosroupasacessorios.map((item) => (
          <section onClick={() => navigate('/produtos/' + item.id)}>
            <PaginaEquipamentos
              imagem={API_URL + "/" + item.img}
              nome={item.produto}
              preco={item.preco}

            />
          </section>
        ))}
      </div>
    </div>


  );
}


