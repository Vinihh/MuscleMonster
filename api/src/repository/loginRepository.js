import conexao from "./connection.js";

export async function verificarLogin(email,senha) {

    const comando = `
      SELECT 
      id_clite as id,
      ds_email as email, 
      ds_senha as senha
      FROM tb_cliente
      where ds_email = ?
      and ds_senha = ?
    `;
    
   const [dados] = await conexao.query(comando, [email,senha]);

    return dados
}