import { Link } from 'react-router-dom';
import './index.scss';
import { useEffect } from 'react';
import InfoAdm from '../../../components/info-adm';
import HeaderAdm from '../../../components/header-adm';
import { useState } from 'react';
import axios from 'axios';
import { confirmAlert } from 'react-confirm-alert';

export default function ProdutoAdm() {
  const [busca, setBusca] = useState('');
  const [listaProdutos, setListaProdutos] = useState([]);
  const [erro, setErro] = useState('')

  async function buscarProdutoPorNome() {
    try {
      let resposta = await axios.get(`http://localhost:5000/consulta/nome?nome=${busca}`);
      setListaProdutos(resposta.data);
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
    }
  }

  async function removerProduto(id) {
    try {
      await axios.delete(`http://localhost:5000/deletar/${id}`);

      await buscarProdutoPorNome();
      setErro('Produto removido com sucesso')

    } catch (error) {
      console.error('Erro ao remover produto:', error);
      alert('Erro ao remover produto. Verifique o console para mais detalhes.');
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

          <table>
            <thead>
              <tr>
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
                <tr key={item.id}>
                  <td><img src={item.imagem} alt={item.produto} /></td>
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

        </aside>
      </section>
    </div>
  );
}


