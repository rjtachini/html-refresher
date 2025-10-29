document.addEventListener("DOMContentLoaded", function() {
  const buttons = document.querySelectorAll("nav button");
  const sections = document.querySelectorAll("main section");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const target = btn.dataset.section;
      sections.forEach(sec => {
        sec.style.display = (sec.id === target) ? "block" : "none";
      });
    });
  });
});
// Este script simple permite la navegacion entre secciones en una SPA (Single Page Application).