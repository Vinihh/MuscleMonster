import Footer from '../../components/footer'
import HeaderSimple from '../../components/header2'
import './index.scss'





export default function Endereco(){

    

    return(
        
        <div className="endereco">
            <HeaderSimple/>
        
            <div className='enderecobox'>
                <h1>Endereço</h1>
                
                <input placeholder='CEP'></input>
                <input placeholder='Estado/Cidade'></input>
                <input placeholder='Bairro'></input>
                <input placeholder='Rua'></input>
                <input placeholder='Número'></input>
                <input placeholder='Complemento'></input>
                <button>Continuar Compra</button>
                
            </div>

            <Footer/>
        </div>



    )

}