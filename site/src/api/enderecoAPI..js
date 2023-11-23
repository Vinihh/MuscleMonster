import { API_URL } from "../constants";

import axios from "axios";
const api = axios.create({
    baseURL: API_URL
});

export async function Salvar( idUsuario, rua, bairro, cidade, cep, numero, complemento, contato, telefone, referencia) {
    const r = await api.post(`/listar/endereco/` + idUsuario + `/endereco`, {rua, bairro, cidade, cep, numero, complemento, contato, telefone, referencia})
    return r.data;
}

export async function Listar( idUsuario ) {
    const r = await api.get(`/listar/endereco/` + idUsuario + `/endereco`,)
    return r.data;
}