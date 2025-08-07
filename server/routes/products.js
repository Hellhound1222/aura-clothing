const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// GET all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// POST a new product
// POST a new product
router.post('/', async (req, res) => {
  try {
    const {
      name,
      image,
      price,
      description,
      category,
      brand,
      countInStock,
    } = req.body;

    // Optionally validate required fields
    if (!name || !image || !price) {
      return res.status(400).json({ error: "Name, image, and price are required." });
    }

    const newProduct = new Product({
      name,
      image,
      price,
      description,
      category,
      brand,
      countInStock,
    });

    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (err) {
    console.error("Error adding product:", err);
    res.status(400).json({ error: "Invalid data" });
  }
});


// ✅ DELETE single product by ID
router.delete('/:id', async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json({ message: 'Product deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Server error while deleting' });
  }
});

module.exports = router;
