import React from "react";

export default function FeatureCard({ icon, title, description, onClick }) {
  return (
    <div
      onClick={onClick}
      className="group relative bg-black/70 backdrop-blur-lg border border-yellow-500/40 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:bg-black/80 cursor-pointer"
    >
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/30 to-yellow-600/20 opacity-0 group-hover:opacity-100 rounded-3xl blur-xl transition-all duration-500"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center space-y-4">
        <div className="text-5xl text-yellow-400 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h4 className="text-xl md:text-2xl font-bold text-yellow-300 group-hover:text-yellow-400 transition-colors duration-300">
          {title}
        </h4>
        <p className="text-gray-300 text-sm md:text-base leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
