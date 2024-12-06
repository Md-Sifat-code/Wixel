import React from "react";
import TypingEffect from "react-typing-effect"; // Import the typing effect library
import hero from "/assets/dadasd.png";
import { Link, Element } from "react-scroll"; // Import `Link` and `Element` from react-scroll

export default function Hero() {
  return (
    <section>
      <div className="container mx-auto grid grid-cols-1 px-4 lg:px-0 md:grid-cols-2 mt-10 gap-6">
        {/* Description */}
        <div className="flex flex-col justify-center items-start gap-3 text-center md:text-left">
          <h1 className="font-bold text-2xl  lg:text-5xl text-black">
            <TypingEffect
              text={["A Website Service Company", "Wixel"]} // Combined texts for the typing effect
              speed={100} // Typing speed
              eraseSpeed={50} // Erasing speed
              eraseDelay={2000} // Delay before erasing
              typingDelay={500} // Delay before typing starts
            />
          </h1>
          <p className="w-10 border-4 border-[#1a9096] bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-border"></p>

          <p className="text-sm sm:text-base lg:text-lg leading-6 sm:leading-7">
            We craft bespoke portfolio websites tailored to showcase your unique
            talents and achievements. Combining sleek design with seamless
            functionality, our expert team ensures your online presence stands
            out, impresses clients, and drives professional opportunities
            effortlessly.
          </p>

          {/* Scroll to Reason Section */}
          <Link
            to="reason-section" // The target ID to scroll to
            smooth={true} // Enable smooth scrolling
            duration={1200} // Duration of the scroll
            className="btn btn-primary px-8 sm:px-10 md:px-12 text-white font-bold border-none rounded-none mt-4 bg-gradient-to-r from-teal-400 to-teal-600"
          >
            Explore
          </Link>
        </div>
        {/* Background */}
        <div className="flex justify-center items-center">
          <img
            className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl"
            src={hero}
            alt="Hero"
          />
        </div>
      </div>
    </section>
  );
}
