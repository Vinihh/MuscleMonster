import Header from '../../components/header';
import Footer from '../../components/footer';
import Produto from '../../components/item-produto';
import './index.scss';

export default function PaginaProduto() {
  return (
    <div className="pg-produto">
      <Header />

      <nav>
        <div className='imagem'>
          <img src='/assets/images/produto3.png' />
        </div>

        <div className='info-produto'>
          <div>
            <h1>Whey Growth 80% Proteína Concentrada 1 Kg Sabor Leite</h1>
            <h2>R$98,99</h2>
            <h3>ou até 6x de R$16,66</h3>

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


