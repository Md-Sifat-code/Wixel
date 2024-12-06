import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa"; // Import icons
import logo from "/assets/logos.png";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = async () => {
    if (!email || !email.includes("@gmail.com")) {
      setMessage("Please enter a valid Gmail address.");
      return;
    }

    const response = await fetch("http://localhost:5000/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    if (response.ok) {
      setMessage("Thank you for subscribing!");
    } else {
      setMessage("There was an issue with the subscription.");
    }
  };

  return (
    <section className="py-10 bg-gray-50 sm:pt-16 lg:pt-24">
      <div className=" container px-4 mx-auto sm:px-6  w-full">
        <div className="grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-16 gap-x-12">
          <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
            <img className="w-[50px] h-[50px]" src={logo} alt="Logo" />
            <p className="text-base leading-relaxed text-gray-600 mt-7">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </p>

            <ul className="flex items-center space-x-3 mt-9">
              <li>
                <a
                  href="#"
                  title="Facebook"
                  className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600 focus:bg-blue-600"
                >
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title="Twitter"
                  className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600 focus:bg-blue-600"
                >
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title="LinkedIn"
                  className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600 focus:bg-blue-600"
                >
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title="Instagram"
                  className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600 focus:bg-blue-600"
                >
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-2">
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
              Company
            </p>

            <ul className="mt-6 space-y-4">
              <li>
                <a
                  href="#"
                  title="Home"
                  className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title="About US"
                  className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  About US
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title="Contact"
                  className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Subscribe Section */}
          <div className="col-span-2">
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
              Subscribe
            </p>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your Gmail"
              className="p-2 border border-gray-300 rounded-md mt-6 w-full"
            />
            <button
              onClick={handleSubscribe}
              className="px-6 py-2 bg-gradient-to-r from-teal-400 to-teal-600 text-white font-bold rounded-md mt-4"
            >
              Subscribe
            </button>
            {message && (
              <p className="text-center text-gray-700 mt-4">{message}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
