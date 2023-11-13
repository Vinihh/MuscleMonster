import conexao from "./connection.js";

export async function consultarProdutos() {

  const comando = `SELECT id_produto      as id,
  url_img         as img,
  nm_produto      as produto,
  ds_categoria    as categoria,
  vl_valor        as preco,
  qtd_estoque     as estoque
FROM  tb_produto`;

  const [resposta] = await conexao.query(comando);
  return resposta;
}

export async function BuscarPorNome(nome) {
  const comando = `SELECT id_produto      as id,
                          url_img         as img,
                          nm_produto      as produto,
                          ds_categoria    as categoria,
                          vl_valor        as preco,
                          qtd_estoque     as estoque
                    FROM  tb_produto
                    WHERE nm_produto like ?`;

  const [resposta] = await conexao.query(comando, [ `%${nome}%` ])
  return resposta
}


export async function deletarProduto(id) {
  try {
      const comando = 'DELETE FROM tb_produto WHERE id_produto = ?';

      const [resposta] = await conexao.query(comando, [id]);

  } catch (err) {
      throw new Error(err.message);
  }
}


export async function alterarProduto(id, produto) {

  let comando = `
            update tb_produto 
                    nm_produto            = ?,
                   vl_valor               = ?,
                   vl_valor_promocional   = ?,
                   nr_qtd_estoque         = ?,
                   id_categoria           = ?,
                   bt_disponivel          = ?,
                   ds_descricao           = ?,
                  where id_produto        = ?
        `

  let [resp] = await conexao.query(comando,
    [
      produto.nome,
      produto.valor,
      produto.valorPromocional,
      produto.qtdEstoque,
      produto.categoria,
      produto.disponivel,
      produto.descricao,
      id
    ])

  return resp.affectedRows;
}





export async function BuscarPorEquipamentos() {
  const comando = `SELECT id_produto      as id,
                          url_img         as img,
                          nm_produto      as produto,
                          ds_categoria    as categoria,
                          vl_valor        as preco,
                          qtd_estoque     as estoque
                    FROM  tb_produto
                    WHERE ds_categoria like ?`;

  const [resposta] = await conexao.query(comando, [ `%Equipamentos%` ])
  return resposta
}

export async function BuscarPorSuplementos() {
  const comando = `SELECT id_produto      as id,
                          url_img         as img,
                          nm_produto      as produto,
                          ds_categoria    as categoria,
                          vl_valor        as preco,
                          qtd_estoque     as estoque
                    FROM  tb_produto
                    WHERE ds_categoria like ?`;

  const [resposta] = await conexao.query(comando, [ `%Suplementos%` ])
  return resposta
}


export async function BuscarPorRoupasAcessorios() {
  const comando = `SELECT id_produto      as id,
                          url_img         as img,
                          nm_produto      as produto,
                          ds_categoria    as categoria,
                          vl_valor        as preco,
                          qtd_estoque     as estoque
                    FROM  tb_produto
                    WHERE ds_categoria like ?`;

  const [resposta] = await conexao.query(comando, [ `%Acessórios%` ], [ `%Roupas%` ])
  return resposta
}