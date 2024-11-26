function toggleMenu() {
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.toggle('active'); // Toggle the active class
}

function closeMenu() {
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.remove('active'); // Close the menu
}

window.onclick = function(event) {
    const navMenu = document.getElementById('navMenu');
    if (event.target !== document.querySelector('.menu-toggle') && !navMenu.contains(event.target)) {
        navMenu.classList.remove('active'); // Close the menu if clicked outside
    }
};

// Handle the form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    const formData = new FormData(this);
    
    // Use Fetch API to send the form data to a backend
    fetch('https://example.com/send-email', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.ok) {
            document.getElementById('responseMessage').innerText = "Your message has been sent successfully!";
            document.getElementById('contactForm').reset(); // Reset the form
        } else {
            throw new Error("There was a problem with your submission.");
        }
    })
    .catch(error => {
        document.getElementById('responseMessage').innerText = "Error: " + error.message;
    });
});