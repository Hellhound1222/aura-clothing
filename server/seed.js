const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Product = require("./models/Product");
const products = require("./data/products");

dotenv.config();

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("✅ Connected to MongoDB");

    // Remove old products
    await Product.deleteMany();
    console.log("🧹 Old products removed");

    // Add new products
    await Product.insertMany(products);
    console.log("🚀 Demo products seeded");

    process.exit();
  })
  .catch((err) => {
    console.error("❌ MongoDB Error:", err);
    process.exit(1);
  });
