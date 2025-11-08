// SVG Drawable Animation
export function initNameAnimation() {
    const lines = document.querySelectorAll('.name-svg .line');
    
    lines.forEach((line, index) => {
        const length = line.getTotalLength();
        
        // Set initial state
        line.style.strokeDasharray = length;
        line.style.strokeDashoffset = length;
        
        // Animate drawing
        setTimeout(() => {
            line.style.transition = 'stroke-dashoffset 0.8s ease-in-out';
            line.style.strokeDashoffset = '0';
        }, index * 100);
    });
}