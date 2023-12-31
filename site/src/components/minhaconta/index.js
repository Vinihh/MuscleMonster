import { Link } from 'react-router-dom';    
import './index.scss';
import { useState } from 'react';

export default function MinhaConta() {
    
    const [mostrarinfo, setMostrarInfo] = useState(false)
    

    return (
        <div className={mostrarinfo ? "minha-conta mostrar" : "minha-conta"}>

            <div className='user'>
                <img src='/assets/images/teste1.png' alt='' />
                <h1>XEXEL</h1>
            </div>

            <div className='links'>

                <div className='links-pt1'>
                    <section>
                        <img src='/assets/images/img1-adm.png' alt='' />
                    </section>

                    <div>
                        <h1> Muscle Monster</h1>
                        <Link to='/adm/produto'> Produtos </Link>
                        <Link> Pedidos em Andamento</Link>
                        <Link to='/adm/personal'> Personal Trainers</Link>
                        <Link to='/adm/busca-cliente'> Clientes </Link>
                    </div>
                </div>

                <div className='links-pt1'>
                    <section>
                        <img src='/assets/images/img2-adm.png' alt='' />
                    </section>

                    <div>
                        <Link id='estoque'> Estoque</Link>
                        <Link to='/adm/vendas' > Vendas </Link>
                        <Link to={'/add-produto'}> Adicionar novo produto </Link>

                    </div>
                </div>

            </div>

        </div>
    );
}


