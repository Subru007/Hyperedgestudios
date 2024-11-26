let currentIndex = 0;

document.getElementById('menuToggle').addEventListener('click', function(e) {
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.toggle('active');
    e.stopPropagation(); // Stop the click event from bubbling up
});

// Close the navMenu if you click anywhere outside the menu
document.addEventListener('click', function(e) {
    const navMenu = document.getElementById('navMenu');
    const menuToggle = document.getElementById('menuToggle');
    
    // If the menu is open and the click is outside the menu and the toggle button
    if (navMenu.classList.contains('active') && !navMenu.contains(e.target) && e.target !== menuToggle) {
        navMenu.classList.remove('active');
    }
});

document.getElementById('prevButton').addEventListener('click', function() {
    moveCarousel(-1);
});

document.getElementById('nextButton').addEventListener('click', function() {
    moveCarousel(1);
});

function moveCarousel(direction) {
    const images = document.getElementById('carouselImages');
    const totalItems = images.children.length;

    currentIndex = (currentIndex + direction + totalItems) % totalItems;
    const offset = -currentIndex * 100;
    images.style.transform = `translateX(${offset}%)`;
}