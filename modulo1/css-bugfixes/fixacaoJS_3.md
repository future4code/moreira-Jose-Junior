```function calculaNota(ex, p1, p2) {
  // Escreva seu código aqui
  let medPonderada = (((ex * 1) + (p1 * 2) + (p2 * 3))/6)
  if (medPonderada >= 9){
    return ("A")
  }
  else if (medPonderada >= 7,5){
    return ("B")
  }
  else if (medPonderada >= 6){
    return ("C")
  }
  else {
    return ("D")
  }
}```