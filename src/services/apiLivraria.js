import axios from "axios";

const apiLivraria = axios.create({
    baseURL: 'http://10.107.144.21:3000'
});

export default apiLivraria;