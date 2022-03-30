// 1) importações
import express from 'express';
import cors from 'cors';
import { rmSync } from 'fs';

// 2) inicialização do express
const app = express()

// 3) configuração dos middlewares
app.use(express.json()) // obriga a saída do backend a ser tipo JSON (objeto)
app.use(cors())  // habilita aa utilização do cors compartilhamento de recursos entre diferentes clientes



// 5) configuração de escuta porta lógica
//app.listen(portaLogica, funcaoDeConfiguracaoDaPorta);
//portaLogica -> ponto de acesso para transferência de dados
// porta para desenvolvimento -> 3000, 3001, 3002 ...
app.listen(3003,()=>{
    console.log("O backend está rodando na porta 3003!:)")
})
// 4) inserindo endpoints 
//sintaxe -> app.metodo(path, funcaoHandler)
//handler -> (req, res)=> {// codigo}
//req -> request -> Objeto que nos fornece informações enviadas na requisição (body, params, headers, query)
//res -> response -> Objeto que nos fornece um conjunto de métodos/funções de resposta
app.get("/", (req, res)=>{
    console.log("Acessei o meu endpoint")
    res.send("Primeiro endpoint criado!")

})
