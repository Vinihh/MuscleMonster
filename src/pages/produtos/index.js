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

            <div></div>
          </div>
        </div>
      </nav>


    </div>

  );
}


