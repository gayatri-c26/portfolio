// Smooth scrolling for navigation links
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

// Form submission handler
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Show success message with emoji
        alert(`✨ Thank you ${name}! Your message has been received. I will get back to you soon at ${email}. 💕`);
        
        // Reset form
        this.reset();
        
        // Optional: Log form data (for testing purposes)
        console.log('Form submitted:', { name, email, subject, message });
    });
}

// Add active state to navigation on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section[id]');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Add animation on scroll for sections
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all section elements for animation
document.querySelectorAll('.skill-card, .cert-card, .project-card, .experience-box').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
});

// Add sparkle effect on hover for skill badges (optional enhancement)
document.querySelectorAll('.skill-badge').forEach(badge => {
    badge.addEventListener('mouseenter', () => {
        badge.style.animation = 'sparkle 0.6s ease';
    });
    
    badge.addEventListener('animationend', () => {
        badge.style.animation = '';
    });
});

// Add CSS animation for sparkle effect
const style = document.createElement('style');
style.textContent = `
    @keyframes sparkle {
        0%, 100% { filter: brightness(1); }
        50% { filter: brightness(1.3); }
    }
`;
document.head.appendChild(style);

// Console welcome message with aesthetic styling
console.log('%c✨ Welcome to Gayatri\'s Portfolio! ✨', 
    'color: #ec4899; font-size: 24px; font-weight: bold; font-family: Poppins, sans-serif;'
);
console.log('%c💼 Looking for collaboration? Let\'s connect!', 
    'color: #8b5cf6; font-size: 16px; font-family: Poppins, sans-serif;'
);
console.log('%c📧 Email: charkupalligayatri2610@gmail.com', 
    'color: #64748b; font-size: 14px; font-family: Poppins, sans-serif;'
);
console.log('%c🔗 LinkedIn: https://www.linkedin.com/in/gayatric26', 
    'color: #64748b; font-size: 14px; font-family: Poppins, sans-serif;'
);

// Add subtle parallax effect to hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// Typing effect for hero title (optional - uncomment to use)
/*
const heroTitle = document.querySelector('.hero-title');
if (heroTitle) {
    const originalText = heroTitle.textContent;
    heroTitle.textContent = '';
    let i = 0;
    
    const typeWriter = () => {
        if (i < originalText.length) {
            heroTitle.textContent += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    };
    
    setTimeout(typeWriter, 500);
}
*/
