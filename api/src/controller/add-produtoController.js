import { Router } from "express";
import { InserirNovoProduto, listarProduto, alterarImagem, listarProdutoCarrinho } from '../repository/add-produtoRepository.js';

import multer from 'multer'
const upload = multer({ dest: 'storage/imagens' })
let endpoint = Router();

endpoint.post('/inserir', async (req, resp) => {
    try {
        const produto = await req.body;

        if(!produto.nome)
            throw new Error(' Nome obrigatório')

            if(!produto.descricao)
            throw new Error(' Descrição obrigatório')

        if(!produto.categoria)
            throw new Error('Categoria obrigatório')

        if(!produto.valor)
            throw new Error(' Valor obrigatorio')

        if(!produto.estoque)
            throw new Error(' Estoque obrigatório')

        const dados = await InserirNovoProduto(produto)
        resp.send(dados)

    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
   
})

endpoint.get('/listar/produto/:id',async (req, resp)=>{
    try {

        const id = req.params.id
        const resposta = await listarProduto(id)
        resp.send(resposta)

    } catch (err) {
        resp.send({
            erro: err.message
        })
    }
})

endpoint.get('/listar/produto/carrinho/:id',async (req, resp)=>{
    try {

        const id = req.params.id
        const resposta = await listarProdutoCarrinho(id)
        resp.send(resposta)

    } catch (err) {
        resp.send({
            erro: err.message
        })
    }
})

endpoint.put('/inserir/:id/imagens', upload.single('imagem'), async (req, resp) => {
    try {
        if(!req.file)
            throw new Error('Escolha a imagem')


      const { id } = req.params;
      const imagem = req.file.path;
  
      const resposta = await alterarImagem(imagem, id);
      if(resposta != 1)
            throw new Error('A imagem não pode ser salva')
      resp.status(204).send();
      
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
  })

export default endpoint