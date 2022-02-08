/* 1 - exercício 
   Ela incrementa valores. Será impresso 10, o resultado do somatório.

   2 - exercício
     a, Vai ser impresso os valores para a variável número que forem maior que 18;
     b, Sim, basta trocar o 18 que aparece dentro if por lista[4], a função agora retornará os elementos maiores que 18.

   3 - exercício
    Ele vai imprimir 4 linhas, e em cada uma dela uma quantidade crescente de asteriscos,
    assim na linha 1 tem um steriscos, na dois tem 2 asteriscos e assim por diante, dessa forma na linha 4 tem 4 asteriscos.
      
*/


/*1 - exercício

const numPet = Number(prompt('Quantos bichinhos de estimação você tem?'))

if(numPet === 0){
  console.log("Que pena! Você pode adotar um pet!")
} else {
  for(let i = 0; i < numPet; i++){
    
    arrayPet = prompt('Qual o nome de seu(s) pet(s)?')
    console.log(arrayPet)
  }
} */

// 2 - exercício

const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

// a
  /* for(let numero of arrayOriginal) {
     console.log(numero)
   }*/
   

/* b
for(let numero of arrayOriginal) {
 const numdivdez = numero / 10
 console.log(numdivdez)
}*/

/*c

const arrayPar = arrayOriginal.filter((item)=>{ 
 return item % 2 === 0

})

console.log(arrayPar)
*/

/*d

const arrayString = arrayOriginal.map((item, index)=>{ 
 return `O elemento do índex ${index} é: ${item}`

})

console.log(arrayString)
*/

//e
 const arrayOrdenado = arrayOriginal
 arrayOrdenado.sort((a,b)=>{
   return (a-b)
 })

 const valorMaior = arrayOrdenado[arrayOrdenado.length - 1]
 const valorMenor = arrayOrdenado[0]

 console.log(`O maior número é ${valorMaior} e o menor é ${valorMenor}.`)