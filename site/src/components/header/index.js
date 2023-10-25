
import { Link } from 'react-router-dom';
import './index.scss';
import Storage from 'local-storage';
import { useState } from 'react';
import MinhaConta from '../minhaconta';

export default function Header() {

  const [mostrar, setMostrar] = useState(false)
  const [mostrarInfo, setMostrarInfo] = useState(false)

  function mostrarInforma() {
    setMostrar(!mostrar)
    setMostrarInfo(!mostrarInfo)
  }

  return (
    <div className="comp-header">
      <div>
        <Link className='l1' to='/'><img className='logo' src='/assets/images/logo.png' alt='' /></Link>

        <div className='inp-busca'>
          <input placeholder='Procurar...'></input>


          <button><img alt='' src='/assets/images/icon-busca.png' /></button>
        </div>

        <div className='icons'>
        <Link><img alt='' src='/assets/images/carrinho.png'/></Link>
        <Link className={Storage('usuario-logado') ? 'minhaconta' : ''} to={!Storage('usuario-logado') ? '/Login' : '/home-minha-conta' } > {Storage('usuario-logado') ? '' : ''} <img alt='' src='/assets/images/icon-login.png'/> </Link>
      
      </div>

      </div>

      <section className='container'>
        <div><p>Roupas</p></div>
        <div><p>Acessórios</p></div>
        <div><p>Equipamentos</p></div>
        <div><p>Suplementos</p></div>
        <div><p>Exercícios</p></div>
      </section>

    </div>
  );
}