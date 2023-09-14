import Header from '../../components/header';
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

    </div>
  );
}

export default Home;
