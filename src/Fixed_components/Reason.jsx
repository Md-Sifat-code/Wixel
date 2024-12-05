import React, { useEffect } from "react";
import { FaLaptopCode } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CgWebsite } from "react-icons/cg";
import { MdDynamicFeed } from "react-icons/md";
import { GiTakeMyMoney } from "react-icons/gi";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

export default function Reason() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Animation runs only once
    });
  }, []);

  return (
    <section>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 mt-44 px-4 md:px-0 gap-6">
        <div className="flex flex-col justify-center items-start">
          <h1 className="font-bold text-5xl text-black">
            Why <span className="text-[#1a9096]">Wixel</span> Website
            <br /> Service?
          </h1>
          <p className="mt-3 w-10 border-4 border-[#1a9096] bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-border"></p>
          <p className="w-[80%] mt-4">
            Choose Wixel for innovative, tailor-made website solutions that
            combine cutting-edge design, seamless functionality, and
            unparalleled customer support. Elevate your online presence with our
            expert team, ensuring your brand stands out, engages audiences, and
            achieves measurable results effortlessly.
          </p>
          <Link className="btn btn-primary px-8 sm:px-10 md:px-12 text-white font-bold border-none rounded-none mt-4 bg-gradient-to-r from-teal-400 to-teal-600">
            Discover More
          </Link>
        </div>
        {/* cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 ">
          <div className="grid grid-rows-3">
            <div
              className="max-w-xs w-full bg-white rounded-lg shadow-lg p-6 m-4"
              data-aos="fade-up" // AOS animation
            >
              <div className="flex justify-center mb-4">
                <FaLaptopCode className="text-4xl text-teal-500" />
              </div>
              <h2 className="text-xl font-semibold text-center text-black mb-4">
                Easy to implement and use
              </h2>
              <p className="text-sm text-gray-600 text-center">
                We will use React js, Tailwind, and every new feature in your
                website to make it easy to implement.
              </p>
            </div>
            <div
              className="max-w-xs w-full bg-white rounded-lg shadow-lg p-6 m-4"
              data-aos="fade-up" // AOS animation
              data-aos-delay="200" // Delay for staggered animation
            >
              <div className="flex justify-center mb-4">
                <MdDynamicFeed className="text-4xl text-teal-500" />
              </div>
              <h2 className="text-xl font-semibold text-center text-black mb-4">
                Create Dynamic Portfolio
              </h2>
              <p className="text-sm text-gray-600 text-center">
                Make your dynamic portfolio with us. Select your template and
                share it with us to build that for you.
              </p>
            </div>
            <div></div>
          </div>
          <div className="grid grid-rows-3">
            <div></div>
            <div
              className="max-w-xs w-full bg-white rounded-lg shadow-lg p-6 m-4"
              data-aos="fade-up" // AOS animation
              data-aos-delay="400" // Delay for staggered animation
            >
              <div className="flex justify-center mb-4">
                <CgWebsite className="text-4xl text-teal-500" />
              </div>
              <h2 className="text-xl font-semibold text-center text-black mb-4">
                Build Custom Website
              </h2>
              <p className="text-sm text-gray-600 text-center">
                Share your design, idea, and needs. We are here to build a
                website for you.
              </p>
            </div>
            <div
              className="max-w-xs w-full bg-white rounded-lg shadow-lg p-6 m-4"
              data-aos="fade-up" // AOS animation
              data-aos-delay="600" // Delay for staggered animation
            >
              <div className="flex justify-center mb-4">
                <GiTakeMyMoney className="text-4xl text-teal-500" />
              </div>
              <h2 className="text-xl font-semibold text-center text-black mb-4">
                Low Cost
              </h2>
              <p className="text-sm text-gray-600 text-center">
                We will provide our best service at a low cost. Feel free to
                share your ideas, and we will try our best to support you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
