// scripts.js

// Function to open the contact form modal
function openContactForm() {
    document.getElementById('contactForm').style.display = 'block';
}

// Function to close the contact form modal
function closeContactForm() {
    document.getElementById('contactForm').style.display = 'none';
}

// Close modal when clicking outside of the modal-content
window.onclick = function(event) {
    if (event.target == document.getElementById('contactForm')) {
        closeContactForm();
    }
}
