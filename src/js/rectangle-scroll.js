// Rectangle Tab Scroll Animation
document.addEventListener('DOMContentLoaded', function() {
    const projectTabs = document.querySelectorAll('.project-tab');
    
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);
    
    projectTabs.forEach(tab => {
        observer.observe(tab);
    });
});