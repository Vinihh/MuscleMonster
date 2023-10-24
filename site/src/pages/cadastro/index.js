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
    <div className="cadastro">
      <div className="linha"></div>
      <div className='cadbox'>
        <h1>Cadastro</h1>
        <input type='text' onChange={e => setNome(e.target.value)} placeholder='Nome' />
        <input type='text' onChange={e => setTelefone(e.target.value)} placeholder='Telefone' />
        <input type='text' onChange={e => setEmail(e.target.value)} placeholder='E-mail' />
        <input type='password' onChange={e => setSenha(e.target.value)} placeholder='Senha' />
        <input type='password' onChange={e => setConfirmSenha(e.target.value)} placeholder='Confirme sua Senha' />
        <button onClick={Cadastro}>Cadastrar</button>
        <p>{salvo}</p>
        <Link to='/login'>Já tem uma conta? Faça login.</Link>
      </div>
    </div>
  );
}
