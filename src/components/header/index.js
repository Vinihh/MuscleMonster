
import './index.scss';

export default function Header() {
  return (
    <div className="comp-header">
      <img src='/assets/images/logo.png' />

      <div className='inp-busca'> 
        <input placeholder='Procurar...'></input>
        <button><img src='/assets/images/icon-busca.png'/></button>
      </div>

      <div className='icons'>
        <button><img src='/assets/images/icon-login.png'/></button>
      </div>
    </div>
  );
}


