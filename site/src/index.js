import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/home';
import HomeAdm from './pages/adm/home-adm';
import Addproduto from './pages/adm/add-produto';
import ProdutoAdm from './pages/adm/produto-adm';
import ClientesAdm from './pages/adm/clientes-adm';
import VendasAdm from './pages/adm/vendas-adm';
import Cadastro from './pages/cadastro';
import Login from './pages/login';
import PersonalAdm from './pages/adm/personal-adm';
import PaginaProduto from './pages/produtos';
import Endereco from './pages/endereco';
import Suplementos from './pages/suplementos';
import Equipamentos from './pages/equipamentos';
import RoupasAcessorios from './pages/roupas-acessorios';
import LoginAdm from './pages/adm/login-adm';
import MeuPerfil from './pages/meuperfil';
import MinhasCompras from './pages/minhascompras';
import MinhaContaUser from './pages/home-minha-conta';
import Carrinho from './pages/carrinho';
import Pagamento from './pages/pagamento'


import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Erro from './pages/erro';
import Enderecoo from './pages/endereco-user';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToastContainer />
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/adm/home' element={<HomeAdm />} />
        <Route path='/add-produto' element={<Addproduto />} />
        <Route path='/adm/produto' element={<ProdutoAdm />} />
        <Route path='/adm/busca-cliente' element={<ClientesAdm />} />
        <Route path='/adm/login-adm' element={<LoginAdm />} />
        <Route path='/adm/vendas' element={<VendasAdm />} />
        <Route path='/cadastro' element={<Cadastro />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/adm/login-adm' element={<LoginAdm />} />
        <Route path='/adm/personal' element={<PersonalAdm />} />
        <Route path='/produtos/:id' element={<PaginaProduto />} />
        <Route path='/carrinho' element={<Carrinho />} />
        <Route path='/endereco' element={<Endereco />} />
        <Route path='/pagamento' element={<Pagamento />} />
        <Route path='/suplementos' element={<Suplementos />} />
        <Route path='/equipamentos' element={<Equipamentos />} />
        <Route path='/roupas-acessorios' element={<RoupasAcessorios />} />
        <Route path='/home-minha-conta' element={<MinhaContaUser />} />
        <Route path='/minhascompras' element={<MinhasCompras />} />
        <Route path='/meuperfil' element={<MeuPerfil />} />
        <Route path='/adm/login' element={<LoginAdm />} />
        <Route path='/erro' element={<Erro />} />
        <Route path='/enderecoo' element={<Enderecoo />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);