import { Link } from 'react-router-dom';
import './index.scss';
import InfoAdm from '../../../components/info-adm';
import HeaderAdm from '../../../components/header-adm';

export default function VendasAdm() {
  return (
    <div className="vendas-adm">
      <HeaderAdm />

      <aside>
        <InfoAdm />

        <section className='faixa1-vendas '>
          <h1> Vendas</h1>

          <img src='/assets/images/grafico.png' alt='' />

          <a href='https://docs.google.com/spreadsheets/d/147OK3zxIC6LpdzQHMXzJcPQv3sX2SztOFccDG14_xgA/edit#gid=0'>Ir para a planilha</a>
        </section>

      </aside>

    </div>
  );
}


