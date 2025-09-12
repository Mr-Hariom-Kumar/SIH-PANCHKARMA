import React, { useState } from "react";
import {
  Calendar,
  Clock,
  User,
  Phone,
  Mail,
  FileText,
  Heart,
  CheckCircle,
  Star,
  Leaf,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const BookAppointment = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    treatment: "",
    concerns: "",
    experience: "",
  });
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const treatments = [
    {
      id: "abhyanga",
      name: "Abhyanga",
      desc: "Full body oil massage",
      duration: "60 min",
      price: "₹2,500",
    },
    {
      id: "shirodhara",
      name: "Shirodhara",
      desc: "Oil pouring therapy",
      duration: "45 min",
      price: "₹3,000",
    },
    {
      id: "panchakarma",
      name: "Complete Panchakarma",
      desc: "Full detox program",
      duration: "90 min",
      price: "₹5,000",
    },
    {
      id: "nasya",
      name: "Nasya",
      desc: "Nasal cleansing therapy",
      duration: "30 min",
      price: "₹1,500",
    },
    {
      id: "basti",
      name: "Basti",
      desc: "Medicated enema therapy",
      duration: "45 min",
      price: "₹2,000",
    },
    {
      id: "udvartana",
      name: "Udvartana",
      desc: "Herbal powder massage",
      duration: "60 min",
      price: "₹2,200",
    },
  ];

  const timeSlots = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
    "06:00 PM",
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-teal-50 to-emerald-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full text-center transform animate-pulse">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Appointment Booked!
          </h2>
          <p className="text-gray-600 mb-6">
            Thank you for choosing Panchkarma. We'll contact you shortly to
            confirm your appointment.
          </p>
          <div className="flex justify-center space-x-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star
                key={i}
                className="w-6 h-6 fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-teal-50 to-emerald-100">
      {/* Header */}
      {/* <div className="bg-white/80 backdrop-blur-sm border-b border-green-100 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-teal-600 rounded-full flex items-center justify-center">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">PANCHKARMA</h1>
                <p className="text-sm text-green-600">
                  Holistic Healing Center
                </p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-6 text-sm text-gray-600">
              <span>📞 +91 98765 43210</span>
              <span>✉️ info@panchkarma.com</span>
            </div>
          </div>
        </div>
      </div> */}
      <button
        onClick={() => navigate("/home")}
        className="fixed top-4 left-4  cursor-pointer flex items-center gap-1 px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 transition z-50"
      >
        <span className="text-sm">Home</span>
      </button>
      <button
        onClick={() => navigate("/")}
        className="fixed top-4 right-4 cursor-pointer flex items-center gap-1 px-4 py-2 bg-red-400 text-white rounded hover:bg-red-700 transition z-50"
      >
        <span className="text-sm">Logout</span>
      </button>
      <div className="max-w-6xl mx-auto p-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent mb-4">
            Book Your Appointment
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Experience authentic Ayurvedic healing with our certified
            practitioners. Your journey to wellness starts here.
          </p>
          <div className="flex justify-center mt-6 space-x-8 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span>Certified Practitioners</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
              <span>Authentic Treatments</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
              <span>Peaceful Environment</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Treatment Selection */}
          <div className="lg:col-span-1">
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl p-6 border border-green-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <Heart className="w-6 h-6 text-green-600 mr-2" />
                Our Treatments
              </h3>
              <div className="space-y-4">
                {treatments.map((treatment) => (
                  <div
                    key={treatment.id}
                    className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                      formData.treatment === treatment.id
                        ? "border-green-500 bg-green-50 transform scale-105"
                        : "border-gray-200 bg-white hover:border-green-300 hover:bg-green-50"
                    }`}
                    onClick={() =>
                      setFormData({ ...formData, treatment: treatment.id })
                    }
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold text-gray-800">
                        {treatment.name}
                      </h4>
                      <span className="text-green-600 font-bold">
                        {treatment.price}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mb-1">
                      {treatment.desc}
                    </p>
                    <p className="text-green-500 text-sm font-medium">
                      {treatment.duration}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div className="lg:col-span-2">
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-green-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Book Your Session
              </h3>

              <div className="space-y-6">
                {/* Personal Information */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative">
                    <div className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </div>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 bg-white/80"
                        placeholder="Enter your full name"
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <div className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </div>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 bg-white/80"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </div>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 bg-white/80"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                {/* Date and Time */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative">
                    <div className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Date *
                    </div>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        min={new Date().toISOString().split("T")[0]}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 bg-white/80"
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <div className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Time *
                    </div>
                    <div className="relative">
                      <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <select
                        name="time"
                        value={formData.time}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 bg-white/80"
                      >
                        <option value="">Select time slot</option>
                        {timeSlots.map((slot) => (
                          <option key={slot} value={slot}>
                            {slot}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Health Concerns */}
                <div className="relative">
                  <div className="block text-sm font-medium text-gray-700 mb-2">
                    Health Concerns / Symptoms
                  </div>
                  <div className="relative">
                    <FileText className="absolute left-3 top-4 text-gray-400 w-5 h-5" />
                    <textarea
                      name="concerns"
                      value={formData.concerns}
                      onChange={handleInputChange}
                      rows="4"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 bg-white/80"
                      placeholder="Please describe any health concerns, symptoms, or specific areas you'd like us to focus on..."
                    />
                  </div>
                </div>

                {/* Experience Level */}
                <div className="relative">
                  <div className="block text-sm font-medium text-gray-700 mb-2">
                    Previous Ayurvedic Experience
                  </div>
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 bg-white/80"
                  >
                    <option value="">Select your experience level</option>
                    <option value="first-time">
                      First time trying Ayurveda
                    </option>
                    <option value="beginner">
                      Some experience (1-2 sessions)
                    </option>
                    <option value="intermediate">
                      Moderate experience (3-10 sessions)
                    </option>
                    <option value="experienced">
                      Very experienced (10+ sessions)
                    </option>
                  </select>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    onClick={handleSubmit}
                    className="w-full bg-gradient-to-r from-green-600 to-teal-600 text-white font-bold py-4 px-8 rounded-xl hover:from-green-700 hover:to-teal-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Book My Appointment
                  </button>
                  <p className="text-center text-sm text-gray-600 mt-3">
                    We'll contact you within 24 hours to confirm your
                    appointment
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-16 bg-white/50 backdrop-blur-sm rounded-3xl p-8 border border-green-100">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Why Choose Panchkarma?
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                icon: "🧘‍♀️",
                title: "Expert Practitioners",
                desc: "Certified Ayurvedic doctors with 10+ years experience",
              },
              {
                icon: "🌿",
                title: "Natural Healing",
                desc: "Authentic herbs and oils sourced from trusted suppliers",
              },
              {
                icon: "🏛️",
                title: "Serene Environment",
                desc: "Peaceful atmosphere designed for deep relaxation",
              },
              {
                icon: "⭐",
                title: "Proven Results",
                desc: "500+ satisfied clients with lasting wellness improvements",
              },
            ].map((benefit, index) => (
              <div key={index} className="text-center p-4">
                <div className="text-4xl mb-3">{benefit.icon}</div>
                <h4 className="font-bold text-gray-800 mb-2">
                  {benefit.title}
                </h4>
                <p className="text-sm text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;
