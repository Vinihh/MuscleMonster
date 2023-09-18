import { Link } from 'react-router-dom'
import './index.scss'
import { useState } from 'react' // Importe o useState corretamente
import axios from 'axios'

export default function PaginaCadastro() {
  const [cliente, setCliente] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmSenha, setConfirmSenha] = useState(''); // Estado para a confirmação de senha
  const [salvo, setSalvo] = useState('');

  async function Cadastro() {
    try {
      if (senha !== confirmSenha) {
        setSalvo('As senhas não coincidem.');
        return;
      }

      const cadastro = {
        cliente: cliente,
        email: email,
        telefone: telefone,
        senha: senha,
      };

      const url = 'http://localhost:5000/inserircadastro';
      const resposta = await axios.post(url, cadastro);
      
      // Lógica adicional para tratamento de sucesso
      setSalvo('Cadastro realizado com sucesso.');

    } catch (err) {
      setSalvo(err.response.data.erro);
    }
  }

  return (
    <div className="cadastro">
      <div className="linha"></div>
      <div className='cadbox'>
        <h1>Cadastro</h1>
        <input type='text' onChange={e => setCliente(e.target.value)} placeholder='Nome' />
        <input type='text' onChange={e => setTelefone(e.target.value)} placeholder='Telefone' />
        <input type='text' onChange={e => setEmail(e.target.value)} placeholder='E-mail' />
        <input type='text' onChange={e => setSenha(e.target.value)} placeholder='Senha' />
        <input type='text' onChange={e => setConfirmSenha(e.target.value)} placeholder='Confirme sua Senha' />
        <button onClick={Cadastro}>Cadastrar</button>
        <p>{salvo}</p> {/* Exibe a mensagem de erro/sucesso */}
        <Link to='/login'>Já tem uma conta? Faça login.</Link>
      </div>
    </div>
  );
}
                                                        