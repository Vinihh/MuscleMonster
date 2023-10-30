  import { Link } from 'react-router-dom';
  import './index.scss';
  import React, { useEffect } from 'react';
  import { API_URL } from '../../constants';
  import { useState } from 'react';
  import Storage from  'local-storage'

  import {toast} from 'react-toastify'
import axios from 'axios';
  export default function InfoMinhaConta() {

    const id = localStorage.getItem('usuario-logado');
    const [usuario,setUsuario] = useState({});
  
    async function buscarCliente (){
      try {
        let resposta = await axios.get(API_URL + '/user?id=' + id)
        setUsuario(resposta.data)
      } catch (err) {
        
      }
    }  

    function limparStorage() {
      localStorage.clear();
      toast.success('Você saiu da sua conta');
    }

    useEffect(() => {
      buscarCliente();
    }, []);


    
    return (
      <div className="info-minha-conta">

        <div className='user'>
          <img src='/assets/images/teste2.jpg' alt='' />
          {usuario.map((item) => (
            <h1>{item.nome}</h1>
          ))}
        </div>

        <div className='links'>

          <div className='links-pt1'>


            <div>
              
              <Link to={'/meuperfil'}> Meu Perfil</Link>
              <Link to={'/minhascompras'}> Minhas Compras</Link>
              <Link to={'/endereco'}> Endereço</Link>
              <Link> Contate-nos via WhatsApp <img src='/assets/images/whatsapp.png'></img></Link>

            </div>
          </div>
          <Link to={'/'}>
          <button onClick={limparStorage}>
          Sair 
        </button>
        </Link>
        </div>



      </div>
    );
  }


