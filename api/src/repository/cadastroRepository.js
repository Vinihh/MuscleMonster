import conexao from "./connection.js"; 

export async function NovoCadastro(cliente) {

    const comando = 'insert into tb_cliente (nm_cliente, ds_email, ds_telefone, ds_senha) VALUES (?, ?, ?, ?)';

    const [resposta] = await conexao.query(comando, [
        cliente.nome, 
        cliente.email, 
        cliente.telefone, 
        cliente.senha
    ]);

    cliente.id_cliente = resposta.insertId;

    return cliente;
}

export async function consultar(cliente) {
    let comando = `
        select cc.id_cliente			    as id,
                cc.nm_cliente				  as cliente,
                cc.ds_email			              as email,
                cc.ds_telefone				      as telefone
          from tb_cliente   				      as cc
          where ds_email like ?
    `
  
    let [dados] = await conexao.query(comando,
      [
        '%' + cliente + '%'
      ])
    return dados;
  }
  

