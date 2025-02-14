document.addEventListener('DOMContentLoaded', function() {
    const getWeatherButton = document.getElementById('get-weather');
    const locationElement = document.getElementById('location');
    const temperatureElement = document.getElementById('temperature');
    const descriptionElement = document.getElementById('description');
    const humidityElement = document.getElementById('humidity');
    const windSpeedElement = document.getElementById('wind-speed');
    
    // OpenWeatherMap API key and URL
    const apiKey = 'your-api-key-here'; // Replace with your actual OpenWeatherMap API key
    const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=Brazzaville&appid=' + apiKey + '&units=metric';

    // Function to fetch weather data
    function fetchWeatherData() {
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                // Display weather details on the page
                locationElement.textContent = `Location: ${data.name}, ${data.sys.country}`;
                temperatureElement.textContent = `Temperature: ${data.main.temp}°C`;
                descriptionElement.textContent = `Weather: ${data.weather[0].description}`;
                humidityElement.textContent = `Humidity: ${data.main.humidity}%`;
                windSpeedElement.textContent = `Wind Speed: ${data.wind.speed} m/s`;
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
                locationElement.textContent = 'Error fetching weather data. Please try again later.';
            });
    }

    // Add event listener to the button
    getWeatherButton.addEventListener('click', fetchWeatherData);

    // Dynamically set the current year in the footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
});