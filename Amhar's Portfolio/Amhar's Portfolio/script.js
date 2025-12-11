// ========== NAVBAR SCROLL EFFECT ==========
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ========== MOBILE MENU TOGGLE ==========
const hamburger = document.getElementById('hamburger');
const navLinksContainer = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinksContainer.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinksContainer.classList.remove('active');
    });
});

// ========== ACTIVE NAVIGATION LINK ON SCROLL ==========
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ========== FADE & SLIDE TRANSITION EFFECT ==========
const typingText = document.querySelector('.typing-text');
const words = ['Web Developer', 'Cybersecurity Enthusiast', 'Problem Solver', 'Tech Innovator'];
let wordIndex = 0;

function fadeTransitionEffect() {
    // Fade out and slide up
    typingText.style.opacity = '0';
    typingText.style.transform = 'translateY(-20px)';
    
    setTimeout(() => {
        // Change text
        wordIndex = (wordIndex + 1) % words.length;
        typingText.textContent = words[wordIndex];
        
        // Fade in and slide down
        typingText.style.opacity = '1';
        typingText.style.transform = 'translateY(0)';
    }, 500);
}

// Start fade transition effect when page loads
document.addEventListener('DOMContentLoaded', () => {
    typingText.textContent = words[0];
    typingText.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    setInterval(fadeTransitionEffect, 3000);
});

// ========== SKILL BARS ANIMATION ==========
const skillBars = document.querySelectorAll('.skill-progress');

function animateSkills() {
    skillBars.forEach(bar => {
        const progress = bar.getAttribute('data-progress');
        const barPosition = bar.getBoundingClientRect().top;
        const screenPosition = window.innerHeight;
        
        if (barPosition < screenPosition) {
            bar.style.width = progress + '%';
        }
    });
}

window.addEventListener('scroll', animateSkills);
window.addEventListener('load', animateSkills);

// ========== SMOOTH SCROLL FOR ANCHOR LINKS ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ========== SCROLL REVEAL ANIMATION ==========
function reveal() {
    const reveals = document.querySelectorAll('.about-content, .timeline-item, .skill-category, .project-card, .contact-content');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('fade-in');
        }
    });
}

window.addEventListener('scroll', reveal);
window.addEventListener('load', reveal);

// ========== FORM SUBMISSION ==========
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const formData = new FormData(contactForm);
        
        // Here you would typically send the data to a server
        // For now, we'll just show a success message
        
        // Create success message
        const successMessage = document.createElement('div');
        successMessage.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: linear-gradient(135deg, #00d4ff 0%, #7000ff 100%);
            color: white;
            padding: 2rem 3rem;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
            z-index: 10000;
            text-align: center;
            animation: fadeInUp 0.5s ease;
        `;
        successMessage.innerHTML = `
            <h3 style="margin-bottom: 1rem; font-size: 1.5rem;">Thank You!</h3>
            <p style="margin: 0;">Your message has been sent successfully. I'll get back to you soon!</p>
        `;
        
        document.body.appendChild(successMessage);
        
        // Reset form
        contactForm.reset();
        
        // Remove message after 4 seconds
        setTimeout(() => {
            successMessage.style.animation = 'fadeOut 0.5s ease';
            setTimeout(() => {
                document.body.removeChild(successMessage);
            }, 500);
        }, 4000);
    });
}

// ========== PARTICLES BACKGROUND EFFECT (Optional) ==========
// Create subtle moving particles in the background
function createParticles() {
    const hero = document.querySelector('.hero');
    const particlesCount = 30;
    
    for (let i = 0; i < particlesCount; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 4 + 1}px;
            height: ${Math.random() * 4 + 1}px;
            background: rgba(0, 212, 255, ${Math.random() * 0.5 + 0.2});
            border-radius: 50%;
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
            animation: float ${Math.random() * 10 + 5}s ease-in-out infinite;
            animation-delay: ${Math.random() * 5}s;
            pointer-events: none;
        `;
        hero.appendChild(particle);
    }
}

// Add CSS animation for particles
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeOut {
        from {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
        }
        to {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.8);
        }
    }
`;
document.head.appendChild(style);

// Initialize particles on page load
window.addEventListener('load', createParticles);

// ========== CURSOR EFFECT (Optional Enhancement) ==========
const cursor = document.createElement('div');
cursor.style.cssText = `
    position: fixed;
    width: 20px;
    height: 20px;
    border: 2px solid #00d4ff;
    border-radius: 50%;
    pointer-events: none;
    transition: transform 0.1s, opacity 0.3s;
    z-index: 9999;
    display: none;
`;
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
    cursor.style.display = 'block';
    cursor.style.left = e.clientX - 10 + 'px';
    cursor.style.top = e.clientY - 10 + 'px';
});

// Enlarge cursor on hover over interactive elements
document.querySelectorAll('a, button, .btn').forEach(element => {
    element.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(1.5)';
        cursor.style.backgroundColor = 'rgba(0, 212, 255, 0.2)';
    });
    
    element.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
        cursor.style.backgroundColor = 'transparent';
    });
});

// ========== PROJECT CARD TILT EFFECT ==========
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// ========== CONSOLE MESSAGE ==========
console.log('%c👋 Welcome to my Portfolio!', 'color: #00d4ff; font-size: 20px; font-weight: bold;');
console.log('%cBuilt with ❤️ by M.F. Mohomad Amhar', 'color: #7000ff; font-size: 14px;');
console.log('%cInterested in connecting? Let\'s talk!', 'color: #ff0080; font-size: 12px;');
