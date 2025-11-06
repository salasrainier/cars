import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import SignInForm from "./SignInForm.jsx";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleNavigate = (path) => {
    navigate(path);
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleTouchStart = (e) => {
      touchStartX.current = e.touches[0].clientX;
    };
    const handleTouchMove = (e) => {
      touchEndX.current = e.touches[0].clientX;
    };
    const handleTouchEnd = () => {
      const deltaX = touchStartX.current - touchEndX.current;
      if (deltaX > 50 && touchStartX.current > window.innerWidth - 30) {
        setMenuOpen(true);
      }
    };

    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="sticky top-0 z-50 bg-black/90 backdrop-blur-md shadow-md hidden md:flex">
        <div className="flex justify-between items-center py-4 px-8 md:px-12 w-full">
          {/* Logo + Brand (Top-Left) */}
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => handleNavigate("/")}
          >
            <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center shadow-lg">
              <span className="text-black font-extrabold text-lg">L</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-yellow-400 leading-none">
              Luxury<span className="text-white">Cars</span>
            </h1>
          </div>

          {/* Nav Items */}
          <div className="flex items-center gap-8">
            <button
              onClick={() => handleNavigate("/")}
              className="text-yellow-400 hover:text-yellow-200 transition"
            >
              Home
            </button>
            <button
              onClick={() => handleNavigate("/listing")}
              className="text-yellow-400 hover:text-yellow-200 transition"
            >
              Explore
            </button>
            <button
              onClick={() => handleNavigate("/order")}
              className="text-yellow-400 hover:text-yellow-200 transition"
            >
              Order
            </button>
            <button
              onClick={() => setShowSignIn(true)}
              className="ml-4 bg-yellow-500 text-black px-5 py-2 rounded-full font-bold shadow hover:shadow-lg transition"
            >
              Sign In
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Nav */}
      {isMobile && !menuOpen && (
        <div className="fixed bottom-0 left-0 w-full bg-black/95 backdrop-blur-md shadow-t z-50 flex justify-around items-center py-3 px-2 border-t border-yellow-400/20">
          {/* Center Logo */}
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center shadow-lg">
              <span className="text-black font-bold text-base">L</span>
            </div>
          </div>

          <button
            onClick={() => handleNavigate("/")}
            className="flex flex-col items-center text-yellow-400 hover:text-yellow-200"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V12H9v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9z"></path>
            </svg>
            <span className="text-xs mt-1">Home</span>
          </button>

          <button
            onClick={() => handleNavigate("/listing")}
            className="flex flex-col items-center text-yellow-400 hover:text-yellow-200"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 12h18M3 6h18M3 18h18"></path>
            </svg>
            <span className="text-xs mt-1">Explore</span>
          </button>

          <button
            onClick={() => handleNavigate("/order")}
            className="flex flex-col items-center text-yellow-400 hover:text-yellow-200"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            <span className="text-xs mt-1">Order</span>
          </button>

          <button
            onClick={() => setShowSignIn(true)}
            className="flex flex-col items-center text-yellow-400 hover:text-yellow-200"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 21v-2a4 4 0 0 0-8 0v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            <span className="text-xs mt-1">Sign In</span>
          </button>
        </div>
      )}

      {/* Side Panel / Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black/95 backdrop-blur-md z-50 transform transition-transform duration-300 shadow-xl
        ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-between items-center p-6 border-b border-yellow-400/30">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center shadow-lg">
              <span className="text-black font-extrabold text-lg">L</span>
            </div>
            <h2 className="text-2xl font-bold text-yellow-400 leading-none">Menu</h2>
          </div>
          <button onClick={() => setMenuOpen(false)} className="text-yellow-400 text-2xl">
            ✕
          </button>
        </div>
        <div className="flex flex-col p-6 gap-6">
          <button
            onClick={() => handleNavigate("/")}
            className="flex items-center gap-3 text-yellow-400 hover:text-yellow-200 text-lg"
          >
            Home
          </button>
          <button
            onClick={() => handleNavigate("/listing")}
            className="flex items-center gap-3 text-yellow-400 hover:text-yellow-200 text-lg"
          >
            Explore
          </button>
          <button
            onClick={() => handleNavigate("/order")}
            className="flex items-center gap-3 text-yellow-400 hover:text-yellow-200 text-lg"
          >
            Order
          </button>
          <button
            onClick={() => setShowSignIn(true)}
            className="bg-yellow-500 text-black px-4 py-2 rounded-full font-bold shadow hover:shadow-lg transition w-full"
          >
            Sign In
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 bg-black/40 z-40" onClick={() => setMenuOpen(false)}></div>
      )}

      {showSignIn && <SignInForm onClose={() => setShowSignIn(false)} />}
    </>
  );
}
