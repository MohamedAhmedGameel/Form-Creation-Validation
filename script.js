document.addEventListener('DOMContentLoaded', function () {
    // Form Selection
    const form = document.getElementById('registration-form');
    
    // Feedback Division Selection
    const feedbackDiv = document.getElementById('form-feedback');

    // Form Submission Event Listener
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission to the server
        
        // Input Retrieval and Trimming
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        // Validation Variables
        let isValid = true;
        let messages = [];

        // Username Validation  
        if (username.length < 3) {
            isValid = false;
            messages.push('Username must be at least 3 characters long.');
        }

        // Email Validation
        if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push('Email must contain "@" and a domain.');
        }

        // Password Validation
        if (password.length < 8) {
            isValid = false;
            messages.push('Password must be at least 8 characters long.');
        }

        // Displaying Feedback
        feedbackDiv.style.display = 'block'; // Make the feedback div visible

        if (isValid) {
            feedbackDiv.textContent = 'Registration successful!';
            feedbackDiv.style.color = '#28a745'; // Green for success
        } else {
            feedbackDiv.innerHTML = messages.join('<br>'); // Display error messages
            feedbackDiv.style.color = '#dc3545'; // Red for errors
        }
    });
});
