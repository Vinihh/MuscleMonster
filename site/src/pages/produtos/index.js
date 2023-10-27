import Header from '../../components/header';
import Footer from '../../components/footer';
import Produto from '../../components/item-produto';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './index.scss';
import { useEffect, useState } from 'react';
import { API_URL } from '../../constants';

export default function PaginaProduto() {

  const [produto, setProduto] = useState([]);
  const [erro, setErro] = useState('')

  async function buscarProduto(id) {
    try {
      let url = API_URL + `/listar/produto/${id}`;
      let resposta = await axios.get(url);
      setProduto(resposta.data)
      console.log(resposta)
    } catch (err) {
      setErro(err.response.data.erro);
    }
  }

  

  useEffect(() => {
    buscarProduto();
  }, []);

  return (
    <div className="pg-produto">
      <Header />

      <nav>
        <div className='imagem'>
          <img src={produto.imagem} />
        </div>

        <div className='info-produto'>
          <div>
            <h1>{produto.produto}</h1>
            <h2>{produto.preco}</h2>
            <h3>{produto.estoque} </h3>

            <div className='imagens'>
              <img src='/assets/images/produto1.png' />
              <img src='/assets/images/produto2.png' />
              <img src='/assets/images/produto3.png' />
            </div>

            <button> Adicionar ao carrinho </button>

            <div className='form-pay'>
              <img src='/assets/images/form-pay1.png' alt='' />
              <img src='/assets/images/form-pay2.png' alt='' />
              <img src='/assets/images/form-pay3.png' alt='' />
              <img src='/assets/images/form-pay4.png' alt='' />
            </div>
          </div>
        </div>
      </nav>

      <hr></hr>

      <section>
        <h1> Descrição</h1>
      </section>

    </div>


  );
}


