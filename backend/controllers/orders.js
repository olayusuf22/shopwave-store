const Product = require('../models/product'); 
const Order = require('../models/order');


module.exports = {
  getCart,
  addToCart,
  removeFromCart,
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

// DELETE: Remove a product from the cart
async function removeFromCart(req, res) {
  console.log("removeFromCart");
  req.cart.products = req.cart.products.filter(product => !product._id.equals(req.params.productId) );
  await req.cart.save();
  res.json(req.cart);
}


