document.addEventListener("DOMContentLoaded", () => {
  const imagenClick = document.getElementById("imagenClick");
  const textoBurbuja = document.getElementById("textoBurbuja");
  const imagenPersonaje = document.getElementById("imagenPersonaje");

  imagenClick.addEventListener("click", () => {
    // 1. Cambiar texto
    textoBurbuja.textContent = "¡Gracias, ahora si puedo ir relaja!";

    // 2. Cambiar la imagen del personaje
    imagenPersonaje.src = "./imagenes-B/Niya sombrero.png"; // cámbialo al archivo que quieras

    // 3. Cambiar el tamaño del personaje
    imagenPersonaje.classList.add("personaje-grande");

    // 4. Ocultar la imagen clickeada
    imagenClick.style.display = "none";
  });
});
