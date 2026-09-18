document.addEventListener('DOMContentLoaded', () => {
    const btnTheme = document.getElementById('theme-toggle');

    if (btnTheme) {
        btnTheme.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            
            if (document.body.classList.contains('dark-mode')) {
                btnTheme.textContent = '☀️ Modo Claro';
            } else {
                btnTheme.textContent = '🌙 Modo Oscuro';
            }
        });
    }
});