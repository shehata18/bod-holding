// BOD Website JavaScript

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Mobile Menu Toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function () {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Language Toggle (English/Arabic)
    const languageToggle = document.getElementById('language-toggle');

    if (languageToggle) {
        languageToggle.addEventListener('click', function () {
            document.body.classList.toggle('rtl');

            // Change button text based on current direction
            if (document.body.classList.contains('rtl')) {
                languageToggle.textContent = 'EN | عربي';
                document.documentElement.setAttribute('lang', 'ar');

                // You can further enhance this by loading Arabic content
                // For a real implementation, you might want to redirect to an Arabic version
                // or use a translation library
            } else {
                languageToggle.textContent = 'EN | عربي';
                document.documentElement.setAttribute('lang', 'en');
            }
        });
    }

    // Animate counters on scroll (for statistics/numbers sections)
    const counterElements = document.querySelectorAll('.counter-value');

    // Only initialize counters if they exist on the page
    if (counterElements.length > 0) {
        initCounters();
    }

    function initCounters() {
        const options = {
            threshold: 0.5
        };

        const observer = new IntersectionObserver(function (entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = entry.target;
                    const countTo = parseInt(target.getAttribute('data-count'));
                    const duration = 2000; // 2 seconds

                    let count = 0;
                    const step = Math.ceil(countTo / (duration / 30)); // Update roughly every 30ms

                    const timer = setInterval(() => {
                        count += step;
                        if (count >= countTo) {
                            clearInterval(timer);
                            target.textContent = countTo;
                        } else {
                            target.textContent = count;
                        }
                    }, 30);

                    // Unobserve after animation is triggered
                    observer.unobserve(target);
                }
            });
        }, options);

        counterElements.forEach(counter => {
            observer.observe(counter);
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');

            // Skip if it's just "#" or similar
            if (targetId === '#' || targetId === '') return;

            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                e.preventDefault();

                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add animation class to elements when they come into view
    const fadeElements = document.querySelectorAll('.fade-on-scroll');

    if (fadeElements.length > 0) {
        const fadeObserver = new IntersectionObserver(function (entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                    fadeObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        fadeElements.forEach(element => {
            fadeObserver.observe(element);
        });
    }

    // Form validation for contact and career forms
    const forms = document.querySelectorAll('form');

    forms.forEach(form => {
        form.addEventListener('submit', function (e) {
            let valid = true;
            const requiredFields = form.querySelectorAll('[required]');

            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    valid = false;
                    field.classList.add('border-red-500');

                    // Add error message if it doesn't exist
                    let errorMsg = field.nextElementSibling;
                    if (!errorMsg || !errorMsg.classList.contains('error-message')) {
                        errorMsg = document.createElement('p');
                        errorMsg.classList.add('error-message', 'text-red-500', 'text-sm', 'mt-1');
                        errorMsg.textContent = 'This field is required';
                        field.insertAdjacentElement('afterend', errorMsg);
                    }
                } else {
                    field.classList.remove('border-red-500');

                    // Remove error message if it exists
                    const errorMsg = field.nextElementSibling;
                    if (errorMsg && errorMsg.classList.contains('error-message')) {
                        errorMsg.remove();
                    }

                    // Email validation
                    if (field.type === 'email' && !validateEmail(field.value)) {
                        valid = false;
                        field.classList.add('border-red-500');

                        let errorMsg = field.nextElementSibling;
                        if (!errorMsg || !errorMsg.classList.contains('error-message')) {
                            errorMsg = document.createElement('p');
                            errorMsg.classList.add('error-message', 'text-red-500', 'text-sm', 'mt-1');
                            errorMsg.textContent = 'Please enter a valid email address';
                            field.insertAdjacentElement('afterend', errorMsg);
                        }
                    }
                }
            });

            if (!valid) {
                e.preventDefault();
            }
        });
    });

    function validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
}); 