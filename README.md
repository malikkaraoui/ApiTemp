# Application Météo API

Une application web simple permettant de consulter la température actuelle pour n'importe quelle localisation en utilisant ses coordonnées géographiques (latitude et longitude).

## Fonctionnalités

- Interface utilisateur intuitive et futuriste
- Saisie de latitude et longitude
- Affichage de la température en temps réel
- **Géolocalisation inversée** : affichage automatique de la ville et du pays
- Tableau d'historique des recherches avec température, localisation et coordonnées GPS
- Utilisation de l'API Open-Meteo pour la météo
- Utilisation de l'API BigDataCloud pour le géocodage inversé

## Technologies utilisées

- HTML5
- CSS3
- JavaScript
- Node.js
- Express.js

## Installation

1. Clonez le repository
```bash
git clone https://github.com/malikkaraoui/ApiTemp.git
```

2. Installez les dépendances
```bash
cd ApiTemp
npm install
```

3. Lancez le serveur
```bash
npm start
```

4. Ouvrez votre navigateur et accédez à `http://localhost:3000`

## Utilisation

1. Entrez une latitude (ex: 46.2 pour Genève)
2. Entrez une longitude (ex: 6.15 pour Genève)
3. Cliquez sur "Obtenir la température"
4. La température actuelle s'affichera avec le nom de la ville et du pays
5. Un historique de vos recherches apparaîtra dans le tableau avec la température, la localisation et les coordonnées GPS

## API utilisées

Cette application utilise deux APIs gratuites :
- **[Open-Meteo](https://api.open-meteo.com/v1/forecast)** pour obtenir les données météorologiques en temps réel
- **[BigDataCloud](https://api.bigdatacloud.net/data/reverse-geocode-client)** pour le géocodage inversé (conversion des coordonnées en noms de lieux)