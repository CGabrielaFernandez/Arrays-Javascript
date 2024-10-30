function invertirArray(array) {
  // Invierte el arreglo array recibido por argumento.
  // Tu código:
  let arrayTemporal = []

  for (let i = array.length - 1; i >= 0; i--) {
    arrayTemporal.push(array[i])
  
  }
  return arrayTemporal
}

module.exports = invertirArray;
