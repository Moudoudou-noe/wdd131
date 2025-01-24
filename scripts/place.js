document.addEventListener("DOMContentLoaded", function () {
    // Update footer dynamically with current year and last modified date
    const yearElement = document.getElementById("year");
    const currentTimeElement = document.getElementById("currentTime");

    yearElement.textContent = new Date().getFullYear();
    updateCurrentTime();

    function updateCurrentTime() {
        const now = new Date();
        const timeString = now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", second: "2-digit" });
        currentTimeElement.textContent = timeString;
    }
    setInterval(updateCurrentTime, 1000);

    // Wind Chill Calculation
    function calculateWindChill(temp, windSpeed) {
        if (temp <= 10 && windSpeed > 4.8) {
            return (13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)).toFixed(2) + " °C";
        } else {
            return "N/A";
        }
    }

    const temperature = parseFloat(document.getElementById("temperature").textContent);
    const windSpeed = parseFloat(document.getElementById("wind").textContent);
    const windChillElement = document.getElementById("windchill");

    windChillElement.textContent = calculateWindChill(temperature, windSpeed);

    // Set a single background image with stylish effects
    document.body.style.background = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),";
    document.body.style.transition = "background 1s ease-in-out";

    // Interactive hover effect on weather and info sections
    const sections = document.querySelectorAll(".info-section, .weather-section");

    sections.forEach((section) => {
        section.addEventListener("mouseenter", () => {
            section.style.transform = "scale(1.05)";
            section.style.transition = "all 0.3s ease-in-out";
            section.style.boxShadow = "0 0 20px rgba(255, 255, 255, 0.7)";
        });

        section.addEventListener("mouseleave", () => {
            section.style.transform = "scale(1)";
            section.style.boxShadow = "none";
        });
    });

    // Additional effects
    document.addEventListener("scroll", () => {
        document.querySelector(".header").style.opacity = window.scrollY > 50 ? "0.8" : "1";
    });
});
