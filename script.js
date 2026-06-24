/* ===== Mobilmeny ===== */
(function () {
    const toggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (!toggle || !navLinks) return;

    toggle.addEventListener('click', function () {
        const isOpen = navLinks.classList.toggle('open');
        toggle.setAttribute('aria-label', isOpen ? 'Lukk meny' : 'Åpne meny');
        toggle.textContent = isOpen ? '✕' : '☰';
    });

    // Lukk meny ved klikk på en lenke
    navLinks.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
            navLinks.classList.remove('open');
            toggle.setAttribute('aria-label', 'Åpne meny');
            toggle.textContent = '☰';
        });
    });

    // Lukk meny ved klikk utenfor
    document.addEventListener('click', function (e) {
        if (!navLinks.classList.contains('open')) return;
        if (!navLinks.contains(e.target) && e.target !== toggle) {
            navLinks.classList.remove('open');
            toggle.setAttribute('aria-label', 'Åpne meny');
            toggle.textContent = '☰';
        }
    });
})();
