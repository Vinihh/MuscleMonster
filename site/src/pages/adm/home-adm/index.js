import { Link, useNavigate } from 'react-router-dom';
import HeaderAdm from '../../../components/header-adm';
import './index.scss';
import InfoAdm from '../../../components/info-adm';
import { useEffect } from 'react';
import storage from 'local-storage'
import { Navigate } from 'react-router-dom';

export default function HomeAdm() {
  const navigate = useNavigate();

  useEffect(() => {
    if(!storage('adm-logado')){
      navigate('/erro')
    };
  }, []);

  return (
    <div className="home-adm">
      <HeaderAdm />

      <aside >
        <InfoAdm />

        <section >
 
          <h2>Acesso Rápido</h2>

          <div>
            <Link to={'/add-produto'}>
            <div>
                <img src='/assets/images/novo-produto.png'></img>
                <h1>Adicionar novo produto</h1>
                <p>Disponibilize um novo produto para venda.</p>
            </div>
            </Link>

            <Link to={'/adm/busca-cliente'}>
            <div className='home-adm-pt5'>
                <img src='/assets/images/cliente.png'></img>
                <h1>Clientes</h1>
                <p>Pesquise e consulte os clientes.</p>
            </div>
            </Link>
          </div>
          

          <div>
            <Link to={''}>
            <div>
                <img src='/assets/images/andamento.png'></img>
                <h1>Pedidos em andamento</h1>
                <p>Acompanhe todos os pedidos feitos.</p>
            </div>
            </Link>

            <Link to={'/adm/produto'}>
            <div>
                <img src='/assets/images/adproduto.png'></img>
                <h1>Produtos</h1>
                <p>Todos produtos listados na loja.</p>
            </div>
            </Link>
          </div>
        </section>
      </aside>

    </div>
  );
}


