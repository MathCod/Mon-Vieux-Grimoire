const express = require('express');
const auth = require('../middleware/auth');
const StuffCtrl = require('../controllers/book');

const router = express.Router();

router.post('/', auth, StuffCtrl.createBook);
router.put('/:id', auth, StuffCtrl.modifyBook);
router.delete('/:id', auth, StuffCtrl.deleteBook);
router.get('/:id', auth, StuffCtrl.getOneBook);
router.get('/', auth, StuffCtrl.getAllBooks);

module.exports = router;