// Authentication functionality
document.addEventListener('DOMContentLoaded', function() {
    const loginBtn = document.getElementById('loginBtn');
    const logoutBtn = document.getElementById('logoutBtn');
    
    // Check if user is logged in
    if (localStorage.getItem('isLoggedIn') === 'true') {
        loginBtn.style.display = 'none';
        logoutBtn.style.display = 'block';
    } else {
        loginBtn.style.display = 'block';
        logoutBtn.style.display = 'none';
    }
    
    // Login button click
    loginBtn.addEventListener('click', function() {
        localStorage.setItem('isLoggedIn', 'true');
        loginBtn.style.display = 'none';
        logoutBtn.style.display = 'block';
        alert('You are now logged in!');
    });
    
    // Logout button click
    logoutBtn.addEventListener('click', function() {
        localStorage.setItem('isLoggedIn', 'false');
        loginBtn.style.display = 'block';
        logoutBtn.style.display = 'none';
        alert('You have been logged out.');
    });
});