const express = require('express');
const router = express.Router();
const ordersCtrl = require('../controllers/orders');
const Order = require('../models/order');

router.use(async function(req, res, next) {
    let cart = await Order.findOne({ user: req.user._id, paid: false });
    if (!cart) {
        cart = await Order.create({ user: req.user._id });
    }
    req.cart = cart;
    next();
});

// All paths start with '/api/orders'

// GET /api/orders/cart
router.get('/cart', ordersCtrl.getCart);

module.exports = router;
