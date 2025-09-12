import React, { useState } from "react";
import { Mail, Lock, User, Leaf } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [role, setRole] = useState("patient");
  const navigate = useNavigate();

  // Dummy authentication handler
  const handleAuth = (e) => {
    e.preventDefault();

    // You can later replace this with actual API login/signup
    if (isLogin) {
      // Login
      if (role === "patient") navigate("/home");
      else navigate("/practitioner-dashboard");
    } else {
      // Signup
      if (role === "patient") navigate("/home");
      else navigate("/practitioner-dashboard");
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat bg-fixed w-full relative"
      style={{ backgroundImage: "url('/images/ayurved.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row min-h-screen items-center justify-center px-6 md:px-12 lg:px-20 gap-12 py-8">
        {/* Left Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900">
            Welcome to <span className="text-green-900">AyurSutra</span>
          </h1>
          <p className="text-gray-700 mt-4 text-lg">
            Your comprehensive platform for Panchakarma therapy scheduling,
            patient management, and holistic wellness tracking.
          </p>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div className="w-full max-w-md bg-white/90 backdrop-blur-md shadow-2xl rounded-3xl p-6 md:p-8 my-8">
            {/* Logo */}
            <div className="flex justify-center mb-6">
              <div className="bg-green-100 p-4 rounded-full">
                <Leaf className="h-8 w-8 text-green-700" />
              </div>
            </div>

            {/* Title */}
            <h1 className="text-2xl font-bold text-green-800 text-center">
              {isLogin ? "Welcome Back" : "Join AyurSutra"}
            </h1>
            <p className="text-green-600 text-center mt-1 text-sm">
              {isLogin
                ? "Your gateway to holistic wellness and healing"
                : "Create your account to start your wellness journey"}
            </p>

            {/* Role Switch */}
            <div className="flex mt-6 bg-green-50 rounded-lg p-1">
              {["patient", "practitioner"].map((r) => (
                <button
                  key={r}
                  type="button"
                  className={`flex-1 py-2 px-3 rounded-lg font-medium text-center transition-all ${
                    role === r
                      ? "bg-white shadow text-green-800"
                      : "text-green-600 hover:text-green-700 transition-all duration-150 transform active:scale-95 active:bg-green-100 cursor-pointer"
                  }`}
                  onClick={() => setRole(r)}
                >
                  {r.charAt(0).toUpperCase() + r.slice(1)}
                </button>
              ))}
            </div>

            {/* Form */}
            <form className="mt-6 space-y-4" onSubmit={handleAuth}>
              {!isLogin && (
                <div>
                  <label className="block text-sm font-medium text-green-700 mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-600 h-5 w-5" />
                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                      required
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-green-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-600 h-5 w-5" />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-green-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-600 h-5 w-5" />
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              {!isLogin && (
                <div>
                  <label className="block text-sm font-medium text-green-700 mb-2">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-600 h-5 w-5" />
                    <input
                      type="password"
                      placeholder="Confirm your password"
                      className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                      required
                    />
                  </div>
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-green-800 text-white py-3 rounded-lg font-semibold shadow hover:bg-green-700 transition-colors duration-200 cursor-pointer"
              >
                {isLogin ? "Sign In" : "Sign Up"}
              </button>
            </form>

            {/* Switch Login / Signup */}
            <p className="text-sm text-center text-green-600 mt-6">
              {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
              <span
                onClick={() => setIsLogin(!isLogin)}
                className="font-semibold cursor-pointer hover:underline text-green-700"
              >
                {isLogin ? "Sign Up" : "Sign In"}
              </span>
            </p>

            {/* Forgot password (only in login mode) */}
            {isLogin && (
              <p className="text-sm text-center text-green-600 mt-3 hover:underline cursor-pointer">
                Forgot your password?
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
