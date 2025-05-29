// Tab Filtering Functionality
document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const courseCards = document.querySelectorAll('.course-card');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            tabButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            const category = this.getAttribute('data-category');
            
            // Filter courses
            courseCards.forEach(card => {
                if (category === 'all' || card.getAttribute('data-category') === category) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 50);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
    
    // Header Scroll Effect
    const header = document.querySelector('.animated-header');
    const scrollDown = document.querySelector('.scroll-down');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
            scrollDown.style.opacity = '0';
        } else {
            header.classList.remove('scrolled');
            scrollDown.style.opacity = '1';
        }
    });
    
    // Mobile Menu Toggle
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const mainNav = document.querySelector('.main-nav ul');
    
    mobileBtn.addEventListener('click', function() {
        this.classList.toggle('active');
        mainNav.classList.toggle('active');
        
        // Animate hamburger icon
        const spans = this.querySelectorAll('.hamburger span');
        if (this.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -7px)';
        } else {
            spans[0].style.transform = 'rotate(0) translate(0)';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'rotate(0) translate(0)';
        }
    });
    
    // Testimonial Slider Auto Scroll
    const slider = document.querySelector('.testimonials-slider');
    let isDown = false;
    let startX;
    let scrollLeft;
    
    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        slider.classList.add('active');
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });
    
    slider.addEventListener('mouseleave', () => {
        isDown = false;
        slider.classList.remove('active');
    });
    
    slider.addEventListener('mouseup', () => {
        isDown = false;
        slider.classList.remove('active');
    });
    
    slider.addEventListener('mousemove', (e) => {
        if(!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 2;
        slider.scrollLeft = scrollLeft - walk;
    });
    
    // Auto-scroll testimonials
    let autoScrollInterval = setInterval(() => {
        const firstCard = slider.querySelector('.testimonial-card');
        const cardWidth = firstCard.offsetWidth + 30; // including gap
        
        if (slider.scrollLeft + slider.offsetWidth >= slider.scrollWidth - 50) {
            slider.scrollTo({
                left: 0,
                behavior: 'smooth'
            });
        } else {
            slider.scrollBy({
                left: cardWidth,
                behavior: 'smooth'
            });
        }
    }, 5000);
    
    // Pause auto-scroll on hover
    slider.addEventListener('mouseenter', () => {
        clearInterval(autoScrollInterval);
    });
    
    slider.addEventListener('mouseleave', () => {
        autoScrollInterval = setInterval(() => {
            const firstCard = slider.querySelector('.testimonial-card');
            const cardWidth = firstCard.offsetWidth + 30;
            
            if (slider.scrollLeft + slider.offsetWidth >= slider.scrollWidth - 50) {
                slider.scrollTo({
                    left: 0,
                    behavior: 'smooth'
                });
            } else {
                slider.scrollBy({
                    left: cardWidth,
                    behavior: 'smooth'
                });
            }
        }, 5000);
    });
});