import { Link } from 'react-router-dom';
import './index.scss';
import InfoAdm from '../../../components/info-adm';
import HeaderAdm from '../../../components/header-adm';
import { useState } from 'react';

export default function PersonalAdm() {
  const [busca,setBusca] = useState('')

  
  return (
    <div className="personal-adm">
      <HeaderAdm />

      <aside>
        <InfoAdm />

        <section className='faixa1-personal'>
          <h1> Personals Trainers</h1>

          <div className='inp-busca'>
            <input value={busca} onChange={e => setBusca(e.target.value)} placeholder='Procurar Personal...'></input>
            <button><img alt='' src='/assets/images/icon-busca2.png' /></button>
          </div>
          
          <nav>
            <div></div>
          </nav>
          
        </section>

      </aside>

    </div>
  );
}


