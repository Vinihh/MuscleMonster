import './index.scss';

export default function CardEnderecopg({item: {referencia, rua, cep, bairro, cidade, numero, complemento}}){
    
    return(
        <div className='comp-card-endereco-pg'>
            <div className='tipos'>{referencia}</div>

            <div>
                <div className='ends'>{rua}, {numero} - {complemento}</div>
                <div className='ceps'>{cep}- {bairro}, {cidade}</div>
            </div>
        </div>
    )
}