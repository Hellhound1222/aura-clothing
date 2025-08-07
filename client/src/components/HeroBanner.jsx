import React from "react";
import heroImage from "../assets/hero_banner.webp";

const HeroBanner = () => {
  return (
    <div className="pt-20 relative w-full">
      <img
        src={heroImage}
        alt="AURA Hero Banner"
        className="w-full h-[90vh] object-cover"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white bg-black bg-opacity-40">
        <h1 className="text-4xl md:text-6xl font-bold">NEW COLLECTION</h1>
        <p className="mt-4 text-lg md:text-xl">Elevate your style with AURA</p>
        <button className="mt-6 px-6 py-2 bg-white text-black hover:bg-gray-200 rounded-full font-medium">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default HeroBanner;
