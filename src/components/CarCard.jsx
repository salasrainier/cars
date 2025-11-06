// src/components/CarCard.jsx
import React from "react";

export default function CarCard({ car, onOrder }) {
  return (
    <div className="relative bg-black/70 backdrop-blur-lg border border-yellow-500/40 shadow-lg rounded-3xl p-5 flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:bg-black/80">
      {/* Car Name */}
      <h3 className="font-bold text-2xl text-yellow-300 mb-4 text-center drop-shadow-md">
        {car.name}
      </h3>

      {/* Car Image */}
      <div className="overflow-hidden rounded-2xl mb-4 shadow-lg">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Car Description */}
      <p className="text-gray-300 text-sm md:text-base flex-1 mb-4">{car.description}</p>

      {/* Price and Order Button */}
      <div className="flex items-center justify-between mt-auto">
        <div className="font-bold text-lg md:text-xl text-yellow-400">{car.price}</div>

        <button
          onClick={onOrder}
          className="px-5 py-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-semibold rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
        >
          Order Now
        </button>
      </div>

      {/* Subtle Glow */}
      <div className="absolute -inset-0.5 bg-gradient-to-br from-yellow-400/20 to-yellow-600/10 rounded-3xl blur-2xl -z-10"></div>
    </div>
  );
}
