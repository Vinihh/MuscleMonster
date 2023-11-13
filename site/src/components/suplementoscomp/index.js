
import './index.scss';


export default function PaginaSuplementos(props) {

    return (
        <div className="props-suplementos">
            <img src={props.imagem}/>
    
            <div>
            <h3>{props.nome}</h3>
            
            <h2>{'R$ ' + props.preco}</h2>
            </div>
        </div>
      );
}