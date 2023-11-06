import Footer from '../../components/footer'
import HeaderSimple from '../../components/header2'
import './index.scss'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { toast, Toast } from 'react-toastify';
import axios from 'axios';



export default function Endereco() {

  const [nomeCompleto, setNomeCompleto] = useState('')
  const [telefone, setTelefone] = useState('')
  const [cep, setCep] = useState('')
  const [rua, setRua] = useState('')
  const [bairro, setBairro] = useState('')
  const [cidade, setCidade] = useState('')
  const [numero, setNumero] = useState(0)
  const [complemento, setComplemento] = useState('')
  const [referencia, setReferencia] = useState('')



  async function CadastroEndereco() {

    const endereco = {

      nomecompleto: nomeCompleto,
      telefone: telefone,
      rua: rua,
      bairro: bairro,
      cidade: cidade,
      cep: cep,
      numero: numero,
      complemento: complemento,
      referencia: referencia
    };

    limpar()

    try {

      let resposta = await axios.post( API_URL + '/endereco', endereco)
      toast.success('Endereço cadastrado com Sucesso')

    } catch (err) {
      toast.error(err.response.data.erro);
    };
  }

  function limpar() {
    setNomeCompleto('')
    setTelefone('')
    setRua('')
    setBairro('')
    setCidade('')
    setCep('')
    setNumero('')
    setComplemento('')
    setReferencia('')
  }


  return (


    <div className='endereco'>

      <HeaderSimple />
      <div className='voltar'>
        <Link className='icon' to={'/home-minha-conta'}><img src='/assets/images/voltar.png'></img></Link>
      </div>

      <div class="endereco_form_container">
        <div class="endereco_form">

          <h2>Endereço</h2>
          <div class="input_group">
          </div>


          <p>Nome Completo do destinatário:</p>
          <div class="input_endereco">

            <input
              type="text"
              class="input_text"
              value={nomeCompleto}
              onChange={e => setNomeCompleto(e.target.value)}
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
            />

          </div>

          <div className='cadastrar-endereco'>

            <button onClick={CadastroEndereco}>Concluir</button>

          </div>

        </div>

      </div>
    </div>
  );

}