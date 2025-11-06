import React, { useState, useEffect } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa"; // input icons

export default function SignInForm({ onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sign In:", { email, password });
    alert("✅ Signed in successfully!");
    onClose();
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-500 ${
        mounted ? "backdrop-blur-md bg-black/50 opacity-100" : "opacity-0"
      }`}
      onClick={onClose} // click outside closes modal
    >
      <div
        onClick={(e) => e.stopPropagation()} // prevent closing inside modal
        className={`relative bg-white/20 backdrop-blur-xl rounded-3xl shadow-2xl w-full max-w-md p-8 sm:p-10 border border-white/20 transition-transform duration-500 ${
          mounted ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-900 hover:text-gray-700 font-bold text-xl"
        >
          ×
        </button>

        {/* Title */}
        <h2 className="text-3xl font-extrabold text-gray-900 mb-3 text-center drop-shadow-md">
          Sign In
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Enter your account details to continue
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="you@example.com"
              className="w-full pl-10 px-4 py-3 rounded-2xl bg-white/30 text-gray-900 border border-white/30 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent shadow-md hover:shadow-lg transition"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="********"
              className="w-full pl-10 px-4 py-3 rounded-2xl bg-white/30 text-gray-900 border border-white/30 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent shadow-md hover:shadow-lg transition"
            />
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <button
              type="button"
              className="text-sm text-blue-600 hover:text-blue-800 font-medium transition"
            >
              Forgot Password?
            </button>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-3 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition transform duration-300"
          >
            Sign In
          </button>
        </form>

        {/* Optional divider for social logins */}
        <div className="flex items-center my-6">
          <hr className="flex-1 border-gray-300" />
          <span className="mx-2 text-gray-500">or</span>
          <hr className="flex-1 border-gray-300" />
        </div>

        {/* Social login placeholders */}
        <div className="flex gap-4 justify-center">
          <button className="flex-1 py-2 rounded-2xl bg-red-500 text-white font-semibold hover:bg-red-600 transition">
            Google
          </button>
          <button className="flex-1 py-2 rounded-2xl bg-blue-700 text-white font-semibold hover:bg-blue-800 transition">
            Facebook
          </button>
        </div>
      </div>
    </div>
  );
}
