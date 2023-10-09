import Header from '../../components/header';
import Footer from '../../components/footer';
import Produto from '../../components/item-produto';
import PaginaProdut from '../../components/comp-produtos';
import axios from 'axios';

import './index.scss';
import { useEffect, useState } from 'react';

export default function PaginaProduto() {

  const [produto, setProduto] = useState([]);
  const [erro, setErro] = useState('')

  async function buscarProduto() {
    try {
      let url = `http://localhost:5000/listar/produto/2`;
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

      <PaginaProdut
        produto={produto.produto}
        imagem={produto.imagem}
        preco={produto.preco}
        estoque={produto.estoque}
      />

      <section className='descricao'>

        <h1>BENEFICIOS DO BASIC WHEY</h1>

        <div>
          <h2></h2>
          <p>Fornece sensação de sacidade;</p>
        </div>

        <div>
          <h2></h2>
          <p>Ajuda no combate a inflamação muscular;</p>
        </div>

        <div>
          <h2></h2>
          <p>Fonte de proteína de alto valor biológico;</p>
        </div>

        <div>
          <h2></h2>
          <p>Ajuda no aumento de volume de massa magra;</p>
        </div>

        <div>
          <h2></h2>
          <p>Potencializa a recuperação do tecido muscular;</p>
        </div>

        <div>
          <h2></h2>
          <p>Pode ser usado tanto em dietas de aumento como de redução de massa;</p>
        </div>

      </section>


      <section className='instrucoes'>
        <img src='/assets/images/como-tomar.png' />

        <div>
          <h1>COMO TOMAR   BASIC WHEY</h1>
          <p>Sugerimos 30g do produto como porção, podendo ser diluído no líquido e quantidade de sua preferência. Podem ser consumidas quantas porções o indivíduo precisar ao dia. Isso dependerá da sua dieta e das suas refeições. O Basic pode ser ingerido sempre que faltar proteína via alimentos em uma refeição, podendo ser usado 1, 2, 3X ao dia; A quantidade a ser consumida irá depender da necessidade da sua dieta.</p>
        </div>
      </section>

      <Footer/>

    </div>

  );
}


