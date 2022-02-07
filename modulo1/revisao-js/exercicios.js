// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  
    return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {

    return array.sort(function(a,b) {
        return a-b
    })
  
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {

    return array.filter((item)=>{
        return item % 2 == 0
    })
  
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {

    const array2 = array.filter((item)=>{
        return item = item % 2 == 0
        
    })
    return array2.map((item)=>{
        return item*item
    })
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {

    return array.reduce((a,b)=>{
        return Math.max(a,b)
    })
    
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    
    let numMaior
    let numMenor

    if(num1>num2){
        numMaior = num1;
        numMenor = num2;
    } else {
        numMaior = num2;
        numMenor = num1;
    }

    let maiorDivMenor = (numMaior % numMenor == 0)
    let dif = (numMaior - numMenor)

    return {
        maiorNumero: numMaior,
        maiorDivisivelPorMenor:maiorDivMenor,
        diferenca: dif
    }

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {

    const array = []
    // let para o valor variar
    for(let valor = 0; array.length < n; valor++){
        if(valor % 2 === 0){
            array.push(valor)
        }
    }
   return array
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    
    if(ladoA==ladoB && ladoA==ladoC){
        return 'Equilátero'
    } else if(ladoA==ladoB || ladoB==ladoC || ladoC==ladoA){
        return 'Isósceles'
    } else{
        return 'Escaleno'} 
}



// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {


  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {


    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores}.`
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {

    return{
        ... pessoa,
        nome: "ANÔNIMO"
    }
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
  
    let autoricacao = []

    for (const pessoa of pessoas) {
        if (pessoa.altura >= 1.5 && pessoa.idade > 14 && pessoa.idade < 60) {
          autoricacao.push(pessoa)
        }
    }
   return autoricacao
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    let autoricacao = []
    for(const pessoa of pessoas){
        if(pessoa.altura < 1.5 || pessoa.idade <= 14 || pessoa.idade >= 60){
            autoricacao.push(pessoa)
        }
    }
   return autoricacao
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    contas.map((contas1)=> {
        let totComp = 0
        contas1.compras.map((preco)=>{
            totComp += preco
        })

        contas1.saldoTotal -= totComp 
    })

    return contas

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {

    return consultas.sort((a,b)=>{
     return (a.nome > b.nome) ? 1: ((b.nome > a.nome) ? -1:0)
 })
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}