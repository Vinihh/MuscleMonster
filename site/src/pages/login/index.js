import { Link, useNavigate } from 'react-router-dom';
import './index.scss';
import { useRef, useState } from 'react';
import axios from 'axios';
import storage from 'local-storage'
import {toast} from 'react-toastify'
import LoadingBar from 'react-top-loading-bar'; 
import { API_URL } from '../../constants';



export default function Login() {
 
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const [carregando, setCarregando] = useState(false);

  const navigate = useNavigate();
  const ref = useRef();

  async function entrar() {
    ref.current.continuousStart();
    setCarregando(true);
    setErro('');

    let user = {
      email: email,
      senha: senha
  }

    try {

      const response = await axios.post( 'http://localhost:5000/login', user);

      setTimeout(() => {
        storage('usuario-logado', response.data)
        navigate('/');
      },1700)
   
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

  return (
    <div className='body'>
      <LoadingBar color='#FFB800' ref={ref} />
    <div class="login_form_container">
    <div class="login_form">
      <h2>Login</h2>
      <div class="input_group">
        <i class="fa fa-user"></i>
        <input
          type="text"
          placeholder="Email"
          class="input_text"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />


      </div>
      <div class="input_group">
        <i class="fa fa-unlock-alt"></i>
        <input
          type="password"
          placeholder="Senha"
          class="input_text"
          value={senha}
          onChange={e => setSenha(e.target.value)} 
          onKeyUp={teclaEnter}
        />

      </div>
      <div class="button_group" id="login_button">
      <button onClick={entrar}>Entrar</button>
      </div>
      <div class="fotter">
        <a>Esqueceu a senha ?</a>
        <Link to='/cadastro'><p>Cadastrar-se</p></Link>
      </div>
    </div>
  </div>
  </div>
  );
}
