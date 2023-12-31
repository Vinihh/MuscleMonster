import { BuscarImagem } from '../../api/addPrdtapi';
import './index.scss';
import storage, { set } from 'local-storage';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { API_URL } from '../../constants';
import axios from 'axios';
import PaginaEquipamentos from '../equipamentoscomp';

const api = axios.create({
  baseURL: API_URL
});

export default function PaginaProduto(props) {
  const { id } = useParams();
  const [maisProdutos, setMaisProdutos] = useState([])
  const [categoria,setCategoria] = useState(props.produtoss.categoria)
  const navigate = useNavigate()

  function FormatarPreco(preco) {
    return Number(preco).toFixed(2);
  }

  async function MaisProdutos() {
    let resposta = await axios.get(API_URL + '/consulta/produto')
    let aleatorio = resposta.data.sort(() => Math.random() - 0.5)
    let produtosLimitados = aleatorio.slice(0, 4);
    setMaisProdutos(produtosLimitados)
    
  }

  function AdicionarAoCarrinho() {
    let carrinho = [];
    if(storage('carrinho')){
      carrinho= storage('carrinho')
    }

    if (!carrinho.find(item => item.id === id)) {

      carrinho.push({ 
        id: id, 
        qtd: 1 
      });
      storage('carrinho', carrinho);
    }

     toast.success('Produto adicionado ao carrinho com sucesso')
  }

  useEffect(() => {
    setCategoria(props.produtoss.categoria)
    MaisProdutos()
  }, [])

  return (
    <div className="pg-produto">
      <nav>
        <div className="imagem">
          <img src={BuscarImagem(props.produtoss.imagem)} alt="Imagem do produto" />
        </div>

        <div className="info-produto">
          <div>
            <h1>{props.produtoss.produto}</h1>
            <h2>{'R$ ' + FormatarPreco(props.produtoss.preco)}</h2>
            <h3>{'Disponível: ' + props.produtoss.estoque}</h3>

            

        <div className="descricao">
          <h1>Descrição rápida</h1>
          <h2>{props.produtoss.descricao}</h2>
        </div>

            <button onClick={AdicionarAoCarrinho}>Adicionar ao carrinho</button>

            
          </div>
        </div>
      </nav>

      <section>
        <h1> Sugestões de Produtos que você também pode gostar</h1>

        <div className='mais-produtos'>
        {maisProdutos.map((item) => (
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
      </section>

    </div>
  );
}
