import { BuscarImagem } from '../../api/addPrdtapi';
import './index.scss';

export default function ProdutoCarrinho(props) {

    

    return (
        <div className="produto-carrinho">
            <img src={BuscarImagem(props.item.produto.img)} />

            <div className='valores'>
                <h3> {props.item.produto.produto} </h3>
                <h2> {props.item.produto.preco} </h2>
            </div>
        </div>
    );
}