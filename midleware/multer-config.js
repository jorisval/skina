const multer = require('multer');

const MIME_TYPES = {
    'image/jpg': 'jpg',
    'image/jpeg': 'jpg',
    'image/png': 'png'
};

const storageProductImage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'images/products');
    },
    filename: (req, file, callback) => {
        const extension = MIME_TYPES[file.mimetype];
        const name = file.originalname.split(' ').join('_').split('.' + extension)[0];
        callback(null, name + Date.now() + '.' + extension);
    }
});

const multerProductImage = multer({ storage: storageProductImage }).array('images');
module.exports = {
    multerProductImage
};