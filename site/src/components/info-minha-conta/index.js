import { Link } from 'react-router-dom';
import './index.scss';
import React, { useEffect } from 'react';
import { API_URL } from '../../constants';
import { useState } from 'react';
import storage from 'local-storage';
import { toast } from 'react-toastify';
import axios from 'axios';

export default function InfoMinhaConta() {

  const[nome, setNome] = useState('');
  const[email, setEmail] = useState('');
  

  const [id,setId] = useState('')
  const [usuario, setUsuario] = useState([]); 


  function limparStorage() {
    localStorage.clear();
    toast.success('Você saiu da sua conta');
  }

  useEffect(() => {
    const usuariologado = storage('usuario-logado');
    setNome(usuariologado.nome)
    setEmail(usuariologado.email)
}, [])



  return (
    <div className="info-minha-conta">
      <div className='user'>
        <img src='/assets/images/teste2.jpg' alt='' />
        
          <h1>{nome}</h1> 
        
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
        <Link to='/'>
          <button onClick={limparStorage}>
            Sair
          </button>
        </Link>
      </div>
    </div>
  );
}
