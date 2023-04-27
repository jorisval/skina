const express = require('express');
const adminCtrl = require('../controllers/admin');
const router = express.Router();
//const auth = require('../midleware/auth');

router.post('/register/', adminCtrl.registerAdmin);
router.get('/login/', adminCtrl.loginAdmin);
router.get('/:adminId', adminCtrl.getAdminById);
router.put('/:adminId', adminCtrl.updateAdmin);
router.delete('/:adminId', adminCtrl.deleteAdmin);
router.get('/', adminCtrl.getAllAdmins);

module.exports = router;