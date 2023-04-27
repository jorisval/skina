const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  customer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  orderItems: [{ type: mongoose.Schema.Types.ObjectId, ref: 'OrderItem', required: true }],
  totalAmount: { type: Number, required: true },
  orderStatus: { type: String, required: true },
  shippingAddress: {
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, required: true },
    zipCode: { type: String, required: true }
  },
  paymentMethod: { type: String, required: true },
  paymentStatus: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', orderSchema);