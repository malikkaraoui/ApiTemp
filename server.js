const express = require('express');
const path = require('path');
const app = express();

// Servir les fichiers statiques depuis le répertoire courant
app.use(express.static(__dirname));

// Route par défaut qui renvoie index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Démarrer le serveur sur le port 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});