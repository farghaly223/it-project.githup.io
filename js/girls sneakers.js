// Function to toggle between light and dark themes
function toggleTheme() {
    const body = document.body;
    // Toggle 'dark-theme' class on body
    body.classList.toggle('dark-theme');
}

// Example: Adding event listener to a button to toggle theme on click
const themeToggleBtn = document.querySelector('#theme-toggle-btn4'); // Assuming you have a button with id="theme-toggle-btn"
themeToggleBtn.addEventListener('click', toggleTheme);