import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const [products, setProducts] = useState([]);

  // Fetch products on mount
  useEffect(() => {
    axios
      .get("http://localhost:5000/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Error fetching products", err));
  }, []);

  // State for new product form
  const [newProduct, setNewProduct] = useState({
    name: "",
    image: "",
    price: "",
    description: "",
    category: "",
    brand: "",
    countInStock: 0,
  });

  // Input handler
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prev) => ({ ...prev, [name]: value }));
  };

  // Add new product
  const handleAddProduct = async (e) => {
    e.preventDefault();

    const { name, image, price } = newProduct;

    if (!name.trim() || !image.trim() || !price.trim()) {
      alert("Please fill out at least name, image, and price fields.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/products", newProduct);
      setProducts([...products, response.data]);
      setNewProduct({
        name: "",
        image: "",
        price: "",
        description: "",
        category: "",
        brand: "",
        countInStock: 0,
      });
    } catch (error) {
      console.error("Error adding product", error);
    }
  };

  // Delete product by ID
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        await axios.delete(`http://localhost:5000/products/${id}`);
        setProducts(products.filter((p) => p._id !== id));
      } catch (error) {
        console.error("Error deleting product", error);
      }
    }
  };

  return (
    <>
      {/* Product Form */}
      <div className="mb-10 p-8">
        <h2 className="text-xl font-bold mb-4">Add New Product</h2>
        <form
          onSubmit={handleAddProduct}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {[
            { name: "name", placeholder: "Name" },
            { name: "image", placeholder: "Image URL" },
            { name: "price", placeholder: "Price" },
            { name: "description", placeholder: "Description" },
            { name: "category", placeholder: "Category" },
            { name: "brand", placeholder: "Brand" },
          ].map((field) => (
            <input
              key={field.name}
              type="text"
              name={field.name}
              placeholder={field.placeholder}
              value={newProduct[field.name]}
              onChange={handleInputChange}
              required={["name", "image", "price"].includes(field.name)}
              className="border p-2 rounded"
            />
          ))}

          <input
            type="number"
            name="countInStock"
            placeholder="Stock Count"
            value={newProduct.countInStock}
            onChange={handleInputChange}
            className="border p-2 rounded"
          />

          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded col-span-1 md:col-span-2 hover:bg-green-700"
          >
            Add Product
          </button>
        </form>
      </div>

      {/* Product List */}
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product._id}
              className="border p-4 rounded shadow bg-white"
            >
              <img
                src={product.image || "https://via.placeholder.com/150"}
                alt={product.name || "Product Image"}
                className="h-40 w-full object-cover rounded"
              />
              <h2 className="text-lg font-semibold mt-2">
                {product.name || "Unnamed Product"}
              </h2>
              <p className="text-gray-600">₹{product.price || "0"}</p>
              <p className="text-sm">{product.description || "No description"}</p>
              <button
                className="mt-3 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                onClick={() => handleDelete(product._id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
