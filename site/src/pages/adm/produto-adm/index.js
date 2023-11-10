import { Link, useNavigate } from 'react-router-dom';
import './index.scss';
import { useEffect } from 'react';
import InfoAdm from '../../../components/info-adm';
import HeaderAdm from '../../../components/header-adm';
import { useState } from 'react';
import axios from 'axios';
import { confirmAlert } from 'react-confirm-alert';
import { API_URL } from '../../../constants';
import { toast } from 'react-toastify'
import { Navigate } from 'react-router-dom';
import storage from 'local-storage'

export default function ProdutoAdm() {
  const [busca, setBusca] = useState('');
  const [listaProdutos, setListaProdutos] = useState([]);

  const [erro, setErro] = useState('')

  
  async function buscarProdutoPorNome() {

    try {
      if(busca == ''){
        let resposta = await axios.get(API_URL + `/consulta/produto`);
      setListaProdutos(resposta.data);
      }
      else{
        let resposta = await axios.get(API_URL + `/consulta/nome?nome=${busca}`);
      setListaProdutos(resposta.data);
      }
    } catch (err) {
      toast.error('Erro ao buscar produtos:', err.response.data.erro);
    }
  }


  async function removerProduto(id) {
    try {
      await axios.delete(API_URL + `/deletar/${id}`);

      await buscarProdutoPorNome();
      setErro('Produto removido com sucesso')

    } catch (error) {
      console.error('Erro ao remover produto:', error);
      toast.error('Erro ao remover produto. Verifique o console para mais detalhes.');
    }
  }

  function teclaEnter(e) {
    if (e.key === 'Enter') {
        buscarProdutoPorNome();
  }
}

useEffect(() => {
  buscarProdutoPorNome();
}, []);

const navigate = useNavigate();

useEffect(() => {
  if(!storage('adm-logado')){
    navigate('/erro')
  };
}, []);


  return (

    <div className="produto-adm">
      <HeaderAdm />

      <section className='busca'>

        <InfoAdm />

        <aside>


          <section className='faixa1-produto'>
            <h1> Produtos</h1>

            <div className='inp-busca'>
              <input value={busca} onKeyUp={teclaEnter} onChange={e => setBusca(e.target.value)} placeholder='Procurar produtos...'></input>
              <button onClick={buscarProdutoPorNome}><img alt='' src='/assets/images/icon-busca2.png' /></button>
            </div>

            <p> {erro} </p>
            <nav>
              <nav>

              </nav>
            </nav>
          </section>
        <div className='tabela'>
          <table>
            <thead>
              <tr id='t2'>
                <th>Imagem</th>
                <th>Nome</th>
                <th>Categoria</th>
                <th>Preço</th>
                <th>Estoque</th>
                <th>Apagar</th>
              </tr>
            </thead>
            <tbody>
              {listaProdutos.map((item) => (
                <tr key={item.id_produto}>
                  <td><img src={API_URL + "/" + item.img} /></td>
                  <td id='T1'>{item.produto}</td>
                  <td>{item.categoria}</td>
                  <td>R${item.preco}</td>
                  <td>{item.estoque}</td>
                  <td>
                    <img  id='trash' src='/assets/images/lixo.png.svg' onClick={() => removerProduto(item.id)} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </aside>
      </section>
    </div>
  );
}


