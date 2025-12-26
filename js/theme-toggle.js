// Theme initialization
(function () {
    const themeToggle = document.getElementById('theme-toggle');

    // Helper to set theme and init particles
    function setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        if (typeof initParticles === 'function') {
            initParticles(theme);
        }
    }

    // Toggle click handler
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            let currentTheme = document.documentElement.getAttribute('data-theme');
            let newTheme = currentTheme === 'dark' ? 'light' : 'dark';

            setTheme(newTheme);

            if (newTheme === 'dark') {
                themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            } else {
                themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
            }
        });
    }
})();
