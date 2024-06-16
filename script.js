document.getElementById('registrationForm').addEventListener('submit', function(event) {
    let isValid = true;
    
    // Get form fields
    const fullname = document.getElementById('fullname').value.trim();
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirm-password').value.trim();
    
    // Get error fields
    const fullnameError = document.getElementById('fullnameError');
    const usernameError = document.getElementById('usernameError');
    const emailError = document.getElementById('emailError');
    const phoneError = document.getElementById('phoneError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');

    // Clear previous error messages
    fullnameError.textContent = '';
    usernameError.textContent = '';
    emailError.textContent = '';
    phoneError.textContent = '';
    passwordError.textContent = '';
    confirmPasswordError.textContent = '';

    // Validate Full Name
    if (fullname.length < 5) {
        fullnameError.textContent = 'Name must not be less than 5 characters';
        isValid = false;
    }

    // Validate Email
    if (!email.includes('@')) {
        emailError.textContent = 'Enter a correct email';
        isValid = false;
    }

    // Validate Phone Number
    if (phone === '123456789' || phone.length !== 10 || isNaN(phone)) {
        phoneError.textContent = 'Enter a valid 10-digit phone number';
        isValid = false;
    }

    // Validate Password
    if (password.length < 8 || password.toLowerCase() === 'password' || password === username) {
        passwordError.textContent = 'Password is not strong';
        isValid = false;
    }

    // Validate Confirm Password
    if (password !== confirmPassword) {
        confirmPasswordError.textContent = 'Passwords do not match';
        isValid = false;
    }

    if (!isValid) {
        event.preventDefault();
    }
});
