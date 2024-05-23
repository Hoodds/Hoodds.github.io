// Tu API key de OpenWeatherMap
const apiKey = 'caea1d5dc036daadff5aff8da540eac0';

// URL de la API de OpenWeatherMap
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Bilbao&appid=${apiKey}&units=metric`;

// Función para obtener y mostrar los datos del tiempo
async function getWeather() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Obtenemos el icono del tiempo y la temperatura
        const weatherIcon = data.weather[0].icon;
        const temp = data.main.temp;

        // Mostramos el icono del tiempo y la temperatura en la página
        document.getElementById('weather-icon').innerHTML = `<img src="http://openweathermap.org/img/wn/${weatherIcon}.png" alt="Weather Icon">`;
        document.getElementById('weather-temp').innerText = `${temp}°C`;
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

// Llamamos a la función para obtener y mostrar los datos del tiempo cuando la página se carga
window.onload = getWeather;
