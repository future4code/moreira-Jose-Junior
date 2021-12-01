/* 1 exercício

let array
console.log('a. ', array) // O conteúdo de array não foi definido.

array = null
console.log('b. ', array)// Mostra o conteúdo de array que é null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length) // Mostra a quantidade de elementos presentes em array

let i = 0
console.log('d. ', array[i]) //

array[i+1] = 19
console.log('e. ', array) //

const valor = array[i+6]
console.log('f. ', valor) //


// 2 exercício

const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length) // Ele pede uma frase, coloca todas as letras em maiúsculo, e vai substitui o A pelo I, no final imprime "SUBI NUM ÔNIBUS EM MIRROCOS. 27"*/


const nomeUsuario = prompt("Digite seu nome!")
const email = prompt("Digite seu e-mail!")
const frase = `O e-mail ${email} foi cadastrado com sucesso. Seja bem-vindo(a), ${nomeUsuario}!`
console.log(frase)

