# Application Météo API

Une application web simple permettant de consulter la température actuelle pour n'importe quelle localisation en utilisant ses coordonnées géographiques (latitude et longitude).

## Fonctionnalités

- Interface utilisateur intuitive
- Saisie de latitude et longitude
- Affichage de la température en temps réel
- Utilisation de l'API Open-Meteo

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
4. La température actuelle s'affichera pour les coordonnées données

## API utilisée

Cette application utilise l'API gratuite [Open-Meteo](https://api.open-meteo.com/v1/forecast) pour obtenir les données météorologiques.