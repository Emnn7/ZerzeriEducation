document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mainNav = document.querySelector('.main-nav');
    const hamburger = document.querySelector('.hamburger');

    mobileMenuBtn.addEventListener('click', function() {
        this.classList.toggle('active');
        mainNav.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close menu when clicking on a nav link
    const navLinks = document.querySelectorAll('.main-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenuBtn.classList.remove('active');
            mainNav.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Scrolled Header
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.animated-header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Scroll Animations
    function initScrollAnimations() {
        const animateElements = document.querySelectorAll('[data-animate]');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                }
            });
        }, { 
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        });
        
        animateElements.forEach(el => observer.observe(el));
    }

    // Parallax Effect
    function initParallax() {
        const parallaxElements = document.querySelectorAll('.parallax');
        
        if (parallaxElements.length > 0) {
            window.addEventListener('scroll', function() {
                const scrollPosition = window.pageYOffset;
                
                parallaxElements.forEach(element => {
                    const speed = parseFloat(element.getAttribute('data-speed')) || 0.3;
                    const yPos = -(scrollPosition * speed);
                    element.style.transform = `translate3d(0, ${yPos}px, 0)`;
                });
            });
        }
    }

    // Animated Cursor
    function initAnimatedCursor() {
        if (window.innerWidth > 768) { // Only on desktop
            const cursor = document.createElement('div');
            cursor.classList.add('custom-cursor');
            document.body.appendChild(cursor);
            
            document.addEventListener('mousemove', (e) => {
                cursor.style.left = e.clientX + 'px';
                cursor.style.top = e.clientY + 'px';
            });
            
            const interactiveElements = document.querySelectorAll('a, button, .program-card, .team-member, .cta-button, input, textarea');
            interactiveElements.forEach(el => {
                el.addEventListener('mouseenter', () => {
                    cursor.classList.add('cursor-hover');
                });
                el.addEventListener('mouseleave', () => {
                    cursor.classList.remove('cursor-hover');
                });
            });
        }
    }

    // Ripple Effect
    function initRippleEffect() {
        const buttons = document.querySelectorAll('.cta-button, .program-card, .team-member');
        
        buttons.forEach(button => {
            button.addEventListener('click', function(e) {
                if (this.classList.contains('cta-button')) {
                    const x = e.clientX - e.target.getBoundingClientRect().left;
                    const y = e.clientY - e.target.getBoundingClientRect().top;
                    
                    const ripple = document.createElement('span');
                    ripple.classList.add('ripple');
                    ripple.style.left = `${x}px`;
                    ripple.style.top = `${y}px`;
                    
                    this.appendChild(ripple);
                    
                    setTimeout(() => {
                        ripple.remove();
                    }, 1000);
                }
            });
        });
    }

    // Page Load Animation
    function initPageLoadAnimations() {
        document.body.style.opacity = '0';
        setTimeout(() => {
            document.body.style.transition = 'opacity 0.6s ease';
            document.body.style.opacity = '1';
        }, 100);
    }

    // Initialize all animations
    initScrollAnimations();
    initParallax();
    initAnimatedCursor();
    initRippleEffect();
    initPageLoadAnimations();

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form submission animation
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitButton = this.querySelector('button[type="submit"]');
            submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitButton.disabled = true;
            
            // Simulate form submission
            setTimeout(() => {
                submitButton.innerHTML = '<i class="fas fa-check"></i> Sent!';
                setTimeout(() => {
                    submitButton.innerHTML = 'Send Message';
                    submitButton.disabled = false;
                    contactForm.reset();
                }, 2000);
            }, 1500);
        });
    }
});

// Additional animation for hero section
window.addEventListener('load', function() {
    const heroTitle = document.querySelector('.programs-hero h1');
    const heroSubtitle = document.querySelector('.programs-hero p');
    
    if (heroTitle) {
        heroTitle.style.animation = 'slideDown 1s ease-out forwards';
    }
    
    if (heroSubtitle) {
        heroSubtitle.style.animation = 'slideUp 1s ease-out 0.3s forwards';
    }
});