import conexao from "./connection.js";
import axios from "axios";

export async function InserirNovoProduto(produto) {
    let comando = 'insert into tb_produto (nm_produto, ds_categoria,ds_descricao, vl_valor, qtd_estoque) values (?, ?, ?, ?, ?);';

    let [resposta] = await conexao.query(comando, [

        produto.nome, 
        produto.categoria,
        produto.descricao,
        produto.valor, 
        produto.estoque, 
        produto.id]);

    produto.id = resposta.insertId

    return produto;
}

export async function alterarImagem(imagem, id) {
    const comando =
        `UPDATE tb_produto 
        SET url_img         = ?
        WHERE id_produto    = ? `;
    
    const [resposta] = await conexao.query(comando, [imagem, id]);
    return resposta.affectedRows;
  }


export async function listarProduto(id){

    try {
        let comando = `select url_img         as imagem,
        nm_produto      as produto,
        ds_categoria    as categoria,
        vl_valor        as preco,
        qtd_estoque     as estoque,
        ds_descricao    as descricao
        from tb_produto
        where id_produto = ? `;
    
        const [resposta] = await conexao.query(comando, [id]);

        return resposta[0]

    } catch (err) {
        throw new Error(err.message);
    }
}

export async function listarProdutoCarrinho(id){

    try {
        let comando = `select url_img         as imagem,
        nm_produto      as produto,
        ds_categoria    as categoria,
        vl_valor        as preco,
        qtd_estoque     as estoque,
        ds_descricao    as descricao
        from tb_produto
        where id_produto = ? `;
    
        const respostas = await conexao.query(comando, [id]);

        let linhas = respostas[0];
        let linha = linhas[0];
        console.log(linha)
  
        return linha;

    } catch (err) {
        throw new Error(err.message);
    }
}