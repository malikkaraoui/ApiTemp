document.addEventListener('DOMContentLoaded', function() {
    const latitudeInput = document.getElementById('latitude');
    const longitudeInput = document.getElementById('longitude');
    const getWeatherButton = document.getElementById('getWeather');
    const temperatureDiv = document.getElementById('temperature');
    const loadingDiv = document.getElementById('loading');
    const historyBody = document.getElementById('historyBody');

    getWeatherButton.addEventListener('click', async function() {
        const latitude = latitudeInput.value;
        const longitude = longitudeInput.value;

        if (!latitude || !longitude) {
            temperatureDiv.textContent = 'Veuillez entrer une latitude et une longitude';
            return;
        }

        try {
            loadingDiv.style.display = 'block';
            temperatureDiv.textContent = '';

            const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`);
            const data = await response.json();

            loadingDiv.style.display = 'none';
            const temperature = data.current_weather.temperature;
            temperatureDiv.textContent = `Température: ${temperature}°C`;
            
            // Ajouter une nouvelle ligne au tableau
            const newRow = historyBody.insertRow(0); // Insérer au début
            const tempCell = newRow.insertCell(0);
            const coordCell = newRow.insertCell(1);
            
            tempCell.textContent = temperature + '°C';
            coordCell.textContent = `${latitude}, ${longitude}`;
            
        } catch (error) {
            loadingDiv.style.display = 'none';
            temperatureDiv.textContent = 'Erreur lors du chargement des données météo';
            console.error('Erreur:', error);
        }
    });
});