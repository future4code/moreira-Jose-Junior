/* 1 - a, O código verifica se o número digitado pelo usuário é par;
       b, Para os números pares;
       c, Para os números ímpares.

   2 - a, Ele informa o preço das frutas;
       b, O preço da fruta "maçã, é  R$ 2.25
       c, A pêra ficaria com o valor de 5 reais, ou seja, o valor de default.
       
   3 - a, Ela converte a resposta do usuário para um valor númerico;
       b, Quando digita 10 imprime a mensagem o console "Esse número passo no teste". Quando digita -10 dá erro ao chegar no console.log(mensagem);
       c, Sim, pois a variavel mensagem é declarada dentro da estrutura do if, logo não pode ser acessada por comandos fora do if.    
       */

// 1 - exercício

/*const idade = Number(prompt('Qual sua idade?'))

  if (idade >=18){
      console.log("Você pode dirigir")
  } else {
      console.log ("Você não pode dirigir")
  }
*/

  /* 2 - exercício

  let turno = prompt('Qual turno você estuda? Digite M para manhã, T para tarde e N para noite.')

  if (turno === "M"){
      console.log("Bom Dia!")
  } else if (turno === "T"){
      console.log("Boa Tarde!")
  } else {
      console.log("Boa Noite!")
  }*/

  /* 3 - exercício 

  let turno = prompt('Qual turno você estuda? Digite M para manhã, T para tarde e N para noite.')

  let saudacao

  switch (turno) {
      case "M":
          saudacao = "Bom dia!" 
          break;
      case "T":
          saudacao = "Boa tarde!"
          break;
      case "N":
          saudacao = "Boa Noite!"
          break;
      default:
          saudacao = "Digite M, T ou N para receber a saudação."
          break;
  }

  console.log(saudacao)
*/

// 4 - exercício

const genero = prompt('Qual o gênero do filme?')
const preco = prompt('Qual o valor do ingresso?')

if(genero === "fantasia" && preco<15){
    console.log("Bom filme!")
} else {
    console.log("Escolha outro filme :(")
}