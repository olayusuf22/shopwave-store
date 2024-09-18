const Product = require('../models/product'); 
const Order = require('../models/order');


module.exports = {
  getCart,
  addToCart,
};

// READ: Return the cart for the current user
async function getCart(req, res) {
  res.json(req.cart);
}

// CREATE: Add a product to the cart
async function addToCart(req, res) {
  const product = await Product.findById(req.params.productId);
  req.cart.products.push(product);
  await req.cart.save();
  res.json(req.cart);
}
