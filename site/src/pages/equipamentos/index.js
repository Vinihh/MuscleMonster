import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import PaginaEquipamentos from '../../components/equipamentoscomp';
import './index.scss';
import { API_URL } from '../../constants';
import axios from 'axios';
import Header from '../../components/header';
import { BuscarImagem } from '../../api/addPrdtapi';

const api = axios.create({
  baseURL: API_URL
});

export default function Equipamentos() {

  const id = useParams().id

  const navigate = useNavigate()

  const [produtoequipamento, setProdutoEquipamento] = useState([])

  async function BuscaEquipamentos() {
    const resposta = await api.get(`/consulta/equipamentos/${id}`)
    setProdutoEquipamento(resposta.data)
  }

  useEffect(() => {
    BuscaEquipamentos()
  }, [])

  return (
    <div className="pagina-equipamentos">
      <Header />

      <nav>
        <h1>Equipamentos</h1>
      </nav>
      <div className='produto-equipamento'>
        {produtoequipamento.map((item) => (
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


