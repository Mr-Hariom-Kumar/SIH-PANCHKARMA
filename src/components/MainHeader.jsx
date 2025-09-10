import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const MainHeader = () => {
  const navigate = useNavigate(); // Add this to enable navigation on logo click

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div
            className="flex items-center cursor-pointer"
            onClick={() => navigate("/home")}
          >
            <img
              src={assets.logo2}
              alt="AyurSutra Logo"
              className="w-32 h-12 object-contain"
            />
            {/* <span className="ml-2 text-2xl font-bold text-green-800 hidden sm:inline">
              AyurSutra
            </span> */}
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-700 hover:text-green-600 hover:underline transition-colors duration-200"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-green-600 hover:underline transition-colors duration-200"
            >
              About
            </a>
            <a
              href="#features"
              className="text-gray-700 hover:text-green-600 hover:underline transition-colors duration-200"
            >
              Features
            </a>
            <a
              href="#testimonials"
              className="text-gray-700 hover:text-green-600 hover:underline transition-colors duration-200"
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-green-600 hover:underline transition-colors duration-200"
            >
              Contact
            </a>
          </div>

          {/* Right Side Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#login"
              className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              Login
            </a>
            <a
              href="#appointment"
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            >
              Book Appointment
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MainHeader;
