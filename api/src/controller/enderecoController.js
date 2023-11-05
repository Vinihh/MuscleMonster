import { Router } from "express";
import { CadastroEndereco } from "../repository/enderecoRepository.js";

let endpoints = Router()

endpoints.post('/endereco', async (req, resp) => {

    try {

        let endereco = req.body;



        let dados = await CadastroEndereco(endereco)
        resp.status(200).send(dados)

    } catch (err) {
        resp.status(404).send({erro: err.message})
    }
})

export default endpoints;