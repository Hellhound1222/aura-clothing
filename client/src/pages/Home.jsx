import React from "react";
import HeroBanner from "../components/HeroBanner";
import ProductList from "../components/ProductList";
import SecondaryBanner from "../components/SecondaryBanner";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <HeroBanner />
      <ProductList />
      {/* <SecondaryBanner /> */}
      <Footer />
    </div>
  );
};

export default Home;
