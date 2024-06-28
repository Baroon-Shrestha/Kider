import { motion } from "framer-motion";
import React from "react";
import { FaBookReader, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const nav = {};
export default function SideNav() {
  return (
    <div className="flex flex-col bg-gray-700  h-screen w-1/6 fixed left-0 top-0 shadow-2xl">
      <Link to="/dashboard">
        <div className="text-4xl flex items-center gap-4 text-primary p-4">
          <FaBookReader />
          <div className="title">Kider</div>
        </div>
      </Link>
      <nav className="flex flex-col p-4 pl-8 gap-8">
        <Link to="/">
          <div className="text-2xl text-white hover:text-primary">
            Back to Home
          </div>
        </Link>
        <Link to="/dashboard">
          <div className="text-2xl text-white hover:text-primary">
            Dashboard Home
          </div>
        </Link>
        <Link to="/dashboard-class">
          <div className="text-2xl text-white hover:text-primary">Classes</div>
        </Link>
        <Link to="/dashboard-teacher">
          <div className="text-2xl text-white hover:text-primary">Teachers</div>
        </Link>
        <Link to="/dashboard-review">
          <div className="text-2xl text-white hover:text-primary">Reviews</div>
        </Link>
      </nav>
    </div>
  );
}
