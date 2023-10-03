const mongoose = require('mongoose');

const contactInfoSchema = mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    agree: {type: String}
});

module.exports = mongoose.model('ContactInfo', contactInfoSchema);