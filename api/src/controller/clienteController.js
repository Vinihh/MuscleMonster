import { Router } from "express";
import { Usuario, BuscarCliente, ConsultarCliente, TrocarImagem , EditarTelefone, EditarNascimento, EditarNome, AlterarSenha } from "../repository/clienteRepository.js";
import { consultar } from "../repository/cadastroRepository.js";

import multer from 'multer'
const upload = multer({ dest: 'storage/imagem/cliente' })

let endpoints = Router();

  endpoints.put('/alterar/senha' , async(req, resp) =>{
    try {
      const cliente = req.body;

      let r1 = await consultar(cliente.email);
      if (r1.length == 0)
          throw new Error(' Email não encontrado!');

      if(!cliente.email)
        throw new Error('Campo Obrigatório')

      if(!cliente.senha)
        throw new Error('Campo Obrigatório')

       

      let dados = await AlterarSenha(cliente)
      resp.send(dados)
    
    } catch (err) {
      resp.status(500).send({ erro: err.message });
    }
  })

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


  endpoints.get('/consulta/cliente', async (req, resp) => {

    let resposta = await ConsultarCliente()
    resp.send(resposta);
  });

  endpoints.get('/consulta/cliente/nome', async (req, resp) => {
    try {
      const { nome } = req.query;

      const resposta = await BuscarCliente(nome)
      
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

  endpoints.put('/inserir/:id/imagem/cliente', upload.single('imagem'), async (req, resp) => {
    try {
        if(!req.file)
            throw new Error('Escolha a imagem')


      const { id } = req.params;
      const imagem = req.file.path;
  
      const resposta = await TrocarImagem(imagem, id);
      if(resposta != 1)
            throw new Error('A imagem não pode ser salva')
      resp.send({imagem});
      
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
  })

  endpoints.put('/editar/tel', async(req,resp)=>{
    try {
      const cliente = await req.body;

      const resposta = await EditarTelefone(cliente)
      resp.send(resposta)

    } catch (err) {
      resp.status(400).send({
        erro:err.message
      })
    }
  })

  endpoints.put('/editar/data', async(req,resp)=>{
    try {
      const cliente = await req.body;

      const resposta = await EditarNascimento(cliente)
      resp.send(resposta)

    } catch (err) {
      resp.status(400).send({
        erro:err.message
      })
    }
  })

  
  endpoints.put('/editar/nome', async(req,resp)=>{
    try {
      const cliente = await req.body;

      const resposta = await EditarNome(cliente)
      resp.send(resposta)

    } catch (err) {
      resp.status(400).send({
        erro:err.message
      })
    }
  })



export default endpoints;