import React from 'react';
import { useCart } from '../context/CartContext'; // updated path

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:scale-105 transition-transform">
      <img src={product.image} alt={product.name} className="w-full h-72 object-cover" />
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-600 mt-2">{product.price}</p>
        <button
          className="mt-4 px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800"
          onClick={() => addToCart(product)}
        >
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
