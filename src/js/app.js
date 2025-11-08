// Main application entry point
import { initNavigation } from './navigation.js';
import { initAnimations } from './animations.js';
import { initNameAnimation } from './name-animation.js';
import { initTiltCards } from './tilt-cards.js';
import { initProjectModal } from './project-modal.js';
import { initScrollAnimations } from './scroll-animations.js';

// Initialize all modules when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initAnimations();
    initNameAnimation();
    initTiltCards();
    initProjectModal();
    initScrollAnimations();
    
    console.log('Portfolio initialized successfully!');
});