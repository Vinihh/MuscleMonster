import Header from '../../components/header';
import Footer from '../../components/footer';
import Produto from '../../components/item-produto';
import './index.scss';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import MinhaConta from '../../components/minhaconta';
import { API_URL } from '../../constants';

export default function Home() {
  const [produtos,setProdutos] = useState([]);
  const [mostrarInfo, setMostrarInfo] = useState(false);
  const [produto, setProduto] = useState([])
  const [erro, setErro] = useState('')

  const id = useParams().id

  const navigate = useNavigate()

  async function ListarProdutos() {
    let resposta = await axios.get(API_URL + '/consulta/produto')
    let produtosLimitados = resposta.data.slice(0, 4);
    setProduto(produtosLimitados);
  }

  useEffect(() => {
    ListarProdutos()
  }, [])


  return (
    <div className="App">
      <Header />
      <nav>
        
        <h1>NO PAIN, NO GAIN</h1>
        <h3>O QUE A MENTE QUER, O CORPO ALCANÇA</h3>
      </nav>

      <aside>
        <Link to='/suplementos'>
        <div>
          <img src='/assets/images/img1.png' alt='' />
          <h1>  Suplementos</h1>
        </div>
        </Link>

        <Link to='/equipamentos'>
        <div>
          <img src='/assets/images/img2.png' alt='' />
          <h1>Equipamentos</h1>
        </div>
        </Link>

        <Link to='/roupas-acessorios'>
        <div>
          <img src='/assets/images/img3.png' alt='' />
          <h1>Roupas/Acessórios</h1>
        </div>
        </Link>
      </aside>

      <section className='sec1'>

        <img src='/assets/images/logo2.png' />
        
        <div className='pt1-sec1'>
          <h1>BLACK FRIDAY MUSCLEMONSTER</h1>

          <h4>Tudo o que você sempre quis com até 70% OFF à partir do dia 01/12 !!!Para quem está pensando em entrar na academia e mudar de vida!</h4>

        </div>

        <div className='pt2-sec1'>
          <h1 id='h1'>BLACK FRIDAY</h1>
          <h1 id='h2'>até</h1>
          <h1 id='h3'>70% off</h1>
        </div>
      </section>

      <section className='home-produtos'>
        <h1>PRODUTOS MAIS PROCURADOS</h1>

        <div className='fora'>
          {produto.map((item => (
            <section onClick={() => navigate('/produtos/' + item.id)}>

            <Produto prod = {item} />

        </section>
          )))}

        </div>
      </section>

      <Footer />

    </div>


  );
}


