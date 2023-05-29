// Definimos variables para los distintos elementos HTML a utilizar
const inputNumero1 = document.getElementById('number1');
const inputNumero2 = document.getElementById('number2');
const selectOperacion = document.getElementById('operaciones');
const botonCalcular = document.querySelector('#calcular');
const resultado = document.getElementById('resultado');

// Esta función toma dos números y el nombre en minúsculas de una operación,
// y retorna el resultado de aplicar tal operación entre los números
function operar(numero1, numero2, operacion) {
    switch (operacion) {
        case "suma":
            return numero1 + numero2;
        case "resta":
            return numero1 - numero2;
        case "multiplicacion":
            return numero1 * numero2;
        case "division":
            return numero1 / numero2;
    }
}

// Añadimos un manejador de eventos al botón,
// para que, al hacer clic, se muestre el resultado correspondiente
botonCalcular.addEventListener('click', (evt) => {
    
    // Presionar el botón dentro del formulario causa una recarga de página,
    // prevenimos este comportamiento con evento.preventDefault()  
    evt.preventDefault();

    // La propiedad value de un elemento input o select retorna el contenido del mismo
    // en el primer caso, y el valor del atributo 'value' del option seleccionado, en el segundo
    const operacionSeleccionada = selectOperacion.value;
    
    // El operador OR (||) permite devolver un valor de 0 si parseFloat retorna
    // NaN (como hace cuando se ingresa un número inválido), al ser el mismo convertido a falso
    const numero1 = parseFloat(inputNumero1.value) || 0;
    const numero2 = parseFloat(inputNumero2.value) || 0;

    // Si la operación ha sido seleccionada...
    if (operacionSeleccionada !== 'no-seleccionado') {
        // ... escribir el resultado correspondiente
        resultado.classList.add('text-success');
        resultado.textContent = operar(numero1, numero2, operacionSeleccionada);
        return;
    } 
    resultado.classList.remove('text-success');
})