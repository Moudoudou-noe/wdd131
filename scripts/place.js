// Footer dynamic year and last modified date
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("year").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = document.lastModified;

    // Wind chill calculation
    const temp = 28; // Static temperature value in Celsius
    const windSpeed = 10; // Static wind speed value in km/h

    function calculateWindChill(temp, windSpeed) {
        if (temp <= 10 && windSpeed > 4.8) {
            return (13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)).toFixed(2) + ' °C';
        } else {
            return "N/A";
        }
    }

    document.getElementById("windchill").textContent = calculateWindChill(temp, windSpeed);
});
