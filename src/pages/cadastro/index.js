import { Link } from 'react-router-dom'
import './index.scss'





export default function Cadastro(){

    

    return(
        
        <div className="cadastro">
        <div className="linha"></div>
            <div className='cadbox'>
                <h1>Cadastro</h1>
                <input placeholder='Nome'></input>
                <input placeholder='Telefone'></input>
                <input placeholder='E-mail'></input>
                <input placeholder='Senha'></input>
                <input placeholder='Confirme sua Senha'></input>
                <Link to='/login'><button>Cadastrar</button></Link>
            </div>

        </div>



    )

}