  import { Link } from 'react-router-dom';
  import './index.scss';
  import Storage from 'local-storage';
  import React from 'react';

  export default function InfoMinhaConta() {


    function limparStorage() {
      limparStorage = () => {
        localStorage.clear();
        alert('Armazenamento local foi apagado!');
      };
    }

    return (
      <div className="info-minha-conta">

        <div className='user'>
          <img src='/assets/images/teste2.jpg' alt='' />
          <h1>XXX</h1>
        </div>

        <div className='links'>

          <div className='links-pt1'>


            <div>
              <h1> Muscle Monster</h1>
              <Link to={'/meuperfil'}> Meu Perfil</Link>
              <Link to={'/minhascompras'}> Minhas Compras</Link>
              <Link to={'/endereco'}> Endereço</Link>
              <Link> Contate-nos via WhatsApp <img src='/assets/images/whatsapp.png'></img></Link>

            </div>
          </div>
            <button onClick={limparStorage}>
              Limpar Armazenamento Local
            </button>
        </div>



      </div>
    );
  }


