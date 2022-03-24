function checaTriangulo(a:number, b:number, c:number):any {
    if (a !== b && b!== c) {
        return "Escaleno"
    } else if ( a === b && b === c) {
        return "Equilátero"
    } else {
        return "Isósceles"
    }
}


const oo = checaTriangulo(3,4,5)
console.log(oo)