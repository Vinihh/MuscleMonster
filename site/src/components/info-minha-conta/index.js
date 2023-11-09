import { Link, useNavigate } from 'react-router-dom';
import './index.scss';
import React, { useEffect } from 'react';
import { API_URL } from '../../constants';
import { useState } from 'react';
import storage from 'local-storage';
import { toast } from 'react-toastify';
import axios from 'axios';
import { confirmAlert } from 'react-confirm-alert';
import { Navigate } from 'react-router-dom';

export default function InfoMinhaConta() {

  const[nome, setNome] = useState('');
  const[email, setEmail] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const [id,setId] = useState('')
  const [usuario, setUsuario] = useState([]); 

  function sairClick() {
    confirmAlert({
        title: 'Usuário',
        message: 'Tem certeza que deseja sair da conta?',
        buttons: [
          {
            label: 'Sim',
            onClick: async () => {
                
              storage.clear('usuario-logado');
              navigate('/')
              toast.success('Você saiu da sua conta!')
            }
          },
          {
            label: 'Não'
          }
        ]
      });
}




  useEffect(() => {
    if (storage('usuario-logado')) {
    const usuariologado = storage('usuario-logado');
    setNome(usuariologado.nome)
    setEmail(usuariologado.email)

  }
}, [])




  return (
    <div className="info-minha-conta">
      <div className='user'>
        <img src='/assets/images/teste2.jpg' alt='' />
        
          <h1>{nome}</h1> 
        
      </div>

      <div className='linkss'>
        <div className='linkss-pt1'>
          <div>
            <Link to={'/meuperfil'}> Meu Perfil</Link>
            <Link to={'/minhascompras'}> Minhas Compras</Link>
            <Link to={'/endereco'}> Endereço</Link>
            <Link> Contate-nos via WhatsApp <img src='/assets/images/whatsapp.png'></img></Link>
          </div>
        </div>
        
        
      </div>

      <button 
          onMouseOver={() => setShowPassword(true)}
          onMouseOut={() => setShowPassword(false)}
          onClick={sairClick}>
            {showPassword ? <img src='/assets/videos/logout.gif' alt=''/> : <img src='/assets/images/logout.png' alt=''/>}
          </button>
    </div>
  );
}
