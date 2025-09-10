import React from "react";

const About = () => {
  return (
    <div className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About AyurSutra
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Your trusted companion in the journey of holistic healing through
            Ayurveda
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-green-800">
              Our Mission
            </h3>
            <p className="text-gray-700 leading-relaxed">
              AyurSutra bridges ancient Ayurvedic wisdom with modern technology
              to provide personalized healthcare solutions. We believe in
              treating the root cause, not just the symptoms, through
              time-tested natural therapies.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our platform connects patients with certified Ayurvedic
              practitioners, making holistic healing accessible, trackable, and
              effective in today's fast-paced world.
            </p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl">
            <h3 className="text-2xl font-semibold text-green-800 mb-4">
              Why Choose Us?
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                Certified Ayurvedic practitioners
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                Personalized treatment plans
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                Progress tracking & monitoring
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                24/7 support & guidance
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
