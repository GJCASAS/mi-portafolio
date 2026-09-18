// Espera a que el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    
    // Configuración del Modo Oscuro (usando ID específico)
    const btnTheme = document.getElementById('theme-toggle');

    if (btnTheme) {
        btnTheme.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            
            // Cambiar el texto del botón según el modo activo
            if (document.body.classList.contains('dark-mode')) {
                btnTheme.textContent = '☀️ Modo Claro';
            } else {
                btnTheme.textContent = '🌙 Modo Oscuro';
            }
        });
    }

});