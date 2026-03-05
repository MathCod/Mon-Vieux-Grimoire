const User = require('../models/User');

exports.signup = (req, res, next) => {
  res.status(200).json({
    message: 'Utilisateur créé !'
  });
}

exports.login = (req, res, next) => {
  res.status(200).json({
    message: 'Utilisateur connecté !'
  });
}