const express = require('express');
const mongoose = require('mongoose'); // <-- IL MANQUAIT CETTE LIGNE !
require('dotenv').config(); // Décommente ça pour utiliser ton fichier .env

const app = express();

// Utilise la variable d'environnement pour plus de sécurité
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch((err) => console.log('Connexion à MongoDB échouée !', err));

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.post('/api/books', (req, res, next) => {
  const book = req.body;
  console.log(book);
  res.status(201).json({
    message: 'Books créés avec succès!'
  });
});

app.get('/api/books', (req, res, next) => {
    console.log('Récupération des livres');
  res.status(200).json([]);
});

module.exports = app;