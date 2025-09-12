import React, { useState } from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Icons for hamburger and close

const MainHeader = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div
            className="flex items-center cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img
              src={assets.logo2}
              alt="AyurSutra Logo"
              className="w-32 h-12 object-contain"
            />
          </div>

          {/* Desktop Navigation Links */}
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

          {/* Desktop Right Side Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => navigate("/Auth")}
              className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors duration-200 cursor-pointer"
            >
              Login
            </button>
            <button
              onClick={() => navigate("/Auth")}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            >
              Book Appointment
            </button>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg px-4 py-3 space-y-4">
          <a
            href="#home"
            className="block text-gray-700 hover:text-green-600 transition-colors duration-200"
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>
          <a
            href="#about"
            className="block text-gray-700 hover:text-green-600 transition-colors duration-200"
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
          <a
            href="#features"
            className="block text-gray-700 hover:text-green-600 transition-colors duration-200"
            onClick={() => setIsOpen(false)}
          >
            Features
          </a>
          <a
            href="#testimonials"
            className="block text-gray-700 hover:text-green-600 transition-colors duration-200"
            onClick={() => setIsOpen(false)}
          >
            Testimonials
          </a>
          <a
            href="#contact"
            className="block text-gray-700 hover:text-green-600 transition-colors duration-200"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>

          {/* Mobile Login & Appointment */}
          <button
            onClick={() => {
              navigate("/Auth");
              setIsOpen(false);
            }}
            className="block w-full text-left text-gray-700 hover:text-green-600 transition-colors duration-200"
          >
            Login
          </button>
          <button
            onClick={() => {
              navigate("/Auth");
              setIsOpen(false);
            }}
            className="block w-full bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-center transition-colors duration-200"
          >
            Book Appointment
          </button>
        </div>
      )}
    </nav>
  );
};

export default MainHeader;
