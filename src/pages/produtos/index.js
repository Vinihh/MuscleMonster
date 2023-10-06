import Header from '../../components/header';
import Footer from '../../components/footer';
import Produto from '../../components/item-produto';
import PaginaProdut from '../../components/comp-produtos';
import axios from 'axios';

import './index.scss';
import { useEffect, useState } from 'react';

export default function PaginaProduto() {

  const [produto,setProduto] = useState([]);
  const [erro,setErro] = useState('')

  async function buscarProduto(){
    try {
      let url = `http://localhost:5000/listar/produto/1`;
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
              
    </div>

  );
}


