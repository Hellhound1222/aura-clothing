import React from "react";
import ProductShowcase from "./ProductShowcase";

const ProductList = () => {
  return (
    <div className="py-10 bg-gray-100">
      <h1 className="text-4xl font-bold text-center mb-8">Explore Our Collection</h1>
      <ProductShowcase />
    </div>
  );
};

export default ProductList;
