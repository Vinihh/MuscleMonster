import { Link } from 'react-router-dom';
import './index.scss';
import { useState } from 'react';
import axios from 'axios';

export default function PaginaCadastro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmSenha, setConfirmSenha] = useState('');
  const [salvo, setSalvo] = useState('');

  async function Cadastro() {
    try {
      if (senha !== confirmSenha) {
        setSalvo('As senhas não coincidem.');
        return;
      }

      const cadastro = {
        nome: nome,
        email: email,
        telefone: telefone,
        senha: senha,
      };

      let r = await axios.post('http://localhost:5000/cadastro', cadastro);
      

      alert('Cadastro realizado com sucesso.');
      window.location.href = 'http://localhost:3000/login';
      
    } catch (err) {
      setSalvo(err.response.data.erro);
    }
  }

  return (
    <div className='body'>
    <div class="cadastro_form_container">
    <div class="cadastro_form">
      <h2>Cadastro</h2>
      <div class="input_group">
        
        <input
          type="text" placeholder="Nome" class="input_text" value={nome} onChange={e => setNome(e.target.value)}
        />


      </div>
      <div class="input_group">
        
        <input
          type="text"
          placeholder="Telefone"
          class="input_text"
          value={telefone}
          onChange={e => setTelefone(e.target.value)} 
        />

      </div>
      <div class="input_group">
        <input
          type="text"
          placeholder="Email"
          class="input_text"
          value={email}
          onChange={e => setEmail(e.target.value)} 
        />

      </div>
      <div class="input_group">
        <input
          type="password"
          placeholder="Senha"
          class="input_text"
          onChange={e => setSenha(e.target.value)} 
        />

      </div>
      <div class="input_group">
        <input
          type="password"
          placeholder="Confirme sua senha"
          class="input_text"
          onChange={e => setConfirmSenha(e.target.value)}
        />

      </div>
      <div class="button_group" id= "cadastro_button">
      <button onClick={Cadastro}> Cadastrar </button>
      </div>
      <div class="fotter-cadastro">
        <Link to='/login'><p>Já tem uma conta? Faça Login</p></Link>
        <p>{salvo}</p>
      </div>
    </div>
  </div>
  </div>
  );
}
