function sumar(a, b) {
    return a + b;
  }
  
  function restar(a, b) {
    return a - b;
  }
  
  function multiplicar(a, b) {
    return a * b;
  }
  
  function dividir(a, b) {
    if (b === 0) throw new Error("División por cero");
    return a / b;
  }

  function potencia(a, b) {
    return Math.pow(a, b);
  }

function raizCuadrada(a) {
    return Math.sqrt(a);
  }
  
  module.exports = {
    sumar,
    restar,
    multiplicar,
    dividir,
    potencia,
    raizCuadrada
  };