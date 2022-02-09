/* 1 - exercício
      a, Será impresso todo o conteúdo do array;

   2 - exercício
      a, Será impresso um novo array, cujos itens são apenas os elementos
      da propriedade nome que fazem parte dos objetos que constituem o array inicial;

   3 - exercício 
      a,Será impresso um novo array sem o objeto que contém o apelidio Chijo;
      
      */
      


     /* const pets = [
        { nome: "Lupin", raca: "Salsicha"},
        { nome: "Polly", raca: "Lhasa Apso"},
        { nome: "Madame", raca: "Poodle"},
        { nome: "Quentinho", raca: "Salsicha"},
        { nome: "Fluffy", raca: "Poodle"},
        { nome: "Caramelo", raca: "Vira-lata"},
     ]*/

// 1 a, - exercício 

    /*const nomePets = pets.map((item)=>{
        return item.nome
    })

    console.log (nomePets)*/

// b, 
   /*const salsichaPet = pets.filter((item)=>{
       return item.raca === "Salsicha"
   })

   console.log(salsichaPet)*/

// c, 
 /*const poodle = pets.filter((item)=>{
     return item.raca === "Poodle"
 })

 const descontoPoodle = poodle.map((item)=>{
     return `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}`
 })
 console.log(descontoPoodle)*/

// 2 - exercício

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

// a,

/*const arrayNome = produtos.map((item)=>{
    return item.nome
})

console.log(arrayNome)*/

// b, 

/*const arrayDesconto = produtos.map((item)=>{
    return {
        nome: item.nome,
        preco:(item.preco - (item.preco*0.05)).toFixed(2)
    }
})

console.log(arrayDesconto)*/

// c

/*const arrayBebidas = produtos.filter((item)=>{
    return item.categoria === "Bebidas"
})

console.log(arrayBebidas)*/

// d
 /*const arrayYpe = produtos.filter((item)=>{
    if(item.nome.includes("Ypê")){
        return item.nome
    }
})

console.log(arrayYpe)*/

// e 

const arrayYpe = produtos.filter((item)=>{
    if(item.nome.includes("Ypê")){
        return item.nome
    }
})

const arrayVenda = arrayYpe.map((item)=>{
    return `Compre ${item.nome} por ${item.preco.toFixed(2)}`
})

console.log(arrayVenda)


