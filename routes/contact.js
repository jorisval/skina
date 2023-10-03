const express = require('express');
const contactCtrl = require('../controllers/contact');
const router = express.Router();

router.post('/comment/', contactCtrl.createContactComment);
router.get('/comment/:contactId', contactCtrl.getAllCommentOfContact);
router.get('/', contactCtrl.getAllContact);
router.put('/comment/:commentId', contactCtrl.updateComment);
router.put('/:contactId', contactCtrl.updateContactInfo);
router.delete('/comment/:commentId', contactCtrl.deleteComment);
router.delete('/:contactId', contactCtrl.deleteContact);

module.exports = router;