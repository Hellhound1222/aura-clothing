import React, { useState } from "react"; // ✅ FIXED: added useState here
import { useCart } from "../context/CartContext";
import CartModal from "./CartModal";

const Navbar = () => {
  const { cartItems } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="w-full px-6 py-4 shadow-md bg-white fixed top-0 z-50">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold tracking-wide">AURA</h1>

          <nav className="space-x-6 hidden md:block">
            <a href="#" className="hover:text-gray-500">Shop</a>
            <a href="#" className="hover:text-gray-500">New</a>
            <a href="#" className="hover:text-gray-500">Accessories</a>
            <a href="#" className="hover:text-gray-500">Contact</a>
          </nav>

          <div className="flex items-center space-x-4 text-lg">
            {/* Cart icon */}
            <button onClick={() => setOpen(true)} className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.8"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 11V7a4 4 0 00-8 0v4m12 0H4m16 0l-1.5 9A2 2 0 0116.5 22h-9a2 2 0 01-1.99-2L4 11"
                />
              </svg>
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                  {cartItems.length}
                </span>
              )}
            </button>

            {/* Account icon */}
            <svg
              aria-hidden="true"
              fill="none"
              focusable="false"
              width="24"
              className="header__nav-icon icon icon-account"
              viewBox="0 0 24 24"
            >
              <path
                d="M16.125 8.75c-.184 2.478-2.063 4.5-4.125 4.5s-3.944-2.021-4.125-4.5c-.187-2.578 1.64-4.5 4.125-4.5 2.484 0 4.313 1.969 4.125 4.5Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3.017 20.747C3.783 16.5 7.922 14.25 12 14.25s8.217 2.25 8.984 6.497"
                stroke="currentColor"
                strokeWidth="2"
                strokeMiterlimit="10"
              />
            </svg>
          </div>
        </div>
      </header>

      {/* Cart modal */}
      <CartModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default Navbar;