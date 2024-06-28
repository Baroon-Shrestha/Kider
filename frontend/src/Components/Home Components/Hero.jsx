import { motion } from "framer-motion";
import React from "react";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";

const titleReveal = {
  initial: { opacity: 0, y: -200 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const leftButton = {
  initial: { opacity: 0, x: -100 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};
const rightButton = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

export default function Hero({ title, description, height }) {
  return (
    <div className="relative w-full ">
      <img
        src="./carousel-1.jpg"
        alt="Hero"
        className="w-full object-cover"
        style={{ height: height }}
      />
      <div className="absolute inset-0 flex items-center justify-between px-8">
        <div className=" flex flex-col gap-8">
          <motion.div
            variants={titleReveal}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-white text-4xl md:text-6xl font-bold capitalize title"
            dangerouslySetInnerHTML={{ __html: title }}
          ></motion.div>
          <div className="text-white text-[20px] md:text font-old">
            {description}
          </div>
          <div className="flex gap-4 text-white text-xl">
            <Link to="/about">
              <motion.button
                variants={leftButton}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="bg-primary p-4 rounded-full"
              >
                Learn More
              </motion.button>
            </Link>
            <Link to="/class">
              <motion.button
                variants={rightButton}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: true,
                }}
                className="bg-[#103741] p-4 rounded-full"
              >
                Our Classes
              </motion.button>
            </Link>
          </div>
        </div>
        {/* <div className="flex flex-col items-center gap-4">
          <div className="border border-white text-4xl text-white rounded-full transition duration-500 ease-in-out hover:border-primary hover:bg-primary">
            <IoIosArrowRoundBack />
          </div>
          <div className="border border-white text-4xl text-white rounded-full transition duration-500 ease-in-out hover:border-primary hover:bg-primary">
            <IoIosArrowRoundForward />
          </div>
        </div> */}
      </div>
    </div>
  );
}
