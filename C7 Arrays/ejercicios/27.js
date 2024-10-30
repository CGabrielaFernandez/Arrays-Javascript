function dePalabrasAFrase(palabras) {
  // El argumento "palabras" es un arreglo de strings.
  // Retorna un string donde todas las palabras estén concatenadas,
  // con un espacio entre cada palabra.
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
  // Tu código:
 let texto = palabras.reduce( function(acum, palabra){
return acum + " " + palabra

})
return texto
}

module.exports = dePalabrasAFrase;
