import { Link } from 'react-router-dom';
import HeaderAdm from '../../components/header-adm';
import './index.scss';
import InfoMinhaConta from '../../components/info-minha-conta';

export default function HomeAdm() {
  return (
    <div className="home-adm">
      <HeaderAdm />

      <aside>
        <InfoMinhaConta />

        <section>
 
          <h2>Acesso Rápido</h2>

          <div>
            <Link to={'/meuperfil'}>
            <div>
                <img src='/assets/images/perfil.gif'></img>
                <h1>Meu Perfil</h1>
                <p>Altere ou acesse seu perfil.</p>
            </div>
            </Link>

            <Link to={'/minhascompras'}>
            <div>
                <img src='/assets/images/minhascompras.png'></img>
                <h1>Minhas Compras</h1>
                <p>Consulte suas compras.</p>
            </div>
            </Link>
          </div>
          

          <div>
            <Link to={'/endereco'}>
            <div>
                <img src='/assets/images/local.gif'></img>
                <h1>Endereço</h1>
                <p>Adicione ou confirme o enderelo do seu pedido.</p>
            </div>
            </Link>

            <Link>
            <div>
                <img src='/assets/images/whatsapp.gif'></img>
                <h1>WhatsApp</h1>
                <p>Fale Conosco.</p>
            </div>
            </Link>
          </div>
        </section>
      </aside>

    </div>
  );
}

