// src/pages/LandingPage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import FeatureCard from "../components/FeatureCard.jsx";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate("/listing");
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-black text-white overflow-hidden">
      {/* Floating Gold Orbs */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-yellow-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-yellow-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/3 right-1/3 w-60 h-60 bg-yellow-400/10 rounded-full blur-2xl"></div>

      {/* Navbar */}
      <div className="z-20">
        <Navbar />
      </div>

      {/* Hero Section */}
      <section className="relative flex flex-col md:flex-row items-center justify-center text-center md:text-left px-6 mt-20 md:mt-32 gap-12 z-10 max-w-7xl mx-auto">
        {/* Hero Text */}
        <div className="flex-1">
          <h1 className="text-5xl md:text-6xl font-extrabold text-yellow-400 leading-tight drop-shadow-lg">
            Drive Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
              Luxury Dream
            </span>
          </h1>
          <p className="mt-6 text-gray-300 text-lg md:text-xl max-w-xl leading-relaxed">
            Experience elite vehicles with style, comfort, and unmatched performance. Reserve your luxury car and drive in elegance.
          </p>

          <button
            onClick={handleExploreClick}
            className="mt-10 px-12 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black text-lg font-bold rounded-full shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300"
          >
            Explore Cars
          </button>
        </div>

        {/* Hero Image */}
        <div className="flex-1">
          <div className="relative w-full h-80 md:h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="/cars/luxurycar.jpg"
              alt="Luxury Car"
              className="w-full h-full object-cover object-center transform hover:scale-105 transition duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-3xl"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 py-24 px-8 bg-black/70 backdrop-blur-2xl rounded-t-3xl mt-28 shadow-xl">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-yellow-400 mb-12 drop-shadow-lg">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <FeatureCard
            icon="🚘"
            title="Exclusive Fleet"
            description="Only the finest luxury, sports, and exotic cars — handpicked for excellence."
            iconClass="text-yellow-400 text-4xl"
          />
          <FeatureCard
            icon="⚡"
            title="Instant Booking"
            description="Reserve your elite vehicle in seconds with instant confirmation."
            iconClass="text-yellow-400 text-4xl"
          />
          <FeatureCard
            icon="🛎️"
            title="Concierge Service"
            description="24/7 dedicated support for a flawless luxury experience."
            iconClass="text-yellow-400 text-4xl"
          />
        </div>
      </section>

      {/* Premium Fleet Section */}
      <section className="relative z-10 py-24 px-8 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-yellow-400 text-center mb-12 drop-shadow-lg">
          Our Premium Fleet
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {["supra.jpg", "civic.jpg", "gtr.jpg", "mustang.jpg"].map((car, idx) => (
            <div
              key={idx}
              className="relative rounded-2xl overflow-hidden shadow-2xl hover:scale-105 transition transform duration-500"
            >
              <img
                src={`/cars/${car}`}
                alt="Luxury Car"
                className="w-full h-60 object-cover"
              />
              <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4">
                <h3 className="text-yellow-400 font-bold text-lg">Car Model {idx + 1}</h3>
                <p className="text-gray-200 text-sm">Premium Performance</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-gradient-to-r from-gray-900 to-black text-yellow-400 text-center py-6 mt-16 shadow-inner">
        <p className="text-sm tracking-wide">
          © 2025 <span className="font-bold">Luxury Car Dealers Co.</span> All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;
