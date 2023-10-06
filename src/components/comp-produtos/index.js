import Header from '../header';
import Footer from '../footer';
import Produto from '../item-produto';
import './index.scss';

export default function PaginaProdut(props) {
  return (
    <div className="pg-produto">
      <Header />

      <nav>
        <div className='imagem'>
          <img src={props.imagem} />
        </div>

        <div className='info-produto'>
          <div>
            <h1>{props.produto}</h1>
            <h2>{props.preco}</h2>
            <h3>{props.estoque} </h3>

            <div className='imagens'>
              <img src='/assets/images/produto1.png' />
              <img src='/assets/images/produto2.png' />
              <img src='/assets/images/produto3.png' />
            </div>

            <button> Adicionar ao carrinho </button>

            <div className='form-pay'>
              <img src='/assets/images/form-pay1.png' alt='' />
              <img src='/assets/images/form-pay2.png' alt='' />
              <img src='/assets/images/form-pay3.png' alt='' />
              <img src='/assets/images/form-pay4.png' alt='' />
            </div>
          </div>
        </div>
      </nav>

      <hr></hr>

      <section>
        <h1> Descrição</h1>
      </section>

    </div>

  );
}


