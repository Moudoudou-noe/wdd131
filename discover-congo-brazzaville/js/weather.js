document.addEventListener('DOMContentLoaded', function() {
    const getWeatherButton = document.getElementById('get-weather');
    const location = document.getElementById('location');
    const temperature = document.getElementById('temperature');
    const description = document.getElementById('description');
    const humidity = document.getElementById('humidity');
    const windSpeed = document.getElementById('wind-speed');
    
    // OpenWeatherMap API key and URL
    const apiKey = '2a378cd43a48604674a9d82ba39609c4'; // Replace with your actual OpenWeatherMap API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Brazzaville&appid=${apiKey}&units=metric`;

    getWeatherButton.addEventListener('click', function() {
        // Disable button while fetching
        getWeatherButton.disabled = true;
        getWeatherButton.textContent = 'Loading...';

        // Fetch weather data
        fetch(apiUrl)
            .then(response => {
                // Log the raw response for debugging
                console.log('API Response:', response);
                if (!response.ok) {
                    throw new Error('Error fetching data: ' + response.status);
                }
                return response.json();
            })
            .then(data => {
                // Log the data returned from the API for debugging
                console.log('Weather Data:', data);

                // Ensure we have valid data before updating the UI
                if (data && data.main && data.weather && data.wind) {
                    location.textContent = `Location: ${data.name}, ${data.sys.country}`;
                    temperature.textContent = `Temperature: ${data.main.temp}°C`;
                    description.textContent = `Weather: ${data.weather[0].description}`;
                    humidity.textContent = `Humidity: ${data.main.humidity}%`;
                    windSpeed.textContent = `Wind Speed: ${data.wind.speed} m/s`;
                } else {
                    throw new Error('Invalid data received');
                }
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
                location.textContent = 'Location: Error fetching data';
                temperature.textContent = 'Temperature: Error fetching data';
                description.textContent = 'Weather: Error fetching data';
                humidity.textContent = 'Humidity: Error fetching data';
                windSpeed.textContent = 'Wind Speed: Error fetching data';
            })
            .finally(() => {
                // Re-enable button after fetching
                getWeatherButton.disabled = false;
                getWeatherButton.textContent = 'Get Weather';
            });
    });

    // Dynamically set the current year in the footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
});
