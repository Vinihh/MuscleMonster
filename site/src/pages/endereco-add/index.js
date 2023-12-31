import { Link } from 'react-router-dom';
import './index.scss';
import InfoMinhaConta from '../../components/info-minha-conta';
import Storage from 'local-storage'
import { API_URL } from '../../constants';
import axios from 'axios';
import { useEffect, useLayoutEffect, useState } from 'react';
import Header from '../../components/header';
import storage from 'local-storage'
import { toast, ToastContainer } from 'react-toastify';
import { listEndereco } from '../../api/addPrdtapi';

export default function EnderecoAdd() {

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
  const [endereco,setEndereco]= useState([]);

  const id = Storage('usuario-logado').id;
  const [user, setUser] = useState([]);

  async function buscarEndereco(){
    const r = await listEndereco();
    setRua(r.rua)
    setBairro(r.bairro)
    setCidade(r.cidade)
    setCep(r.cep)
    setComplemento(r.complemento)
    setContato(r.contato)
    setTelefone(r.contato)
    setReferencia(r.referencia)
  }

  async function buscar() {
    let url = 'https://viacep.com.br/ws/' + cep + '/json/';
    let r = await axios.get(url);
    setBairro(r.data.bairro)
    setRua(r.data.logradouro)
    setCidade(r.data.localidade)
  }

  async function cadastroEndereco() {
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
      id_cliente: usuariologado.id
    };


    try {

      let r = await axios.post(API_URL + '/endereco', endereco)
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
      buscar()
    }

  }

  useEffect(() => {
   buscarEndereco();
  }, []);

  return (
    <div className="pagina-endereco">
      <Header />
      <ToastContainer />

      <aside>
        <InfoMinhaConta />

        <section>

          <h2>Endereço</h2>

          <div>
            <div>

              <div>
                <h1>Nome Contato</h1>
                <input
                  type="text"
                  class="input_text"
                  value={contato}
                  onChange={e => setContato(e.target.value)}
                />
              </div>

              <div>
                <h1>Telefone</h1>
                <input
                  type="text"
                  class="input_text"
                  value={telefone}
                  onChange={e => setTelefone(e.target.value)}
                />
              </div>

            </div>

            <div>

              <div>
                <h1>CEP</h1>
                <input
                  type="text"
                  class="input_text"
                  value={cep}
                  onKeyUp={TeclaEnter}
                  onBlur={buscar}
                  onChange={e => setCep(e.target.value)}
                />
              </div>

              <div>
                <h1>Cidade</h1>
                <input
                  type="text"
                  class="input_text"
                  value={cidade}
                  onChange={e => setCidade(e.target.value)}
                />
              </div>

            </div>

            <div>

              <div>
                <h1>Bairro</h1>
                <input
                  type="text"
                  class="input_text"
                  value={bairro}
                  onChange={e => setBairro(e.target.value)}
                />
              </div>

              <div>
                <h1>Rua</h1>
                <input
                  type="text"
                  class="input_text"
                  value={rua}
                  onChange={e => setRua(e.target.value)}
                />
              </div>

            </div>

            <div>

              <div>
                <h1>Complemento</h1>
                <input
                  type="text"
                  class="input_textn"
                  value={complemento}
                  onChange={e => setComplemento(e.target.value)}
                />
              </div>

              <div>
                <h1>N°</h1>
                <input
                  type="text"
                  class="input_textn"
                  value={numero}
                  onChange={e => setNumero(e.target.value)}
                />
              </div>

            </div>

            <div>

              <div>
                <h1>Nome do Endereço</h1>
                <input
                  type="text"
                  class="input_textn"
                  value={referencia}
                  onChange={e => setReferencia(e.target.value)}
                  onKeyUp={TeclaEnter}
                />

                <button onClick={cadastroEndereco}> Salvar </button>
              </div>

            </div>



          </div>


        </section>
      </aside>

    </div>
  );
}


