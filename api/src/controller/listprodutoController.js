import { Router } from "express";
import { BuscarPorNome, consultarProdutos, deletarProduto, BuscarPorEquipamentos, BuscarPorSuplementos, BuscarPorRoupasAcessorios, BuscarPorId, consultarProdutosPorCate} from "../repository/listprodutoRepository.js";

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

  endpoints.get('/api/produto/:id', async (req, resp) => {
    try {
      const { id } = req.query;

      const resposta = await BuscarPorId(id)
      
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
  
  endpoints.get('/consulta/produtos/:categoria', async (req, resp) => {
    try {

      const categoria = req.params.categoria
      const resposta = await consultarProdutosPorCate(categoria)
      
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
  endpoints.get('/consulta/suplementos/:id', async (req, resp) => {
    try {

      const id = req.params.id
      const resposta = await BuscarPorSuplementos(id)
      
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

  endpoints.get('/consulta/roupas/acessorios/:id', async (req, resp) => {
    try {

      const id = req.params.id
      const resposta = await BuscarPorRoupasAcessorios(id)
      
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