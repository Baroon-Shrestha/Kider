import { motion } from "framer-motion";
import React from "react";
import { FaBookReader, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const navReveal = {
  initial: { opacity: 0, y: -100 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.75 } },
};
export default function Nav() {
  return (
    <>
      <motion.div
        variants={navReveal}
        initial="initial"
        animate="animate"
        viewport={{ once: true }}
        className="sticky top-0 z-50 bg-white flex justify-between items-center px-8 py-6 capitalize rounded-b-lg shadow-2xl"
      >
        <Link to="/">
          <motion.div className="text-4xl flex gap-4 text-primary">
            <div>
              <FaBookReader />
            </div>
            <div className="title">Kider</div>
          </motion.div>
        </Link>
        <div className="flex gap-6">
          <Link to="/">
            <div className="hover:text-primary">home</div>
          </Link>
          <Link to="/about">
            <div className="hover:text-primary">about us</div>
          </Link>
          <Link to="class">
            <div className="hover:text-primary">classes</div>
          </Link>
          <div className="relative group">
            <div className="hover:text-primary">pages</div>
            <div className="absolute hidden group-hover:block bg-white shadow-lg w-48">
              <div className="flex flex-col">
                <Link to="/facilities">
                  <div className="px-4 py-2 hover:bg-gray-200">
                    school facilities
                  </div>
                </Link>
                <Link to="/teacher">
                  <div className="px-4 py-2 hover:bg-gray-200">teacher</div>
                </Link>
                <Link to="/become">
                  <div className="px-4 py-2 hover:bg-gray-200">
                    Become a teacher
                  </div>
                </Link>
                <Link to="/appointment">
                  <div className="px-4 py-2 hover:bg-gray-200">
                    make appointment
                  </div>
                </Link>
                <Link to="/review">
                  <div className="px-4 py-2 hover:bg-gray-200">testimonial</div>
                </Link>
              </div>
            </div>
          </div>
          <Link to="/contact">
            <div className="hover:text-primary">contact us</div>
          </Link>
        </div>
        <Link to="/dashboard">
          <button>
            <div className=" capitalize  bg-primary py-2 px-8 text-main-text rounded-full">
              Dashboard
            </div>
          </button>
        </Link>
      </motion.div>
    </>
  );
}
