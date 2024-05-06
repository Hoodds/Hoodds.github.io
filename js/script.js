// Espera a que el DOM esté completamente cargado
    document.addEventListener('DOMContentLoaded', function() {
        // Selecciona el elemento donde se mostrará la fecha y hora
        var currentDateTimeElement = document.getElementById('currentDateTime');

        // Actualiza la fecha y hora cada segundo
        setInterval(function() {
            // Obtiene la fecha y hora actual utilizando Day.js
            var currentDateTime = dayjs().format('YYYY-MM-DD HH:mm:ss');

            // Actualiza el contenido del elemento con la fecha y hora actual
            currentDateTimeElement.textContent = 'Fecha y Hora: ' + currentDateTime;
        }, 1000); // Actualiza cada segundo
    });

 document.addEventListener('DOMContentLoaded', function() {
        // Define tu API key de OpenWeatherMap
        var apiKey = 'caea1d5dc036daadff5aff8da540eac0';

        // URL de la API de OpenWeatherMap para obtener datos meteorológicos de Bilbao
        var city = 'Bilbao';
        var apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey + '&units=metric';

        // Función para traducir las descripciones del tiempo
        function traducirDescripcion(descripcion) {
            // Mapea las descripciones del tiempo de inglés a español
            var traducciones = {
                'clear sky': 'cielo despejado',
                'few clouds': 'pocas nubes',
                'scattered clouds': 'nubes dispersas',
                'broken clouds': 'nubes rotas',
                'overcast clouds': 'nublado',
                'light rain': 'lluvia ligera',
                'moderate rain': 'lluvia moderada',
                'heavy intensity rain': 'lluvia intensa',
                'shower rain': 'lluvia',
                'thunderstorm': 'tormenta',
                'snow': 'nieve',
                'mist': 'niebla'
                // Puedes agregar más traducciones según sea necesario
            };

            // Devuelve la traducción correspondiente o la descripción original si no hay traducción
            return traducciones[descripcion] || descripcion;
        }

        // Selecciona el elemento donde se mostrará el widget del tiempo
        var weatherWidgetElement = document.getElementById('weatherWidget');

        // Realiza una solicitud GET a la API de OpenWeatherMap
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                // Extrae la descripción del tiempo y temperatura actual
                var weatherDescription = data.weather[0].description;
                var temperature = data.main.temp;

                // Traduce la descripción del tiempo
                var descripcionTraducida = traducirDescripcion(weatherDescription);

                // Actualiza el contenido del elemento con la información del tiempo en español
                weatherWidgetElement.textContent = 'Tiempo en Bilbao: ' + descripcionTraducida + ', Temperatura: ' + temperature + '°C';
            })
            .catch(error => {
                console.error('Error al obtener datos meteorológicos:', error);
                weatherWidgetElement.textContent = 'No se pudo obtener la información del tiempo para Bilbao';
            });
    });