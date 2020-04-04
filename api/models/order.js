const mongoose = require('mongoose');
const orderSchema = mongoose.Schema({
    name: { type: String, required: true },
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    quantity: { type: Number, default: 1 }
});

module.exports = mongoose.model('Orders', orderSchema);
