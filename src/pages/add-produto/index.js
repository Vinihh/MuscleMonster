import './index.scss';
import HeaderAdm from '../../components/header-adm';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function HomeAdm() {

  const [ nomeproduto, setNomeproduto ] = useState('')
  const [ categoria, setCategoria ] = useState('')
  const [ valor, setValor ] = useState('')
  const [ estoque, setEstoque ] = useState('')

  const [ salvo, setSalvo ] = useState('')


  async function Inscrever() {
    try {
      const addproduto = {

        nome: nomeproduto,
        categoria: categoria,
        valor: valor,
        estoque: estoque
      };

      const url = 'http://localhost:5000/inserir'
      const resposta = await axios.post(url, addproduto)

    } catch (err) {
      setSalvo(err.response.data.erro)
    }


  }

  return (
    <div className="add-produto">
      <HeaderAdm />

      <nav>
          
        <div className='canto'>
            <img src='/assets/images/usuario-adm.png' />

            <p>Muscle Monster</p>
            <p>Pedido em andamento</p>
            <p>Personal trainers</p>
            <p>Adicionar Novos Produtos</p>
            <p>Estoque</p>
            <p>Vendas</p>
            <p>Adicionar Produto</p>
        </div>

        <div className='meio'>

          <h1>Adicionar Novos Produtos</h1>
          <img src='/assets/images/camera.png' />


        <div className='inputs'>
          <h1>Nome</h1>
          <input type='text' onChange={e => setNomeproduto(e.target.value)} />

          <h1>Categoria</h1>
          <input type='text' onChange={e => setCategoria(e.target.value)} />

          <h1>Preço</h1>
          <input type='text' onChange={e => setValor(e.target.value)} />

          <h1>Estoque</h1>
          <input type='text' onChange={e => setEstoque(e.target.value)} />
          </div>

          <button onClick={Inscrever}>Adicionar Produto</button>

          <h1> {salvo} </h1>

        </div>

      </nav>


    </div>
  );
}


