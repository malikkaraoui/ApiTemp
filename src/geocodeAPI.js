// API de géocodage inversé pour obtenir le nom de la ville/pays
async function getLocationName(latitude, longitude) {
    try {
        const response = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=fr`);
        const data = await response.json();
        
        // Retourner la ville et le pays
        const city = data.city || data.locality || data.principalSubdivision || 'Inconnu';
        const country = data.countryName || 'Inconnu';
        
        return { city, country };
    } catch (error) {
        console.error('Erreur lors du géocodage:', error);
        return { city: 'Inconnu', country: 'Inconnu' };
    }
}

// Exporter la fonction pour l'utiliser dans main.js
window.getLocationName = getLocationName;
