import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CgWebsite } from "react-icons/cg";
import { MdDynamicFeed } from "react-icons/md";
import { GiTakeMyMoney } from "react-icons/gi";
export default function Reason() {
  return (
    <section>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 mt-44 px-4 md:px-0  gap-6">
        <div className="flex flex-col justify-center items-start">
          <h1 className="font-bold text-5xl text-black">
            Why <span className="text-[#1a9096]">Wixel</span> Website<br></br>{" "}
            Service?
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
          <div className="grid grid-rows-3  ">
            <div className="max-w-xs w-full bg-white rounded-lg shadow-lg p-6 m-4">
              <div className="flex justify-center mb-4">
                <FaLaptopCode className="text-4xl text-teal-500" /> {/* Icon */}
              </div>
              <h2 className="text-xl font-semibold text-center text-black mb-4">
                Easy to implement and use
              </h2>
              <p className="text-sm text-gray-600 text-center">
                We Will use React js, Tailwind and every new features in your
                website to make it Easy to implement
              </p>
            </div>
            <div className="max-w-xs w-full bg-white rounded-lg shadow-lg p-6 m-4">
              <div className="flex justify-center mb-4">
                <MdDynamicFeed className="text-4xl text-teal-500" />{" "}
                {/* Icon */}
              </div>
              <h2 className="text-xl font-semibold text-center text-black mb-4">
                Create Dynamic Protfolio
              </h2>
              <p className="text-sm text-gray-600 text-center">
                Make Your Dynamic Protfolio With us. Select your template and
                share us to Build That For you
              </p>
            </div>
            <div></div>
          </div>
          <div className="grid grid-rows-3  ">
            <div></div>
            <div className="max-w-xs w-full bg-white rounded-lg shadow-lg p-6 m-4">
              <div className="flex justify-center mb-4">
                <CgWebsite className="text-4xl text-teal-500" /> {/* Icon */}
              </div>
              <h2 className="text-xl font-semibold text-center text-black mb-4">
                Build Custom Website{" "}
              </h2>
              <p className="text-sm text-gray-600 text-center">
                Share Your Design, Idea, your needs . We are here to Build
                Website For You.
              </p>
            </div>
            <div className="max-w-xs w-full bg-white rounded-lg shadow-lg p-6 m-4">
              <div className="flex justify-center mb-4">
                <GiTakeMyMoney className="text-4xl text-teal-500" />{" "}
                {/* Icon */}
              </div>
              <h2 className="text-xl font-semibold text-center text-black mb-4">
                Low Cost
              </h2>
              <p className="text-sm text-gray-600 text-center">
                We Will PRovide our Best Service in Low cost. Fell free to Share
                your ideas. we will Try our best to support
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}