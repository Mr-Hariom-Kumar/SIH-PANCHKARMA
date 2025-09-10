import React from "react";
import Hero from "../components/Hero";
import FeaturesCarousel from "../components/Features";
import MainHeader from "../components/MainHeader";
import About from "./About";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <MainHeader />
      <Hero />
      <section id="features">
        <FeaturesCarousel />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="contact">
        <Contact />
      </section>
      {/* <footer className="bg-green-900 text-white py-2 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-gray-300">
            © 2024 AyurSutra. All Rights Reserved.
          </p>
        </div>
      </footer> */}
      <Footer />
    </div>
  );
};

export default Home;
