
import './index.scss';


export default function PaginaSuplementos(props) {

    function FormatarPreco(preco) {
        return Number(preco).toFixed(2);
    }

    return (
        <div className="props-suplementos">
            <img src={props.imagem}/>
    
            <div className='div-sup'>
            <h3>{props.nome}</h3>
            <h4>{props.categoria}</h4>
            
            <h2>{'R$ ' + FormatarPreco(props.preco)}</h2> 
            <button>Ver detalhes</button>
            </div>
        </div>
      );
}