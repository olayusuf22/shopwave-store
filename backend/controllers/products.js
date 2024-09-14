const express = require('express');
const router = express.Router();
const Product = require('../models/product'); // Updated model import

// CREATE: Show form to add a new product
router.get('/new', (req, res) => {
  res.render('product-form', { product: {} });
});

// CREATE: Handle the form submission to add a new product
router.post('/', async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.redirect('/products');
  } catch (err) {
    res.status(400).send('Unable to save data');
  }
});

// READ: Display all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find({});
    res.render('products/index.ejs', { products });
  } catch (err) {
    console.log(err)
    res.status(500).send(err);
  }
});

// READ: Display a single product's details
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.render('product-detail', { product });
  } catch (err) {
    res.status(500).send('Error retrieving data');
  }
});

// UPDATE: Show form to edit an existing product
router.get('/:id/edit', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.render('products/edit.ejs', { product });
  } catch (err) {
    res.status(500).send('Error retrieving data');
  }
});

// UPDATE: Handle form submission to update an existing product
router.post('/:id', async (req, res) => {
  try {
    await Product.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('/products');
  } catch (err) {
    res.status(400).send('Unable to update data');
  }
});

// DELETE: Remove a product from the inventory
router.post('/:id/delete', async (req, res) => {
  try {
    await Product.findByIdAndRemove(req.params.id);
    res.redirect('/products');
  } catch (err) {
    res.status(500).send('Error deleting data');
  }
});

// PUT: Update product information
router.put('/:productId', async (req, res) => {
  const updateProduct = await Product.findByIdAndUpdate({_id: req.params.productId}, req.body, {new: true});
  res.redirect(`/products/${updateProduct._id}`);
});

module.exports = router;
