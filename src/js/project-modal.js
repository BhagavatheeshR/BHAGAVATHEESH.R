// Project Details Functionality
export function initProjectModal() {
    document.addEventListener('click', (e) => {
        if (e.target.closest('.project-card')) {
            const card = e.target.closest('.project-card');
            const projectDetails = document.getElementById('project-details');
            const carouselTrack = document.querySelector('.carousel-track');
            
            // Pause carousel
            carouselTrack.style.animationPlayState = 'paused';
            
            // Get project data
            const title = card.getAttribute('data-title');
            const description = card.getAttribute('data-description');
            const tech = card.getAttribute('data-tech');
            const imageSrc = card.querySelector('img').src;

            // Populate details
            document.getElementById('details-title').textContent = title;
            document.getElementById('details-description').textContent = description;
            document.getElementById('details-tech').textContent = tech;
            document.getElementById('details-image').src = imageSrc;

            // Show details
            projectDetails.style.display = 'block';
            projectDetails.scrollIntoView({ behavior: 'smooth' });
        }
        
        if (e.target.id === 'close-details') {
            const projectDetails = document.getElementById('project-details');
            const carouselTrack = document.querySelector('.carousel-track');
            
            projectDetails.style.display = 'none';
            carouselTrack.style.animationPlayState = 'running';
        }
    });
}