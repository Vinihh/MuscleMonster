
import { Link } from 'react-router-dom'
import './index.scss'




export default function Login() {

    
    return (

        <div className="login">
            <div className="linha"></div>
            <div className='cadbox'>
                <h1>Login</h1>
                <input placeholder='E-mail'></input>
                <input placeholder='Senha'></input>

                <Link to='/home'><button>Entrar</button></Link>
                <Link to='/cadastro'><p>Não está registrado?
                    Junte-se a nós
                </p>
                </Link>
            </div>

        </div>



    )

}