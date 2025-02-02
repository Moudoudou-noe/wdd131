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

// Temple Data
const temples = [
    { name: "Salt Lake Temple", location: "Salt Lake City, Utah", dedication: 1893, area: 253015, image: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/800x500/aba-nigeria-temple-lds-248708-high-res-print.jpg" },
    { name: "Laie Hawaii Temple", location: "Laie, Hawaii", dedication: 1919, area: 42000, image: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/800x500/aba-nigeria-temple-lds-273999-wallpaper.jpg" },
    { name: "San Diego California Temple", location: "San Diego, California", dedication: 1993, area: 72000, image: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/accra-ghana/800x800/accra-ghana-temple-759299-wallpaper.jpg" },
    { name: "Paris France Temple", location: "Le Chesnay, France", dedication: 2017, area: 44175, image: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/accra-ghana/800x500/accra-ghana-temple-758797-wallpaper.jpg" },
    { name: "Salt Lake Temple", location: "Salt Lake City, Utah", dedication: 1893, area: 253015, image: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/accra-ghana/800x500/accra-ghana-temple-759298-wallpaper.jpg" },
    { name: "Rome Italy Temple", location: "Rome, Italy", dedication: 2019, area: 41100, image: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/accra-ghana/800x1280/accra-ghana-temple-758877-wallpaper.jpg" },
    { name: "Accra Ghana Temple", location: "Accra, Ghana", dedication: 2004, area: 17150, image: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/800x1280/aba-nigeria-temple-lds-248714-wallpaper.jpg" }
];

// Function to display temples
function displayTemples(filteredTemples) {
    const gallery = document.getElementById("temple-gallery");
    gallery.innerHTML = "";

    filteredTemples.forEach(temple => {
        const figure = document.createElement("figure");

        const img = document.createElement("img");
        img.src = temple.image;
        img.alt = temple.name;
        img.loading = "lazy";

        const caption = document.createElement("figcaption");
        caption.innerHTML = `<strong>${temple.name}</strong><br>
                             <span style="font-size: 1.2em;">Location:</span> ${temple.location}<br>
                             <span style="font-size: 1.2em;">Dedicated:</span> ${temple.dedication}<br>
                             <span style="font-size: 1.2em;">Size:</span> ${temple.area} sq ft`;

        figure.appendChild(img);
        figure.appendChild(caption);
        gallery.appendChild(figure);
    });
}

// Filter Functions
function filterOld() {
    displayTemples(temples.filter(temple => temple.dedication < 1900));
}

function filterNew() {
    displayTemples(temples.filter(temple => temple.dedication > 2000));
}

function filterLarge() {
    displayTemples(temples.filter(temple => temple.area > 90000));
}

function filterSmall() {
    displayTemples(temples.filter(temple => temple.area < 10000));
}

function showAll() {
    displayTemples(temples);
}

// Event Listeners
document.getElementById("old").addEventListener("click", filterOld);
document.getElementById("new").addEventListener("click", filterNew);
document.getElementById("large").addEventListener("click", filterLarge);
document.getElementById("small").addEventListener("click", filterSmall);
document.getElementById("home").addEventListener("click", showAll);

// Initial Display
showAll();
