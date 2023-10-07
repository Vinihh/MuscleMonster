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
  const [valor, setValor] = useState(0)
  const [estoque, setEstoque] = useState('')
  const [img, setImg] = useState('')

  const [salvo, setSalvo] = useState('')


  async function Inscrever() {
    try {
      const addproduto = {
        url:img,
        nome: nomeproduto,
        categoria: categoria,
        valor: valor,
        estoque: estoque
      };

      const url = 'http://localhost:5000/inserir'
      const resposta = await axios.post(url, addproduto)

      setNomeproduto('');
      setCategoria('');
      setValor(0);
      setImg('');
      setEstoque('')

      setSalvo('Produto salvo com sucesso')

    } catch (err) {
      setSalvo(err.response.data.erro)
    }

  }

  return (
    <div className="add-produto">
      <HeaderAdm />

      <nav>

        <InfoAdm />

        <div className='meio'>

          <h1>Adicionar Novos Produtos</h1>
          <img src='/assets/images/camera.png' />

          <div className='inputs'>

            <h1>Url da Img</h1>
            <input type='text' value={img} onChange={e => setImg(e.target.value)} />

            <h1>Nome</h1>
            <input type='text' value={nomeproduto} onChange={e => setNomeproduto(e.target.value)} />
            
            <h1>Categoria</h1>
            <input type='text' value={categoria}  onChange={e => setCategoria(e.target.value)} />


            <h1>Preço</h1>
            <input type='number' value={valor} onChange={e => setValor(e.target.value)} />

            <h1>Estoque</h1>
            <input type='text' onChange={e => setEstoque(e.target.value)} />
          </div>

          <button onClick={Inscrever}>Adicionar Produto</button>

          <p> {salvo} </p>

        </div>

      </nav>


    </div>
  );
}


