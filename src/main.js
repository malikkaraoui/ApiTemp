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

            // Appel parallèle aux deux APIs
            const [weatherResponse, locationData] = await Promise.all([
                fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`),
                window.getLocationName(latitude, longitude)
            ]);

            const weatherData = await weatherResponse.json();

            loadingDiv.classList.remove('show');
            const temperature = weatherData.current_weather.temperature;
            
            // Afficher la température avec la ville et le pays
            const locationText = locationData.city !== 'Inconnu' 
                ? `${locationData.city}, ${locationData.country}` 
                : locationData.country;
            
            temperatureDiv.innerHTML = `
                <div style="margin-bottom: 0.5rem;">🌡️ ${temperature}°C</div>
                <div style="font-size: 1.2rem; color: #94a3b8;">📍 ${locationText}</div>
            `;
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
            coordCell.textContent = `${locationText} (${latitude}, ${longitude})`;
            
            // Limiter l'historique à 6 entrées maximum
            while (historyBody.rows.length > 6) {
                historyBody.deleteRow(historyBody.rows.length - 1);
            }
            
        } catch (error) {
            loadingDiv.classList.remove('show');
            temperatureDiv.textContent = '❌ Erreur lors du chargement des données météo';
            temperatureDiv.className = 'error';
            console.error('Erreur:', error);
        }
    });
});