import { Link } from 'react-router-dom';
import HeaderAdm from '../../../components/header-adm';
import './index.scss';
import InfoAdm from '../../../components/info-adm';

export default function HomeAdm() {
  return (
    <div className="home-adm">
      <HeaderAdm />

      <aside>
        <InfoAdm />

        <section>
          <h1>Seja bem vindo Adiministrador</h1>
        </section>
      </aside>

    </div>
  );
}


