// Dynamic Footer Content
const yearSpan = document.getElementById('year');
const lastModifiedSpan = document.getElementById('last-modified');

yearSpan.textContent = new Date().getFullYear();
lastModifiedSpan.textContent = document.lastModified;

// Hamburger Menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('hidden');
    hamburger.textContent = navLinks.classList.contains('hidden') ? '☰' : '✖';
});