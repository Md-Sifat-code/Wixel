import React from "react";
import logo from "/assets/logos.png";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <section>
      <div className="container mx-auto flex flex-col gap-4 md:gap-0 md:flex-row justify-between items-center mt-6">
        {/* Logo */}
        <div>
          <img className="w-[100px] h-[100px]" src={logo} alt="Logo" />
        </div>
        {/* Navigation */}
        <div className="flex flex-row gap-12">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-teal-600 font-bold"
                : "text-gray-600 hover:text-teal-600"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-teal-600 font-bold"
                : "text-gray-600 hover:text-teal-600"
            }
          >
            About Us
          </NavLink>
        </div>
        {/* Login */}
        <div>
          <Link
            to="/login"
            className="btn btn-primary border-none px-6 text-white bg-gradient-to-r from-teal-400 to-teal-600"
          >
            SIGN IN
          </Link>
        </div>
      </div>
    </section>
  );
}
