import { Link } from 'react-router-dom';
import './index.scss';
import InfoAdm from '../../../components/info-adm';
import HeaderAdm from '../../../components/header-adm';
import { useState } from 'react';

export default function ClientesAdm() {
  const [busca,setBusca] = useState('')

  
  return (
    <div className="cliente-adm">
      <HeaderAdm />

      <aside>
        <InfoAdm />

        <section className='faixa1-clientes'>
          <h1> Clientes</h1>

          <div className='inp-busca'>
            <input value={busca} onChange={e => setBusca(e.target.value)} placeholder='Procurar cliente...'></input>
            <button><img alt='' src='/assets/images/icon-busca2.png' /></button>
          </div>

          
        </section>

      </aside>

    </div>
  );
}


