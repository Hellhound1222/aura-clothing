import React, { useRef } from "react";
import { useCart } from "../context/CartContext";

const CartModal = ({ isOpen, onClose }) => {
  const { cartItems, removeFromCart, updateQty } = useCart();
  const sidebarRef = useRef();

  const total = cartItems.reduce((sum, item) => {
  const price = typeof item.price === "number"
    ? item.price
    : Number(item.price.replace(/[₹,]/g, ""));
  return sum + price * item.qty;
}, 0);

  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    // If clicked outside the sidebar, close
    if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-[9999] bg-black bg-opacity-50 flex justify-end"
      onClick={handleOverlayClick}
    >
      <aside
        ref={sidebarRef}
        className="w-80 bg-white h-full p-6 overflow-y-auto shadow-xl relative z-[10000] scrollbar-thin scrollbar-thumb-gray-300 hover:scrollbar-thumb-gray-400"
      >
        <button
          className="absolute top-3 right-3 text-2xl text-gray-600"
          onClick={onClose}
        >
          &times;
        </button>

        <h2 className="text-xl font-bold mb-4">Your Cart</h2>

        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded"
                />
                <div className="ml-3 flex-1">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p>
  {typeof item.price === "number" ? `₹${item.price}` : item.price}
</p>
                  <div className="flex items-center mt-2">
                    <input
                      type="number"
                      min="1"
                      value={item.qty}
                      onChange={(e) =>
                        updateQty(item.id, parseInt(e.target.value))
                      }
                      className="w-16 border rounded px-2"
                    />
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="ml-3 text-black hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-6 border-t pt-4">
          <p className="font-bold">
  Total: ₹{total.toFixed(2)}
</p>


          <button className="mt-4 w-full bg-black text-white py-2 rounded hover:bg-gray-800">
            Checkout
          </button>
        </div>
      </aside>
    </div>
  );
};

export default CartModal;
