import { Link } from 'react-router-dom';
import './index.scss';

export default function Footer() {
  return (
    <div className="footer">
        <div>
            <img className='logo'src='/assets/images/logo2.png' alt=''/>
        </div>

        <div>
            <h1>CONFIGURAÇÃO DE COOKIES</h1>
            <a>Requisições de dados Pessoais</a>
            <a>Política de Privacidade</a>
            <a>Termos e Condições</a>
            <Link to={'/endereco'}>Adicione seu Endereço</Link>
        </div>

        <div>
            <h1>CADASTRE-SE PARA RECEBER NOVIDADES</h1>
            <Link to={'/suplementos'}>Suplementos</Link>
            <Link to={'/equipamentos'}>Equipamentos</Link>
            <Link to={'/roupas-acessorios'}>Roupas</Link>
            <Link to={'/roupas-acessorios'}>Acessórios</Link>
            
        </div>

       

        <div>
            <h1>SIGA-NOS</h1>

            <p>  <img className='tiktok' src='/assets/images/ticktok.png' alt='' />  <img className='x'src='/assets/images/x.png' alt='' /> <img className='insta' src='/assets/images/insta.png' alt='' /></p>
        </div>

    </div>
  );
}


