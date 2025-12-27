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
        
        // Show success message
        alert(`Thank you ${name}! Your message has been received. I will get back to you soon at ${email}.`);
        
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
    rootMargin: '0px 0px -100px 0px'
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
document.querySelectorAll('.content-section, .project-card, .skill-card, .cert-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
});

// Add hover effect sound (optional - commented out)
/*
document.querySelectorAll('.skill-badge, .project-card, .skill-card').forEach(element => {
    element.addEventListener('mouseenter', () => {
        // Add any additional hover effects here
        element.style.transition = 'all 0.3s ease';
    });
});
*/

// Console welcome message
console.log('%c👋 Welcome to Gayatri\'s Portfolio!', 'color: #00d4ff; font-size: 20px; font-weight: bold;');
console.log('%c💼 Interested in collaboration? Contact: charkupalligayatri2610@gmail.com', 'color: #ffd600; font-size: 14px;');
console.log('%c🔗 LinkedIn: https://www.linkedin.com/in/gayatric26', 'color: #00ff88; font-size: 14px;');
