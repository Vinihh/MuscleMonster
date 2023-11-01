import './index.scss'
import Header from '../../components/header2'
import ProdutoCarrinho from '../../components/produto-carrinho'


export default function Carrinho() {



    return (

        <section className='pagina-carrinho'>

            <Header />

            <div className='titulo'>
                <h1>Carrinho</h1>
            </div>

            <div className='produtos-carrinho'>

                <ProdutoCarrinho/>

            </div>

            <div className='forma-pagamento'> 

                

            </div>

                <hr/>

            <div className='total'>

                <p>Total ( 0 itens ): R$0,00</p>
                <button>Fazer Compra</button>

            </div>

        </section>
    )
}
