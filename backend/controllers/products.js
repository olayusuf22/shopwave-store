const Product = require('../models/product'); 

module.exports = {
  getAll,
};

// READ: Return all products
async function getAll(req, res) {
  try {
    const products = await Product.find({});
    res.json (products);
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
}

