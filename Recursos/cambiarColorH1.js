
console.log("Script cambiarColorH1 cargado correctamente.");

// Ejemplo: cambiar el color del h1 al cargar la pagina


document.addEventListener("DOMContentLoaded", function() {
  const h1 = document.querySelector("h1");

  // Obtener el color actual del h1
  const colorActual = window.getComputedStyle(h1).color;

  // Color en formato rgb que representa #e74c3c
  const rojo = "rgb(231, 76, 60)";

  if (colorActual === rojo) {
    // Si ya es rojo, cambiar a otro color (ejemplo: azul)
    h1.style.color = "#2980b9";
  } else {
    // Si no es rojo, cambiar a rojo
    h1.style.color = "#e74c3c";
  }
});