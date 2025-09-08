import {images} from '../assets/assets'
import {Link} from 'react-router-dom' ; 
import React, { useEffect, useState } from "react";
const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

   return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="Ayurvedic Background"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 
              ${index === currentImage ? "opacity-100" : "opacity-0"}`}
          />
        ))}
        {/* Blur overlay */}
        <div className="absolute inset-0 bg-white/60 "></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-5xl md:text-7xl font-extrabold text-green-900 drop-shadow-lg">
          AyurSutra
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-gray-800 font-medium">
          Start your journey towards holistic wellness and healing
        </p>
        <Link to="/auth">  
        <button className="mt-8 px-6 py-3 bg-green-800 !text-white rounded-full shadow-lg 
          font-semibold hover:bg-green-900 transition-all duration-200 cursor-pointer" >
          Get Started
        </button>
        </Link>
      </div>
    </div>
  );
}

export default Hero ; 
