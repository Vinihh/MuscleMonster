import { Link, useNavigate } from 'react-router-dom';
import './index.scss';
import { useRef, useState } from 'react';
import axios from 'axios';
import storage from 'local-storage'
import {toast} from 'react-toastify'



export default function Login() {
 
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const [carregando, setCarregando] = useState(false);

  const navigate = useNavigate();
  const loadingBarRef = useRef(null);

  async function entrar() {
    setCarregando(true);
    setErro('');

    let user = {
      email: email,
      senha: senha
  }

    try {
      const response = await axios.post('http://localhost:5000/login', user);

      if( response.status === 200 ) {
        navigate('/');
        storage('usuario-logado', response.data)
      }
    } catch (err) {
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
