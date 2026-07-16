// CONTACT FORM VALIDATION

const contactForm = document.getElementById('contact-form');
const formError = document.getElementById('form-error');
const formSuccess = document.getElementById('form-success');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value.trim();

        // Reset
        formError.style.display = 'none';
        formSuccess.style.display = 'none';

        // Validate Name
        if (name.length < 2) {
            showError('Please enter your full name (minimum 2 characters)');
            return;
        }

        // Validate Email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showError('Please enter a valid email address (e.g., name@domain.com)');
            return;
        }

        // Validate Subject
        if (!subject) {
            showError('Please select a subject');
            return;
        }

        // Validate Message
        if (message.length < 10) {
            showError('Please enter a message (minimum 10 characters)');
            return;
        }

        // Success
        formSuccess.style.display = 'block';
        contactForm.reset();

        // Save to localStorage
        const submissions = JSON.parse(localStorage.getItem('wanderVibe_contacts')) || [];
        submissions.push({
            name,
            email,
            subject,
            message,
            date: new Date().toISOString()
        });
        localStorage.setItem('wanderVibe_contacts', JSON.stringify(submissions));

        // Hide success after 5 seconds
        setTimeout(() => {
            formSuccess.style.display = 'none';
        }, 5000);
    });
}

function showError(message) {
    formError.textContent = message;
    formError.style.display = 'block';

    setTimeout(() => {
        formError.style.display = 'none';
    }, 5000);
}