document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        // Basic validation
        if(username.trim() === '' || password.trim() === '') {
            alert('Please fill in all fields');
            return;
        }
        
        // Check credentials
        if(username === 'Hikari' && password === 'sayang') {
            // Set login status in sessionStorage
            sessionStorage.setItem('loggedIn', 'true');
            
            // Redirect to gallery page
            window.location.href = 'gallery.html';
        } else {
            // Show error message for incorrect credentials
            alert('Invalid username or password. Please try again.');
        }
    });
});
