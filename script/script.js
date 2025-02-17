const themeButton = document.getElementById("switch");

// MANIPULACIÓN DEL DOM
themeButton.addEventListener("click", cambiarImagen);

let imagenOriginal = true;
function cambiarImagen() {
  const imagen = document.getElementById("imagen-toggle");
  
  if (imagenOriginal) {
    imagen.src = "img PSJ/nebulosa1.jpg"; 
  } else {
    imagen.src = "img PSJ/encabezado space.jpg"; 
  }
  
  imagenOriginal = !imagenOriginal;
}
