
import './index.scss';


export default function PaginaEquipamentos(props) {

    function FormatarPreco(preco) {
        return Number(preco).toFixed(2);
    }

    return (
        <div className="props-equipamentos">

            <div className='props-img'>
            <img src={props.imagem}/>
            </div>

            <div className='info-props'>   
            <h3>{props.nome}</h3>
            <h2>{'R$ ' + FormatarPreco(props.preco)}</h2>
            </div>
        </div>
      );
}