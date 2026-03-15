# 📖 Mon Vieux Grimoire - API Backend

![alt text](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![alt text](https://img.shields.io/badge/Sharp-99CC00?style=for-the-badge&logo=sharp&logoColor=white)


Ceci est l'API de Mon Vieux Grimoire, une plateforme de référencement et de notation de livres. Ce projet constitue le Projet 6 du parcours Développeur Web d'OpenClassrooms.

🌟 Fonctionnalités
Authentification sécurisée : Inscription et connexion avec hachage de mot de passe (bcrypt) et jetons JWT.

Gestion des livres (CRUD) : Création, lecture, modification et suppression de fiches de livres.

Système de notation : Possibilité pour les utilisateurs connectés de noter un livre (une seule note par utilisateur) avec calcul automatique de la moyenne.

Optimisation d'images : Traitement automatique des couvertures de livres (redimensionnement et conversion au format .webp) via Sharp.

Classement : Route spécifique pour récupérer les 3 livres les mieux notés.

🛠️ Stack Technique
Runtime : Node.js
Framework : Express
Base de données : MongoDB Atlas via Mongoose
Sécurité : JSON Web Tokens (JWT), Bcrypt
Gestion de fichiers : Multer & Sharp
Environnement : Dotenv

🚀 Installation et Lancement
1. Prérequis
Node.js installé sur votre machine.
Un compte MongoDB Atlas ou une instance MongoDB locale.
2. Clonage et dépendances

## Cloner le projet
git clone https://github.com/MathCod/mon-vieux-grimoire.git

## Aller dans le dossier backend
`cd backend`

## Installer les dépendances
`npm install`

3. Lancer le serveur

`nodemon server`


## Mode développement (avec redémarrage automatique)
`npm start` pour le frontend
`nodemon server` pour le backend

Le serveur sera accessible sur : http://localhost:4000
📂 Structure du projet
```
backend/
├── controllers/    # Logique métier (fonctions de contrôle)
├── images/         # Dossier de stockage des images optimisées
├── middleware/     # Middlewares (Auth, Multer, Sharp)
├── models/         # Schémas de données Mongoose
├── routes/         # Définition des points de terminaison (endpoints)
├── .env            # Variables d'environnement (non suivi par Git)
├── app.js          # Configuration de l'application Express
└── server.js       # Configuration et lancement du serveur HTTP
```
## 🔒 Sécurité et Optimisation
Les mots de passe sont hachés avant d'être enregistrés.
Les routes sensibles sont protégées par un Token JWT.
Le dossier /images est servi de manière statique.
Chaque nouvelle image est redimensionnée (400px de large) et convertie en .webp pour garantir des performances optimales et un temps de chargement réduit.