import Footer from '../../components/footer'
import HeaderSimple from '../../components/header2'
import './index.scss'
import { Link } from 'react-router-dom';
import { useState } from 'react';



export default function Endereco(){

    const [ Nome, setNome ] = useState('')


    

    return (

        
        <div className='endereco'>

            <HeaderSimple/>
<div className='voltar'>
            <Link className='icon' to={'/home-minha-conta'}><img src='/assets/images/voltar.png'></img></Link>
            </div>

        <div class="endereco_form_container">
        <div class="endereco_form">
          <h2>Endereço</h2>
          <div class="input_group">
            
           
    
    
          </div>
          <p>Nome Completo:</p>
            <div class="input_endereco">
              
              <input
                type="text"
                class="input_text"
                value
                onChange={e => (e.target.value)} 
              />
    
            </div>
            <p>Telefone:</p>
            <div class="input_endereco">
              <input
                type="text"
                class="input_text"
                value
                onChange={e => (e.target.value)} 
              />
    
            </div>

            <p>CEP:</p>
            <div class="input_endereco">
              <input
                type="text"
                placeholder="Confirme sua senha"
                class="input_text"
                value
                onChange={e => (e.target.value)} 
              />
    
            </div>

            <p>Rua:</p>
            <div class="input_endereco">
              <input
                type="text"
              
                class="input_text"
                value
                onChange={e => (e.target.value)} 
              />
    
            </div>
            
            <p>N°:</p>
            <div class="input_endereco">
              <input
                type="text"
                placeholder="Confirme sua senha"
                class="input_text"
                value
                onChange={e => (e.target.value)} 
              />
    
            </div>

         
        </div>
      </div>
      </div>
      );

}