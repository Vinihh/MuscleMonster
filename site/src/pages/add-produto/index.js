import './index.scss';
import HeaderAdm from '../../components/header-adm';
import InfoAdm from '../../components/info-adm';
import { useState } from 'react';
import { inserirImagem,cadastrarProduto } from '../../api/addPrdtapi';
import 'react-confirm-alert/src/react-confirm-alert.css';
import axios from 'axios';
import Storage from 'local-storage';
import './toastStyles.css';





import { toast} from 'react-toastify';


export default function HomeAdm() {


  const [nomeproduto, setNomeproduto] = useState('')
  const [categoria, setCategoria] = useState('')
  const [descricao, setDescricao] = useState('')
  const [valor, setValor] = useState(0)
  const [estoque, setEstoque] = useState(0)
  const [imagem, setImagem] = useState('')

  const [salvo, setSalvo] = useState('')

  
  async function salvarClick(){
    try {
    
    if(imagem == ''){
      toast.error('Insira uma Imagem',{
        autoClose:2000,
      })
    }

    else{
      const produtos = await cadastrarProduto(nomeproduto ,categoria ,valor ,descricao ,estoque);
      const r = await inserirImagem(produtos.id,imagem);
      limpar();

      toast.success('produto cadastrado',{
        autoClose:2,
      });
    }

    

    } catch (err) {
      toast.error(err.response.data.erro)
      
    }
  }


  function limpar(){
      setNomeproduto('');
      setCategoria('');
      setDescricao('');
      setValor(0);
      setImagem('');
      setEstoque(0)

      
  }

  function escolherImagem(){
    document.getElementById('imagemProduto').click();
  }

  function mostrarImagem(){
    return URL.createObjectURL(imagem)
  }

  return (
    <div className="add-produto">
      <HeaderAdm />

      <nav>

        <InfoAdm />

        <div className='meio'>

          <h1>Adicionar Novos Produtos</h1>

          <div className='upload' onClick={escolherImagem}>

          {!imagem &&
            <img src='/assets/images/camicon.png' alt='' />
          }

          {imagem &&
            <img className='imagem-produto' src={mostrarImagem()} alt='' />
          }
            
            
            <input type='file' id='imagemProduto' onChange={e => setImagem(e.target.files[0])}/>

          </div>


          <div className='inputs'>

            <div>
            <h1>Nome</h1>
            <input type='text' value={nomeproduto} onChange={e => setNomeproduto(e.target.value)} />

            <h1>Descrição</h1>
            <textarea value={descricao}  onChange={e => setDescricao(e.target.value)}/>


            <h1>Categoria</h1>
            <input type='text' value={categoria} onChange={e => setCategoria(e.target.value)} />

            </div>

            <div>

            <h1>Preço</h1>
            <input type='number' step='10' value={valor} onChange={e => setValor(e.target.value)} />

            <h1>Estoque</h1>
            <input type='number' step='5' value={estoque} onChange={e => setEstoque(e.target.value)} />
            </div>
          </div>

          <button onClick={salvarClick}>Adicionar Produto</button>

          <p> {salvo} </p>

        </div>

      </nav>


    </div>
  );
}


