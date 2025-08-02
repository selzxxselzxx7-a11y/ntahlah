document.addEventListener('DOMContentLoaded', function() {
    const logoutBtn = document.getElementById('logoutBtn');
    
    // Check if user is logged in
    if (!sessionStorage.getItem('loggedIn')) {
        // Redirect to login page if not logged in
        window.location.href = 'index.html';
        return;
    }
    
    // Add logout functionality
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            // Clear login status
            sessionStorage.removeItem('loggedIn');
            // Redirect to login page
            window.location.href = 'index.html';
        });
    }
});
