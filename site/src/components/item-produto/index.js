
import { API_URL } from '../../constants';
import './index.scss';

export default function Produto(props) {
  return (
    <div className="produto">
        <img src={API_URL + '/' + props.imagem}/>

        <div>
        <h3>{props.nome}</h3>
        
        <h2>{props.preco}</h2>
        <p>{props.parcelado}</p>
        </div>
    </div>
  );
}