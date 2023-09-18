
import './index.scss';

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
        <button><img alt='' src='/assets/images/icon-login.png'/></button>
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


