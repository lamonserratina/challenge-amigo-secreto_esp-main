# 🎁 Amigo Secreto - Challenge

¡Bienvenido al desafío **Amigo Secreto**! Este proyecto es una aplicación web interactiva y divertida que permite agregar nombres, evitar duplicados y realizar un sorteo aleatorio para asignar un amigo secreto a cada participante.

## 📋 Descripción del Proyecto

El desafío consiste en construir una aplicación sencilla y dinámica que utiliza **HTML**, **CSS** y **JavaScript** para ofrecer una experiencia interactiva. La interfaz permite al usuario agregar nombres de participantes, prevenir duplicidades, y realizar un sorteo rápido y funcional, mostrando al afortunado ganador en pantalla.

### Características
- **Agregar Participantes:** Introducir nombres a una lista dinámica.
- **Evitar Nombres Duplicados:** Garantizar que cada participante sea único.
- **Sorteo Aleatorio:** Selección aleatoria de un "amigo secreto".
- **Interfaz Moderna:** Diseño intuitivo y atractivo con colores vibrantes y elementos responsivos.

## 🖥️ Tecnologías Utilizadas

- **HTML5:** Estructura principal del contenido web.
- **CSS3:** Para estilos modernos, colores llamativos y diseño responsivo.
- **JavaScript ES6+:** Lógica interactiva que impulsa la funcionalidad del sorteo.

## 🚀 Cómo Ejecutar el Proyecto

Sigue estos pasos para probar el proyecto:

1. **Clonar el Repositorio:**
   ```bash[
   (https://github.com/lamonserratina/challenge-amigo-secreto_esp-main)

Abrir el Proyecto:

Abre el archivo index.html en tu navegador para ver la aplicación en acción.

Explorar:

Agrega nombres, realiza el sorteo y diviértete probando las funcionalidades.

🌈 Personalización
El diseño y funcionalidad pueden ser fácilmente adaptados:

Colores: Cambia la paleta en la sección :root del archivo style.css.

Fuentes: Personaliza las fuentes utilizando Google Fonts.

Imágenes: Sustituye las imágenes en la carpeta assets para personalizar el estilo visual.

📂 Estructura del Proyecto
plaintext
├── index.html        # Archivo principal HTML
├── style.css         # Estilos del proyecto
├── app.js            # Lógica interactiva del sorteo
├── assets/           # Carpeta con imágenes y recursos estáticos
└── README.md         # Documentación del proyecto
📝 Código Destacado
Lógica para Evitar Duplicados:
Este fragmento asegura que los nombres en la lista sean únicos:

javascript
if (amigos.includes(nombre)) {
    alert("El nombre ya está en la lista. Por favor, ingrese un nombre diferente.");
    return;
}
Sorteo Aleatorio:
Realiza el sorteo utilizando un índice aleatorio:

javascript
const indiceAleatorio = Math.floor(Math.random() * amigos.length);
const amigoSorteado = amigos[indiceAleatorio];
🧑‍💻 Autor
Desarrollado por Joselin Miñones como parte de un desafío como parte de la formación como Principiante en Programación G8 - ONE ALURA. 🚀

📜 Licencia
Este proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE para más información.

¡Gracias por explorar este proyecto! Si tienes sugerencias o quieres compartir mejoras, no dudes en contribuir. 🎉
