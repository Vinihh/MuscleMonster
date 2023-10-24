import { Link } from 'react-router-dom';
import HeaderAdm from '../../components/header-adm';
import './index.scss';
import InfoMinhaConta from '../../components/info-minha-conta';

export default function MinhasCompras() {
  return (
    <div className="minhascompras">
      <HeaderAdm />

      <aside>
        <InfoMinhaConta />

        <section>
 
          <h2>Minhas Compras</h2>

          
        </section>
      </aside>

    </div>
  );
}


