
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
        <img className='logo' src='/assets/images/logo.png' alt='' />

        <div className='inp-busca'>
          <input placeholder='Procurar...'></input>

<<<<<<< HEAD:site/src/components/header/index.js
      <div className='icons'>
        <Link><img alt='' src='/assets/images/carrinho.png'/></Link>
        
        <Link className={Storage('usuario-logado') ? 'minhaconta' : ''} to={!Storage('usuario-logado') ? '/Login' : '/adm/home' } > {Storage('usuario-logado') ? 'Minha Conta' : 'Login'} <img alt='' src='/assets/images/icon-login.png'/> </Link>

        
      

      

      
        
        
=======
          <button><img alt='' src='/assets/images/icon-busca.png' /></button>
        </div>

        <div className='icons'>
          <Link><img alt='' src='/assets/images/carrinho.png' /></Link>

          <button>
            <Link to={!Storage('usuario-logado') ? '/Login' : '/adm/home'} className={Storage('usuario-logado') ? 'minhaconta' : ''} > <img alt='' src='/assets/images/icon-login.png' /> {Storage('usuario-logado') ? 'Minha Conta' : 'Login'}  </Link>
          </button>

        </div>
>>>>>>> 62b087a34d5975551f4a0b3b6d0238fd4b349d4a:src/components/header/index.js
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


