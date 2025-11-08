// Transition animations
export function initTransitions() {
    let isTransitioning = false;

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

    // Initialize
    createSliceTransition();
}