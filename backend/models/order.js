const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    products: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
    totalPrice: { type: Number, required: true },
    paid: { type: Boolean, required: true, default: false },
}, {
    timestamps: true
});

module.exports = mongoose.model('Order', orderSchema);

