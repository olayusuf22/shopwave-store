const Product = require('../models/product'); 
const Order = require('../models/order');

module.exports = {
  getCart,
};

// READ: Return all products
async function getCart(req, res) {
  try {
    const products = await Product.find({});
    res.json (products);
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
}

