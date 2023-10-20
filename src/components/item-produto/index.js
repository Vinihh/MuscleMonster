
import './index.scss';

export default function Produto(props) {
  return (
    <div className="produto">
        <img src='/assets/images/image 6.png'/>

        <div>
        <h3>{props.nome}</h3>
        
        <h2>{props.preco}</h2>
        <p>{props.parcelado}</p>
        </div>
    </div>
  );
}