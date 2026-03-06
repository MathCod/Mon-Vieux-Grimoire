const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

module.exports = async (req, res, next) => {
  // Si aucun fichier n'a été uploadé par Multer, on passe au suivant
  if (!req.file) {
    return next();
  }

  const { filename, path: outputPath } = req.file;
  const name = filename.split('.')[0]; // On récupère le nom sans l'extension
  const newFilename = `${name}_optimized.webp`; // Nouveau nom
  const finalPath = path.join('images', newFilename);

  try {
    // Magie de Sharp
    await sharp(req.file.path)
      .resize({ width: 400 }) // Redimensionne à 400px de large
      .webp({ quality: 80 })  // Convertit en WebP qualité 80
      .toFile(finalPath);     // Enregistre

    // --- ÉTAPE CRUCIALE ---
    // On supprime l'image originale (celle uploadée par Multer) 
    // car on ne veut garder que la version optimisée.
    fs.unlink(req.file.path, (err) => {
        if (err) console.log(err);
    });

    // On remplace les informations du fichier par les nouvelles
    // pour que le controller utilise le bon nom
    req.file.path = finalPath;
    req.file.filename = newFilename;

    next();
  } catch (error) {
    res.status(500).json({ error });
  }
};