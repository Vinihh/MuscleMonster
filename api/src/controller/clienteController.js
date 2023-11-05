import { Router } from "express";
import { Usuario } from "../repository/clienteRepository.js";


let endpoints = Router();

  endpoints.get('/user', async (req, resp) => {
    try {
      const { id } = req.query;

      const resposta = await Usuario(id)
      
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