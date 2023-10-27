import axios from "axios";
const api = axios.create({
    baseURL: API_URL
})

import { API_URL } from "../../../site/src/constants";

export async function cadastrarProduto(nomeproduto,categoria,valor,descricao,estoque){
    const resposta = await api.post('/inserir' ,{
        nome:   nomeproduto,
        categoria:  categoria,
        valor:  valor,
        descricao:  descricao,
        estoque:    estoque
    })

    return resposta.data;
}

export async function inserirImagem(id,imagem){

    const formData = new FormData();
    formData.append ('imagem',imagem)

    const resposta = await api.put(`/inserir/${id}/imagens`, formData, {
        headers:{
            "Content-Type":"multipart/form-data"
        },
    });

    return resposta.status
}