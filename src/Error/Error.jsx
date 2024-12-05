import React from "react";
import error from "/assets/erre.png";
import { Link } from "react-router-dom";
export default function Error() {
  return (
    <section>
      <div className="min-h-screen bg-black grid grid-cols-1 md:grid-cols-2">
        <div className="flex justify-center items-center ">
          <img src={error} alt="" />
        </div>
        <div className="flex flex-col justify-center items-center md:items-start">
          <p className="font-bold text-7xl bo text-gray-100">Oopps!</p>
          <p className="mt-3 text-gray-200 font-normal">
            We coundn't fnd the page for you were looking for
          </p>
          <Link
            className="btn btn-outline mt-4 bg-white text-black font-semibold rounded-md"
            to={"/"}
          >
            Go back
          </Link>
        </div>
      </div>
    </section>
  );
}
