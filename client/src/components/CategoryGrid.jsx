import React from "react";
import menImg from "../assets/men.png";
import womenImg from "../assets/women.png";
import unisexImg from "../assets/unisex.png";

const categories = [
  { title: "Men", image: menImg },
  { title: "Women", image: womenImg },
  { title: "Unisex", image: unisexImg },
];

const CategoryGrid = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
      {categories.map((cat) => (
        <div
          key={cat.title}
          className="relative h-64 rounded-xl overflow-hidden shadow group"
        >
          <img
            src={cat.image}
            alt={cat.title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition duration-300"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <h3 className="text-white text-2xl font-bold">{cat.title}</h3>
          </div>
        </div>
      ))}
    </section>
  );
};

export default CategoryGrid;
