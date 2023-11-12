import { Router } from "express";
import { BuscarPorNome, consultarProdutos, deletarProduto, BuscarPorEquipamentos} from "../repository/listprodutoRepository.js";

let endpoints = Router();

endpoints.delete('/deletar/:id', async (req, resp) => {
  try {

      const id = req.params.id
      const resposta = await deletarProduto(id)
      resp.send('id apagado')

  } catch (err) {
      resp.send({
          erro: err.message
      })
  }
})


  endpoints.get('/consulta/produto', async (req, resp) => {

    let resposta = await consultarProdutos()
    resp.send(resposta); 
  });

  endpoints.put('/alterar-produto/:id', async (req, resp) => {
    try {
      let produto = req.body;
      let id = req.params.id;

  
      let r = await alterar(id, produto);
      resp.send();
    }
    catch (err) {
      resp.status(500).send({ erro: err.message });
    }
    
  
  })

  endpoints.get('/consulta/nome', async (req, resp) => {
    try {
      const { nome } = req.query;

      const resposta = await BuscarPorNome(nome)
      
      if (resposta.length == 0) {
          resp.status(404).send([])
      }

      else {
        resp.send(resposta)
      }

    } catch (err) {
      resp.status(500).send({ erro: err.message });
    }
  })


  endpoints.get('/consulta/equipamentos/:id', async (req, resp) => {
    try {

      const id = req.params.id
      const resposta = await BuscarPorEquipamentos(id)
      
      if (resposta.length == 0) {
          resp.status(404).send([])
      }

      else {
        resp.send(resposta)
      }

    } catch (err) {
      resp.status(500).send({ erro: err.message });
    }
  })



export default endpoints;