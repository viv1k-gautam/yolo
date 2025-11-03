import React from "react";
import { FaSearch } from "react-icons/fa";

function Hero() {
  return (
    <div
      className="w-full h-[500px] flex flex-col items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/1200x/fa/b5/63/fab563a4a0699595fdda6c27ec697bb4.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="w-full h-full bg-black/10 absolute top-0 left-0"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white">
          Craving something delicious?
        </h1>
        <p className="text-lg md:text-xl text-gray-100 mt-2">
          Order from your favorite restaurants and track your delivery in real-time
        </p>

        {/* Search Bar */}
        <div className="mt-6 flex items-center bg-white rounded-full px-4 py-2 w-full max-w-lg mx-auto shadow-md">
          <FaSearch className="text-gray-500" />
          <input
            type="text"
            placeholder="Search for restaurants, cuisines, or dishes"
            className="flex-1 px-3 py-2 outline-none text-gray-700"
          />
          <button className="bg-blue-600 text-white font-semibold px-5 py-2 rounded-full hover:bg-blue-700 transition">
            Search
          </button>
        </div>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mt-6">
          {["Pizza", "Burgers", "Chinese", "Italian", "Mexican", "Sushi"].map(
            (item) => (
              <button
                key={item}
                className="bg-white hover:bg-orange-500 hover:text-white text-gray-700 font-medium px-5 py-2 rounded-full shadow-sm transition"
              >
                {item}
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default Hero;
