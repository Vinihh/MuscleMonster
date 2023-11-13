import { Link, useNavigate } from 'react-router-dom';
import './index.scss';
import InfoAdm from '../../../components/info-adm';
import HeaderAdm from '../../../components/header-adm';
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import storage from 'local-storage';
import { API_URL } from '../../../constants';
import axios from 'axios';
import {toast} from 'react-toastify'


export default function ClientesAdm() {
  const [busca,setBusca] = useState('')
  const [clientes,setClientes] = useState([]);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();



  async function buscarClientePorNome() {

    try {
      if(busca == ''){
        let resposta = await axios.get(API_URL + `/consulta/cliente`);
      setClientes(resposta.data);
      }
      else{
        let resposta = await axios.get(API_URL + `/consulta/cliente/nome?nome=${busca}`);
      setClientes(resposta.data);
      }
    } catch (err) {
      toast.error('Erro ao buscar clientes:', err.response.data.erro);
    }
  }

  function teclaEnter(e) {
    if (e.key === 'Enter') {
        buscarClientePorNome();
  }
}

  useEffect(() => {
    if(!storage('adm-logado')){
      navigate('/erro')
    };
  }, []);

  useEffect(() => {
    if(storage('adm-logado')){
      buscarClientePorNome()
    }
  }, []);

  
  return (
    <div className="cliente-adm">
      <HeaderAdm />

      <section className='busca'>

        <InfoAdm />

        <aside>


          <section className='faixa1-cliente'>
            <h1> Clientes </h1>

            <div className='inp-busca'>
              <input value={busca} onKeyUp={teclaEnter} onChange={e => setBusca(e.target.value)} placeholder='Procurar Cliente...'></input>
              <button onClick={buscarClientePorNome}><img alt='' src='/assets/images/icon-busca2.png' /></button>
            </div>

            <nav>
              <nav>

              </nav>
            </nav>
          </section>
        <div className='tabela'>
          <table>
            <thead>
              <tr id='t2'>
                <th>Imagem</th>
                <th>Nome</th>
                <th>Email</th>
                <th>Telefone</th>
                <th>Endereço</th>
              </tr>
            </thead>
            <tbody>
              
              {clientes.map((item) => (
                <tr key={item.id}>
                  <td><img src={API_URL + "/" + item.img} /></td>
                  <td>{item.cliente}</td>
                  <td>{item.email}</td>
                  <td>{item.telefone}</td>  
                             
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </aside>
      </section>
    </div>
  );
}


