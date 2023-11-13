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
    setProduto(resposta.data)
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

        <Link to='/roupas'>
        <div>
          <img src='/assets/images/img3.png' alt='' />
          <h1>Roupas/Acessórios</h1>
        </div>
        </Link>
      </aside>

      <section>
        <img src='/assets/images/img4.png' alt='' />
        <div>
          <h1>Gostaria de aprender a treinar da maneira correta?</h1>

          <h4>Na Muscle Monster você poderá encontrar diversos personal trainers para ajudá-los a treinar da maneira certa!!</h4>

          <button> Fale Conosco </button>
        </div>
      </section>

      <section className='home-produtos'>
        <h1>OS MAIS VENDIDOS</h1>

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


