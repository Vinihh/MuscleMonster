import { Link, useNavigate } from 'react-router-dom';
import './index.scss';
import { useRef, useState } from 'react';
import axios from 'axios';
import storage from 'local-storage'



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
        setErro(err.response.data.erro)
      } else {
        setErro(err.erro.erro)
      }
      
    } finally {
      setCarregando(false);
    }
  }

  return (
    <div className="login">
      <div className="linha"></div>
      <div className='cadbox'>
        <h1>Login</h1>
        <input type='text' value={email} onChange={e => setEmail(e.target.value)} placeholder='E-mail'></input>
        <input type='password' value={senha} onChange={e => setSenha(e.target.value)} placeholder='Senha'></input>
        <button onClick={entrar}>Entrar</button>
        <Link to='/cadastro'><p>Não está registrado? Junte-se a nós</p></Link>
        <p> {erro} </p>
      </div>
    </div>
  );
}
