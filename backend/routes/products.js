const express = require('express');
const router = express.Router();
const productsCtrl = require('../controllers/products');

// All paths start with '/api/proucts'

// GET /api/products
router.get('/', productsCtrl.getAll);

module.exports = router;
