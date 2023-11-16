
import { BuscarImagem } from '../../api/addPrdtapi';
import { API_URL } from '../../constants';
import './index.scss';

export default function Produto(props) {

  function FormatarPreco(preco) {
    return Number(preco).toFixed(2);
}

  return (
    <div className="produto">
        <img src={BuscarImagem(props.prod.img)}/>

        <div>
        <h3>{props.prod.produto}</h3>
        
        <h2>R$ {FormatarPreco(props.prod.preco)}</h2>
        <p>{props.prod.parcelado}</p>
        </div>
    </div>
  );
}