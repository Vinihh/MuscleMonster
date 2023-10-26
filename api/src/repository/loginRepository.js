import conexao from "./connection.js";

export async function verificarLogin(email,senha,id) {

    const comando = `
      SELECT 
      ds_email  as email, 
      ds_senha  as senha
      FROM      tb_cliente
      where       ds_senha    = ?
      and       ds_email    = ?
    `;
    
   const [dados] = await conexao.query(comando, [email,senha,id]);

    return dados
}