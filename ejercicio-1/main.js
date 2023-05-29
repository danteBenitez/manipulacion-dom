// Definimos variables para guardar referencias a los elementos HTML
// El botón
const botonDeCambioColor = document.querySelector('#boton-cambiar-color');
// Y el párrafo
const parrafo = document.querySelector('p');

// Añadimos un manejador de eventos para el evento 'click' que 
// agregue o quite la clase 'text-orange' del párrafo
botonDeCambioColor.addEventListener('click', () => {
    parrafo.classList.toggle('text-orange');
})