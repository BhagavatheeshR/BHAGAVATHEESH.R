// 3D Tilt Cards functionality
export function initTiltCards() {
    const cards = document.querySelectorAll('[data-tilt]');
    
    cards.forEach(card => {
        let isHovering = false;
        
        card.addEventListener('mouseenter', () => {
            isHovering = true;
        });
        
        card.addEventListener('mouseleave', () => {
            isHovering = false;
            // Reset card position
            card.style.transform = 'translateY(0) rotateX(0deg) rotateY(0deg)';
            
            // Reset glare
            const glare = card.querySelector('.card-glare');
            if (glare) {
                glare.style.background = 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%)';
            }
        });
        
        card.addEventListener('mousemove', (e) => {
            if (!isHovering) return;
            
            const rect = card.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            
            const mouseX = e.clientX - centerX;
            const mouseY = e.clientY - centerY;
            
            // Calculate tilt angles (max 12 degrees)
            const rotateX = (mouseY / rect.height) * -12;
            const rotateY = (mouseX / rect.width) * 12;
            
            // Apply 3D transform
            card.style.transform = `translateY(-8px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            
            // Update glare position
            const glare = card.querySelector('.card-glare');
            if (glare) {
                const glareX = (mouseX / rect.width) * 100 + 50;
                const glareY = (mouseY / rect.height) * 100 + 50;
                glare.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.15) 0%, transparent 50%)`;
            }
        });
        
        // Add click animation
        card.addEventListener('mousedown', () => {
            card.style.transform += ' scale(0.97)';
        });
        
        card.addEventListener('mouseup', () => {
            card.style.transform = card.style.transform.replace(' scale(0.97)', '');
        });
    });
}