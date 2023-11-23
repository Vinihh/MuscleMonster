import { Link, useNavigate } from 'react-router-dom';
import './index.scss';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import storage from 'local-storage'
import {toast} from 'react-toastify'
import LoadingBar from 'react-top-loading-bar'; 
import { API_URL } from '../../constants';



export default function EsqueceuSenha() {
 
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [erro, setErro] = useState('');
  const [carregando, setCarregando] = useState(false);

  const navigate = useNavigate();
  const ref = useRef();

  async function entrar() {
    ref.current.continuousStart();
    setCarregando(true);
    setErro('');

    if (senha !== confirmarSenha) {
      toast.error('As senhas não coincidem.');
      return;
    }

    let user = {
      email: email,
      senha: senha
  }

    try {

      const response = await axios.put(API_URL + '/alterar/senha', user);
      if(storage('usuario-logado')){
        navigate('/home-minha-conta')
        toast.success('Senha Alterada com Sucesso')
      }
      else{
        navigate('/login')
        toast.success('Senha Alterada com Sucesso')
      }
   
    } catch (err) {
      ref.current.complete();
      if(err.response) {
        toast.error(err.response.data.erro)
      } else {
        toast.error(err.erro.erro)
      }
      
    } finally {
      setCarregando(false);
    }
  }

  

  function teclaEnter(e) {
    if (e.key === 'Enter') {
        entrar();
  }
}

useEffect(() => {
  if(storage('usuario-logado')){
    const usuariologado = storage('usuario-logado');
    setEmail(usuariologado.email)
  }
}, [])

  return (
    <div className='body'>
      <LoadingBar color='#FFB800' ref={ref} />
    <div class="esq-senha_form_container">
    <div class="esq-senha_form">
      <h2>Alterar Senha</h2>
      <div class="input_group">
        <i class="fa fa-user"></i>
        <input
          type="text"
          placeholder="Email"
          class="input_text"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <h4> Digite seu e-mail cadastrado para alterarmos sua senha</h4>


      </div>
      <div class="input_group">
        <i class="fa fa-unlock-alt"></i>
        <input
          type="password"
          placeholder="Nova Senha"
          class="input_text"
          value={senha}
          onChange={e => setSenha(e.target.value)} 
          onKeyUp={teclaEnter}
        />

      </div>

      <div class="input_group">
        <i class="fa fa-unlock-alt"></i>
        <input
          type="password"
          placeholder="Confirmar Nova Senha"
          class="input_text"
          value={confirmarSenha}
          onChange={e => setConfirmarSenha(e.target.value)} 
          onKeyUp={teclaEnter}
        />

      </div>
      <div class="button_group" id="esq-senha_button">
      <button onClick={entrar}>Entrar</button>
      </div>
      <div class="footer-esq-senha">
        <a>Esqueceu a senha ?</a>
        <Link to='/cadastro'><p>Cadastrar-se</p></Link>
      </div>
    </div>
  </div>
  </div>
  );
}
