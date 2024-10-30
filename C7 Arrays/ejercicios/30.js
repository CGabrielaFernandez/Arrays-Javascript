function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
  for(var i = 0; i < numeros.lenght; i++){
    for(var j = i+1; j < numeros.lenght; j++){
      if(numeros[i] === numeros[j]){
        return numeros[j]
      }
    }
  }
}

module.exports = encontrarElementoRepetido;