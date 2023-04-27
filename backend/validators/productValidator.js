const { check } = require('express-validator');
exports.productValidationRules = [
    check('name').notEmpty().withMessage('Name is required'),
    check('description').notEmpty().withMessage('Description is required'),
    check('price').isNumeric().withMessage('Price must be a number'),
    check('options').optional().isJSON().withMessage('Options must be a valid JSON string'),
    check('stock').isInt({ min: 0 }).withMessage('Stock must be a non-negative integer'),
];