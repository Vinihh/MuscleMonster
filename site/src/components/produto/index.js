import { BuscarImagem } from '../../api/addPrdtapi';
import './index.scss';


export default function PaginaProduto(props) {

    function FormatarPreco(preco) {
        return Number(preco).toFixed(2)
    }

    return (
        <div className="pg-produto">

            <nav>
                <div className='imagem'>
                    <img src={BuscarImagem(props.produtoss.imagem)} />
                </div>

                <div className='info-produto'>
                    <div>
                        <h1>{props.produtoss.produto}</h1>
                        <h2>{'R$ ' + FormatarPreco(props.produtoss.preco)}</h2>
                        <h3>{'Disponivel: ' + props.produtoss.estoque} </h3>


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

                <div className='descricao'>

                    <h1> {props.produtoss.descricao} </h1>

                </div>
            </section>
         
        </div>

      


    );
}