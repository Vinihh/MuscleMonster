import './index.scss';

export default function CardEndereco({item: {referencia, rua, cep, bairro, cidade, numero, complemento}}){
    
    return(
        <div className='comp-card-endereco'>
            <div className='tipo'>{referencia}</div>

            <div>
                <div className='end'>{rua}, {numero} - {complemento}</div>
                <div className='cep'>{cep}- {bairro}, {cidade}</div>
            </div>
        </div>
    )
}