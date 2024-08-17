//your JS code here. If required.
document.getElementById('getWeatherBtn').addEventListener('click', getCurrentWeather);

function getCurrentWeather() {
    const apiKey = 'e467712b257e418838be97cc881a71de'; // Replace with your OpenWeatherMap API key
    const city = 'London';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherDescription = data.weather[0].main;
            document.getElementById('weatherData').innerText = `Current weather in ${city}: ${weatherDescription}`;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            document.getElementById('weatherData').innerText = 'Failed to retrieve weather data.';
        });
}
