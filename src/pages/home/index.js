import Header from '../../components/header';
import Footer from '../../components/footer';
import Produto from '../../components/item-produto';
import './index.scss';

function Home() {
  return (
    <div className="App">
      <Header />
      
      <nav>
        <h1>NO PAIN , NO GAIN</h1>
        <h3>O QUE A MENTE QUER, O CORPO ALCANÇA</h3>
      </nav>

      <aside>
        <div>
          <img src='/assets/images/img1.png' alt='' />
          <h1> Suplementos</h1>
        </div>

        <div>
          <img src='/assets/images/img2.png' alt='' />
          <h1>Equipamentos</h1>
        </div>

        <div>
          <img src='/assets/images/img3.png' alt='' />
          <h1>Roupas/Acessórios</h1>
        </div>
      </aside>

      <section>
        <img src='/assets/images/img4.png' alt='' />
          <div>
            <h1>Gostaria de aprender a treinar da maneira correta?</h1>
                        
            <h4>Na Muscle Monster você poderá encontrar diversos personal trainers para ajudá-los a treinar da maneira certa!!</h4>

            <button> Fale Conosco </button>
          </div>
      </section>

      <section className='home-produtos'>
          <h1>OS MAIS VENDIDOS</h1>

          <div>

            <Produto/>

          </div>
      </section>

    <Footer/>

    </div>


  );
}

export default Home;
