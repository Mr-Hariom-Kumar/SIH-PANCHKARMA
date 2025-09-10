import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Contact
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {/* Location Card */}
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-500">
            <div className="flex items-center mb-3">
              <MapPin className="w-6 h-6 text-gray-700 mr-3" />
              <h4 className="text-lg font-semibold text-gray-800">
                Location Address
              </h4>
            </div>
            <p className="text-gray-600 text-sm">
              Lake town, Kolkata - 700091
              <br />
              West Bengal,India
            </p>
          </div>
          {/* Phone Card */}
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-500">
            <div className="flex items-center mb-3">
              <Phone className="w-6 h-6 text-gray-700 mr-3" />
              <h4 className="text-lg font-semibold text-gray-800">
                Phone Number
              </h4>
            </div>
            <p className="text-gray-600 text-sm">+91 89103 98973</p>
          </div>
          {/* Email Card */}
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-500">
            <div className="flex items-center mb-3">
              <Mail className="w-6 h-6 text-gray-700 mr-3" />
              <h4 className="text-lg font-semibold text-gray-800">
                Email Address
              </h4>
            </div>
            <p className="text-gray-600 text-sm">ayursutra@mail.com</p>
          </div>
        </div>
        {/* Contact Form Section */}
        <form className="bg-gray-200 p-8 rounded-lg max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Need More Information? Get in Touch
            </h2>
            <p className="text-gray-600">
              Have questions about our Ayurvedic treatments or need personalized
              guidance? We're here to help you on your journey to holistic
              wellness.
            </p>
          </div>
          <div className="space-y-4">
            <div>
              <label className="text-green-800 font-semibold block mb-1">
                Name
              </label>
              <input
                type="text"
                placeholder="enter your name.."
                className="border-2 border-gray-500 w-full bg-white px-3 py-2 rounded focus:outline-none focus:border-orange-500"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-green-800 font-semibold block mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="enter your email.."
                  className="border-2 border-gray-500 w-full bg-white px-3 py-2 rounded focus:outline-none focus:border-orange-500"
                />
              </div>
              <div>
                <label className="text-green-800 font-semibold block mb-1">
                  Mobile No.
                </label>
                <input
                  type="tel"
                  placeholder="enter your mobile no.."
                  className="border-2 border-gray-500 w-full bg-white px-3 py-2 rounded focus:outline-none focus:border-orange-500"
                />
              </div>
            </div>
            <div>
              <label className="text-green-800 font-semibold block mb-1">
                Message
              </label>
              <textarea
                placeholder="type your message here.."
                rows="5"
                className="border-2 border-gray-500 w-full bg-white px-3 py-2 rounded focus:outline-none focus:border-orange-500 resize-none"
              />
            </div>
            <div className="pt-4">
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
                Send Messages
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
