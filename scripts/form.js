// Product Array
const products = [
    { id: "p1", name: "Smartphone" },
    { id: "p2", name: "Laptop" },
    { id: "p3", name: "Smartwatch" },
    { id: "p4", name: "Wireless Earbuds" },
    { id: "p5", name: "Gaming Console" }
];

// Populate Product Select Dropdown
document.addEventListener("DOMContentLoaded", function() {
    let productSelect = document.getElementById("product");

    products.forEach(product => {
        let option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });

    // Check Local Storage for Review Count
    let reviewCount = localStorage.getItem("reviewCount") || 0;
    console.log(`Total Reviews Submitted: ${reviewCount}`);
});