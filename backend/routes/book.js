const express = require('express');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');
const StuffCtrl = require('../controllers/book');

const router = express.Router();

router.get('/', StuffCtrl.getAllBooks);
router.get('/:id', StuffCtrl.getOneBook);

router.post('/', auth, multer, StuffCtrl.createBook);
router.put('/:id', auth, multer, StuffCtrl.modifyBook);
router.delete('/:id', auth, StuffCtrl.deleteBook);

module.exports = router;