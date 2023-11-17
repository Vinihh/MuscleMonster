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
  

export async function TrocarImagem(imagem, id) {
  const comando =
      `UPDATE tb_cliente
      SET url_img         = ?
      WHERE id_cliente    = ? `;
  
  const [resposta] = await conexao.query(comando, [imagem, id]);
  return resposta.affectedRows;
}

export async function BuscarCliente(nome) {
    const comando = `SELECT
                        id_cliente      as id,
                        url_img         as img,
                        nm_cliente      as cliente,
                        ds_email        as email,
                        ds_telefone     as telefone
                        FROM  tb_cliente
                        WHERE nm_cliente like ?`;
  
    const [resposta] = await conexao.query(comando, [ `%${nome}%` ])
    return resposta
  }

  export async function ConsultarCliente() {

    const comando = `SELECT
    id_cliente      as id,
    url_img         as img,
    nm_cliente      as cliente,
    ds_email        as email,
    ds_telefone     as telefone
    FROM  tb_cliente
  `;
  
    const [resposta] = await conexao.query(comando);
    return resposta;
  }

  export async function EditarCliente(cliente){
    const comando = `update tb_cliente
    set nm_cliente = ?
    or  ds_telefone = ?
    or  dt_nascimento = ? 
    where id_cliente = ?
    `

    const [resposta] = await conexao.query(comando,[ cliente.nome, cliente.email, cliente.telefone, cliente.data, cliente.id])

    return resposta;
  }
  
  