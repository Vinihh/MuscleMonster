import { Link } from 'react-router-dom';
import './index.scss';
import InfoAdm from '../../../components/info-adm';
import HeaderAdm from '../../../components/header-adm';
import { useState } from 'react';
import axios from 'axios';
import { confirmAlert } from 'react-confirm-alert';

export default function ProdutoAdm() {

  const[busca,setBusca] = useState('');
  const[listaProdutos,setListaProdutos] = useState([]);

  async function buscarProduto() {
    let resposta = await axios.get('http://localhost:5000/consultar-produto?busca=' + busca);
    setListaProdutos(resposta.data);
  }

  async function removerProduto(id) {
    
    confirmAlert({
      title: 'Produtos',
      message: 'Tem certeza que deseja remover?',
      buttons: [
        {
          label: 'Sim',
          onClick: async () => {
            let r = await axios.delete('http://localhost:5000/deletar-produto/' + id);
            alert('Produto foi removido com sucesso');
            buscarProduto();
          }
        },
        {
          label: 'Não'
        }
      ]
    });
    
  }




  return (

    <div className="produto-adm">
      <HeaderAdm />

      <aside>
        <InfoAdm />

        <section className='faixa1-produto'>
          <h1> Produtos</h1>

          <div className='inp-busca'>
            <input value={busca} onChange={e => setBusca(e.target.value)} placeholder='Procurar produtos...'></input>
            <button onClick={buscarProduto}><img alt='' src='/assets/images/icon-busca2.png' /></button>
          </div>
          <nav>
          <nav>
            
          </nav>
          </nav>
        </section>

      </aside>

    </div>
  );
}


