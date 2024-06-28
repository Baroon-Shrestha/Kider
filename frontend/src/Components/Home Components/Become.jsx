import { motion } from "framer-motion";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const reveal = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 2 } },
};

export default function Become() {
  return (
    <>
      <motion.div
        variants={reveal}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="grid grid-cols-2 bg-[#FFF5F3] mx-8 rounded-md mb-20"
      >
        <div className="">
          <img src="./become.jpg" alt="" className="rounded-md" />
        </div>
        <div className="flex flex-col gap-4 p-12 justify-center">
          <div className="text-[2.5rem] title">Become A Teacher</div>
          <div className="text-lg content text-secondary">
            At our school, we believe that great teachers inspire great
            students. If you have a passion for teaching and a commitment to
            nurturing the potential in every child, we invite you to join our
            team. Our supportive environment and professional development
            opportunities will help you grow in your career and make a
            meaningful impact on young minds. Together, let's create a brighter
            future through education.
          </div>
          <button>
            <div className="bg-primary text-white text-center text-2xl font-bld rounded-xl py-4 ">
              Get started
            </div>
          </button>
        </div>
      </motion.div>
    </>
  );
}
