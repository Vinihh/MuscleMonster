import conexao from "./connection.js";


export async function CadastroEndereco(cadastro) {

    let comando = `insert into
    ds_rua              as rua,
    ds_bairro           as bairro,
    ds_cidade           as cidade,
    nr_cep              as cep,
    nr_numero           as numero,
    ds_complemento      as complemento,
    nm_contato          as contato,
    tel_contato         as telefone,
    ds_referencia       as referencia
    from tb_endereco
    values (?, ?, ?, ?, ?, ?, ?, ?)`;
    

    const [resposta] = await conexao.query(comando, [
        cadastro.rua,
        cadastro.bairro,
        cadastro.cidade,
        cadastro.cep,
        cadastro.numero,
        cadastro.complemento,
        cadastro.contato,
        cadastro.telefone,
        cadastro.referencia,
        cadastro.id
    ]);

    cadastro.id = resposta.insertId

    return cadastro;

}