import React from "react";

export default function PricingSection() {
  return (
    <section className="py-16 ">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Make the wise decision for your
            <br /> Portfolio Website
          </h2>
          <p className="text-gray-600 mt-4">
            Choose from our affordable 3 packages
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Basic Plan */}
          <div className="card bg-white shadow-lg border rounded-lg p-8 text-center">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Static</h3>
            <p className="text-4xl font-bold text-gray-900 mb-4">4,999 BDT</p>
            <p className="text-gray-600 mb-6">
              Best for Static Website. You Can Deploy this website with any free
              deployment servers
            </p>
            <button
              className="mt-[26px] btn btn-outline hover:bg-green-300 hover:text-black border-green-200 w-full"
              onClick={() =>
                (window.location.href = "mailto:codewithsifat4@gmail.com")
              }
            >
              Get Started
            </button>
            <div className="text-left mt-6">
              <p className="font-bold text-gray-800 mb-2">What's included:</p>
              <ul className="text-gray-600 space-y-2">
                <li>React Js JavaScript library</li>
                <li>Best for Students, Freelancers</li>
                <li>Made with TailwindCSS</li>
              </ul>
            </div>
          </div>

          {/* Premium Plan */}
          <div className="card bg-gradient-to-br from-green-100 to-gray-100 shadow-lg border border-yellow-200 rounded-lg p-8 text-center relative">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Semi-Dynamic
            </h3>
            <p className="text-4xl font-bold text-gray-900 mb-4">7,999 BDT</p>
            <p className="text-gray-600 mb-6">
              Best for Semi-Dynamic Website. You Can Deploy this website with
              any free deployment servers. Maximum Information will come from
              Backend server
            </p>
            <button
              className="btn btn-primary bg-gradient-to-r from-teal-400 to-teal-600 border-none text-white w-full hover:bg-green-200"
              onClick={() =>
                (window.location.href = "mailto:codewithsifat4@gmail.com")
              }
            >
              Get Started
            </button>
            <div className="text-left mt-6">
              <p className="font-bold text-gray-800 mb-2">What's included:</p>
              <ul className="text-gray-600 space-y-2">
                <li>React Js, NPM libraries</li>
                <li>Best for Developers, Students</li>
                <li>Made with TailwindCSS</li>
                <li>Premium Support</li>
                <li>Future Updates</li>
              </ul>
            </div>
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-pink-200 to-green-200 opacity-20 blur-lg rounded-lg -z-10"></div>
          </div>

          {/* Enterprise Plan */}
          <div className="card bg-white shadow-lg border rounded-lg p-8 text-center">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Full-Dynamic
            </h3>
            <p className="text-4xl font-bold text-gray-900 mb-4">9,999 BDT</p>
            <p className="text-gray-600 mb-6">
              Best for Dynamic website. You Can Deploy this website with any
              free deployment servers. Maximum Information will come from
              Backend server
            </p>
            <button
              className="btn btn-outline hover:bg-green-300 hover:text-black border-green-200 w-full"
              onClick={() =>
                (window.location.href = "mailto:codewithsifat4@gmail.com")
              }
            >
              Get Started
            </button>
            <div className="text-left mt-6">
              <p className="font-bold text-gray-800 mb-2">What's included:</p>
              <ul className="text-gray-600 space-y-2">
                <li>React Js, NPM libraries, Animations</li>
                <li>Best for Developers, Students</li>
                <li>Made with TailwindCSS</li>
                <li>Fully Editable</li>
                <li>Deployment Support</li>
                <li>Premium Support</li>
                <li>Future Updates</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
