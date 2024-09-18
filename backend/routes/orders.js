const express = require('express');
const router = express.Router();
const ordersCtrl = require('../controllers/orders');

// All paths start with '/api/orders'

// GET /api/orders/cart
router.get('/cart', ordersCtrl.getCart);

module.exports = router;
