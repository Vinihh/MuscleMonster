
import { Link } from 'react-router-dom';
import './index.scss';
import Storage from 'local-storage';

export default function Header() {
  return (
    <div className="comp-header">
    <div>
      <img className='logo' src='/assets/images/logo.png' alt='' />

      <div className='inp-busca'> 
        <input placeholder='Procurar...'></input>
       
        <button><img alt='' src='/assets/images/icon-busca.png'/></button>
      </div>

      <div className='icons'>
        <Link><img alt='' src='/assets/images/carrinho.png'/></Link>
        <Link className={Storage('usuario-logado') ? 'minhaconta' : ''} to={!Storage('usuario-logado') ? '/Login' : '/adm/home' } > {Storage('usuario-logado') ? 'Minha Conta' : 'Login'} <img alt='' src='/assets/images/icon-login.png'/> </Link>
      
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


