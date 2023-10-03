const mongoose = require('mongoose');

const newsletterSchema = mongoose.Schema({
    email: {type: String, required: true},
    dateCreated: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Newsletter', newsletterSchema);