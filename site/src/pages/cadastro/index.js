import { Link, useNavigate } from 'react-router-dom';
import './index.scss';
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify'
import { API_URL } from '../../constants';


export default function PaginaCadastro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmSenha, setConfirmSenha] = useState('');
  const [salvo, setSalvo] = useState('');
  const [showPassword, setShowPassword] = useState(false);


  const navigate = useNavigate();

  async function Cadastro() {

    if (senha !== confirmSenha) {
      toast.error('As senhas não coincidem.');
      return;
    }

    const cadastro = {
      nome: nome,
      email: email,
      telefone: telefone,
      senha: senha,
    };

    try {

      let r = await axios.post(API_URL + '/cadastro', cadastro);
      toast.success('Cadastro realizado com sucesso.');
      navigate('/login')



    } catch (err) {
      toast.error(err.response.data.erro);
    }
  }

  function TeclaEnter(e) {
    if (e.key === 'Enter') {
      Cadastro()
    }

  }

  return (
    <div className='body'>
      <div class="cadastro_form_container">
        <div class="cadastro_form">
          <h2>Cadastro</h2>
          <div class="input_group">

            <input
              type="text"
              placeholder="Nome"
              class="input_text"
              value={nome}
              onChange={e => setNome(e.target.value)}
              onKeyUp={TeclaEnter}
            />


          </div>
          <div class="input_group">

            <input
              type="text"
              placeholder="Telefone com DDD"
              class="input_text"
              value={telefone}
              onKeyUp={TeclaEnter}
              onChange={e => setTelefone(e.target.value)}
            />

          </div>
          <div class="input_group">
            <input
              type="text"
              placeholder="Email"
              class="input_text"
              value={email}
              onKeyUp={TeclaEnter}
              onChange={e => setEmail(e.target.value)}
            />

          </div>

          <div className='senha'>
            <input 
            placeholder='Senha' 
            onKeyUp={TeclaEnter}
            type={showPassword ? 'text' : 'password'} value={senha} 
            onChange={(e) => setSenha(e.target.value)} 
            />

            <button onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <img src="/assets/images/img-senha.png" alt="Senha" /> : <img src="/assets/images/img-senha2.png" alt="Senha" />}
            </button>
          </div>

          <div className='senha2'>
            <input 
            placeholder='Confirmar Senha' 
            onKeyUp={TeclaEnter}
            type={showPassword ? 'text' : 'password'} value={confirmSenha} 
            onChange={(e) => setConfirmSenha(e.target.value)} 
            />

          </div>

          <div class="button_group" id="cadastro_button">
            <button onClick={Cadastro}> Cadastrar </button>
          </div>
          <div class="fotter-cadastro">
            <Link to='/login'><p>Já tem uma conta? Faça Login Agora</p></Link>

          </div>
        </div>
      </div>
    </div>
  );
}
