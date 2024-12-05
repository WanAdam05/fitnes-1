document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signupForm');
    
    // Add input focus effects
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.style.transform = 'translateY(-2px)';
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.style.transform = 'translateY(0)';
        });
    });
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        
        // Clear previous error messages
        clearErrors();
        
        // Validate form
        if (password !== confirmPassword) {
            showError('confirmPassword', 'Passwords do not match');
            return;
        }
        
        if (password.length < 6) {
            showError('password', 'Password must be at least 6 characters long');
            return;
        }
        
        // If validation passes, you can submit the form data to your server
        console.log('Form submitted:', {
            username,
            email,
            password
        });
        
        // Reset form and show success message
        form.reset();
        showSuccessMessage();
    });
    
    function showSuccessMessage() {
        const container = document.querySelector('.signup-container');
        container.innerHTML = `
            <h2>Welcome Aboard! 💪</h2>
            <p style="text-align: center; margin: 20px 0; line-height: 1.6;">
                Get ready to transform your life!<br>
                Your fitness journey begins now!
            </p>
            <button onclick="window.location.href='login.html'" style="margin-top: 20px;">
                Go to Login
            </button>
        `;
    }
    
    function showError(fieldId, message) {
        const field = document.getElementById(fieldId);
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error';
        errorDiv.textContent = message;
        field.parentNode.appendChild(errorDiv);
    }
    
    function clearErrors() {
        const errors = document.querySelectorAll('.error');
        errors.forEach(error => error.remove());
    }
    
    // Add social signup functions
    window.signUpWithGoogle = function() {
        console.log('Signing up with Google...');
        // Here you would typically implement Google OAuth
        // For demonstration, we'll show a success message
        showSocialSignupSuccess('Google');
    }

    window.signUpWithFacebook = function() {
        console.log('Signing up with Facebook...');
        // Here you would typically implement Facebook OAuth
        // For demonstration, we'll show a success message
        showSocialSignupSuccess('Facebook');
    }

    function showSocialSignupSuccess(provider) {
        const container = document.querySelector('.signup-container');
        container.innerHTML = `
            <h2>Welcome Aboard! 💪</h2>
            <p style="text-align: center; margin: 20px 0; line-height: 1.6;">
                Successfully signed up with ${provider}!<br>
                Your fitness journey begins now!
            </p>
            <button onclick="window.location.href='login.html'" style="margin-top: 20px;">
                Go to Login
            </button>
        `;
    }
}); 