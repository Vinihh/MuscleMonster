import { Link, useNavigate } from 'react-router-dom';
import './index.scss';
import InfoAdm from '../../../components/info-adm';
import HeaderAdm from '../../../components/header-adm';
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import storage from 'local-storage'

export default function ClientesAdm() {
  const [busca,setBusca] = useState('')

  const navigate = useNavigate();

  useEffect(() => {
    if(!storage('adm-logado')){
      navigate('/erro')
      window.location.reload('/erro')
    };
  }, []);

  
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


