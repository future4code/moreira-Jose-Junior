// 1 exercicio
const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)   //false

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) //false

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado) // true

console.log("d. ", typeof resultado) //boleano


// 2 exercicio
/*let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma) // imprime os dois números fornecidos pelo usuário de forma concatenada*/


// 3 exercicio
let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number (prompt("Digite outro numero!"))

const soma = primeiroNumero + segundoNumero

console.log(soma) // Basta colocar a função Number na frente de prompt