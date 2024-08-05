const imagen = document.getElementById('miImagen');
let bordeActivo = false;

imagen.addEventListener('click', () => {
    bordeActivo = !bordeActivo;
    if (bordeActivo) {
        imagen.style.border = '2px solid red';
    } else {
        imagen.style.border = 'none';
    }
});