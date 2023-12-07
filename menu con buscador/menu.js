const hamburgerIcon = document.querySelector('.uil-bars');
const navLinks = document.querySelector('.nav-links');
const searchIcon = document.querySelector('.buscador');
const mapMarkerIcon = document.querySelector('.uil-map-marker');

hamburgerIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    searchIcon.classList.toggle('active');
    mapMarkerIcon.classList.toggle('active');
});
