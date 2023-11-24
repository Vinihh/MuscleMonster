import './index.scss';
import HeaderAdm from '../../components/header-adm';
import InfoAdm from '../../components/info-adm';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import 'react-confirm-alert/src/react-confirm-alert.css';
import axios from 'axios';
import InfoMinhaConta from '../../components/info-minha-conta';
import storage from 'local-storage';
import { API_URL } from '../../constants';
import {toast} from 'react-toastify';

export default function MeuPerfil() {

  const usuario = storage('usuario-logado');
  const [nome,setNome] = useState(usuario.nome);
  const [email,setEmail] = useState(usuario.email);
  const [telefone,setTelefone] = useState(usuario.telefone);
  const [data,setData] = useState(usuario.data);

  async function editar(){

    
    let cliente={
      nome:nome,
      telefone:telefone,
      data:data,
      id:usuario.id
    }

    try {
      const response3 = await axios.put(API_URL + '/editar/nome',cliente);
      const response = await axios.put(API_URL + '/editar/tel',cliente);
      const response2 = await axios.put(API_URL + '/editar/data',cliente);
 
      toast.success('informações Salvas')
    } catch (err) {
      toast.error(err.response.data.erro)
    }
  }

  



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
                <input type='text' value={nome} onChange={e => setNome(e.target.value)}/>
              </div>


              <div id='inp-email'>
                <h1>Email</h1>
               <div>
                <h1>{usuario.email}</h1>
               </div>
              </div>

              <div>
                <h1>Telefone</h1>
                <input type='text' value={telefone} onChange={e => setTelefone(e.target.value)}/>
              </div>

              <div>
                <h1>Data de Nascimento</h1>
                <input type='date' value={data} onChange={e => setData(e.target.value)} />
              </div>
            </div>
          </div>

          <button onClick={editar}> Salvar</button>



        </div>

      </nav>


    </div>
  );
}


