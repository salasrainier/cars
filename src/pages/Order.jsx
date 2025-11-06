// src/pages/Order.jsx
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";

export default function Order() {
  const location = useLocation();
  const selectedCar = location.state?.carModel || "";

  const [form, setForm] = useState({
    name: "",
    carModel: selectedCar,
    contact: "",
  });

  const [message, setMessage] = useState("");

  useEffect(() => {
    if (selectedCar) {
      setForm((prev) => ({ ...prev, carModel: selectedCar }));
    }
  }, [selectedCar]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order submitted:", form);
    setMessage("✅ Your order has been submitted successfully!");
    setForm({ name: "", carModel: selectedCar, contact: "" });
    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <>
      <Navbar />
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black px-6 py-16 relative overflow-hidden text-white">
        {/* Background Glows */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse"></div>

        {/* Order Form Card */}
        <div className="relative bg-black/70 backdrop-blur-xl border border-yellow-400/20 rounded-3xl shadow-2xl w-full max-w-lg p-8 sm:p-10 overflow-hidden">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-3xl opacity-20 blur-2xl -z-10"></div>

          <div className="relative z-10">
            <h2 className="text-3xl font-extrabold text-center text-yellow-400 mb-3">
              Order Your <span className="text-white">{selectedCar || "Car"}</span>
            </h2>
            <p className="text-center text-gray-300 mb-8">
              Fill out the form below to place your order quickly and securely.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block mb-1 font-semibold text-yellow-300">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                  className="w-full border border-yellow-400/40 rounded-2xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition shadow-sm hover:shadow-md bg-gray-900 text-yellow-100"
                />
              </div>

              {/* Car Model */}
              <div>
                <label className="block mb-1 font-semibold text-yellow-300">Car Model</label>
                <input
                  type="text"
                  name="carModel"
                  value={form.carModel}
                  onChange={handleChange}
                  required
                  placeholder="Select a car from listing"
                  className={`w-full border rounded-2xl px-5 py-3 focus:outline-none focus:ring-2 transition shadow-sm hover:shadow-md ${
                    selectedCar
                      ? "bg-yellow-900 border-yellow-500 text-yellow-100 font-bold cursor-not-allowed"
                      : "bg-gray-900 border-yellow-400/40 text-yellow-100"
                  }`}
                  readOnly={!!selectedCar}
                />
              </div>

              {/* Contact */}
              <div>
                <label className="block mb-1 font-semibold text-yellow-300">Contact Number</label>
                <input
                  type="text"
                  name="contact"
                  value={form.contact}
                  onChange={handleChange}
                  required
                  placeholder="+63 912 345 6789"
                  className="w-full border border-yellow-400/40 rounded-2xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition shadow-sm hover:shadow-md bg-gray-900 text-yellow-100"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-semibold py-3 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition transform duration-300"
              >
                Submit Order
              </button>
            </form>

            {/* Success Message */}
            {message && (
              <p className="mt-6 text-center text-green-400 font-semibold animate-pulse">
                {message}
              </p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
