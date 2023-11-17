
import './index.scss';

export default function ProdutoCarrinho(props) {
    return (
        <div className="produto-carrinho">
            <img src={props.img} />

            <div className='valores'>
                <h3> {props.produto} </h3>
                <h2> {props.preco} </h2>
            </div>
        </div>
    );
}