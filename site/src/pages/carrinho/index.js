import './index.scss';
import Header from '../../components/header2';
import ProdutoCarrinho from '../../components/produto-carrinho';
import { useEffect, useState } from 'react';
import storage from 'local-storage';
<<<<<<< HEAD
=======
import { BuscarImagem, BuscarProdutoPorId } from '../../api/addPrdtapi';
>>>>>>> 0d3ea18c9358e8c2593119242b1f121f330a7c2c
import { API_URL } from '../../constants';
import axios from 'axios';
import { confirmAlert } from 'react-confirm-alert';

const api = axios.create({
  baseURL: API_URL,
});

export default function Carrinho() {
  const [itens, setItens] = useState([]);

<<<<<<< HEAD
  async function buscarProduto(id) {
    try {
      const resposta = await api.get(API_URL + `/listar/produto/${id}`);
      return resposta.data;
    } catch (erro) {
      console.error("Erro ao buscar produto por ID:", erro);
      return null;
    }
  }

=======
>>>>>>> 0d3ea18c9358e8c2593119242b1f121f330a7c2c
  async function carregarCarrinho() {
    let carrinho = storage('carrinho');
    if (carrinho) {

      let temp = [];

      for (let produto of carrinho) {
        let p = await BuscarProdutoPorId(produto.id)
        console.log(p)

        temp.push({
          produto: p,
          qtd: produto.qtd
        })

        console.log(temp);
        setItens(temp)
      }
    }
  }

  function qtdItens() {
    return itens.length;
  }

  function ValorTotal(itens) {
    let total = 0;

    for (let item of itens) {
      if (item.produto) {
        total += item.produto.preco * 1;
      }
    }
    return total.toFixed(2);
  }

  function ApagarItemDoCarrinho() {
    confirmAlert({
      title: 'Usuário',
      message: 'Tem certeza que deseja apagar todos os itens do carrinho?',
      buttons: [
        {
          label: 'Sim',
          onClick: async () => {
            storage.clear('carrinho');
            carregarCarrinho();
          },
        },
        {
          label: 'Não',
        },
      ],
    });
  }

  useEffect(() => {
    carregarCarrinho();
  }, []);

 
  const handleRemoveItem = (productId) => {
    
    let novoCarrinho = storage('carrinho');
    console.log('Antes de remover:', novoCarrinho);
  
    novoCarrinho = novoCarrinho.filter((item) => item.produto.id !== productId);
    console.log('Depois de remover:', novoCarrinho);
  
    storage.set('carrinho', novoCarrinho);
    carregarCarrinho();
  };
  



  return (
    <section className='pagina-carrinho'>
      <Header />
      <div className='titulo'>
        <h1>Carrinho</h1>
      </div>

      <div className='qtd'>
        <h1>{`Quantidade de itens no carrinho ( ${qtdItens()} )`}</h1>
        <button onClick={ApagarItemDoCarrinho}>Limpar Carrinho</button>
      </div>

      <div className='info-carrinho'>
        <div className='produtos-carrinho'>
<<<<<<< HEAD
          {itens.map((item, index) => (
            <ProdutoCarrinho
              key={index}
              produto={item.produto}
              imagem={item.produto.imagem}
              qtd={item.qtd}
              onRemoveItem={handleRemoveItem}
            />
=======
        {itens.map((item, index) => (
            <ProdutoCarrinho key={index} item={item} />
>>>>>>> 0d3ea18c9358e8c2593119242b1f121f330a7c2c
          ))}
        </div>
      </div>
      <div className='total'>
        <div>
<<<<<<< HEAD
          <p>{`Valor total ${ValorTotal(itens)}`}</p>
=======
          <p>Total (), itens ()</p>
>>>>>>> 0d3ea18c9358e8c2593119242b1f121f330a7c2c
          <button>Fazer Compra</button>
        </div>
        <hr/>
      </div>
    </section>
  );
}
