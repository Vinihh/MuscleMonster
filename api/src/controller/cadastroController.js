import { Router } from "express";
import { NovoCadastro, consultar } from "../repository/cadastroRepository.js";

let endpoint = Router();


endpoint.post('/cadastro', async (req, resp) => {
    try {
        let cliente = req.body;

        if (!cliente.nome)
            throw new Error(' Nome obrigatório');

        if (!cliente.telefone)
            throw new Error(' Telefone obrigatório');

        if (isNaN(cliente.telefone))
            throw new Error(' Telefone deve ser um número');

        if (cliente.telefone.length < 11)
            throw new Error(' Telefone Inválido');


        if (!cliente.email)
            throw new Error('Email obrigatório');

        if (!cliente.email.includes('@'))
            throw new Error('Email Inválido');

        if (!/mail\.com$/i.test(cliente.email))
            throw new Error('Email Inválido');

        if (!cliente.senha)
            throw new Error(' Senha obrigatório');


        let r1 = await consultar(cliente.email);
        if (r1.length > 0)
            throw new Error(' Email já cadastrado!');

        let dados = await NovoCadastro(cliente)
        resp.send(dados)

    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

export default endpoint