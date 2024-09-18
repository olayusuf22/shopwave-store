const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const productSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true }, // Added a description field
    image: { type: String, required: false }, // Image might be optional
    price: { type: Number, required: true },
    currency: { type: String, required: true }, // Ensure to handle different currencies if needed
    category: { type: String, required: true }, // Added a category field
    stock: { type: Number, required: true }, // Added stock to manage inventory
    tags: [{ type: String }] // Added tags for better search functionality
  });

const orderSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    products: [productSchema],
    paid: { type: Boolean, required: true, default: false },
}, {
    timestamps: true,
    toJSON: { virtuals: true },
});

orderSchema.virtual('totalPrice').get(function() {
    return this.products.reduce((total, product) => total + product.price, 0);
});

module.exports = mongoose.model('Order', orderSchema);

