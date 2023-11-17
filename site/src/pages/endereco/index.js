import './index.scss'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { toast, Toast } from 'react-toastify';
import axios from 'axios';
import { API_URL } from '../../constants';
import Header from '../../components/header';
import storage from 'local-storage'


export default function Endereco() {

  const [contato, setContato] = useState('')
  const [telefone, setTelefone] = useState('')
  const [cep, setCep] = useState('')
  const [rua, setRua] = useState('')
  const [bairro, setBairro] = useState('')
  const [cidade, setCidade] = useState('')
  const [numero, setNumero] = useState(0)
  const [complemento, setComplemento] = useState('')
  const [referencia, setReferencia] = useState('')
  const usuariologado = storage('usuario-logado');


  async function CadastroEndereco() {

    const endereco = {

      contato: contato,
      telefone: telefone,
      rua: rua,
      bairro: bairro,
      cidade: cidade, 
      cep: cep,
      numero: numero,
      complemento: complemento,
      referencia: referencia,
      idCliente:usuariologado.id
    };



    try {

      let resposta = await axios.post( API_URL + '/endereco', endereco)
      toast.success('Endereço cadastrado com Sucesso')
      limpar()

    } catch (err) {
      toast.error(err.response.data.erro);
    };
  }

  function limpar() {
    setContato('')
    setTelefone('')
    setRua('')
    setBairro('')
    setCidade('')
    setCep('')
    setNumero('')
    setComplemento('')
    setReferencia('')
  }
  
  function TeclaEnter(e) {
    if (e.key === 'Enter') {
      CadastroEndereco()
    }

  }

  return (


    <div className='endereco'>

      <Header/>

      

      <div class="endereco_form_container">

          <h2>Endereço</h2>
          <div class="input_group">
          </div>

          <div className='parse'>
          <div className='parserow'>
          <p>Nome Contato:</p>
          <div class="input_endereco">

            <input
              type="text"
              class="input_text"
              value={contato}
              onChange={e => setContato(e.target.value)}
            />

          </div>
          <p>Telefone:</p>
          <div class="input_endereco">
            <input
              type="text"
              class="input_text"
              value={telefone}
              onChange={e => setTelefone(e.target.value)}
            />

          </div>

          <p>CEP:</p>
          <div class="input_endereco">
            <input
              type="text"
              class="input_text"
              value={cep}
              onChange={e => setCep(e.target.value)}
            />

          </div>
          </div>
          
          <div className='parserow'>
          <p>Cidade:</p>
          <div class="input_endereco">
            <input
              type="text"
              class="input_text"
              value={cidade}
              onChange={e => setCidade(e.target.value)}
            />

          </div>

          <p>Bairro</p>
          <div class="input_endereco">
            <input
              type="text"
              class="input_text"
              value={bairro}
              onChange={e => setBairro(e.target.value)}
            />

          </div>

          <p>Rua:</p>
          <div class="input_endereco">
            <input
              type="text"

              class="input_text"
              value={rua}
              onChange={e => setRua(e.target.value)}
            />

          </div>
          </div>
          </div>

          <div className='comp-num'>

            <div>

              <p>Complemento:</p>
              <div class="input_endereco">
                <input
                  type="text"
                  class="input_textn"
                  value={complemento}
                  onChange={e => setComplemento(e.target.value)}
                />

              </div>

            </div>


            <div>

              <p>N°:</p>
              <div class="input_endereco">
                <input
                  type="text"
                  class="input_textn"
                  value={numero}
                  onChange={e => setNumero(e.target.value)}
                />

              </div>
            </div>
          </div>


          <p>Referêrencia:</p>
          <div class="input_endereco">
            <input
              type="text"
              class="input_textn"
              value={referencia}
              onChange={e => setReferencia(e.target.value)}
              onKeyUp={TeclaEnter}
            />

          </div>

          <div className='cadastrar-endereco'>

            <button onClick={CadastroEndereco}>Concluir</button>

          </div>

      </div>
      
    </div>
  );

}