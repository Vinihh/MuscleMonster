import conexao from "./connection.js";

export async function Usuario(id) {

    const comando = `SELECT 
    id_cliente      as id,
        nm_cliente      as nome,
        ds_email        as email,
        ds_telefone     as telefone,
        id_endereco     as endereco
        FROM  tb_cliente
        where id_cliente = ? `;

  
    const [resposta] = await conexao.query(comando, [id]);
    return resposta;
  }
  