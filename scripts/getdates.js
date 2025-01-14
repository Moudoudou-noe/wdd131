// Set the current year dynamically
const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

// Set the last modified date dynamically
document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;
