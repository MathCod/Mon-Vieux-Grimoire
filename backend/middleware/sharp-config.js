const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

module.exports = async (req, res, next) => {
  if (!req.file) {
    return next();
  }

  const { filename, path: outputPath } = req.file;
  const name = filename.split('.')[0];
  const newFilename = `${name}_optimized.webp`;
  const finalPath = path.join('images', newFilename);

  try {
    await sharp(req.file.path)
      .resize({ width: 400 })
      .webp({ quality: 80 })
      .toFile(finalPath);

    fs.unlink(req.file.path, (err) => {
        if (err) console.log(err);
    });
    req.file.path = finalPath;
    req.file.filename = newFilename;
    next();
  } catch (error) {
    res.status(500).json({ error });
  }
};