import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import PrivateRoute from "./components/PrivateRoute";

// Admin Pages
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";

// Main Site Components
import Navbar from "./components/Navbar";
import HeroBanner from "./components/HeroBanner";
import CategoryGrid from "./components/CategoryGrid";
import ProductList from "./components/ProductList";
import SecondaryBanner from "./components/SecondaryBanner";
import Footer from "./components/Footer";

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Routes>
          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route
            path="/admin/dashboard"
            element={
              <PrivateRoute>
                <AdminDashboard />
              </PrivateRoute>
            }
          />

          {/* Public Routes */}
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <HeroBanner />
                <CategoryGrid />
                <ProductList />
                <SecondaryBanner />
                <Footer />
              </>
            }
          />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
