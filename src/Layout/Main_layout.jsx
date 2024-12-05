import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Fixed_components/Navbar";
import Footer from "../Fixed_components/Footer";

export default function Main_layout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
