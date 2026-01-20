/* =========================================
   MAIN JAVASCRIPT (PREMIUM ENHANCEMENTS)
   ========================================= */

document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation Toggle
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const body = document.body;

    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent immediate close
            navMenu.classList.toggle('active');

            // Accessibility & Icon toggle
            const isActive = navMenu.classList.contains('active');
            mobileToggle.setAttribute('aria-expanded', isActive);
            mobileToggle.textContent = isActive ? '✕' : '☰';

            // Prevent background scrolling when menu is open
            body.style.overflow = isActive ? 'hidden' : '';
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (navMenu.classList.contains('active') && !navMenu.contains(e.target) && e.target !== mobileToggle) {
                navMenu.classList.remove('active');
                mobileToggle.textContent = '☰';
                mobileToggle.setAttribute('aria-expanded', 'false');
                body.style.overflow = '';
            }
        });
    }

    // Close menu smoothly when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mobileToggle) {
                mobileToggle.textContent = '☰';
                mobileToggle.setAttribute('aria-expanded', 'false');
            }
            if (navMenu) navMenu.classList.remove('active');
            body.style.overflow = '';
        });
    });

    // Active Link Highlighting
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPath || (currentPath === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });

    // Premium Scroll Animations (Optimized Intersection Observer)
    const observerOptions = {
        threshold: 0.15, // Trigger slightly later for better effect
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add a class to trigger CSS transition
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                // Unobserve after animation (performance)
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Select elements to animate
    const animateElements = document.querySelectorAll(
        '.card, .timeline-item, .hero-text, .hero-visual, .section-title, .project-card, .btn'
    );

    // Initial state setup (if JS fails, CSS should have defaults, but here we enforce starting state for animation)
    animateElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        // Stagger animations slightly for a premium feel
        // We use inline styles for the transition to ensure it overrides specific class styles if needed
        el.style.transition = `opacity 0.8s cubic-bezier(0.25, 0.8, 0.25, 1) ${index * 0.05}s, transform 0.8s cubic-bezier(0.25, 0.8, 0.25, 1) ${index * 0.05}s`;
        observer.observe(el);
    });
});
