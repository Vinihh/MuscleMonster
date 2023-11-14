import './index.scss';
import HeaderAdm from '../../components/header-adm';
import InfoAdm from '../../components/info-adm';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import 'react-confirm-alert/src/react-confirm-alert.css';
import axios from 'axios';
import InfoMinhaConta from '../../components/info-minha-conta';

export default function MeuPerfil() {


  const [imagem, setImagem] = useState('')



  return (
    <div className="meuperfil">
      <HeaderAdm />

      <nav>

        <InfoMinhaConta />

        <div className='meio'>

          <h1>Meu Perfil</h1>

          <div className='infos'>

            <div className='inputs'>

              <div>
                <h1>Nome Completo</h1>
                <input type='text' />
              </div>

              <div>
                <h1>Genêro</h1>
                <select>
                  <option>Masculino</option>
                  <option>Feminino</option>
                  <option>Outro</option>
                </select>
              </div>

              <div>
                <h1>Email</h1>
                <input type='text' />
              </div>

              <div>
                <h1>Telefone</h1>
                <input type='text' />
              </div>

              <div>
                <h1>Data de Nascimento</h1>
                <input type='date' />
              </div>
            </div>
          </div>

          <button>Salvar</button>



        </div>

      </nav>


    </div>
  );
}


