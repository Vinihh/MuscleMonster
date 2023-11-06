import { Link, useNavigate } from 'react-router-dom';
import './index.scss';
import React, { useEffect } from 'react';
import { API_URL } from '../../constants';
import { useState } from 'react';
import storage from 'local-storage';
import { toast } from 'react-toastify';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';


export default function InfoAdm() {
  const navigate = useNavigate();

  const[nome, setNome] = useState('');

  

  const [id,setId] = useState('')
  const [usuario, setUsuario] = useState([]); 

  function sairClick() {
    confirmAlert({
        title: 'ADM',
        message: 'Tem certeza que deseja sair da conta?',
        buttons: [
          {
            label: 'Sim',
            onClick: async () => {
                navigate('/adm/login')
                storage.clear('adm-logado');
            }
          },
          {
            label: 'Não'
          }
        ]
      });
}



  useEffect(() => {
    if(storage('adm-logado')){
      const usuariologado = storage('adm-logado');
      setNome(usuariologado.adm)
    }
}, [])



  return (
    <div className="comp-info-adm">    
        
          <div className='user'>
            <img src='/assets/images/teste1.png' alt='' />
            <h1>{nome}</h1>
          </div>

          <div className='links'>
            
          <div className='links-pt1'>
            <section>
              <img src='/assets/images/img1-adm.png' alt=''/>
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
              <img src='/assets/images/img2-adm.png' alt=''/>
            </section>

            <div>
              <Link id='estoque'> Estoque</Link>
              <Link to='/adm/vendas' > Vendas </Link>
              <Link to={'/add-produto'}> Adicionar novo produto </Link>

            </div>
          </div>
          <button onClick={sairClick}>
            Sair
          </button>
          </div>

        

    </div>
  );
}


