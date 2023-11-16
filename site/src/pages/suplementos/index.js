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

export default function Equipamentos() {

  const id = useParams().id

  const navigate = useNavigate()

  const [produtosuplemento, setProdutoEquipamento] = useState([])

  async function BuscaEquipamentos() {
    const resposta = await api.get(`/consulta/suplementos/${id}`)
    setProdutoEquipamento(resposta.data)
  }

  useEffect(() => {
    BuscaEquipamentos()
  }, [])

  return (
    <div className="pagina-suplementos">
      <Header />

      <nav>
        <h1>Suplementos</h1>
      </nav>
      <div className='produto-suplementos'>
        {produtosuplemento.map((item) => (
          <section onClick={() => navigate('/produtos/' + item.id)}>
            <PaginaEquipamentos
              imagem={API_URL + "/" + item.img}
              categoria={item.categoria}
              nome={item.produto}
              preco={item.preco}

            />
          </section>
        ))}
      </div>
    </div>


  );
}


