
        // Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar amigos
function agregarAmigo() {
    const input = document.getElementById("amigo"); // Capturar el campo de texto
    const nombre = input.value.trim(); // Obtener el nombre ingresado, eliminando espacios

    // Validar que el nombre no esté vacío
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Agregar el nombre al array
    amigos.push(nombre);
    actualizarListaAmigos(); // Actualizar la lista en el DOM
    input.value = ""; // Limpiar el campo de entrada
}

// Función para actualizar la lista de amigos en el DOM
function actualizarListaAmigos() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; // Limpiar la lista antes de actualizar

    // Recorrer el array y agregar cada amigo como un elemento <li>
    amigos.forEach((amigo) => {
        const nuevoElemento = document.createElement("li");
        nuevoElemento.textContent = amigo;
        listaAmigos.appendChild(nuevoElemento);
    });
}

// Función para seleccionar un amigo aleatorio
function sortearAmigo() {
    // Validar que haya amigos en el array
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado en el DOM
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>El amigo sorteado es: <strong>${amigoSorteado}</strong></li>`;
}
