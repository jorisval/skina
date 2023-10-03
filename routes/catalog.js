const express = require('express');
const catalogCtrl = require('../controllers/catalog');
const {multerProductImage} = require('../midleware/multer-config');
const router = express.Router();

router.post('/', multerProductImage, catalogCtrl.createProduct);
router.get('/:id', catalogCtrl.getOneProduct);
router.get('/products/', catalogCtrl.getProducts);
router.put('/:id', multerProductImage, catalogCtrl.modifyProduct);
router.delete('/:id', catalogCtrl.deleteProduct);
router.get('/', catalogCtrl.getAllProducts);
router.put('/option/:optionId', catalogCtrl.modifyOption);
router.delete('/option/:optionId', catalogCtrl.deleteOption);

module.exports = router;