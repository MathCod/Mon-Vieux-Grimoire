const express = require('express');
const router = express.Router();

const StuffCtrl = require('../controllers/book');

router.post('/', StuffCtrl.createBook);
router.put('/:id', StuffCtrl.modifyBook);
router.delete('/:id', StuffCtrl.deleteBook);
router.get('/:id', StuffCtrl.getOneBook);
router.get('/', StuffCtrl.getAllBooks);

module.exports = router;