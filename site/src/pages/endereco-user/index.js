import { Link } from 'react-router-dom';

import './index.scss';
import InfoMinhaConta from '../../components/info-minha-conta';
import Storage from 'local-storage'
import { API_URL } from '../../constants';
import axios from 'axios';
import { useEffect, useLayoutEffect, useState } from 'react';
import Header from '../../components/header';

export default function Enderecoo() {

  const id = Storage('usuario-logado').id;
  const [user, setUser] = useState([]);

  async function buscarCliente() {
    try {
      let resposta = await axios.get(API_URL + '/consulta/cliente/' + id)
      setUser(resposta.data)
    } catch (err) {

    }
  }

  useEffect(() => {
    buscarCliente();
  }, []);

  return (
    <div className="pagina-endereco">
      <Header />

      <aside>
        <InfoMinhaConta />

        <section>

          <h2>Endereço</h2>

          <div>
            <div>

              <div>
                <h1>Rua</h1>
                <input type="text" placeholder="Rua" />
              </div>

              <div>
                <h1>Rua</h1>
                <input type="text" placeholder="Rua" />
              </div>

            </div>

            <div>

              <div>
                <h1>Rua</h1>
                <input type="text" placeholder="Rua" />
              </div>

              <div>
                <h1>Rua</h1>
                <input type="text" placeholder="Rua" />
              </div>

            </div>

            <div>

              <div>
                <h1>Rua</h1>
                <input type="text" placeholder="Rua" />
              </div>

              <div>
                <h1>Rua</h1>
                <input type="text" placeholder="Rua" />
              </div>

            </div>

            <div>

              <div>
                <h1>Rua</h1>
                <input type="text" placeholder="Rua" />
              </div>

            </div>

            
            
          </div>
          
          <button> Salvar </button>
          
        </section>
      </aside>

    </div>
  );
}


