
import './index.scss';

export default function Headerr() {
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


    </div>
  );
}


