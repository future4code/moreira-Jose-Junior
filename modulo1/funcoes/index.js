//1 exercício interpretando comandos

/*function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2)) // a, Será impresso 10
console.log(minhaFuncao(10)) // a, Será impresso 50

                            // b, Se a gente retirar os console.log a função não é chamada.*/                         

let textoDoUsuario = prompt("Insira um texto"); /*a, esta função pega o texto fornecido pelo usuário e 
                                                e deixa todos os seus caracteres em minúnculo, deepois procura 
                                                nesses entre esses caracteres a palavra "cenoura", e retorna como 
                                                false quando a palavra não é encontrada e true quando é.
                                                Ela é importante, pois permite procurar um termo específico no meio de um texto.*/

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)

// Para "Eu gosto de cenoura", retorna true
// Para "CENOURA é bom pra vista", retorna true
// Para "enouras crescem na terra", retorna true
// Em todos os casos será true, pois o termo buscado sempre é encontrado, devido a função toLowerCase(), que torna todos os caracteres minúsculos.

