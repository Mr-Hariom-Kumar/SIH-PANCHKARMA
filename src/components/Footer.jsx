import React from "react";
import { assets } from "../assets/assets";
const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* left */}
        <div>
          <img className="mb-5 w-40" src={assets.logo2} alt="" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6 ">
            AyurSutra is your trusted partner in holistic wellness, combining
            5000-year-old Ayurvedic principles with cutting-edge technology. We
            offer personalized treatment plans, authentic Panchakarma therapies,
            and expert guidance to help you achieve optimal health naturally.
            Discover the path to balanced living with AyurSutra.
          </p>
        </div>
        {/* center */}
        <div>
          <p className="text-sm font-medium mb-5">COMPANY</p>
          <ul className="text-gray-600 flex flex-col gap-2">
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        {/* right */}
        <div>
          <p className="text-sm font-medium mb-5">GET IN TOUCH</p>
          <ul className="text-gray-600 flex flex-col gap-2">
            <li>+91 123-456-7890</li>
            <li>ayursutra@gmail.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2025@ AyurSutra-All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
