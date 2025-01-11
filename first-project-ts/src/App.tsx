import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="fixed w-full bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
                Logo
              </span>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex space-x-8">
              <a
                href="#about"
                className="text-gray-600 hover:text-gray-900 transition duration-200 text-sm font-medium"
              >
                About
              </a>
              <a
                href="#testimonials"
                className="text-gray-600 hover:text-gray-900 transition duration-200 text-sm font-medium"
              >
                Testimonials
              </a>
              <a
                href="#why"
                className="text-gray-600 hover:text-gray-900 transition duration-200 text-sm font-medium"
              >
                Our Why
              </a>
            </div>

            {/* Auth Buttons */}
            <div className="flex items-center space-x-4">
              <button className="text-gray-600 hover:text-gray-900 transition duration-200 text-sm font-medium">
                Log in
              </button>
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full hover:from-purple-700 hover:to-pink-700 transition duration-200 text-sm font-medium shadow-md">
                Sign up
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            From commits to career growth—{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              on autopilot
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            Automatically track, quantify, and showcase your engineering impact—without lifting a finger.
          </p>
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full hover:from-purple-700 hover:to-pink-700 transition transform hover:scale-105 shadow-lg text-lg font-medium">
            Try now
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
