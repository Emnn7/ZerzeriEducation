document.addEventListener('DOMContentLoaded', function() {
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
    
    // Team Member Hover Effects
    const teamMembers = document.querySelectorAll('.team-member');
    
    teamMembers.forEach(member => {
        member.addEventListener('mouseenter', function() {
            const overlay = this.querySelector('.member-overlay');
            const socialLinks = overlay.querySelectorAll('.member-social a');
            
            // Animate social links one by one
            socialLinks.forEach((link, index) => {
                setTimeout(() => {
                    link.style.transform = 'translateY(0)';
                    link.style.opacity = '1';
                }, index * 100);
            });
        });
        
        member.addEventListener('mouseleave', function() {
            const overlay = this.querySelector('.member-overlay');
            const socialLinks = overlay.querySelectorAll('.member-social a');
            
            // Reset social links animation
            socialLinks.forEach(link => {
                link.style.transform = 'translateY(20px)';
                link.style.opacity = '0';
            });
        });
    });
    
    // Initialize social links position
    document.querySelectorAll('.member-social a').forEach(link => {
        link.style.transform = 'translateY(20px)';
        link.style.opacity = '0';
        link.style.transition = 'all 0.3s ease';
    });
    
    // Team Card Animation on Scroll
    const teamCards = document.querySelectorAll('.team-card, .team-member');
    
    function checkScroll() {
        teamCards.forEach((card, index) => {
            const cardPosition = card.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (cardPosition < screenPosition) {
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, index * 200);
            }
        });
    }
    
    // Set initial state
    teamCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.5s ease';
    });
    
    // Check on load and scroll
    window.addEventListener('load', checkScroll);
    window.addEventListener('scroll', checkScroll);
});