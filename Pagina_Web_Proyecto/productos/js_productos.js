// Espera a que cargue el HTML
document.addEventListener("DOMContentLoaded", function(){

// Obtener modal
const modal = document.getElementById("modal");


// Abrir modal
window.abrirModal = function(){

modal.style.display = "flex";
document.body.style.overflow = "hidden"; // Bloquea scroll

}


// Cerrar modal
window.cerrarModal = function(){

modal.style.display = "none";
document.body.style.overflow = "auto"; // Activa scroll

}


// Cerrar al hacer click fuera
window.onclick = function(event){

if(event.target == modal){
cerrarModal(); // Usamos la función central
}

}


// Cerrar con tecla ESC
document.addEventListener("keydown", function(event){

if(event.key === "Escape"){
cerrarModal(); // Usamos la función central
}

});

});