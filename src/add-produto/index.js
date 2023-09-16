import './index.scss';
import HeaderAdm from '../components/header-adm';
import { Link } from 'react-router-dom';

export default function HomeAdm() {
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
          <input type='text' onChange={e => (e.target.value)} />

          <h1>Categoria</h1>
          <input type='text' onChange={e => (e.target.value)} />

          <h1>Preço</h1>
          <input type='text' onChange={e => (e.target.value)} />

          <h1>Estoque</h1>
          <input type='text' onChange={e => (e.target.value)} />
          </div>

        </div>

      </nav>


    </div>
  );
}


