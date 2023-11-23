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
import CardEndereco from '../../components/cardEndereco';

export default function EnderecoList() {

  const id = Storage('usuario-logado').id;
  const [enderecos, setEnderecos] = useState([]);

  async function buscarEndereco(){
    const r = await listEndereco();
    setEnderecos(r)
  }

  useEffect(() => {
   buscarEndereco();
  }, []);

  return (
    <div className="pagina-endereco-list">
      <Header />
      <ToastContainer />

      <aside>
        <InfoMinhaConta />

        <section>

          <h2>Endereços</h2>

          <div>
            {enderecos.map(item =>
              <CardEndereco item={item} />
              )}
          </div>


        </section>
      </aside>

    </div>
  );
}


