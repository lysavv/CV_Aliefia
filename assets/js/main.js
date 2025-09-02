document.addEventListener('DOMContentLoaded', () => {
    // --- Preloader ---
    const preloader = document.getElementById('preloader');
    window.addEventListener('load', () => {
        if (preloader) {
            setTimeout(() => {
                preloader.classList.add('preloader--fade-out');
            }, 200); // small delay
        }
    });

    // --- Sidebar Logic ---
    const sidebarToggle = document.getElementById('sidebar-toggle');
    const sidebar = document.getElementById('sidebar');
    if (sidebarToggle && sidebar) {
        sidebarToggle.addEventListener('click', () => sidebar.classList.toggle('sidebar--open'));
    }
    document.addEventListener('click', (event) => {
        if (window.innerWidth < 992 && sidebar && sidebar.classList.contains('sidebar--open')) {
            const isClickInsideSidebar = sidebar.contains(event.target);
            const isClickOnToggle = sidebarToggle.contains(event.target);
            if (!isClickInsideSidebar && !isClickOnToggle) {
                sidebar.classList.remove('sidebar--open');
            }
        }
    });

    // --- Interactive Background ---
    const interativeBg = document.getElementById('interactive-bg');
    if (interativeBg) {
        document.addEventListener('mousemove', (e) => {
            requestAnimationFrame(() => {
                interativeBg.style.setProperty('--x', e.clientX + 'px');
                interativeBg.style.setProperty('--y', e.clientY + 'px');
            });
        });
    }

    // --- Scroll Animation Logic ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, {
        threshold: 0.1
    });
    const elementsToAnimate = document.querySelectorAll('.scroll-animate');
    elementsToAnimate.forEach(el => observer.observe(el));

    // --- Back to Top Button ---
    const backToTopButton = document.getElementById('back-to-top');
    if (backToTopButton) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopButton.classList.add('show');
            } else {
                backToTopButton.classList.remove('show');
            }
        });
        backToTopButton.addEventListener('click', (e) => {
            
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});