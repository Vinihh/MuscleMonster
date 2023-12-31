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

  export async function AlterarSenha(cliente) {

    const comando = `
    Update tb_cliente
    set ds_senha = ?
    where ds_email = ?;     `;

  
    const [resposta] = await conexao.query(comando, [cliente.senha,cliente.email]);
    return resposta;
  }
  

  export async function MostrarPedidosPorIdUsuario(id) {
    const comando = `
   SELECT
        P.id_produto            AS ID,
        S.id_status_pedido      AS IDStatus,
        ds_status_pedido        AS Status,
        nm_cliente              AS Usuario,
        nm_produto              AS Produto,
        nr_preco                AS Preco,
        dt_pedido               AS Data,
        img_produto             AS Imagem
    FROM tb_pedido AS A

    INNER JOIN
        tb_status_pedido AS S ON A.id_status_pedido = S.id_status_pedido
    INNER JOIN 
        tb_cliente AS C ON A.id_cliente = C.id_cliente
    INNER JOIN
        tb_produto AS P ON A.id_produto = P.id_produto
    WHERE id_cliente = ?;

    `

    const [resp] = await conexao.query(comando, [id]);
    return resp;
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

  export async function EditarNascimento(cliente){
    const comando = `update tb_cliente
    set dt_nascimento = ? 
    where id_cliente = ?
    `

    const [resposta] = await conexao.query(comando,[ cliente.data, cliente.id])

    return resposta;
  }

  export async function EditarTelefone(cliente){
    const comando = `update tb_cliente
    set ds_telefone = ?
    where id_cliente = ?
    `

    const [resposta] = await conexao.query(comando,[ cliente.telefone, cliente.id])

    return resposta;
  }
  
  export async function EditarNome(cliente){
    const comando = `update tb_cliente
    set nm_cliente = ?
    where id_cliente = ?
    `

    const [resposta] = await conexao.query(comando,[ cliente.nome, cliente.id])

    return resposta;
  }
  
  export async function Pagamento(pag) {

    let comando = `INSERT INTO tb_pagamento (id_cliente,nm_titular, ds_numero, ds_validade, ds_cvv, id_pagamento)
    VALUES (?,?, ?, ?, ?, ?);`;

    const [resposta] = await conexao.query(comando, [
        pag.idCliente,
        pag.titular,
        pag.numero,
        pag.validade,
        pag.cvv,
        pag.id
    ]);

    pag.id_pagamento = resposta.insertId;

    return pag;
}