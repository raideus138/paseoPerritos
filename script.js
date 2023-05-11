window.addEventListener("scroll", function() {
    // Obtener la posición del scroll y la altura de la ventana
    var scrollPosition = window.scrollY;
    var windowHeight = window.innerHeight;
    var documentHeight = document.documentElement.scrollHeight;
    // Mostrar u ocultar la barra de navegación según la posición del scroll
    if (scrollPosition + windowHeight >= documentHeight) {
      document.querySelector("nav").style.display = "flex";
    } else {
      document.querySelector("nav").style.display = "none";
    }
  });