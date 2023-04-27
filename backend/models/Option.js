const mongoose = require('mongoose');

const optionSchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  name: { type: String, required: true },
  values: [{ type: String, required: true }]
});

const Option = mongoose.model('Option', optionSchema);
module.exports = Option;
