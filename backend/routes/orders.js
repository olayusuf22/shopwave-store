const express = require('express');
const router = express.Router();
const ordersCtrl = require('../controllers/orders');



// All paths start with '/api/orders'

// GET /api/orders/cart
router.get('/cart', ordersCtrl.getCart);

// PUT /api/orders/cart/products/:id
router.put('/cart/products/:productId', ordersCtrl.addToCart);

// DELETE /api/orders/cart/products/:id
router.delete('/cart/products/:productId', ordersCtrl.removeFromCart);

// PUT /api/orders/cart/checkout
router.put('/cart/checkout', ordersCtrl.checkOut);

module.exports = router;
