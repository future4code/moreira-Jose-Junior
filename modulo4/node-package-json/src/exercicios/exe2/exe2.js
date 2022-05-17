const conta = process.argv[2]
const num1 = Number(process.argv[3])
const num2 = Number(process.argv[4])

let resultado

switch(conta){
    case "soma":
        resultado = num1+num2
        break;
    case "subtração":
        resultado = num1-num2
        break;
    case "multiplicação":
        resultado = num1*num2
        break;
    case "divisão":
        resultado = num1/num2
        break;
    default:
        resultado = "Operação não encontrada!"

}

console.log(resultado)