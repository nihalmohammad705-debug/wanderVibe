// THEME SWITCHER

const themeToggle = document.getElementById('theme-toggle');

const savedTheme = localStorage.getItem('wanderVibe_theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    if (themeToggle) themeToggle.textContent = '☀️';
}

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');

        if (document.body.classList.contains('dark-mode')) {
            themeToggle.textContent = '☀️';
            localStorage.setItem('wanderVibe_theme', 'dark');
        } else {
            themeToggle.textContent = '🌙';
            localStorage.setItem('wanderVibe_theme', 'light');
        }
    });
}