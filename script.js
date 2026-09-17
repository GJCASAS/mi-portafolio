// Espera a que la página cargue para activar los eventos
document.addEventListener('DOMContentLoaded', () => {
    const botonContacto = document.querySelector('button');

    if (botonContacto) {
        botonContacto.addEventListener('click', () => {
            alert('¡Gracias por tu interés, Gloria! Pronto nos pondremos en contacto.');
        });
    }
});