import conexao from "./connection.js";


export async function CadastroEndereco(cadastro) {

    let comando = `INSERT INTO tb_endereco(ds_rua, ds_bairro, ds_cidade, nr_cep, nr_numero, ds_complemento, nm_contato, tel_contato, ds_referencia, id_cliente)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`;

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
        cadastro.id_cliente
    ]);

    cadastro.id = resposta.insertId;

    return cadastro;
}

export async function listarEndereco(id){
    let comando = `
        select 
        ds_rua          as rua,
        ds_bairro       as bairro,
        ds_cidade       as cidade,
        nr_cep          as cep,
        ds_complemento  as complemento,
        nm_contato      as contato,
        tel_contato     as telefone,
        ds_referencia   as referencia
        from tb_endereco
        where id_cliente = ?
        `;

    const [resposta] = await conexao.query(comando,[id]);
    return resposta

}
