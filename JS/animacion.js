window.addEventListener("load", function() {
    const loader = document.getElementById("loader");
    const content = document.getElementById("content");
    
    setTimeout(() => {
        loader.style.display = "none"; // Ocultar el loader
        content.style.display = "block"; // Mostrar el contenido
        content.style.opacity = 1; // Hacer que el contenido sea visible
    }, 5250); // Tiempo total de la animación    
});
