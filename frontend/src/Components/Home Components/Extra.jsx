import { motion } from "framer-motion";
import React from "react";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

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

export default function Extra({ title, description }) {
  return (
    <div className="relative w-full mb-20">
      <img
        src="./carousel-1.jpg"
        alt="Hero"
        className="w-full h-[40vh] object-cover"
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
          <div className="text-primary text-[20px] md:text font-old">
            Home / Pages / <span className="text-white">{description}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
