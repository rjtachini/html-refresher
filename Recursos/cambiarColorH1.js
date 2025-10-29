console.log("Script cambiarColorH1 cargado correctamente.");

document.addEventListener("DOMContentLoaded", function() {
  const h1 = document.querySelector("h1");
  const btnColor = document.getElementById("btn-cambiar");

  btnColor.addEventListener("click", function() {
    const colorActual = window.getComputedStyle(h1).color;
    const rojo = "rgb(231, 76, 60)";

    if (colorActual === rojo) {
      h1.style.color = "#2980b9"; // azul si ya era rojo
    } else {
      h1.style.color = "#e74c3c"; // rojo si no era rojo
    }
  });
});
// Este script permite cambiar el color del h1 entre rojo y azul al hacer clic en el botón.