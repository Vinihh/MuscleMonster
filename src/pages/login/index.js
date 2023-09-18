import { Link } from 'react-router-dom'
import './index.scss'
import { useState } from 'react';
import axios from 'axios';

export default function Login() {

    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');
    const [message, setMessage] = useState('');

    async function Entrar(e) {
        e.preventDefault();

        try {
            // Envie uma solicitação GET para o servidor para autenticar o usuário
            const response = await axios.get('http://localhost:5000/login');

            // Verifique se o email e a senha correspondem às informações retornadas pelo servidor
            if (login === response.data.email && senha === response.data.senha) {
        
                window.location.href = 'http://localhost:3000';
            } else {
                setMessage('⚠ Login ou senha incorretos');
            }

        } catch (error) {
            
            setMessage('⚠ Erro ao tentar fazer login');
        }
    }

    return (
        <div className="login">
            <div className="linha"></div>
            <div className='cadbox'>
                <h1>Login</h1>
                <input type='text' onChange={e => setLogin(e.target.value)} placeholder='E-mail'></input>
                <input type='password' onChange={e => setSenha(e.target.value)} placeholder='Senha'></input>
                <button onClick={Entrar}>Entrar</button>
                <Link to='/cadastro'><p>Não está registrado? Junte-se a nós</p></Link>
                <p> {message} </p>
            </div>
        </div>
    )
}
