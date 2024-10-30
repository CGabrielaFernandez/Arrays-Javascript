function invertirTexto(texto) {
  // La función recibe un argumento "texto" que es un string.
  // Tu objetivo es invertir el string y devolver el string invertido.
  // Tu código:
  console.log(texto) 

  var acum =""
  for(var i= texto.length - 1; i >= 0; i--){
    acum = acum + texto[i]
  }
console.log(acum)
   return acum
}
invertirTexto("prepcoursehenry")
module.exports = invertirTexto;
