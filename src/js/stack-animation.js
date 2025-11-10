// Show first tab initially, stack others on scroll
const tabs = document.querySelectorAll('.project-tab');

// Hide all tabs except first initially
tabs.forEach((tab, index) => {
    if (index > 0) {
        tab.style.opacity = '0';
        tab.style.transform = 'translateY(100px)';
    }
});

window.addEventListener('scroll', () => {
    const projectsSection = document.querySelector('.projects');
    if (!projectsSection) return;
    
    const sectionRect = projectsSection.getBoundingClientRect();
    const sectionHeight = projectsSection.offsetHeight;
    const scrollProgress = Math.max(0, Math.min(1, 
        (window.innerHeight - sectionRect.top) / sectionHeight
    ));
    
    tabs.forEach((tab, index) => {
        const showAt = index * 0.1;
        
        if (scrollProgress > showAt) {
            tab.style.opacity = '1';
            tab.style.transform = 'translateY(0)';
        } else {
            if (index > 0) {
                tab.style.opacity = '0';
                tab.style.transform = 'translateY(100px)';
            }
        }
    });
});