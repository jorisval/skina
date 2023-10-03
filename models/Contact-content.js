const mongoose = require('mongoose');

const contactContentSchema = mongoose.Schema({
    contact: {type: mongoose.Schema.Types.ObjectId, ref: 'ContactInfo', required: true},
    comment: {type: String, required: true},
    dateCreated: {type: Date, default: Date.now}
});

module.exports = mongoose.model('ContactContent', contactContentSchema);