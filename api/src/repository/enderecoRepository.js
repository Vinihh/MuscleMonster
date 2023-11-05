import conexao from "./connection.js";


export async function CadastroEndereco(cadastro) {

    let comando = 'INSERT INTO tb_endereco (nm_nome_completo, nr_telefone, ds_rua, ds_bairro, ds_cidade, nr_cep, nr_numero, ds_complemento, ds_referencia) VALUES (?,?,?,?,?,?,?,?,?) '

    const [resposta] = await conexao.query(comando, [
        cadastro.nomecompleto,
        cadastro.telefone,
        cadastro.rua,
        cadastro.bairro,
        cadastro.cidade,
        cadastro.cep,
        cadastro.numero,
        cadastro.complemento,
        cadastro.referencia,
        cadastro.id
    ]);

    cadastro.id = resposta.insertId

    return cadastro;

}