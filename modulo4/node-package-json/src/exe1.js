//1 - O acesso aos parâmetros pode ser feito a partir do process.argv ou console.log,
// a partir de um arquivo index.js

const nomeusuario = process.argv[2]
const idade = Number(process.argv[3])

console.log(`Olá, ${nomeusuario}! Você tem ${idade} anos.`)
console.log(`Olá, ${nomeusuario}! Você tem ${idade} anos. Em sete anos você terá ${idade+7} anos`)