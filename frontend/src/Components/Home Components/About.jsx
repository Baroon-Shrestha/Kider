import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

const scrollReveal = {
  initial: { opacity: 0, y: 100 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 1 },
  },
};

const imgReveal = {
  initial: { opacity: 0, y: 100 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.3 },
  },
};

export default function About() {
  return (
    <div className="mb-20">
      <motion.div
        variants={scrollReveal}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="flex flex-wrap items-center mx-8"
      >
        <motion.div className="flex flex-col w-full md:w-1/2 p-4 gap-8">
          <div className="text-2xl font-bold title">
            Learn More About Our Work And Our Cultural Activities
          </div>
          <div className="content text-secondary text-justify">
            At our school, we believe in providing a holistic education that
            goes beyond academics. Our cultural activities are designed to
            nurture creativity, teamwork, and leadership skills in our students.
            We host a variety of events throughout the year, including art
            exhibitions, music concerts, theater performances, and cultural
            festivals. <br />
            These activities not only enrich the educational experience but also
            help students develop a deeper appreciation for different cultures
            and traditions. Our dedicated staff and volunteers work tirelessly
            to ensure every event is a memorable experience for all
            participants.
          </div>
          <div className="flex items-center justify-between">
            <Link to="/about">
              <button className="bg-primary text-white py-4 px-12 rounded-full">
                Read More
              </button>
            </Link>
            <div className="flex items-center gap-2">
              <div>
                <img
                  src="teach-2.jpg"
                  alt=""
                  className="h-[45px] w-[45px] object-cover rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <div className="font-bold text-primary">John Doe</div>
                <div>CEO & Founder</div>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={imgReveal}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="flex justify-center w-full md:w-1/2 p-4"
        >
          <img
            src="teach-3.jpg"
            alt=""
            className="w-[459px] h-[459px] object-cover border-[12px] border-primary rounded-full "
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
