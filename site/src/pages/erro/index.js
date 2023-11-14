import HeaderAdm from '../../components/header-adm';
import Produto from '../../components/item-produto';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import './index.scss';
import { useEffect, useState } from 'react';
import { API_URL } from '../../constants';
import { Navigate } from 'react-router-dom';

export default function Erro() {

  const navigate = useNavigate();

  function voltar(){
    navigate('/')
  }

  return (
    <div className="pg-erro">
   
    <HeaderAdm />
      <nav>
          <div>
            <img src='/assets/images/acheivc.png' />
          </div>

          <div className='d2'>
            <h1>Sistema de Segurança Ativado</h1>
            <p>'O sistema detectou atividade suspeita em seu dispositivo.'</p>
            <h2>"Bisbilhotar é invasivo e desrespeitoso. Respeitar a privacidade alheia é essencial para relações saudáveis" </h2>
           
            
            <button onClick={voltar}> Volte a tela inicial aqui!!! </button>
          </div>
      </nav>

    </div>


  );
}


