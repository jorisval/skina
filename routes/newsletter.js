const express = require('express');
const newsletterCtrl = require('../controllers/newsletter');
const router = express.Router();

router.post('/', newsletterCtrl.createNewsletter);
router.get('/:newsletterId', newsletterCtrl.getNewsletterById);
router.get('/', newsletterCtrl.getAllNewsletters);
router.put('/:newsletterId', newsletterCtrl.updateNewsletter);
router.delete('/:newsletterId', newsletterCtrl.deleteNewsletter);

module.exports = router;