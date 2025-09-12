import React from "react";
import { FaUser } from "react-icons/fa";

const Testimonials = () => {
  return (
    <div className="py-16 px-4 bg-gradient-to-br from-green-50 to-green-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Pateints Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real stories from people who found healing through AyurSutra
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {/**testiomonial 1 */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center">
                <FaUser className="text-green-800 font-semibold" />
              </div>
              <div className="ml-4">
                <h4 className="font-semibold text-gray-900">Hariom</h4>
                <p className="text-sm text-gray-600">Gaya</p>
              </div>
            </div>
            <p className="text-gray-700 italic mb-4">
              "AyurSutra helped me manage my chronic stress through personalized
              Panchakarma treatments. The progress tracking kept me motivated!"
            </p>
            <div className="flex text-yellow-400">★★★★★</div>
          </div>
          {/**testiomonial 2 */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center">
                <FaUser className="text-green-800 font-semibold" />
              </div>
              <div className="ml-4">
                <h4 className="font-semibold text-gray-900">Binayak</h4>
                <p className="text-sm text-gray-600">San Francisco</p>
              </div>
            </div>
            <p className="text-gray-700 italic mb-4">
              "AyurSutra helped me manage my chronic stress through personalized
              Panchakarma treatments. The progress tracking kept me motivated!"
            </p>
            <div className="flex text-yellow-400">★★★★★</div>
          </div>
          {/**testiomonial 3 */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center">
                <FaUser className="text-green-800 font-semibold" />
              </div>
              <div className="ml-4">
                <h4 className="font-semibold text-gray-900">Nimit</h4>
                <p className="text-sm text-gray-600">Rajasthan</p>
              </div>
            </div>
            <p className="text-gray-700 italic mb-4">
              "AyurSutra helped me manage my chronic stress through personalized
              Panchakarma treatments. The progress tracking kept me motivated!"
            </p>
            <div className="flex text-yellow-400">★★★★★</div>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mt-8">
          {/**testiomonial 1 */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center">
                <FaUser className="text-green-800 font-semibold" />
              </div>
              <div className="ml-4">
                <h4 className="font-semibold text-gray-900">Pradip </h4>
                <p className="text-sm text-gray-600">kolkata</p>
              </div>
            </div>
            <p className="text-gray-700 italic mb-4">
              "AyurSutra helped me manage my chronic stress through personalized
              Panchakarma treatments. The progress tracking kept me motivated!"
            </p>
            <div className="flex text-yellow-400">★★★★★</div>
          </div>
          {/**testiomonial 2 */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center">
                <FaUser className="text-green-800 font-semibold" />
              </div>
              <div className="ml-4">
                <h4 className="font-semibold text-gray-900">Tuhit</h4>
                <p className="text-sm text-gray-600">Mumbai</p>
              </div>
            </div>
            <p className="text-gray-700 italic mb-4">
              "AyurSutra helped me manage my chronic stress through personalized
              Panchakarma treatments. The progress tracking kept me motivated!"
            </p>
            <div className="flex text-yellow-400">★★★★★</div>
          </div>
          {/**testiomonial 3 */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center">
                <FaUser className="text-green-800 font-semibold" />
              </div>
              <div className="ml-4">
                <h4 className="font-semibold text-gray-900">Nimit</h4>
                <p className="text-sm text-gray-600">Gujrat</p>
              </div>
            </div>
            <p className="text-gray-700 italic mb-4">
              "AyurSutra helped me manage my chronic stress through personalized
              Panchakarma treatments. The progress tracking kept me motivated!"
            </p>
            <div className="flex text-yellow-400">★★★★★</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
