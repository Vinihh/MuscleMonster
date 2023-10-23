import './index.scss';
import HeaderAdm from '../../components/header-adm';
import InfoAdm from '../../components/info-adm';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import 'react-confirm-alert/src/react-confirm-alert.css';
import axios from 'axios';

export default function HomeAdm() {

  const [nomeproduto, setNomeproduto] = useState('')
  const [categoria, setCategoria] = useState('')
  const [descricao, setDescricao] = useState('')
  const [valor, setValor] = useState(0)
  const [estoque, setEstoque] = useState(0)
  const [imagem, setImagem] = useState('')

  const [salvo, setSalvo] = useState('')


  async function Inscrever() {
    try {
      const addproduto = {
        nome: nomeproduto,
        categoria: categoria,
        valor: valor,
        descricao:descricao,
        estoque: estoque
      };

      

      const url = 'http://localhost:5000/inserir'
      const resposta = await axios.post(url, addproduto)

      setNomeproduto('');
      setCategoria('');
      setDescricao('');
      setValor(0);
      setImagem('');
      setEstoque(0)

      setSalvo('Produto salvo com sucesso')

    } catch (err) {
      setSalvo(err.response.data.erro)
    }

  }

  function escolherImagem(){
    document.getElementById('imagem').click();
  }

  function mostrarImagem(){
    return URL.createObjectURL(imagem);
  }

  return (
    <div className="add-produto">
      <HeaderAdm />

      <nav>

        <InfoAdm />

        <div className='meio'>

          <h1>Adicionar Novos Produtos</h1>

          <div className='upload' onClick={escolherImagem}>

          {!imagem &&
            <img src='/assets/images/camicon.png' alt='' />
          }

          {imagem &&
            <img className='imagem-produto' src={mostrarImagem()} alt='' />
          }
            
            
            <input type='file' id='imagem' onChange={e => setImagem(e.target.files[0])}/>

          </div>
          <div className='inputs'>

            <div>
            <h1>Nome</h1>
            <input type='text' value={nomeproduto} onChange={e => setNomeproduto(e.target.value)} />

            <h1>Descrição</h1>
            <textarea value={descricao} type='text' onChange={e => setDescricao(e.target.value)}/>


            <h1>Categoria</h1>
            <input type='text' value={categoria} onChange={e => setCategoria(e.target.value)} />

            </div>

            <div>

            <h1>Preço</h1>
            <input type='number' step='10' value={valor} onChange={e => setValor(e.target.value)} />

            <h1>Estoque</h1>
            <input type='number' step='5' value={estoque} onChange={e => setEstoque(e.target.value)} />
            </div>
          </div>

          <button onClick={Inscrever}>Adicionar Produto</button>

          <p> {salvo} </p>

        </div>

      </nav>


    </div>
  );
}


