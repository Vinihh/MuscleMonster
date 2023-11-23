import axios from "axios";
import { API_URL } from "../constants";

const api = axios.create({
    baseURL: API_URL
})

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

export async function inserirImagemCliente(id,imagem){

    const formData = new FormData();
    formData.append ('imagem',imagem)

    const resposta = await api.put(`/inserir/${id}/imagem/cliente`, formData, {
        headers:{
            "Content-Type":"multipart/form-data"
        },
    });

    return resposta.data
}


export function BuscarImagem(imagem) {

    return `${api.getUri()}/${imagem}`
}

export async function BuscarProdutoPorId(id){
    const r = await api.get('/api/produto/' + id)
    return r.data
}

export async function listEndereco(idUsuario){
    const r = await api.get('/listar/endereco/' + idUsuario);
    return r.data
}