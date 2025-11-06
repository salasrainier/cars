// src/pages/Listing.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import CarCard from "../components/CarCard";

export default function Listing() {
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 3;
  const navigate = useNavigate();

  const dummyCars = [
    { id: 1, name: "Toyota Supra", price: "₱3,000,000", image: "/cars/supra.jpg" },
    { id: 2, name: "Honda Civic Type R", price: "₱2,800,000", image: "/cars/civic.jpg" },
    { id: 3, name: "Nissan GT-R", price: "₱9,000,000", image: "/cars/gtr.jpg" },
    { id: 4, name: "Ford Mustang", price: "₱4,500,000", image: "/cars/mustang.jpg" },
  ];

  useEffect(() => {
    setCars(dummyCars);
    setFilteredCars(dummyCars);
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    setCurrentPage(1); // reset to first page on search
    if (!query) {
      setFilteredCars(cars);
      return;
    }
    const filtered = cars.filter((car) =>
      car.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredCars(filtered);
  };

  const handleOrder = (carName) => {
    navigate("/order", { state: { carModel: carName } });
  };

  // Pagination calculations
  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = filteredCars.slice(indexOfFirstCar, indexOfLastCar);
  const totalPages = Math.ceil(filteredCars.length / carsPerPage);

  const goToPage = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden text-white">
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-400/20 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-500/10 blur-3xl rounded-full animate-pulse"></div>

      {/* Navbar */}
      <Navbar />

      <section id="listing" className="relative z-10 p-10 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-yellow-400 mb-8 drop-shadow-lg">
          Available Luxury Cars
        </h2>

        {/* Search Bar */}
        <div className="flex justify-center mb-10">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearch}
            placeholder="Search for a car..."
            className="w-full max-w-md px-5 py-3 border border-yellow-400/50 rounded-full shadow-lg bg-black/50 placeholder-yellow-300 text-yellow-100 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-center"
          />
        </div>

        {/* Car Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentCars.length > 0 ? (
            currentCars.map((car) => (
              <CarCard key={car.id} car={car} onOrder={() => handleOrder(car.name)} />
            ))
          ) : (
            <p className="text-center col-span-full text-yellow-300 text-lg">
              No cars found. Try searching something else 🚗
            </p>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-10">
            {/* Prev Arrow */}
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className={`w-10 h-10 flex items-center justify-center rounded-full transition 
                ${currentPage === 1 
                  ? "bg-yellow-600/20 cursor-not-allowed text-yellow-300" 
                  : "bg-yellow-500 hover:bg-yellow-400 shadow-lg text-black hover:scale-110"} 
                text-lg font-bold`}
            >
              &lt;
            </button>

            {/* Page Numbers */}
            {[...Array(totalPages)].map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToPage(idx + 1)}
                className={`px-3 py-1 rounded-lg transition text-yellow-200 ${
                  currentPage === idx + 1
                    ? "bg-yellow-500 text-black font-semibold shadow-lg"
                    : "hover:bg-yellow-600/40"
                }`}
              >
                {idx + 1}
              </button>
            ))}

            {/* Next Arrow */}
            <button
              onClick={nextPage}
              disabled={currentPage === totalPages}
              className={`w-10 h-10 flex items-center justify-center rounded-full transition 
                ${currentPage === totalPages 
                  ? "bg-yellow-600/20 cursor-not-allowed text-yellow-300" 
                  : "bg-yellow-500 hover:bg-yellow-400 shadow-lg text-black hover:scale-110"} 
                text-lg font-bold`}
            >
              &gt;
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
