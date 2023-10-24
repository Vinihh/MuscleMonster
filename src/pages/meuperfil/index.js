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

  
  function escolherImagem(){
    document.getElementById('imagem').click();
  }

  function mostrarImagem(){
    return URL.createObjectURL(imagem);
  }

  return (
    <div className="meuperfil">
      <HeaderAdm />

      <nav>

        <InfoMinhaConta />

        <div className='meio'>

          <h1>Meu Perfil</h1>

          <div className='upload' onClick={escolherImagem}>

          {!imagem &&
            <img src='/assets/images/meuperfil.png' alt='' height={100} width={100}/>
          }

          {imagem &&
            <img className='imagem-produto' src={mostrarImagem()} alt='' />
          }
            
            
            <input type='file' id='imagem' onChange={e => setImagem(e.target.files[0])}/>

          </div>
          <div className='inputs'>

            <div>
            <h1>Nome Completo</h1>
            <input type='text' />

            <h1>Genêro</h1>
            <select>
              <option>Masculino</option>
              <option>Feminino</option>
              <option>Outro</option>
            </select>

            <h1>Email</h1>
            <input type='text' />

            <h1>Telefone</h1>
            <input type='text'/>

            <h1>Data de Nascimento</h1>
            <input type='date'/>
            </div>
          </div>

          <button>Salvar</button>

    

        </div>

      </nav>


    </div>
  );
}


