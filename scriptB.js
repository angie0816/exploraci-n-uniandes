document.addEventListener("DOMContentLoaded", () => {
  const imagenClick = document.getElementById("imagenClick");
  const textoBurbuja = document.getElementById("textoBurbuja");
  const imagenPersonaje = document.getElementById("imagenPersonaje");

  let actividadHecha = false; // 🔑 flag para saber si se hizo la acción

  imagenClick.addEventListener("click", () => {
    // 1. Cambiar texto
    textoBurbuja.textContent = "¡Gracias, ahora sí puedo ir a relaja!";

    // 2. Cambiar la imagen del personaje
    imagenPersonaje.src = "./imagenes-B/Niya sombrero.png";

    // 3. Cambiar el tamaño del personaje
    imagenPersonaje.classList.add("personaje-grande");

    // 4. Ocultar la imagen clickeada
    imagenClick.style.display = "none";

    // 🔑 marcamos que la actividad terminó
    actividadHecha = true;
  });

  // Botón para volver a landing1 con parámetros actualizados
  document.getElementById('volver-landing1').addEventListener('click', function() {
    const params = new URLSearchParams(window.location.search);

    // Si se hizo la actividad, marcamos edif3=true
    if (actividadHecha) {
      params.set('edif3', 'true');
    }

    window.location.href = `paginaPrincipal.html?${params.toString()}`;
  });
});