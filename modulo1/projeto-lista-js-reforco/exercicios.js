// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const altura = prompt ('Digite a altura do retângulo.')
  const largura = prompt ('Digite a largura do retângulo.')
  const area = altura*largura
  console.log(area)

}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui

const anoAtual = prompt ('Digite o ano em que estamos.')
const anoNascimento = prompt ('Digite o ano em que nasceu.')
const idade = anoAtual - anoNascimento
console.log(idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  const IMC = peso / (altura*altura)
  return (IMC)

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt('Digite seu nome.')
  const idade = prompt('Digite sua idade.')
  const email = prompt('Digite seu e-mail.')
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const cor1 = prompt('Digite uma cor favorita.')
  const cor2 = prompt('Digite outra cor favorita.')
  const cor3 = prompt('Digite mais uma cor favorita.')
  const arraycores =[cor1, cor2, cor3]
  console.log(arraycores)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  const string1 = string.toUpperCase()
  return string1

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  const numIngresso = custo / valorIngresso
  return numIngresso

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  const condicao = string1.length === string2.length
  return condicao

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  const primeiroElemento = array [0]
  return primeiroElemento

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  const primeiroElemento = array [array.length -1]
  return primeiroElemento

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  const primeiro = array[0]
  const ultimo = array[array.length-1]
  const indice = array.length-1
  array[0] = ultimo
  array[indice]= primeiro
  return array
  

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  const stri1 = string1.toUpperCase
  const stri2 = string2.toUpperCase
  const condicao = stri1.length === stri2.length
  return condicao

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const anoAtual = prompt('Digite o a no atual.')
  const anoNascimento = prompt('Digite o ano de nascimento.')
  const emissaoRG = prompt('Digite o ano de emissão do RG')

  const cond1 = (anoAtual-anoNascimento <= 20) && (anoAtual-emissaoRG >= 5)
  const cond2 = (20 <anoAtual-anoNascimento <= 50) && (anoAtual-emissaoRG >= 10)
  const cond3 = (anoAtual-anoNascimento > 50) && (anoAtual-emissaoRG >= 15)
  const cond4 = cond1 || cond2 || cond3
  console.log(cond4)

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  const ano400 = (ano % 400 === 0)
  const ano100 = (ano % 4 === 0 && (ano % 100 === 0 && ano % 400 === 0))
  const naoBiss = (ano400 || ano100)
  const bissexto = ano400 && ano100 || naoBiss
  return bissexto

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}