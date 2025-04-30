const pantalla = document.getElementById('pantalla');
const botones = document.querySelectorAll('.btn');
let operacion = '';

function actualizarPantalla(valor) {
  pantalla.value = valor;
}

botones.forEach(boton => {
  boton.addEventListener('click', () => {
    const valor = boton.dataset.valor;

    if (valor) {
      operacion += valor;
      actualizarPantalla(operacion);
    } else if (boton.id === 'igual') {
      try {
        // Evaluar la operación completa
        const resultado = eval(operacion);
        actualizarPantalla(resultado);
        operacion = resultado.toString();
      } catch (error) {
        actualizarPantalla('Error');
        operacion = '';
      }
    } else if (boton.id === 'limpiar') {
      operacion = '';
      actualizarPantalla('');
    }
  });
});
