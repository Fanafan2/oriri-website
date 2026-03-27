const navLinks = document.querySelector('.nav-links');
const hamburger = document.querySelectorAll('.hamburger');
const openHam = document.getElementById('openHam');

hamburger.forEach(ham => {
    ham.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        openHam.classList.toggle("itIsOpen");
    });
});