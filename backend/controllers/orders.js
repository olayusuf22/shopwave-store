const Product = require('../models/product'); 
const Order = require('../models/order');

module.exports = {
  getCart,
};

// READ: Return the cart for the current user
async function getCart(req, res) {
  res.json(req.cart);
}

