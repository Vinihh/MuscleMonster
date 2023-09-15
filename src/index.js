import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/home';
import HomeAdm from './pages/adm/home-adm';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/adm/home' element={<HomeAdm />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

