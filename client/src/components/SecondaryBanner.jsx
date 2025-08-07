import React from "react";
import banner from "../assets/secondbanner.png";
import { Link } from "react-scroll";

const SecondaryBanner = () => {
  return (
    <div className="relative w-full h-[70vh]">
      <img
        src={banner}
        alt="Secondary Banner"
        className="w-full h-full object-cover"
      />
      <Link
        to="products-section"
        smooth={true}
        duration={600}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-black text-white px-6 py-2 rounded-full font-semibold text-lg hover:bg-gray-800 transition duration-300 cursor-pointer"
      >
        SHOP
      </Link>
    </div>
  );
};

export default SecondaryBanner;
