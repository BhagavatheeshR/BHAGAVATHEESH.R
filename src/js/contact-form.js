// Contact form handler
document.getElementById('contactForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };
    
    const submitBtn = document.querySelector('.send-btn');
    const originalText = submitBtn.querySelector('span').textContent;
    
    try {
        submitBtn.querySelector('span').textContent = 'Sending...';
        submitBtn.disabled = true;
        
        const response = await fetch('http://localhost:3000/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        
        const result = await response.json();
        
        if (response.ok) {
            alert('Message sent successfully!');
            document.getElementById('contactForm').reset();
        } else {
            alert('Error: ' + result.error);
        }
    } catch (error) {
        alert('Network error. Please try again.');
    } finally {
        submitBtn.querySelector('span').textContent = originalText;
        submitBtn.disabled = false;
    }
});