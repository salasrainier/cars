import React from "react";

export default function SearchBar({ value, onChange }) {
  return (
    <div className="relative w-full max-w-md">
      {/* Soft glow background */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-md border border-white/40 rounded-2xl shadow-sm"></div>

      {/* Input field */}
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="🔍  Search your dream car..."
        className="relative z-10 w-full px-5 py-3 text-gray-800 rounded-2xl bg-white/40 backdrop-blur-md border border-white/50 focus:outline-none focus:ring-2 focus:ring-sky-400/60 focus:bg-white/60 placeholder-gray-500 shadow-md transition-all duration-300"
      />
    </div>
  );
}
