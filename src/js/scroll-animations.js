// Scroll-triggered animations for connecting lines
export function initScrollAnimations() {
    const lines = document.querySelectorAll('.connection-line');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                const path = entry.target.querySelector('.animated-path');
                if (path) {
                    path.classList.add('animate');
                }
            }
        });
    }, {
        threshold: 0.5
    });
    
    lines.forEach(line => {
        observer.observe(line);
    });
}