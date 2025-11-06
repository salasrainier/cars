// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx";
import Listing from "./pages/Listing.jsx";
import Order from "./pages/Order.jsx"; // ✅ Add this

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/listing" element={<Listing />} />
       <Route path="/order" element={<Order />} /> {/* ✅ Add Order route */}
    </Routes>
  );
}
