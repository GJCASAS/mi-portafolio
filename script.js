// Espera a que la página cargue para activar los eventos
document.addEventListener('DOMContentLoaded', () => {
    const botonContacto = document.querySelector('button');

    if (botonContacto) {
        botonContacto.addEventListener('click', () => {
            alert('¡Gracias por tu interés, Gloria! Pronto nos pondremos en contacto.');
        });
    }
});const btnTheme = document.getElementById('btn-theme');

btnTheme.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    // Cambiar el texto del botón según el modo activo
    if (document.body.classList.contains('dark-mode')) {
        btnTheme.textContent = '☀️ Modo Claro';
    } else {
        btnTheme.textContent = '🌙 Modo Oscuro';
    }
});