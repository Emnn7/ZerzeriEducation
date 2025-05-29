// Mobile Menu Toggle
document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Counter Animation
const counters = document.querySelectorAll('.counter');
const speed = 200;

function animateCounters() {
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = target / speed;
        
        if(count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(animateCounters, 1);
        } else {
            counter.innerText = target;
        }
    });
}

// Start counters when scrolled to
window.addEventListener('scroll', function() {
    const quickInfo = document.querySelector('.quick-info');
    const quickInfoPosition = quickInfo.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;
    
    if(quickInfoPosition < screenPosition) {
        animateCounters();
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mainNav = document.querySelector('.main-nav');
    const hamburger = document.querySelector('.hamburger');

    mobileMenuBtn.addEventListener('click', function() {
        // Toggle active class on mobile menu button
        this.classList.toggle('active');
        // Toggle active class on navigation
        mainNav.classList.toggle('active');
        // Toggle hamburger animation
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
});