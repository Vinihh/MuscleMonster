
import { Link, Navigate } from 'react-router-dom';
import './index.scss';
import Storage from 'local-storage';
import { useState, useEffect } from 'react';
import MinhaConta from '../minhaconta';
import { useNavigate } from 'react-router-dom';

export default function Header() {

  const [mostrar, setMostrar] = useState(false)
  const [mostrarInfo, setMostrarInfo] = useState(false)
  const [nome, setNome] = useState('')

  const navigate = useNavigate();

  function mostrarInforma() {
    setMostrar(!mostrar)
    setMostrarInfo(!mostrarInfo)
  }

  useEffect(() => {

    if(Storage('usuario-logado')) {
      const usuariologado = Storage('usuario-logado')
      setNome(usuariologado.email)
    }

  }, [])

  return (
    <div className="comp-header">
      <div>
        <Link className='l1' to='/'><img className='logo' src='/assets/images/logo.png' alt='' /></Link>

        <div className='inp-busca'>
          <input placeholder='Procurar...'></input>
          


          <button><img alt='' src='/assets/images/icon-busca.png' /></button>
        </div>

        <div className='icons'>
        <Link to='/carrinho'><img alt='' src='/assets/images/carrinho.png'/></Link>
        
        <Link className={Storage('usuario-logado') ? 'minhaconta' : ''} to={!Storage('usuario-logado') ? '/Login' : '/home-minha-conta' } > {Storage('usuario-logado') ? '' : ''} <img alt='' src='/assets/images/icon-login.png'/> </Link>
          
      </div>

      </div>
      

    </div>
  );
}