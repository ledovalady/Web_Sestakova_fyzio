document.addEventListener('DOMContentLoaded', () => {

    // --- Header Scroll Effect ---
    const header = document.querySelector('.header');
    if (header) {
        let lastScroll = 0;

        window.addEventListener('scroll', () => {
            const currentScroll = window.scrollY;

            // Zajištění stylingu pozadí hlavičky
            if (currentScroll > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }

            // Schování a zobrazení hlavičky podle směru scrollování
            if (currentScroll > lastScroll && currentScroll > 80) {
                // Scrollování dolů - skrýt, pouze pokud není otevřené mobilní menu
                if (!document.body.classList.contains('nav-mobile-active')) {
                    header.classList.add('header-hidden');
                }
            } else {
                // Scrollování nahoru - zobrazit
                header.classList.remove('header-hidden');
            }

            lastScroll = currentScroll;
        });
    }

    // --- Dynamic Copyright Year ---
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // --- Mobile Menu Toggle ---
    const hamburger = document.getElementById('hamburger');
    const mainNav = document.getElementById('main-nav');

    hamburger.addEventListener('click', () => {
        document.body.classList.toggle('nav-mobile-active');
        // Animation for hamburger
        const spans = hamburger.querySelectorAll('span');
        document.body.classList.contains('nav-mobile-active') ?
            (spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)',
                spans[1].style.opacity = '0',
                spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)') :
            (spans[0].style.transform = 'none',
                spans[1].style.opacity = '1',
                spans[2].style.transform = 'none');
    });

    // Close menu when clicking a link
    const navLinks = mainNav.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            document.body.classList.remove('nav-mobile-active');
            const spans = hamburger.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        });
    });

    // --- Accordion Toggle ---
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            const isActive = item.classList.contains('active');

            // Close all other items (optional, but requested for cleaner view)
            document.querySelectorAll('.accordion-item').forEach(i => i.classList.remove('active'));

            if (!isActive) {
                item.classList.add('active');
            }
        });
    });


    // --- Cookie Preferences Manager ---
    const cookieBar = document.getElementById('cookie-bar');
    const cookieAccept = document.getElementById('cookie-accept');
    const cookieReject = document.getElementById('cookie-reject');
    const cookiePrefs = document.getElementById('cookie-prefs');
    const cookieToggle = document.getElementById('cookie-toggle');

    // Modal Elements
    const cookieModal = document.getElementById('cookie-prefs-modal');
    const closeModalBtn = document.getElementById('close-cookie-modal');
    const savePrefsBtn = document.getElementById('save-cookie-prefs');
    const acceptAllModalBtn = document.getElementById('cookie-accept-all-modal');
    const rejectAllModalBtn = document.getElementById('cookie-reject-all-modal');

    // Toggles
    const toggleAnalytics = document.getElementById('toggle-analytics');
    const toggleMarketing = document.getElementById('toggle-marketing');

    // Default Preferences
    const defaultPrefs = {
        essential: true, // Always true
        analytics: false,
        marketing: false,
        isSet: false // Indicates if user has made a choice
    };

    // Get current preferences or use defaults
    const getCookiePrefs = () => {
        const stored = localStorage.getItem('cookiePreferences');
        return stored ? JSON.parse(stored) : { ...defaultPrefs };
    };

    const updateCookieUI = () => {
        const prefs = getCookiePrefs();
        if (prefs.isSet) {
            if (cookieBar) cookieBar.style.display = 'none';
            if (cookieToggle) cookieToggle.style.display = 'flex';
        } else {
            if (cookieBar) cookieBar.style.display = 'flex';
            if (cookieToggle) cookieToggle.style.display = 'none';
        }
    };

    // Initialize UI after slight delay if not set
    const initPrefs = getCookiePrefs();
    if (!initPrefs.isSet) {
        setTimeout(() => {
            updateCookieUI();
        }, 1000);
    } else {
        updateCookieUI();
    }

    const savePreferences = (preferences) => {
        preferences.isSet = true;
        localStorage.setItem('cookiePreferences', JSON.stringify(preferences));
        updateCookieUI();
        closeModal();
        applyCookieLogic(preferences);
    };

    const openModal = () => {
        const prefs = getCookiePrefs();
        if (toggleAnalytics) toggleAnalytics.checked = prefs.analytics;
        if (toggleMarketing) toggleMarketing.checked = prefs.marketing;

        if (cookieModal) {
            cookieModal.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        }
    };

    const closeModal = () => {
        if (cookieModal) {
            cookieModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    };

    // Dummy function to represent applying the logic
    const applyCookieLogic = (prefs) => {
        console.log("Applying cookie preferences:", prefs);
        // Here you would conditionally inject Google Analytics, Meta Pixel, etc.
        // if (prefs.analytics) { loadAnalytics(); }
        // if (prefs.marketing) { loadMarketing(); }
    };

    // Action: Accept All
    const acceptAll = () => {
        savePreferences({
            essential: true,
            analytics: true,
            marketing: true
        });
    };

    // Action: Reject All (Non-essential)
    const rejectAll = () => {
        savePreferences({
            essential: true,
            analytics: false,
            marketing: false
        });
    };

    // Action: Save Custom Preferences from Modal
    const saveCustom = () => {
        savePreferences({
            essential: true,
            analytics: toggleAnalytics ? toggleAnalytics.checked : false,
            marketing: toggleMarketing ? toggleMarketing.checked : false
        });
    };

    // Banner Event Listeners
    if (cookieAccept) cookieAccept.addEventListener('click', acceptAll);
    if (cookieReject) cookieReject.addEventListener('click', rejectAll);
    if (cookiePrefs) cookiePrefs.addEventListener('click', openModal);

    // Floating Toggle Event Listener
    if (cookieToggle) {
        cookieToggle.addEventListener('click', openModal);
    }

    // Modal Event Listeners
    if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
    if (savePrefsBtn) savePrefsBtn.addEventListener('click', saveCustom);
    if (acceptAllModalBtn) acceptAllModalBtn.addEventListener('click', acceptAll);
    if (rejectAllModalBtn) rejectAllModalBtn.addEventListener('click', rejectAll);

    // Close modal on outside click
    if (cookieModal) {
        cookieModal.addEventListener('click', (e) => {
            if (e.target === cookieModal) closeModal();
        });
    }

    // Apply logic on load if already set
    if (initPrefs.isSet) {
        applyCookieLogic(initPrefs);
    }

    // --- Simple Scroll Fade Animation ---
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.section, .usp-item, .price-item').forEach(el => {
        el.classList.add('fade-in-el');
        observer.observe(el);
    });

    // --- Expanding CTA Observer ---
    const ctaCard = document.getElementById('expanding-cta');
    const ctaSection = document.querySelector('.expanding-cta-section');

    if (ctaCard) {
        const ctaObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    ctaCard.classList.add('is-expanded');
                    // ctaObserver.unobserve(entry.target); // Odkomentujte, pokud chcete animaci jen jednou
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px' // Spustí se o něco dříve před úplným vstupem
        });
        ctaObserver.observe(ctaCard);
    }

    // --- Czech Typography Fix (Vlna) ---
    // Substitutes space after single letter prepositions with non-breaking space
    const typographyFix = (container) => {
        const prepositions = ['v', 's', 'z', 'u', 'o', 'k', 'a', 'i'];
        const walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT, null, false);
        let node;
        while (node = walker.nextNode()) {
            let text = node.nodeValue;
            prepositions.forEach(p => {
                const regex = new RegExp(`\\b(${p})\\s+`, 'gi');
                text = text.replace(regex, `$1\u00A0`);
            });
            node.nodeValue = text;
        }
    };
    typographyFix(document.body);

    // --- Typing Effect ---
    const typingText = document.getElementById('typing-text');
    const phrases = [
        'vrátí vás zpět do života',
        'pro pohyb bez bolesti',
        'pro celou vaši rodinu',
    ];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    const type = () => {
        const currentPhrase = phrases[phraseIndex];

        if (isDeleting) {
            typingText.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typingText.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }

        if (!isDeleting && charIndex === currentPhrase.length) {
            isDeleting = true;
            typingSpeed = 2000; // Pause at the end
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typingSpeed = 500;
        }

        setTimeout(type, typingSpeed);
    };

    if (typingText) {
        type();
    }

    // --- Reviews Carousel ---
    const slides = document.querySelectorAll('.review-slide');
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));

        currentSlide = index;
        if (currentSlide < 0) currentSlide = slides.length - 1;
        if (currentSlide >= slides.length) currentSlide = 0;

        slides[currentSlide].classList.add('active');
    }

    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => {
            showSlide(currentSlide - 1);
        });

        nextBtn.addEventListener('click', () => {
            showSlide(currentSlide + 1);
        });

        // Automatické přepínání (volitelné)
        setInterval(() => {
            showSlide(currentSlide + 1);
        }, 8000);
    }

    // --- Add animations specifically to CSS ---
    const style = document.createElement('style');
    style.textContent = `
        .fade-in-el {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        .fade-in-visible {
            opacity: 1;
            transform: translateY(0);
        }
        .typing-cursor {
            color: var(--cta);
            animation: blink 1s infinite;
            font-weight: 300;
            margin-left: 5px;
        }
        @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
        }
    `;
    document.head.appendChild(style);

    // --- Mouse Follower Effect ---
    // Efekt se aktivuje pouze na zařízeních, která reagují na myš (ne na mobilech/dotykových)
    if (window.matchMedia("(pointer: fine)").matches) {
        const cursor = document.createElement('div');
        cursor.classList.add('mouse-follower');
        document.body.appendChild(cursor);

        let mouseX = window.innerWidth / 2;
        let mouseY = window.innerHeight / 2;
        let cursorX = mouseX;
        let cursorY = mouseY;
        let isMoving = false;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            if (!isMoving) {
                cursor.classList.add('active');
                isMoving = true;
            }
        });

        const animateCursor = () => {
            const dx = mouseX - cursorX;
            const dy = mouseY - cursorY;

            // Jemné zpomalení - interpolace
            cursorX += dx * 0.15;
            cursorY += dy * 0.15;

            cursor.style.transform = `translate3d(calc(${cursorX}px - 50%), calc(${cursorY}px - 50%), 0)`;
            requestAnimationFrame(animateCursor);
        };

        animateCursor();

        // Zvětšení kruhu (hover efekt) přes aktivní prvky
        const attachHoverEvents = () => {
            const hoverables = document.querySelectorAll('a, button, .btn, .accordion-header, .usp-item, .stack-card');
            hoverables.forEach(el => {
                // Předejít vícenásobnému přiřazení
                if (!el.dataset.mouseHoverAttached) {
                    el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
                    el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
                    el.dataset.mouseHoverAttached = 'true';
                }
            });
        };

        attachHoverEvents();

        // Pokud se dynamicky načte další obsah, můžeme jej znovu připojit
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.addedNodes.length) {
                    attachHoverEvents();
                }
            });
        });
        observer.observe(document.body, { childList: true, subtree: true });
    }

});
