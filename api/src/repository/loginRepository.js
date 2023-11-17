import conexao from "./connection.js";

export async function verificarLogin(email,senha) {

    const comando = `
      SELECT 
      id_cliente as id,
      url_img     as img,
      nm_cliente as nome,
      ds_telefone as telefone,
      ds_email as email 
      FROM tb_cliente
      where ds_email = ?
      and ds_senha = ?
    `;
    
    let respostas = await conexao.query(comando, [email,senha]);
    
    let linhas = respostas[0];
    let linha = linhas[0];
    console.log(linha)
  
    return linha;
}

export async function loginAdm(email,senha) {

  const comando = `
    SELECT 
    id_adm as id,
    nm_adm as adm
    FROM tb_adm_login
    where nm_adm = ?
    and ds_senha = ?
  `;
  
  let respostas = await conexao.query(comando, [email,senha]);
  
  let linhas = respostas[0];
  let linha = linhas[0];
  console.log(linha)

  return linha;
}