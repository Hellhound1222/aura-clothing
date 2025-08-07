const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const productRoutes = require('./routes/products');
app.use('/products', productRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB Connected');
    app.listen(5000, () => {
      console.log('🚀 Server running on port 5000');
    });
  })
  .catch((err) => console.error('MongoDB connection error:', err));
