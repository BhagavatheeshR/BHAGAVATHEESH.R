// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// CTA button functionality
document.querySelector('.cta-btn').addEventListener('click', function() {
    document.querySelector('#projects').scrollIntoView({
        behavior: 'smooth'
    });
});

// Add active class to navigation based on scroll position
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// Slice transition animation
function createSliceTransition() {
    const overlay = document.getElementById('transition-overlay');
    overlay.innerHTML = '';
    
    for (let i = 0; i < 15; i++) {
        const slice = document.createElement('div');
        slice.className = 'slice';
        slice.style.top = `${(i * 100) / 15}vh`;
        slice.style.animationDelay = `${i * 0.05}s`;
        overlay.appendChild(slice);
    }
}

// Handle section transitions
let isTransitioning = false;

document.querySelector('nav a[href="#about"]').addEventListener('click', function(e) {
    e.preventDefault();
    if (isTransitioning) return;
    
    isTransitioning = true;
    
    const overlay = document.getElementById('transition-overlay');
    createSliceTransition();
    overlay.classList.add('active');
    
    const slices = overlay.querySelectorAll('.slice');
    slices.forEach((slice, index) => {
        setTimeout(() => {
            slice.style.animation = 'sliceReveal 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards';
        }, index * 50);
    });
    
    setTimeout(() => {
        document.getElementById('about').scrollIntoView({ behavior: 'instant' });
        
        setTimeout(() => {
            overlay.classList.remove('active');
            isTransitioning = false;
        }, 100);
    }, 800);
});

// Simple animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe project cards for animation
document.querySelectorAll('.project-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Initialize
createSliceTransition();