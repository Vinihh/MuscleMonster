import { Link, useNavigate } from 'react-router-dom';
import './index.scss';
import React, { useEffect } from 'react';
import { API_URL } from '../../constants';
import { useState } from 'react';
import storage from 'local-storage';
import { toast } from 'react-toastify';
import axios from 'axios';
import { confirmAlert } from 'react-confirm-alert';
import { Navigate } from 'react-router-dom';
import { inserirImagemCliente } from '../../api/addPrdtapi';


export default function InfoMinhaConta() {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [imagem, setImagem] = useState('');
  const [id, setId] = useState(0);
  const [img, setImg] = useState('');


  const navigate = useNavigate();


  const [usuario, setUsuario] = useState([]);

  function sairClick() {
    confirmAlert({
      title: 'Usuário',
      message: 'Tem certeza que deseja sair da conta?',
      buttons: [
        {
          label: 'Sim',
          onClick: async () => {

            storage.clear('usuario-logado');
            navigate('/')
            toast.success('Você saiu da sua conta!')
          }
        },
        {
          label: 'Não'
        }
      ]
    });
  }

  async function trocarImg() {
    try {

      if (imagem == '') {
        toast.error('Insira uma Imagem', {
          autoClose: 2000,
        })
      }

      else {
        const r = await inserirImagemCliente(id, imagem);
        let novaImagem = r.imagem;

        var imgcliente = JSON.parse(localStorage.getItem('usuario-logado'));
        imgcliente.img = novaImagem;
        localStorage.setItem('usuario-logado', JSON.stringify(imgcliente));





        toast.success('Imagem Salva!', {
          autoClose: 2,
        });
        setImagem('')
        window.location.reload('/home-minha-conta')
      }

    } catch (err) {
      toast.error(err.response.data.erro)

    }
  }

  function escolherImagem() {
    document.getElementById('imagemCliente').click();
  }

  function mostrarImagem() {
    return URL.createObjectURL(imagem)
  }


  useEffect(() => {
    if (storage('usuario-logado')) {
      const usuariologado = storage('usuario-logado');
      setNome(usuariologado.nome)
      setEmail(usuariologado.email)
      setId(usuariologado.id)
      setImg(usuariologado.img)
    }
  }, [])




  return (
    <div className="info-minha-conta">

      <div className='user'>

        <div className='imagem-usuario' >

          {!imagem &&
            <img id={!img ? 'img-user2' : 'img-user'} src={!img ? '/assets/images/meuperfil.png' : API_URL + '/' + img} alt='' />
          }

          {imagem &&
            <img className='imagem-cliente' src={mostrarImagem()} alt='' />
          }


          <input type='file' id='imagemCliente' onChange={e => setImagem(e.target.files[0])} />

        </div>
        {imagem ? <button onClick={trocarImg}><img src='/assets/images/salvar.png' /></button> : <button onClick={escolherImagem}><img src='/assets/images/editar.png' /></button>}
        <h1>Olá, {nome}</h1>
        <p>Seja Bem-Vindo</p>

      </div>

      <div className='linkss'>
        <div className='linkss-pt1'>
          <div>
            <Link to={'/meuperfil'}>
              <img src='/assets/images/icon1.png' alt='' />
              Meu Perfil
            </Link>

            <Link to={'/minhascompras'}>
              <img src='/assets/images/icon2.png' alt='' />
              Minhas Compras
            </Link>

            <Link to={'/enderecoo'}>
              <img src='/assets/images/icon3.png' alt='' />
              Endereço
            </Link>

            <Link>
              <img src='/assets/images/whatsapp.png' alt='' />
              Contate-nos via WhatsApp
            </Link>

            <Link>
              <img src='/assets/images/icon4.png' alt='' />
              Trocar senha
            </Link>
          </div>
        </div>


      </div>

      <button className='sair'
        onMouseOver={() => setShowPassword(true)}
        onMouseOut={() => setShowPassword(false)}
        onClick={sairClick}>
        {showPassword ? <img src='/assets/videos/logout.gif' alt='' /> : <img src='/assets/images/logout.png' alt='' />}
      </button>
    </div>
  );
}
