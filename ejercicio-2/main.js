const contenedorPrincipal = document.getElementById('contenedor-principal');

// Funcion que recibe un array de objetos con un titulo, una descripcion y la ruta (src) de una imagen,
// y crea una serie de tarjetas que inserta en contenedorPrincipal
function renderizarTarjetas(arrayObjetos) {
    // Por cada objeto en el arreglo
    for (let objeto of arrayObjetos) {
        // Creamos un elemento article y le damos la clase de tarjeta
        const tarjeta = document.createElement('article');

        tarjeta.classList.add('card', 'fixed-size');

        // Creamos un elemento h5 que contendrá el título de la tarjeta
        const titulo = document.createElement('h5');

        // Agregamos la clase de Bootstrap correspondiente para hacerla un título de tarjeta
        titulo.classList.add('card-header');

        // Y cambiamos su contenido de texto con los datos del objeto
        titulo.textContent = objeto.titulo;

        // Realizamos lo propio con la imagen y la descricion
        const descripcion = document.createElement('p');

        descripcion.textContent = objeto.descripcion;

        descripcion.classList.add('card-body');

        const imagen = document.createElement('img');

        imagen.classList.add('card-img', 'max-width');

        imagen.setAttribute('src', objeto.imagenSrc);

        // Agregamos el título, la descripcion e imagen a la tarjeta...
        tarjeta.append(imagen, titulo, descripcion);

        // ... y la tarjeta al contenedor
        contenedorPrincipal.append(tarjeta);
    }
}

// Array de objetos de prueba
const lenguajesProgramacion = [
    {
        titulo: 'Java',
        descripcion: 'Lenguaje de programación ampliamente utilizado para codificar aplicaciones de todo tipo: videojuegos a macrodatos e inteligencia artificial',
        imagenSrc: './img/java.png'
    },
    {
        titulo: 'JavaScript',
        descripcion: 'Lenguaje de programación muy útil para dar dinamismo a las plataformas web',
        imagenSrc: './img/javascript.png'
    },
    {
        titulo: 'Rust',
        descripcion: 'Lenguaje de programación de sistemas, conocido por su énfasis en la seguridad de la memoria y el rendimiento',
        imagenSrc: './img/rust.png'
    },
    {
        titulo: 'C++',
        descripcion: 'Lenguaje de programación usado en el desarrollo de sistemas operativos, sistemas embebidos y en aplicaciones que requieren de gran rendimiento',
        imagenSrc: './img/c++.webp'
    },
    {
        titulo: 'Python',
        descripcion: 'Lenguaje de programación de alto nivel y de propósito general caracterizado por su código legible y  indentación significativa',
        imagenSrc: './img/python.png',
    },
    {
        titulo: 'Dart',
        descripcion: 'Lenguaje open-source desarrollado por Google para crear aplicaciones web y móviles a través del framework Flutter',
        imagenSrc: './img/dart.png'
    }
];

renderizarTarjetas(lenguajesProgramacion);