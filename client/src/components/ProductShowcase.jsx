import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import axios from "axios";

const ProductShowcase = () => {
  const { addToCart } = useCart();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("❌ Failed to fetch products:", err));
  }, []);

  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-10">Featured Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product._id}
              className="border rounded-xl overflow-hidden shadow hover:shadow-xl transition duration-300"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-600">₹{product.price}</p>
                <button
                  className="mt-3 w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition"
                  onClick={() =>
                    addToCart({
                      id: product._id,
                      name: product.name,
                      price: Number(product.price),
                      image: product.image,
                      qty: 1,
                    })
                  }
                >
                  Shop Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
