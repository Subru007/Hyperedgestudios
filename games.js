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