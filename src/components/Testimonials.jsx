import React from "react";
import { FaUser } from "react-icons/fa";

const Testimonials = () => {
  return (
    <div className="py-16 px-4 bg-gradient-to-br from-green-50 to-green-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Patients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real stories from people who found healing through AyurSutra
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {/**testimonial 1 */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center">
                <FaUser className="text-green-800 font-semibold" />
              </div>
              <div className="ml-4">
                <h4 className="font-semibold text-gray-900">
                  Rajesh Kumar Sharma
                </h4>
                <p className="text-sm text-gray-600">Gaya, Bihar</p>
              </div>
            </div>
            <p className="text-gray-700 italic mb-4">
              "AyurSutra helped me manage my chronic stress through personalized
              Panchakarma treatments. The progress tracking kept me motivated!"
            </p>
            <div className="flex text-yellow-400">★★★★★</div>
          </div>
          {/**testimonial 2 */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center">
                <FaUser className="text-green-800 font-semibold" />
              </div>
              <div className="ml-4">
                <h4 className="font-semibold text-gray-900">Priya Agarwal</h4>
                <p className="text-sm text-gray-600">Mumbai, Maharashtra</p>
              </div>
            </div>
            <p className="text-gray-700 italic mb-4">
              "The holistic approach to wellness at AyurSutra transformed my
              health completely. I feel more energetic and balanced than ever
              before!"
            </p>
            <div className="flex text-yellow-400">★★★★★</div>
          </div>
          {/**testimonial 3 */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center">
                <FaUser className="text-green-800 font-semibold" />
              </div>
              <div className="ml-4">
                <h4 className="font-semibold text-gray-900">
                  Arjun Singh Rathore
                </h4>
                <p className="text-sm text-gray-600">Jaipur, Rajasthan</p>
              </div>
            </div>
            <p className="text-gray-700 italic mb-4">
              "My digestive issues were completely resolved through their
              personalized treatment plan. The doctors are truly knowledgeable!"
            </p>
            <div className="flex text-yellow-400">★★★★★</div>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mt-8">
          {/**testimonial 4 */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center">
                <FaUser className="text-green-800 font-semibold" />
              </div>
              <div className="ml-4">
                <h4 className="font-semibold text-gray-900">Meera Patel</h4>
                <p className="text-sm text-gray-600">Kolkata, West Bengal</p>
              </div>
            </div>
            <p className="text-gray-700 italic mb-4">
              "After years of dealing with chronic pain, AyurSutra's traditional
              treatments gave me the relief I was searching for. Highly
              recommended!"
            </p>
            <div className="flex text-yellow-400">★★★★★</div>
          </div>
          {/**testimonial 5 */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center">
                <FaUser className="text-green-800 font-semibold" />
              </div>
              <div className="ml-4">
                <h4 className="font-semibold text-gray-900">Vikash Mishra</h4>
                <p className="text-sm text-gray-600">Pune, Maharashtra</p>
              </div>
            </div>
            <p className="text-gray-700 italic mb-4">
              "The combination of ancient wisdom and modern technology at
              AyurSutra is remarkable. My sleep quality has improved
              dramatically!"
            </p>
            <div className="flex text-yellow-400">★★★★★</div>
          </div>
          {/**testimonial 6 */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center">
                <FaUser className="text-green-800 font-semibold" />
              </div>
              <div className="ml-4">
                <h4 className="font-semibold text-gray-900">Kavya Reddy</h4>
                <p className="text-sm text-gray-600">Hyderabad, Telangana</p>
              </div>
            </div>
            <p className="text-gray-700 italic mb-4">
              "The personalized diet and lifestyle recommendations helped me
              achieve optimal health naturally. Thank you AyurSutra team!"
            </p>
            <div className="flex text-yellow-400">★★★★★</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
