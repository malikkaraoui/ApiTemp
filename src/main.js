document.addEventListener('DOMContentLoaded', function() {
    const latitudeInput = document.getElementById('latitude');
    const longitudeInput = document.getElementById('longitude');
    const getWeatherButton = document.getElementById('getWeather');
    const temperatureDiv = document.getElementById('temperature');
    const loadingDiv = document.getElementById('loading');
    const historyBody = document.getElementById('historyBody');
    const emptyState = document.getElementById('emptyState');
    const tableContainer = document.getElementById('tableContainer');

    getWeatherButton.addEventListener('click', async function() {
        const latitude = latitudeInput.value;
        const longitude = longitudeInput.value;

        if (!latitude || !longitude) {
            temperatureDiv.textContent = '⚠️ Veuillez entrer une latitude et une longitude';
            temperatureDiv.className = 'error';
            return;
        }

        try {
            loadingDiv.classList.add('show');
            temperatureDiv.textContent = '';

            const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`);
            const data = await response.json();

            loadingDiv.classList.remove('show');
            const temperature = data.current_weather.temperature;
            temperatureDiv.textContent = `🌡️ ${temperature}°C`;
            temperatureDiv.className = 'success';
            
            // Masquer l'état vide et afficher le tableau
            if (emptyState) {
                emptyState.style.display = 'none';
            }
            if (tableContainer) {
                tableContainer.style.display = 'block';
            }
            
            // Ajouter une nouvelle ligne au tableau
            const newRow = historyBody.insertRow(0);
            
            const tempCell = newRow.insertCell(0);
            const coordCell = newRow.insertCell(1);
            
            tempCell.textContent = `${temperature}°C`;
            coordCell.textContent = `${latitude}, ${longitude}`;
            
        } catch (error) {
            loadingDiv.classList.remove('show');
            temperatureDiv.textContent = '❌ Erreur lors du chargement des données météo';
            temperatureDiv.className = 'error';
            console.error('Erreur:', error);
        }
    });
});