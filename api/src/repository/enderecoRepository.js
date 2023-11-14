import conexao from "./connection.js";


export async function CadastroEndereco(cadastro) {

    let comando = `insert into tb_endereco(ds_rua,ds_bairro,ds_cidade,nr_cep,nr_numero,ds_complemento,nm_contato,tel_contato,ds_referencia)
    values (?, ?, ?, ?, ?, ?, ?, ?,?);`;
    

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